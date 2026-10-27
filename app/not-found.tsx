import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f4ec] px-5 text-center text-[#3f3a32]">
      <div>
        <p className="mb-3 text-sm tracking-[0.16em] text-[#8d7545]">PAGE NOT FOUND</p>
        <h1 className="mb-6 font-serif text-2xl font-medium">ページが見つかりません</h1>
        <Link href="/beauty-public" className="inline-flex min-h-12 items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-sm text-[#8d7545]">
          美容クリニック総合案内へ戻る
        </Link>
      </div>
    </main>
  )
}
