import { NextRequest, NextResponse } from "next/server"

const ACCESS_COOKIE = "referral_page_access"
const ACCESS_PATH = "/beauty"
const LOGIN_PATH = "/referral-access"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === LOGIN_PATH) {
    return NextResponse.next()
  }

  if (request.nextUrl.pathname !== ACCESS_PATH) {
    return NextResponse.next()
  }

  const token = request.nextUrl.searchParams.get("access")
  const configuredToken = process.env.REFERRAL_PAGE_ACCESS_TOKEN
  const hasAccess = request.cookies.get(ACCESS_COOKIE)?.value === "granted"

  if (token && configuredToken && token === configuredToken) {
    const destination = request.nextUrl.clone()
    destination.searchParams.delete("access")
    const response = NextResponse.redirect(destination)
    response.cookies.set(ACCESS_COOKIE, "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: ACCESS_PATH,
      maxAge: 60 * 60 * 24 * 30,
    })
    return response
  }

  if (hasAccess) {
    return NextResponse.next()
  }

  const loginUrl = request.nextUrl.clone()
  loginUrl.pathname = LOGIN_PATH
  loginUrl.search = ""
  loginUrl.searchParams.set("from", ACCESS_PATH)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ["/beauty", "/beauty/"],
}
