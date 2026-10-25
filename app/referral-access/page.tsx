"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function ReferralAccessPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError("")

    const response = await fetch("/api/referral-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (response.ok) {
      router.replace("/beauty")
      return
    }

    setError("パスワードが正しくありません。")
    setIsSubmitting(false)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f4ec] px-6 py-12 text-[#4b4035]">
      <section className="w-full max-w-md rounded-sm border border-[#d8c7a5] bg-[#fffdf8] px-7 py-9 shadow-sm">
        <p className="text-xs tracking-[0.28em] text-[#b89e69]">APOLLON BEAUTY CLINIC</p>
        <h1 className="mt-5 font-serif text-2xl leading-relaxed">紹介患者さま専用ページ</h1>
        <p className="mt-4 text-sm leading-7 text-[#6b5c4c]">閲覧には専用パスワードが必要です。</p>
        <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium" htmlFor="referral-password">パスワード</label>
          <input
            id="referral-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full border border-[#cdbb96] bg-white px-4 py-3 text-base outline-none focus:border-[#8d7545] focus:ring-1 focus:ring-[#8d7545]"
            required
          />
          {error && <p className="text-sm text-[#9a5148]" role="alert">{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#8d7545] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#735e38] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "確認中…" : "専用ページを見る"}
          </button>
        </form>
      </section>
    </main>
  )
}
