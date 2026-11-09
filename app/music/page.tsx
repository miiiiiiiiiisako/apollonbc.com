import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "音楽療法・ハープセラピー｜Apollon.Beauty.Clinic",
  description: "医師・ハープセラピストの松井美彩子による、ハープの生演奏を用いた1対1の音楽療法。対面・オンラインのセッションと、病院・施設への訪問演奏、講演のご依頼を承っています。",
}

const musicLineUrl = "https://line.me/R/ti/p/@160orbcq"
const REQUEST_FORM_URL = ""
const buttonClass = "inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-center text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white"
const primaryButtonClass = "inline-flex min-h-12 w-full items-center justify-center rounded bg-[#b89e69] px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-[#a08a59]"

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return <>{eyebrow && <p className="mb-3 text-sm tracking-[0.16em] text-[#8d7545]">{eyebrow}</p>}<h2 className="mb-8 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">{title}</h2></>
}

const prices = [
  ["初回セッション（対面・60分）", "16,500円"],
  ["通常セッション（対面・60分）", "22,000円"],
  ["継続セッション（対面・60分、前回から2か月以内）", "19,800円"],
  ["延長（30分）", "9,900円"],
  ["オンラインセッション（45分）", "11,000円"],
  ["病院・施設への訪問演奏、講演・講座", "内容に応じてお見積り"],
]

