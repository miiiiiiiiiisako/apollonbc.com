import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { absolute: "ABC Skin Labo｜Apollon.Beauty.Clinic" },
  description: "医療機関専売コスメを中心としたABC Skin Laboのオンラインショップです。",
}

const shopUrl = "https://apollonbconline.stores.jp"
const buttonClass = "inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white"
const primaryButtonClass = "inline-flex min-h-12 w-full items-center justify-center rounded bg-[#b89e69] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#a08a59]"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="border-t border-[#ded4c3] py-12 md:py-16"><h2 className="mb-7 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">{title}</h2>{children}</section>
}

const features = [
  ["1．院長自身が試したアイテムだけ", "成分や使用感まで院長自身が確認し、クリニックでも使用しているアイテムを中心に選んでいます。"],
  ["2．お悩みに合わせて選べる", "乾燥・うるおい不足、毛穴の目立ち、年齢に応じたケア、敏感に傾きやすい肌など、お悩みに合わせてお選びいただけます。"],
  ["3．ご自宅から購入できる", "通院が難しい方、遠方にお住まいの方、まずは自宅でのケアから始めたい方にもご利用いただけます。"],
]

export default function OnlineSkincarePage() {
  return <main className="min-h-screen bg-[#f8f4ec] text-[#3f3a32]"><header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur"><div className="mx-auto flex max-w-5xl items-center justify-between"><Link href="/beauty-public" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link><Link href="/beauty-public" className="text-sm text-[#8d7545] underline underline-offset-4">美容クリニック総合案内</Link></div></header><div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
    <section className="py-14 md:py-20"><Link href="/beauty-public" className="mb-8 inline-block text-sm text-[#8d7545] underline underline-offset-4">美容クリニック総合案内へ戻る</Link><p className="mb-5 text-xs tracking-[0.16em] text-[#8d7545]">ONLINE SKINCARE SHOP</p><h1 className="mb-6 max-w-3xl font-serif text-[2.15rem] font-medium leading-[1.45] tracking-[0.06em] text-[#3f3a32] md:text-5xl">毎日のスキンケアを、医師の目で選んだアイテムで。</h1><p className="mb-8 max-w-3xl text-base leading-loose text-[#665e50] md:text-lg">ABC Skin Laboは、院長自身が試し、よいと感じたものだけを選んだ、医療機関専売コスメを中心とするオンラインショップです。</p><a href={shopUrl} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>ABC Skin Laboで商品を見る</a></section>
    <Section title="お肌は、毎日のケアの積み重ねで変わっていきます。"><p className="max-w-3xl text-sm leading-loose text-[#665e50] md:text-base">クリニックでの施術が月に一度でも、ホームケアは毎日のこと。だからこそ、ご自身の肌に合うアイテムを選び、正しく使い続けることを大切にしています。</p></Section>
    <Section title="ABC Skin Laboの特長"><div className="grid items-stretch gap-5 md:grid-cols-3">{features.map(([title, description]) => <article key={title} className="flex h-full flex-col border border-[#ded4c3] bg-white/45 p-6 md:p-7"><h3 className="mb-4 min-h-[4rem] font-serif text-xl font-medium leading-relaxed text-[#4b4338]">{title}</h3><p className="mt-auto text-sm leading-relaxed text-[#665e50]">{description}</p></article>)}</div></Section>
    <Section title="こんなお悩みはありませんか"><ul className="grid gap-3 text-sm leading-relaxed text-[#665e50] md:grid-cols-2">{["自分の肌に何が合うのか分からない", "いろいろ試しても、しっくりくるものが見つからない", "情報が多すぎて、何を選べばいいか迷う", "通院する時間がなかなか取れない"].map((item) => <li key={item} className="border-b border-[#ded4c3] py-3">{item}</li>)}</ul></Section>
    <Section title="何を選べばよいか迷ったら、医師にご相談ください。"><div className="space-y-7"><p className="max-w-3xl text-sm leading-loose text-[#665e50] md:text-base">肌のお悩みやスキンケアの選び方について、ご自宅からオンラインで医師に相談できます。現在お使いのアイテムや肌の状態を伺い、スキンケアの見直しと、必要に応じた治療をご提案します。</p><Link href="/online-medical" className={buttonClass}>オンライン診療について見る</Link></div></Section>
    <section className="border-t border-[#ded4c3] py-12 text-center"><a href={shopUrl} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>ABC Skin Laboで商品を見る</a><Link href="/beauty-public" className="mt-6 inline-block text-sm text-[#8d7545] underline underline-offset-4">美容クリニック総合案内へ戻る</Link></section>
  </div></main>
}
