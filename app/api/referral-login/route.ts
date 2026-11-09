import { createHmac, timingSafeEqual } from "node:crypto"
import { NextResponse } from "next/server"

const COOKIE_NAME = "referral_page_session"
const SESSION_VALUE = "authenticated"

function sessionToken(password: string) {
  return createHmac("sha256", password).update(SESSION_VALUE).digest("base64url")
}

export async function POST(request: Request) {
  const configuredPassword = process.env.REFERRAL_PAGE_PASSWORD
  if (!configuredPassword) {
    return NextResponse.json({ error: "REFERRAL_PAGE_PASSWORDが設定されていません。" }, { status: 503 })
  }

  const body = await request.json().catch(() => null)
  const password = typeof body?.password === "string" ? body.password : ""
  const actual = Buffer.from(password)
  const expected = Buffer.from(configuredPassword)
  const isValid = actual.length === expected.length && timingSafeEqual(actual, expected)

  if (!isValid) {
    return NextResponse.json({ error: "パスワードが正しくありません。" }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(COOKIE_NAME, sessionToken(configuredPassword), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  })
  return response
}
