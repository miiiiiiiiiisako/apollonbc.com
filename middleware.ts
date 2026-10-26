import { NextRequest, NextResponse } from "next/server"

const COOKIE_NAME = "referral_page_session"
const SESSION_VALUE = "authenticated"

async function hasValidSession(request: NextRequest) {
  const cookie = request.cookies.get(COOKIE_NAME)?.value
  if (!cookie) return false

  const secret = process.env.REFERRAL_PAGE_PASSWORD
  if (!secret) return false

  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"])
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(SESSION_VALUE))
  const expected = Buffer.from(signature).toString("base64url")
  return cookie === expected
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const isProtectedPage = pathname === "/beauty" || pathname.startsWith("/beauty/")
  const isLoginPage = pathname === "/referral-login"

  if (!isProtectedPage && !isLoginPage) return NextResponse.next()

  const response = isProtectedPage && !(await hasValidSession(request))
    ? NextResponse.redirect(new URL("/referral-login", request.url))
    : NextResponse.next()

  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive")
  return response
}

export const config = {
  matcher: ["/beauty/:path*", "/referral-login"],
}
