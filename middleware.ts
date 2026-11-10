import { NextRequest, NextResponse } from "next/server"

const COOKIE_NAME = "referral_page_session"
const SESSION_VALUE = "authenticated"
const SESSION_MAX_AGE = 60 * 60 * 24 * 7

async function sessionToken(password: string) {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey("raw", encoder.encode(password), { name: "HMAC", hash: "SHA-256" }, false, ["sign"])
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(SESSION_VALUE))
  return Buffer.from(signature).toString("base64url")
}

async function timingSafeTextEqual(actual: string, expected: string) {
  const encoder = new TextEncoder()
  const [actualDigest, expectedDigest] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(actual)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ])
  const actualBytes = new Uint8Array(actualDigest)
  const expectedBytes = new Uint8Array(expectedDigest)
  let mismatch = 0

  for (let index = 0; index < actualBytes.length; index += 1) {
    mismatch |= actualBytes[index] ^ expectedBytes[index]
  }

  return mismatch === 0
}

async function hasValidSession(request: NextRequest) {
  const cookie = request.cookies.get(COOKIE_NAME)?.value
  const password = process.env.REFERRAL_PAGE_PASSWORD
  if (!cookie || !password) return false

  return cookie === await sessionToken(password)
}

async function hasValidAccessKey(request: NextRequest) {
  const providedKey = request.nextUrl.searchParams.get("key")
  const configuredKey = process.env.REFERRAL_PAGE_ACCESS_TOKEN
  if (!providedKey || !configuredKey) return false

  return timingSafeTextEqual(providedKey, configuredKey)
}

function addNoIndexHeader(response: NextResponse) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive")
  return response
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const isProtectedPage = pathname === "/beauty" || pathname.startsWith("/beauty/")
  const isLoginPage = pathname === "/referral-login"

  if (!isProtectedPage && !isLoginPage) return NextResponse.next()

  if (isProtectedPage && request.nextUrl.searchParams.has("key")) {
    const password = process.env.REFERRAL_PAGE_PASSWORD
    if (!(await hasValidAccessKey(request)) || !password) {
      return addNoIndexHeader(NextResponse.redirect(new URL("/referral-login", request.url)))
    }

    const destination = request.nextUrl.clone()
    destination.searchParams.delete("key")
    const response = NextResponse.redirect(destination)
    response.cookies.set(COOKIE_NAME, await sessionToken(password), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: SESSION_MAX_AGE,
      path: "/",
    })
    return addNoIndexHeader(response)
  }

  const response = isProtectedPage && !(await hasValidSession(request))
    ? NextResponse.redirect(new URL("/referral-login", request.url))
    : NextResponse.next()

  return addNoIndexHeader(response)
}

export const config = {
  matcher: ["/beauty/:path*", "/referral-login"],
}
