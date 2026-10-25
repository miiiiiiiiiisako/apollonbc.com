import Link from "next/link"

const clinicLinks = [
  {
    label: "紹介制",
    title: "紹介患者さま専用",
    description: "ご紹介を受けた患者さま向けに、診療内容をご案内しています。",
    href: "/beauty",
    cta: "紹介患者さま専用ページへ",
  },
  {
    label: "紹介不要",
    title: "注入後の仕上がり・修正相談",
    description: "ヒアルロン酸やボトックスなどの施術後に生じた、仕上がりや表情の違和感についてご相談いただけます。",
    href: "/correction",
    cta: "修正相談について",
  },
  {
    label: "紹介不要",
    title: "顔面神経麻痺の治療相談",
    description: "顔面神経麻痺後に残る、表情の左右差やこわばりなどについてご相談いただけます。",
    href: "/facial-nerve-palsy",
    cta: "顔面神経麻痺の治療について",
  },
]

export default function BeautyPublicPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ec] text-[#4b4035]">
      <header className="mx-auto max-w-5xl px-6 pb-16 pt-10 md:pt-16">
        <Link href="/" className="text-sm tracking-wide text-[#8d7545] hover:underline">
          ← トップページへ
        </Link>
        <div className="mt-16 max-w-3xl">
          <p className="mb-6 text-xs tracking-[0.28em] text-[#b89e69]">APOLLON.BEAUTY.CLINIC</p>
          <h1 className="font-serif text-4xl leading-[1.35] tracking-wide text-[#594b3c] md:text-6xl">
            その人らしさを大切に、
            <br />
            顔全体の調和を整える。
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#6f6658] md:text-lg">
            お一人おひとりのお顔の個性とバランスを大切に、暮らしやご希望に合わせた治療をご提案します。
          </p>
          <p className="mt-6 max-w-2xl border-l border-[#b89e69] pl-5 text-sm leading-7 text-[#6f6658]">
            通常の対面美容診療は完全紹介制です。注入後の仕上がり・修正相談、顔面神経麻痺の治療相談、オンライン診療、一般向けオンラインコスメは、紹介者のいない方もご利用いただけます。
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-20" aria-labelledby="in-person-heading">
        <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#b89e69]/40 pb-4">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#b89e69]">IN PERSON</p>
            <h2 id="in-person-heading" className="mt-2 font-serif text-3xl text-[#594b3c]">来院での診療・専門相談</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {clinicLinks.map((item) => (
            <article key={item.title} className="flex flex-col border-t border-[#b89e69]/60 pt-5">
              <p className="text-xs font-medium tracking-[0.16em] text-[#a0824b]">{item.label}</p>
              <h3 className="mt-3 font-serif text-2xl leading-snug text-[#594b3c]">{item.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-[#6f6658]">{item.description}</p>
              <Link href={item.href} className="mt-6 inline-flex items-center text-sm font-medium text-[#8d7545] hover:underline">
                {item.cta} <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eee5d8]/60" aria-labelledby="online-heading">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs tracking-[0.2em] text-[#b89e69]">ONLINE SERVICES</p>
          <h2 id="online-heading" className="mt-2 font-serif text-3xl text-[#594b3c]">オンラインサービス</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <article className="border-t border-[#b89e69]/60 pt-5">
              <h3 className="font-serif text-2xl text-[#594b3c]">オンライン診療</h3>
              <p className="mt-4 text-sm leading-7 text-[#6f6658]">肌のお悩みやスキンケアの選び方、ダイエット、育毛について、ご自宅から医師にご相談いただけます。</p>
              <Link href="/online-medical" className="mt-5 inline-flex text-sm font-medium text-[#8d7545] hover:underline">オンライン診療のご案内 →</Link>
            </article>
            <article className="border-t border-[#b89e69]/60 pt-5">
              <h3 className="font-serif text-2xl text-[#594b3c]">オンラインコスメ</h3>
              <p className="mt-4 text-sm leading-7 text-[#6f6658]">院長自身が試し、よいと感じたものだけを選んだ、医療機関専売コスメを中心とするオンラインショップです。</p>
              <Link href="/online-skincare" className="mt-5 inline-flex text-sm font-medium text-[#8d7545] hover:underline">スキンケアの方針・ショップを見る →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-[#b89e69]">OUR APPROACH</p>
        <h2 className="mt-3 font-serif text-3xl leading-snug text-[#594b3c]">お顔の個性を、大切にするために。</h2>
        <div className="mt-8 space-y-5 text-sm leading-8 text-[#6f6658]">
          <p>お一人おひとりのお顔には、その方ならではの個性と魅力があります。そのよさを大切にしながら、気になっている部分と顔全体のバランスを考えて治療をご提案します。</p>
          <p>治療を選ぶ際には、お顔の状態だけでなく、ライフスタイル、ご希望や避けたい施術、取れるダウンタイム、大切な予定までの期間も伺います。</p>
          <p>ご希望の施術であっても、安全性やお顔全体の調和の観点から、おすすめしない場合があります。治療をしない選択肢も含めて、一緒に考えることを大切にしています。</p>
          <p>対面診察では視診・触診を通じて、筋肉の動きや左右差、気になる症状の原因を確認し、治療の必要性と方法を判断します。</p>
        </div>
        <div className="mt-8 border-y border-[#b89e69]/50 py-6 text-center font-serif text-xl leading-8 text-[#594b3c]">診察・カウンセリングは、毎回すべて院長が担当</div>
        <p className="mt-5 text-center text-sm leading-7 text-[#6f6658]">修正相談・顔面神経麻痺の初回対面診察には、約60分を確保しています。</p>
      </section>

      <section className="border-t border-[#b89e69]/20" aria-labelledby="cases-heading">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs tracking-[0.2em] text-[#b89e69]">CASE INTRODUCTION</p>
          <h2 id="cases-heading" className="mt-3 font-serif text-3xl text-[#594b3c]">症例紹介</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6f6658]">症例写真・詳細は準備中です。確認できた情報のみを掲載し、架空の症例や仮の治療結果は掲載しません。</p>
        </div>
      </section>
    </main>
  )
}
