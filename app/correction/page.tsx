import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "注入後の仕上がり・修正相談｜Apollon.Beauty.Clinic",
  description: "他院で受けたボトックス・ヒアルロン酸などの注入治療後について、ご紹介のない方もご相談いただける受診案内です。",
}

const correctionLineUrl = "https://line.me/R/ti/p/@160orbcq"
const correctionBookingUrl = ""

const concerns = [
  {
    title: "ボトックス後のご相談",
    items: ["眉や目元、口元などの左右差が気になる", "表情や笑い方が、施術前と変わったように感じる", "効果の出方や仕上がりについて相談したい", "追加の調整が可能か、経過を見た方がよいか知りたい"],
  },
  {
    title: "ヒアルロン酸後のご相談",
    items: ["膨らみや凹凸、左右差が気になる", "注入した部分が不自然に見える", "希望していた輪郭や印象と異なる", "溶解や修正を含め、今後の選択肢について相談したい"],
  },
]

const faqs = [
  ["紹介がなくても相談できますか？", "注入後の仕上がり・修正に関するご相談は、ご紹介のない方もお問い合わせいただけます。通常の美容診療は完全紹介制です。"],
  ["他院で受けた施術でも相談できますか？", "はい。施術歴や現在の状態を確認して対応を検討します。内容によっては当院で対応できない場合もあります。"],
  ["製剤名や注入量がわからなくても大丈夫ですか？", "わかる範囲でお知らせください。施術時の明細や記録がある場合は診察時の参考になります。"],
  ["オンラインだけで診断や治療方針が決まりますか？", "オンラインでは評価に限りがあり、対面診察が必要な場合があります。LINEの文字や写真だけで診断・治療を完結することはできません。"],
  ["当日に施術までできますか？", "診察結果・施術内容・予約枠によります。ご希望は事前にお知らせください。当日施術を確約するものではありません。"],
  ["必ず元の状態に戻せますか？", "製剤、施術内容、経過、現在の状態によって対応は異なります。完全な改善や施術前の状態への回復を保証するものではありません。"],
]

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a href={correctionLineUrl} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center rounded bg-[#b89e69] px-6 py-3 text-center font-medium text-white transition-colors hover:bg-[#a08a59] focus:outline-none focus:ring-2 focus:ring-[#b89e69] focus:ring-offset-2 ${className}`}>
      LINEで相談の受付・受診案内
    </a>
  )
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-8 border-b border-[#d8c9ac] pb-3 text-2xl font-semibold text-[#8a754c] md:text-3xl">{children}</h2>
}