export default function MusicTherapyPage() {
  return <main className="min-h-screen bg-[#f8f4ec] text-[#3f3a32]">
    <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur"><div className="mx-auto flex max-w-5xl items-center justify-between"><Link href="/" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link><a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8d7545] underline underline-offset-4">LINEで相談</a></div></header>
    <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
      <section className="py-10 md:py-16"><div className="relative mb-10 aspect-[16/10] overflow-hidden md:aspect-[16/8]"><Image src="/images/harp-seaside.jpg" alt="海辺でハープを演奏する松井美彩子" fill priority sizes="(min-width: 1024px) 960px, 100vw" className="object-cover object-left" /></div><p className="mb-5 text-sm tracking-[0.2em] text-[#8d7545]">MUSIC THERAPY</p><h1 className="mb-7 max-w-4xl font-serif text-[2.15rem] font-medium leading-[1.45] tracking-[0.06em] md:text-5xl">ハープの音色とともに、心と体を休める時間を。</h1><p className="mb-8 max-w-3xl text-base leading-loose text-[#665e50] md:text-lg">医師であり、ハープセラピストでもある院長・松井美彩子が、ハープの生演奏による1対1の音楽療法を行います。ご紹介のない方も、お申し込みいただけます。</p><a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>LINEで予約・相談する</a></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="ABOUT" title="音楽療法について" /><div className="max-w-4xl space-y-4 text-sm leading-loose text-[#665e50] md:text-base"><p>音楽療法は、音楽を聴く・感じる体験を通して、心と体の状態に寄り添う取り組みです。</p><p>当院では、院長が米国の International Harp Therapy Program（IHTP）で学んだ方法をもとに、その日のお話やご様子に合わせて、ハープの曲やテンポ、音の高さを選びながら生演奏を行います。演奏の経験や、音楽の知識は必要ありません。横になったり、目を閉じたりして、楽な姿勢でお過ごしいただけます。</p></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading title="このような方にご利用いただいています" /><ul className="grid gap-3 text-sm leading-relaxed text-[#665e50] md:grid-cols-2">{["緊張や不安が続き、落ち着いて過ごせる時間がほしい方","眠りや気分のことで、薬以外の過ごし方も取り入れてみたい方","治療や療養中で、穏やかな時間を持ちたい方","ハープの生演奏を、1対1でゆっくり聴いてみたい方"].map((item) => <li key={item} className="border-b border-[#ded4c3] py-3">{item}</li>)}</ul><p className="mt-5 text-xs leading-relaxed text-[#766d5e]">音楽療法は、医学的な治療の代わりになるものではありません。通院・治療中の方は、主治医にもご相談のうえお申し込みください。</p></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="THERAPIST" title="担当　院長 松井美彩子" /><div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12"><div className="w-full max-w-[420px] overflow-hidden"><Image src="/images/harp-performance.jpg" alt="ハープを演奏する院長 松井美彩子" width={1080} height={1328} sizes="(min-width: 768px) 420px, 100vw" className="h-auto w-full" /></div><div className="max-w-xl space-y-5 text-sm leading-loose text-[#665e50] md:text-base"><p>医師・医学博士。米国 International Harp Therapy Program（IHTP）修了。昭和医科大学で、脳波（EEG）を用いて、ハープの音色が心身に与える影響を研究しています。研究テーマがうつ症状とも関わることから、精神科クリニックでも診療を行っています。</p><Link href="/about" className="text-[#8d7545] underline underline-offset-4">院長・クリニック紹介を見る</Link></div></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="SESSION" title="セッションについて" /><div className="grid gap-6 md:grid-cols-2"><article className="border border-[#ded4c3] bg-white/45 p-6 md:p-7"><h3 className="mb-4 font-serif text-xl text-[#4b4338]">対面セッション（60分）</h3><p className="mb-4 text-sm leading-loose text-[#665e50]">クリニックの個室で行います。はじめに今のご様子やご希望を伺い、そのあとハープの生演奏をお聴きいただきます。最後に、過ごしてみてのご感想を伺います。延長も承ります。</p><p className="text-sm leading-loose text-[#665e50]">場所：Apollon.Beauty.Clinic（東京都品川区小山台）。詳しい場所は、ご予約時にご案内します。</p></article><article className="border border-[#ded4c3] bg-white/45 p-6 md:p-7"><h3 className="mb-4 font-serif text-xl text-[#4b4338]">オンラインセッション（45分）</h3><p className="text-sm leading-loose text-[#665e50]">ビデオ通話で、ご自宅などからご参加いただけます。音が聞き取りやすいよう、静かな場所で、イヤホンかスピーカーをご用意ください。</p></article></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="PRICE" title="料金（税込）" /><div className="overflow-x-auto border border-[#ded4c3] bg-white/45"><table className="w-full min-w-[580px] text-left text-sm"><thead className="bg-[#eee7da] text-[#8d7545]"><tr><th className="p-4">内容</th><th className="p-4">料金</th></tr></thead><tbody>{prices.map(([name, price]) => <tr key={name}><td className="border-t border-[#ded4c3] p-4">{name}</td><td className="border-t border-[#ded4c3] p-4">{price}</td></tr>)}</tbody></table></div><p className="mt-4 text-xs leading-relaxed text-[#766d5e]">保険は適用されません。お支払い方法とキャンセルについては、ご予約時にご案内します。</p></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="FLOW" title="ご予約の流れ" /><ol className="grid gap-4 md:grid-cols-4">{[["LINEでご連絡","音楽療法専用のLINEを友だち追加し、「対面」か「オンライン」と、ご希望の日時をお送りください。"],["日時の確定","日時と、当日の流れをご案内します。"],["セッション当日","お話を伺ってから、ハープの生演奏をお聴きいただきます。"],["その後","続けてご利用の場合は、次回の日程をご相談ください。"]].map(([title, body], index) => <li key={title} className="border border-[#ded4c3] bg-white/45 p-5"><span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#b89e69] text-sm text-white">{index + 1}</span><h3 className="mb-2 font-serif text-lg text-[#4b4338]">{title}</h3><p className="text-sm leading-relaxed text-[#665e50]">{body}</p></li>)}</ol><a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className={`${primaryButtonClass} mt-7`}>LINEで予約・相談する</a></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="FOR FACILITIES" title="病院・施設への訪問演奏、講演のご依頼" /><p className="mb-7 max-w-4xl text-sm leading-loose text-[#665e50] md:text-base">病院、高齢者施設、緩和ケアの現場、学会、企業や地域のイベントなどへの訪問演奏、音楽療法や研究についての講演・講座を承っています。日時・場所・人数・ご予算などをお知らせください。内容に応じてお見積りします。</p><div className="grid gap-4 sm:grid-cols-2">{REQUEST_FORM_URL ? <a href={REQUEST_FORM_URL} target="_blank" rel="noopener noreferrer" className={buttonClass}>ご依頼フォーム</a> : <button type="button" disabled className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded border border-[#c9c2b7] bg-[#e7e2da] px-5 py-3 text-sm text-[#8f8678]">ご依頼フォーム（準備中）</button>}<a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>LINEで問い合わせる</a></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading title="これまでの主な活動" /><ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-[#665e50] md:text-base"><li>病院でのボランティア演奏</li><li>地域の高齢者向け音楽療法講座、プチコンサート（港区立生涯学習センター）</li><li>日本音楽療法学会などでの学術発表</li><li>世界ハープ会議に奨学生として参加</li><li>台湾での招待演奏</li><li>2020年　香港国際ハープコンクール H部門 金賞</li><li>2021年　福井県音楽コンクール 総合優勝（知事賞）</li></ul></section>

      <section className="border-t border-[#ded4c3] py-12 text-center"><a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>LINEで予約・相談する</a><div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-6"><Link href="/" className="text-[#8d7545] underline underline-offset-4">トップページに戻る</Link><Link href="/beauty-public" className="text-[#8d7545] underline underline-offset-4">美容クリニックのご案内</Link></div></section>
    </div>
  </main>
}
