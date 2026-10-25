import { NextResponse } from "next/server"

const ACCESS_COOKIE = "referral_page_access"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const password = typeof body?.password === "string" ? body.password : ""
  const configuredPassword = process.env.REFERRAL_PAGE_PASSWORD

  if (!configuredPassword || password !== configuredPassword) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(ACCESS_COOKIE, "granted", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/beauty",
    maxAge: 60 * 60 * 24 * 30,
  })
  return response
}
