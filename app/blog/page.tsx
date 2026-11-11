import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts, getBlogCategories } from "@/lib/blog/posts"

export const metadata: Metadata = {
  title: "ブログ｜Apollon.Beauty.Clinic",
  description: "院長・松井美彩子が、注入治療や修正相談などについて、診療で大切にしていることをお伝えします。",
  alternates: { canonical: "https://www.apollonbc.com/blog" },
}

const lineUrl = "https://lin.ee/oiYHa2N"

function formatDate(date: string) {
  return new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Tokyo" }).format(new Date(`${date}T00:00:00+09:00`))
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string | string[] }> }) {
  const query = await searchParams
  const categories = getBlogCategories()
  const requestedCategory = typeof query.category === "string" ? query.category : ""
  const selectedCategory = categories.includes(requestedCategory) ? requestedCategory : "すべて"
  const visiblePosts = selectedCategory === "すべて" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return <main className="min-h-screen bg-[#f8f4ec] font-sans text-[#3f3a32]">
    <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur"><div className="mx-auto flex max-w-5xl items-center justify-between"><Link href="/beauty-public" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link><div className="flex items-center gap-4"><Link href="/en" hrefLang="en" className="text-xs text-[#8d7545] underline underline-offset-4">English</Link><a href={lineUrl} className="text-sm text-[#8d7545] underline underline-offset-4">LINEで相談</a></div></div></header>
    <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
      <section className="py-14 md:py-20"><p className="mb-4 text-sm tracking-[0.2em] text-[#8d7545]">BLOG</p><h1 className="font-serif text-3xl font-medium leading-relaxed tracking-wide md:text-5xl">ブログ</h1><p className="mt-6 max-w-2xl text-sm leading-loose text-[#665e50] md:text-base">院長・松井美彩子が、注入治療や修正相談などについて、診療で大切にしていることをお伝えします。</p></section>
      <nav aria-label="カテゴリで絞り込む" className="border-y border-[#ded4c3] py-5"><div className="flex flex-wrap gap-2">{["すべて", ...categories].map((category) => { const active = category === selectedCategory; const href = category === "すべて" ? "/blog" : `/blog?category=${encodeURIComponent(category)}`; return <Link key={category} href={href} aria-current={active ? "page" : undefined} className={`inline-flex min-h-11 items-center rounded border px-4 py-2 text-sm transition ${active ? "border-[#b89e69] bg-[#b89e69] text-white" : "border-[#ded4c3] text-[#665e50] hover:border-[#b89e69] hover:text-[#8d7545]"}`}>{category}</Link> })}</div></nav>
      <section className="py-10 md:py-14"><div className="divide-y divide-[#ded4c3] border-y border-[#ded4c3]">{visiblePosts.map((post) => <article key={post.slug} className="py-8 md:py-10"><div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"><span className="text-[#8d7545]">{post.category}</span><time dateTime={post.publishedAt} className="text-[#766d5e]">{formatDate(post.publishedAt)}</time></div><h2 className="max-w-3xl text-balance font-serif text-2xl font-medium leading-relaxed text-[#3f3a32] md:text-3xl"><Link href={`/blog/${post.slug}`} className="transition hover:text-[#8d7545]">{post.title}</Link></h2><p className="mt-4 max-w-2xl text-sm leading-loose text-[#665e50] md:text-base">{post.description}</p><Link href={`/blog/${post.slug}`} className="mt-5 inline-block text-sm text-[#8d7545] underline underline-offset-4">記事を読む</Link></article>)}</div></section>
    </div>
  </main>
}
