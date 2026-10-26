import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "顔面神経麻痺の治療相談｜Apollon.Beauty.Clinic",
  description: "顔面神経麻痺後に残る表情の左右差やこわばりについての自由診療相談です。",
}

const bookingUrl = "https://web.booking.clius.jp/reserve/apollonbc-onlin_medical-counseling"
const lineUrl = "https://line.me/R/ti/p/@160orbcq"

function Notice() {
  return <div className="mt-10 border-y border-[#b89e69]/50 py-6 text-sm leading-7 text-[#665e50]"><p>入室前に必ず接続確認テストを行ってください。ブラウザはGoogle Chromeを推奨します。</p><p className="mt-2">LINEは即時に返信できない場合があります。キャンセル料はかかりません。</p><p className="mt-2">予約システムからの変更・キャンセルは、予約時刻の6時間前まで可能です。それ以降のキャンセルはLINEへご連絡ください。再予約はご自身で予約システムから行ってください。</p></div>
}

export default function FacialNervePalsyPage() {
  return <main className="min-h-screen bg-[#f8f4ec] text-[#4b4035]"><header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8"><Link href="/beauty-public" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link><Link href="/beauty-public" className="text-sm text-[#8d7545] underline">総合案内へ</Link></header><div className="mx-auto max-w-4xl px-6 pb-24"><section className="py-14 md:py-20"><p className="text-xs tracking-[0.25em] text-[#b89e69]">FACIAL NERVE PALSY CONSULTATION</p><h1 className="mt-6 font-serif text-4xl leading-[1.45] text-[#594b3c] md:text-6xl">顔面神経麻痺後の<br />表情と左右差のご相談</h1><p className="mt-8 max-w-2xl text-base leading-8 text-[#6f6658]">顔面神経麻痺後に残る、表情の左右差・こわばり・過緊張などについてご相談いただけます。一般的な美容目的の左右差相談ではなく、顔面神経麻痺のある方を対象とした診療相談です。</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={bookingUrl} target="_blank" rel="noreferrer" className="rounded bg-[#b89e69] px-6 py-3 text-center text-sm font-medium text-white">オンライン初診を予約する<span className="mt-1 block text-xs font-normal">20分・3,300円</span></a><a href={lineUrl} target="_blank" rel="noreferrer" className="rounded border border-[#b89e69] px-6 py-3 text-center text-sm text-[#8d7545]">LINEで相談する</a></div><p className="mt-3 text-xs text-[#766d5e]">予約画面で「顔面神経麻痺・注入修正」を選択してください。</p></section><section className="border-t border-[#ded4c3] py-12"><h2 className="font-serif text-3xl text-[#594b3c]">診察で確認すること</h2><div className="mt-6 space-y-5 text-sm leading-8 text-[#6f6658]"><p>医師が現在の状態、これまでの治療経過、表情の動きや筋肉の緊張を診察し、ボトックス治療などの適応を検討します。</p><p>改善の程度には個人差があり、すべての方に治療が適するわけではありません。麻痺そのものの治癒や、必ず改善することを保証するものではありません。</p><p>紹介者のいない方もご相談いただけます。自由診療です。</p></div></section><section className="border-t border-[#ded4c3] py-12"><h2 className="font-serif text-3xl text-[#594b3c]">受診の流れ</h2><ol className="mt-6 space-y-5 text-sm leading-7 text-[#6f665e]"><li><strong className="text-[#8d7545]">1. オンライン初診</strong><br />20分の診察で状態と経過を伺います。</li><li><strong className="text-[#8d7545]">2. 必要に応じて対面診察</strong><br />初回対面診察は約60分です。</li><li><strong className="text-[#8d7545]">3. 適応を判断して治療</strong><br />診察結果に基づき、治療を行わない選択肢も含めてご説明します。</li></ol></section><section className="border-t border-[#ded4c3] py-12"><h2 className="font-serif text-3xl text-[#594b3c]">料金・主なリスク</h2><div className="mt-6 space-y-3 text-sm leading-7 text-[#6f665e]"><p>オンライン初診：20分・3,300円</p><p>初回対面診察：約60分・16,500円</p><p>初回対面診察と同日に施術：診察料13,200円＋施術料</p><p>再診：診察料5,500円＋施術料</p><p>オンライン初診料は対面診察料とは別に必要です。顔面神経麻痺に対するボトックス治療は施術料を通常料金から10％引きとします。診察料は割引対象外です。</p><p>主なリスク・副作用として、痛み、腫れ、内出血、左右差、表情の変化、効果の不足や過剰、まれなアレルギー反応などがあります。</p></div></section><Notice /></div></main>
}
