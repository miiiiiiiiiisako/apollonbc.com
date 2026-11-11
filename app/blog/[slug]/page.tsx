import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPost, getBlogPosts, type BlogBlock } from "@/lib/blog/posts"

const lineUrl = "https://lin.ee/oiYHa2N"

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getBlogPosts("ja").map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug, "ja")
  if (!post) return {}
  const url = `https://www.apollonbc.com/blog/${post.slug}`
  return {
    title: `${post.title}｜Apollon.Beauty.Clinic`,
    description: post.description,
    alternates: {
      canonical: url,
      languages: {
        ja: url,
        en: `https://www.apollonbc.com/en/blog/${post.slug}`,
      },
    },
    openGraph: { type: "article", title: `${post.title}｜Apollon.Beauty.Clinic`, description: post.description, url, publishedTime: post.publishedAt },
  }
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Tokyo" }).format(new Date(`${date}T00:00:00+09:00`))
}

function CitationText({ text }: { text: string }) {
  const parts = text.split(/(\[\d+\])/g)
  return <>{parts.map((part, index) => { const match = part.match(/^\[(\d+)\]$/); return match ? <sup key={`${part}-${index}`} className="ml-0.5 text-[0.72em]"><a href={`#ref-${match[1]}`} className="text-[#8d7545] underline underline-offset-2" aria-label={`参考文献${match[1]}へ`}>{part}</a></sup> : part })}</>
}

function Blocks({ blocks, costAndRisk = false }: { blocks: BlogBlock[]; costAndRisk?: boolean }) {
  return <div className={costAndRisk ? "space-y-5" : "space-y-6"}>{blocks.map((block, index) => {
    if (block.type === "heading") return <h2 key={`${block.text}-${index}`} className="pt-7 font-serif text-2xl font-medium leading-relaxed text-[#3f3a32] md:text-3xl">{block.text}</h2>
    if (block.type === "list") return <ul key={`list-${index}`} className="list-disc space-y-2 pl-6 text-base leading-loose text-[#514a40]">{block.items.map((item) => <li key={item}><CitationText text={item} /></li>)}</ul>
    if (block.type === "link") return <p key={`${block.text}-${index}`}><Link href={block.href} className="text-base leading-loose text-[#8d7545] underline underline-offset-4">{block.text}</Link></p>
    if (costAndRisk && block.text.includes("くわしくは、修正相談のページでご案内しています。")) {
      const [before, after] = block.text.split("修正相談のページ")
      return <p key={`paragraph-${index}`} className="text-base leading-loose text-[#514a40]"><CitationText text={before} /><Link href="/correction" className="text-[#8d7545] underline underline-offset-4">修正相談のページ</Link><CitationText text={after} /></p>
    }
    return <p key={`paragraph-${index}`} className="whitespace-pre-line text-base leading-loose text-[#514a40]"><CitationText text={block.text} /></p>
  })}</div>
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug, "ja")
  if (!post) notFound()

  return <main className="min-h-screen bg-[#f8f4ec] font-sans text-[#3f3a32]">
    <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur"><div className="mx-auto flex max-w-5xl items-center justify-between"><Link href="/beauty-public" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link><div className="flex items-center gap-4"><Link href={`/en/blog/${post.slug}`} hrefLang="en" className="text-xs text-[#8d7545] underline underline-offset-4">English</Link><a href={lineUrl} className="text-sm text-[#8d7545] underline underline-offset-4">LINEで相談</a></div></div></header>
    <article className="mx-auto max-w-2xl px-5 pb-24 md:px-8">
      <header className="py-14 md:py-20"><p className="mb-4 text-sm text-[#8d7545]">{post.category}</p><h1 className="text-balance font-serif text-3xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-4xl">{post.title}</h1><div className="mt-6 flex flex-col gap-2 text-sm leading-relaxed text-[#766d5e] sm:flex-row sm:flex-wrap sm:gap-x-5"><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time><p>執筆：松井美彩子（Apollon.Beauty.Clinic 院長・医師）</p></div><p className="mt-7 text-base leading-loose text-[#665e50]">{post.description}</p></header>
      <div className="border-t border-[#ded4c3] pt-10"><Blocks blocks={post.body} /></div>
      <section className="mt-14 rounded border border-[#b89e69] bg-white/45 p-6 md:p-8"><h2 className="mb-6 font-serif text-2xl font-medium leading-relaxed text-[#3f3a32]">費用とリスクについて</h2><Blocks blocks={post.costAndRisk} costAndRisk /></section>
      <section className="mt-14 border-t border-[#ded4c3] pt-10"><h2 className="mb-6 font-serif text-2xl font-medium leading-relaxed text-[#3f3a32]">参考文献</h2><ol className="space-y-5 text-sm leading-relaxed text-[#514a40]">{post.references.map((reference) => <li key={reference.number} id={`ref-${reference.number}`} className="scroll-mt-6"><span className="mr-2 text-[#8d7545]">{reference.number}.</span><a href={reference.url} target="_blank" rel="noreferrer" className="break-words underline decoration-[#b89e69] underline-offset-4">{reference.title} {reference.url}</a></li>)}</ol></section>
      <footer className="mt-14 border-t border-[#ded4c3] pt-10"><p className="text-base leading-loose text-[#514a40]">この記事は一般的な情報をお伝えするもので、個別の診断に代わるものではありません。</p><Link href="/blog" className="mt-7 inline-block text-sm text-[#8d7545] underline underline-offset-4">ブログ一覧へ戻る</Link></footer>
    </article>
  </main>
}
