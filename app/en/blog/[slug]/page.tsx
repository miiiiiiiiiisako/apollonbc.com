import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPost, getBlogPosts, type BlogBlock } from "@/lib/blog/posts"

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getBlogPosts("en").map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug, "en")
  if (!post) return {}
  const url = `https://www.apollonbc.com/en/blog/${post.slug}`
  return {
    title: `${post.title} | Apollon Beauty Clinic`,
    description: post.description,
    alternates: {
      canonical: url,
      languages: {
        ja: `https://www.apollonbc.com/blog/${post.slug}`,
        en: url,
      },
    },
    openGraph: { type: "article", title: `${post.title} | Apollon Beauty Clinic`, description: post.description, url, publishedTime: post.publishedAt },
  }
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Tokyo" }).format(new Date(`${date}T00:00:00+09:00`))
}

function CitationText({ text }: { text: string }) {
  const parts = text.split(/(\[\d+\])/g)
  return <>{parts.map((part, index) => { const match = part.match(/^\[(\d+)\]$/); return match ? <sup key={`${part}-${index}`} className="ml-0.5 text-[0.72em]"><a href={`#ref-${match[1]}`} className="text-[#8d7545] underline underline-offset-2" aria-label={`Go to reference ${match[1]}`}>{part}</a></sup> : part })}</>
}

function Blocks({ blocks, feesAndRisks = false }: { blocks: BlogBlock[]; feesAndRisks?: boolean }) {
  return <div className={feesAndRisks ? "space-y-5" : "space-y-6"}>{blocks.map((block, index) => {
    if (block.type === "heading") return <h2 key={`${block.text}-${index}`} className="pt-7 font-serif text-2xl font-medium leading-relaxed text-[#3f3a32] md:text-3xl">{block.text}</h2>
    if (block.type === "list") return <ul key={`list-${index}`} className="list-disc space-y-2 pl-6 text-base leading-loose text-[#514a40]">{block.items.map((item) => <li key={item}><CitationText text={item} /></li>)}</ul>
    if (block.type === "link") return <p key={`${block.text}-${index}`}><Link href={block.href} className="text-base leading-loose text-[#8d7545] underline underline-offset-4">{block.text}</Link></p>
    if (feesAndRisks && block.text.includes("For details, please see the correction consultation page.")) {
      const [before, after] = block.text.split("the correction consultation page")
      return <p key={`paragraph-${index}`} className="text-base leading-loose text-[#514a40]"><CitationText text={before} /><Link href="/en/injectable-correction" className="text-[#8d7545] underline underline-offset-4">the correction consultation page</Link><CitationText text={after} /></p>
    }
    return <p key={`paragraph-${index}`} className="whitespace-pre-line text-base leading-loose text-[#514a40]"><CitationText text={block.text} /></p>
  })}</div>
}

export default async function EnglishBlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug, "en")
  if (!post) notFound()

  return <main lang="en" className="min-h-screen bg-[#f8f4ec] font-sans text-[#3f3a32]">
    <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur"><div className="mx-auto flex max-w-5xl items-center justify-between gap-4"><Link href="/en" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link><Link href={`/blog/${post.slug}`} hrefLang="ja" className="text-sm text-[#8d7545] underline underline-offset-4">日本語</Link></div></header>
    <article lang="en" className="mx-auto max-w-2xl px-5 pb-24 md:px-8">
      <header className="py-14 md:py-20"><p className="mb-4 text-sm text-[#8d7545]">{post.category}</p><h1 className="text-balance font-serif text-3xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-4xl">{post.title}</h1><div className="mt-6 flex flex-col gap-2 text-sm leading-relaxed text-[#766d5e] sm:flex-row sm:flex-wrap sm:gap-x-5"><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time><p>Written by Dr. Misako Matsui, Director, Apollon.Beauty.Clinic</p></div><p className="mt-7 text-base leading-loose text-[#665e50]">{post.description}</p></header>
      <div className="border-t border-[#ded4c3] pt-10"><Blocks blocks={post.body} /></div>
      <section className="mt-14 rounded border border-[#b89e69] bg-white/45 p-6 md:p-8"><h2 className="mb-6 font-serif text-2xl font-medium leading-relaxed text-[#3f3a32]">Fees and risks</h2><Blocks blocks={post.costAndRisk} feesAndRisks /></section>
      <section className="mt-14 border-t border-[#ded4c3] pt-10"><h2 className="mb-6 font-serif text-2xl font-medium leading-relaxed text-[#3f3a32]">References</h2><ol className="space-y-5 text-sm leading-relaxed text-[#514a40]">{post.references.map((reference) => <li key={reference.number} id={`ref-${reference.number}`} className="scroll-mt-6"><span className="mr-2 text-[#8d7545]">{reference.number}.</span><a href={reference.url} target="_blank" rel="noreferrer" className="break-words underline decoration-[#b89e69] underline-offset-4">{reference.title} {reference.url}</a></li>)}</ol></section>
      <footer className="mt-14 border-t border-[#ded4c3] pt-10"><p className="text-base leading-loose text-[#514a40]">This article provides general information and is not a substitute for an individual diagnosis.</p><Link href="/en/blog" className="mt-7 inline-block text-sm text-[#8d7545] underline underline-offset-4">Back to the blog</Link></footer>
    </article>
  </main>
}