export default function CorrectionPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ec] pb-28 text-gray-700">
      <header className="border-b border-[#e5dccb] bg-white/70 px-4 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="text-sm font-medium text-[#8a754c] hover:underline">Apollon.Beauty.Clinic</Link>
          <a href="#concerns" className="text-sm text-[#8a754c] hover:underline">相談内容を見る</a>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <section className="rounded-xl bg-white p-6 shadow-sm sm:p-10">
          <p className="mb-4 text-sm font-medium tracking-wide text-[#b89e69]">紹介不要の注入後相談</p>
          <h1 className="mb-5 text-3xl font-bold leading-relaxed text-[#8a754c] md:text-5xl">注入後の仕上がり・修正のご相談</h1>
          <p className="mb-7 text-lg leading-relaxed">ボトックス・ヒアルロン酸などの治療後に、気になることがある方へ</p>
          <div className="mb-7 space-y-2 rounded-lg bg-[#fdfaf5] p-5 text-base leading-relaxed">
            <p>「左右差が気になる」</p><p>「表情や輪郭が、思っていた仕上がりと違う」</p><p>「追加の治療が必要なのか、経過を見てよいのかわからない」</p>
          </div>
          <p className="mb-5 leading-8">Apollon.Beauty.Clinicでは、他院で受けた注入治療後のご相談を受け付けています。<br />通常の美容診療は完全紹介制ですが、注入後の仕上がり・修正に関するご相談は、ご紹介のない方もお問い合わせいただけます。</p>
          <p className="mb-6 rounded-lg border border-[#e8dfcf] p-4 text-sm leading-7">オンライン初診20分 3,300円／対面初診60分 16,500円<br />※対面初診当日に施術を受ける場合の診察料は8,800円。施術料は別途です。</p>
          <LineButton />
          <p className="mt-4 text-sm leading-6 text-gray-500">LINEではご相談内容の受付と診察のご案内を行います。診断や具体的な治療方針は、医師の診察のうえで判断します。</p>
          <p className="mt-6 border-l-4 border-[#b89e69] bg-[#fffaf0] p-4 text-sm leading-6">視力の異常、強い痛み、皮膚の白さや暗い変色、息苦しさ、飲み込みにくさなどがある場合は、LINEの返信を待たず、施術を受けた医療機関や救急医療機関へ速やかにご相談ください。</p>
        </section>

        <section id="concerns" className="scroll-mt-6 py-14"><SectionTitle>このようなことでお困りではありませんか？</SectionTitle><div className="grid gap-5 md:grid-cols-2">{concerns.map((group) => <article key={group.title} className="rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-4 text-lg font-semibold text-[#8a754c]">{group.title}</h3><ul className="list-disc space-y-2 pl-5 leading-7">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><article className="mt-5 rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-3 text-lg font-semibold text-[#8a754c]">その他の治療後のご相談</h3><p className="leading-8">目の下の脱脂術など、治療後のしわ・凹み・顔貌の変化についても、まずはご相談内容をお知らせください。治療名や製剤名がわからない場合も、わかる範囲で構いません。治療の種類や症状によっては当院での対応が難しい場合や、施術を受けた医療機関・専門の医療機関への受診をご案内する場合があります。</p></article></section>

        <section id="approach" className="scroll-mt-6 py-14"><SectionTitle>まず、今の状態を評価することから</SectionTitle><div className="rounded-lg bg-white p-6 leading-8 shadow-sm"><p>気になる部分に、すぐ追加の治療をすることが適切とは限りません。施術からの経過、製剤や注入部位、もともとの左右差、表情の動きなどを確認し、現在の状態を評価します。そのうえで、経過観察・追加の調整・ヒアルロン酸の溶解などの選択肢を検討します。</p><p className="mt-4">ボトックスとヒアルロン酸では対応が異なり、使用された製剤によっても選択肢は変わります。すべての状態を修正できる、施術前の状態に戻せるとお約束するものではありません。</p></div></section>

        <section id="cases" className="scroll-mt-6 py-14"><SectionTitle>こんなご相談もお寄せいただけます</SectionTitle><div className="grid gap-5 md:grid-cols-2"><article className="rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-3 font-semibold text-[#8a754c]">ボトックス後、笑ったときの口元の左右差が気になる</h3><p className="leading-7">施術前後の変化や表情の動きを確認し、経過観察や調整など、考えられる対応を診察で検討します。</p></article><article className="rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-3 font-semibold text-[#8a754c]">目の下の手術後、しわや凹みが目立つようになった</h3><p className="leading-7">皮膚やボリューム、周囲とのバランスを評価し、ヒアルロン酸治療などが適しているかを検討します。</p></article></div><p className="mt-4 text-sm text-gray-500">上記は相談内容の例です。個別の症例結果や、治療による改善を保証するものではありません。</p></section>

        <section id="flow" className="scroll-mt-6 py-14"><SectionTitle>ご相談から診察まで</SectionTitle><ol className="space-y-4">{["LINEを友だち追加｜修正相談用のLINEを追加してください。","「修正相談」と送信｜治療名、施術日・部位、製剤名・量、気になっていることとその経過を、わかる範囲でお知らせください。","診察方法・予約をご案内｜ご相談内容を確認し、オンラインまたは対面診察の受付方法をご案内します。","診察・今後の方針をご相談｜医師が状態を確認し、選択肢、費用、主なリスクをご説明します。"] .map((step, index) => <li key={step} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b89e69] font-semibold text-white">{index + 1}</span><p className="leading-7">{step}</p></li>)}</ol><div className="mt-8"><LineButton /></div></section>

        <section id="fees" className="scroll-mt-6 py-14"><SectionTitle>診察・治療料金</SectionTitle><p className="mb-5 leading-7">顔貌・修正医療相談は、通常の紹介制美容皮膚科メニューおよびキャンペーン価格とは異なります。自由診療です。</p><div className="overflow-hidden rounded-lg bg-white shadow-sm"><div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead className="bg-[#f4eee3]"><tr><th className="p-4">メニュー</th><th className="p-4">時間</th><th className="p-4">料金</th></tr></thead><tbody>{[["オンライン初診","20分","3,300円"],["対面初診・相談のみ","60分","16,500円"],["対面初診・同日に施術を受ける場合","診察60分＋施術時間","診察料8,800円＋施術料"],["再診","—","5,500円＋必要な施術料"]].map((row) => <tr key={row[0]} className="border-t border-[#eee7db]"><td className="p-4">{row[0]}</td><td className="p-4">{row[1]}</td><td className="p-4">{row[2]}</td></tr>)}</tbody></table></div></div><div className="mt-6 grid gap-5 md:grid-cols-2"><article className="rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-3 font-semibold text-[#8a754c]">ヒアルロン酸除去</h3><p className="leading-7">動物由来製剤：29,700円／薬剤1cc〜<br />人由来製剤：44,000円／薬剤1cc〜</p><p className="mt-3 text-sm leading-6 text-gray-500">診察料は別途。使用薬剤の種類・量、処置範囲、部位により費用が異なります。複数回の処置が必要な場合があります。</p></article><article className="rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-3 font-semibold text-[#8a754c]">顔貌改善ヒアルロン酸治療</h3><p className="leading-7">88,000円／1cc〜</p><p className="mt-3 text-sm leading-6 text-gray-500">診察料は別途です。適応と必要量は診察で判断します。すべての左右差や凹凸が完全に改善するものではありません。</p></article></div><article className="mt-5 rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-3 font-semibold text-[#8a754c]">顔貌バランスボトックス</h3><p className="mb-4 leading-7">顔面神経麻痺後の表情の左右差、こわばり、過緊張、表情のアンバランスなどに対して、医師が状態を評価したうえで、ボトックスを用いた整容的・機能的サポートを検討します。</p><div className="overflow-x-auto"><table className="w-full min-w-[420px] text-left text-sm"><thead className="bg-[#f4eee3]"><tr><th className="p-3">単位数</th><th className="p-3">初回</th><th className="p-3">再診・継続治療</th></tr></thead><tbody><tr className="border-t"><td className="p-3">25U</td><td className="p-3">66,000円</td><td className="p-3">55,000円</td></tr><tr className="border-t"><td className="p-3">50U</td><td className="p-3">110,000円</td><td className="p-3">99,000円</td></tr></tbody></table></div><p className="mt-4 text-sm leading-6 text-gray-500">再診・継続価格は、前回治療から4か月以内・同一症状・同一目的の継続治療に適用します。必要単位数は診察により決定します。効果には個人差があり、効きすぎ・効き不足・左右差・表情の動かしにくさ・違和感・腫れ・内出血などが生じる可能性があります。</p></article><div className="mt-8"><LineButton /></div></section>

        <section id="faq" className="scroll-mt-6 py-14"><SectionTitle>よくあるご質問</SectionTitle><div className="space-y-3">{faqs.map(([question, answer]) => <details key={question} className="rounded-lg bg-white p-5 shadow-sm"><summary className="cursor-pointer font-semibold text-[#8a754c]">{question}</summary><p className="mt-3 leading-7">{answer}</p></details>)}</div></section>

        <section id="urgent" className="scroll-mt-6 py-14"><div className="rounded-lg border border-red-200 bg-red-50 p-6"><h2 className="mb-3 text-xl font-semibold text-red-900">お急ぎの症状がある方へ</h2><p className="leading-7 text-red-900">視力の異常、強い痛み、皮膚の白さや暗い変色、息苦しさ、飲み込みにくさなどがある場合は、LINEの返信を待たず、施術を受けた医療機関や救急医療機関へ速やかにご相談ください。このLINEは緊急対応専用の窓口ではありません。</p></div></section>

        <section className="rounded-xl bg-white p-6 text-center shadow-sm sm:p-10"><h2 className="mb-4 text-2xl font-semibold text-[#8a754c]">一人で判断せず、まずはご相談ください</h2><p className="mb-6 leading-7">施術の情報がすべて揃っていなくても、わかる範囲からお知らせください。</p><LineButton /><p className="mt-4 text-sm text-gray-500">友だち追加後、「修正相談」とメッセージをお送りください。友だち追加だけでは相談受付・予約は完了しません。</p></section>
      </div>
      <div className="fixed inset-x-4 bottom-4 z-20 md:hidden"><LineButton className="w-full shadow-lg" /></div>
    </main>
  )
}
