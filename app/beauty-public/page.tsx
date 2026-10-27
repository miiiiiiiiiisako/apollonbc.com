import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "美容クリニック総合案内｜Apollon.Beauty.Clinic",
  description: "Apollon.Beauty.Clinicの診療内容、専門相談、オンラインサービスをご案内します。",
}

const lineUrl = "https://line.me/R/ti/p/@160orbcq"

const buttonClass = "mt-auto inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white"

function ServiceCard({
  eyebrow,
  title,
  description,
  action,
  href,
  disabled = false,
}: {
  eyebrow: string
  title: string
  description: string
  action: string
  href?: string
  disabled?: boolean
}) {
  return (
    <article className="flex h-full flex-col border border-[#ded4c3] bg-white/45 p-6 md:p-7">
      <p className="mb-4 min-h-4 text-xs tracking-[0.18em] text-[#8d7545]">{eyebrow}</p>
      <h3 className="mb-4 min-h-[3.5rem] font-serif text-xl font-medium leading-relaxed text-[#4b4338]">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-[#665e50]">{description}</p>
      {disabled ? (
        <span className="mt-auto inline-flex min-h-12 w-full items-center justify-center rounded border border-[#ded4c3] px-5 py-3 text-sm text-[#8f8678]">準備中</span>
      ) : (
        <Link href={href ?? "#"} className={buttonClass}>{action}</Link>
      )}
    </article>
  )
}

export default function BeautyPublicPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ec] text-[#3f3a32]">
      <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link>
          <a href={lineUrl} className="text-sm text-[#8d7545] underline underline-offset-4">LINEで相談</a>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
        <section className="py-16 md:py-24">
          <p className="mb-5 text-sm tracking-[0.2em] text-[#8d7545]">Apollon.Beauty.Clinic</p>
          <h1 className="mb-7 max-w-3xl font-serif text-[2.15rem] font-medium leading-[1.45] tracking-[0.08em] text-[#3f3a32] md:text-5xl">
            その人らしさを大切に、<br className="sm:hidden" />顔全体の調和を整える。
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-loose text-[#665e50] md:text-lg">
            お一人おひとりのお顔の個性とバランスを大切に、暮らしやご希望に合わせた治療をご提案します。
          </p>
          <p className="max-w-3xl border-l border-[#b89e69] pl-4 text-sm leading-relaxed text-[#665e50]">
            通常の対面美容診療は完全紹介制です。注入後の仕上がり・修正相談、顔面神経麻痺の治療相談、オンライン診療、一般向けオンラインコスメは、紹介者のいない方もご利用いただけます。
          </p>
        </section>

        <section className="border-t border-[#ded4c3] py-12 md:py-16">
          <p className="mb-3 text-sm tracking-[0.16em] text-[#8d7545]">CLINIC & SPECIALIST CONSULTATION</p>
          <h2 className="mb-8 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">来院での診療・専門相談</h2>
          <div className="grid gap-5 md:grid-cols-3">
            <ServiceCard eyebrow="紹介制" title="紹介患者さま専用" description="ご紹介を受けた患者さま向けに、診療内容をご案内しています。" action="紹介患者さま専用ページへ" href="/beauty" />
            <ServiceCard eyebrow="紹介不要" title="注入後の仕上がり・修正相談" description="ヒアルロン酸やボトックスなどの施術後に生じた、仕上がりや表情の違和感についてご相談いただけます。" action="修正相談について" href="/correction" />
            <ServiceCard eyebrow="紹介不要" title="顔面神経麻痺の治療相談" description="顔面神経麻痺後に残る、表情の左右差やこわばりなどについてご相談いただけます。" action="顔面神経麻痺の治療について" href="/facial-palsy" />
          </div>
        </section>

        <section className="border-t border-[#ded4c3] py-12 md:py-16">
          <p className="mb-3 text-sm tracking-[0.16em] text-[#8d7545]">ONLINE SERVICES</p>
          <h2 className="mb-8 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">オンラインサービス</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <ServiceCard eyebrow="準備中" title="オンライン診療" description="肌のお悩みやスキンケアの選び方、ダイエット、育毛について、ご自宅から医師にご相談いただけます。" action="オンライン診療のご案内" disabled />
            <ServiceCard eyebrow="ONLINE COSMETICS" title="オンラインコスメ" description="院長自身が試し、よいと感じたものだけを選んだ、医療機関専売コスメを中心とするオンラインショップです。" action="スキンケアの方針・ショップを見る" href="/online-skincare" />
          </div>
        </section>

        <section className="border-t border-[#ded4c3] py-12 md:py-16">
          <h2 className="mb-8 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">お顔の個性を、大切にするために。</h2>
          <div className="max-w-3xl space-y-5 text-sm leading-loose text-[#665e50] md:text-base">
            <p>お一人おひとりのお顔には、その方ならではの個性と魅力があります。そのよさを大切にしながら、気になっている部分と顔全体のバランスを考えて治療をご提案します。</p>
            <p>治療を選ぶ際には、お顔の状態だけでなく、ライフスタイル、ご希望や避けたい施術、取れるダウンタイム、大切な予定までの期間も伺います。</p>
            <p>ご希望の施術であっても、安全性やお顔全体の調和の観点から、おすすめしない場合があります。治療をしない選択肢も含めて、一緒に考えることを大切にしています。</p>
            <p>対面診察では視診・触診を通じて、筋肉の動きや左右差、気になる症状の原因を確認し、治療の必要性と方法を判断します。</p>
          </div>
          <p className="mt-8 border-l border-[#b89e69] pl-4 font-serif text-lg text-[#8d7545] md:text-xl">診察・カウンセリングは、毎回すべて院長が担当</p>
        </section>

        <section className="border-t border-[#ded4c3] py-12 md:py-16">
          <h2 className="mb-6 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">症例紹介</h2>
          <p className="text-sm leading-relaxed text-[#665e50]">症例は準備中です。</p>
        </section>
      </div>
    </main>
  )
}
