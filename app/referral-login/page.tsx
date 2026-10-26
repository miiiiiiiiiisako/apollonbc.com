"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function ReferralLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/referral-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      const result = await response.json()
      if (!response.ok) {
        setError(result.error ?? "認証に失敗しました。")
        return
      }
      router.replace("/beauty")
      router.refresh()
    } catch {
      setError("認証に失敗しました。もう一度お試しください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f4ec] px-5 text-[#3f3a32]">
      <section className="w-full max-w-md border border-[#ded4c3] bg-white/55 p-7 shadow-sm md:p-10">
        <p className="mb-4 text-xs tracking-[0.2em] text-[#8d7545]">APOLLON.BEAUTY.CLINIC</p>
        <h1 className="mb-3 font-serif text-2xl tracking-wide text-[#4b4338]">紹介患者さま専用ページ</h1>
        <p className="mb-7 text-sm leading-relaxed text-[#665e50]">ご案内されたパスワードを入力してください。</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm text-[#665e50]" htmlFor="referral-password">パスワード</label>
          <input
            id="referral-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
            className="w-full rounded border border-[#cfc4b1] bg-white px-4 py-3 text-[#3f3a32] outline-none focus:border-[#8d7545] focus:ring-1 focus:ring-[#b89e69]"
          />
          {error && <p role="alert" className="text-sm text-[#9b4b3f]">{error}</p>}
          <button type="submit" disabled={isSubmitting} className="w-full rounded border border-[#b89e69] px-5 py-3 text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "確認中…" : "専用ページを見る"}
          </button>
        </form>
      </section>
    </main>
  )
}
