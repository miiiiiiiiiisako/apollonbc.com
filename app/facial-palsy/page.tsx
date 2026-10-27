import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "顔面神経麻痺の治療相談｜Apollon.Beauty.Clinic",
  description: "顔面神経麻痺後に残る表情の左右差やこわばりについての治療相談をご案内します。",
}

const bookingUrl = "https://web.booking.clius.jp/reserve/apollonbc-onlin_medical-counseling"
const lineUrl = "https://line.me/R/ti/p/@160orbcq"
const buttonClass = "inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white"

const concerns = [
  "笑ったときや話すときに、口元の左右差が目立つ",
  "目を閉じると口元が、口を動かすと目元が一緒に動いてしまう",
  "頬や口元、目元にこわばりや引きつれ感がある",
  "麻痺のない側の動きが強く、左右差が大きく見える",
  "写真や会話のときに、表情が気になってしまう",
]

const faqs = [
  ["紹介がなくても相談できますか？", "はい。顔面神経麻痺後の表情に関するご相談は、ご紹介のない方もお受けしています。通常の美容診療は完全紹介制です。"],
  ["麻痺は治りますか？", "この治療は麻痺そのものを治すものではなく、麻痺のあとに残る左右差やこわばりの軽減を目指すものです。改善の程度には個人差があります。"],
  ["発症からどのくらいで相談できますか？", "麻痺の治療経過が落ち着いたあとに残る症状が主な対象です。時期の目安は経過によって異なるため、オンライン初診でご相談ください。"],
  ["健康保険は使えますか？", "自由診療のため、健康保険は適用されません。"],
  ["割引はありますか？", "顔面神経麻痺に対するボトックス治療の施術料は、基本料金から10％OFFでご案内します。診察料は割引対象外です。"],
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="border-t border-[#ded4c3] py-12 md:py-16"><h2 className="mb-7 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">{title}</h2>{children}</section>
}

function ActionButtons() {
  return <div className="grid gap-3 sm:grid-cols-2"><a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={`${buttonClass} bg-[#b89e69] text-white hover:bg-[#a08a59]`}>オンライン初診を予約する</a><a href={lineUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>LINEで質問する</a></div>
}

export default function FacialPalsyPage() {
  return <main className="min-h-screen bg-[#f8f4ec] text-[#3f3a32]">
    <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur"><div className="mx-auto flex max-w-5xl items-center justify-between"><Link href="/beauty-public" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link><a href={lineUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8d7545] underline underline-offset-4">LINEで相談</a></div></header>
    <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
      <section className="py-14 md:py-20"><Link href="/beauty-public" className="mb-8 inline-block text-sm text-[#8d7545] underline underline-offset-4">美容クリニック総合案内へ戻る</Link><div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs tracking-[0.16em] text-[#8d7545]"><span>FACIAL PALSY CONSULTATION</span><span className="border-l border-[#b89e69] pl-4 tracking-normal">紹介不要</span></div><h1 className="mb-6 max-w-3xl font-serif text-[2.15rem] font-medium leading-[1.45] tracking-[0.08em] text-[#3f3a32] md:text-5xl">顔面神経麻痺のあとに残る、<br className="sm:hidden" />表情の左右差やこわばりに。</h1><p className="mb-7 max-w-3xl text-base leading-loose text-[#665e50] md:text-lg">麻痺の治療を終えたあとも続く、表情の左右差やこわばり、笑ったときの違和感。医師がお顔の動きとこれまでの経過を丁寧に確認し、ボトックス治療が適しているかを一緒に考えます。</p><p className="mb-8 border-l border-[#b89e69] pl-4 text-sm leading-relaxed text-[#665e50]">ご紹介のない方もご相談いただけます。診察・カウンセリングは、毎回すべて院長が担当します。</p><ActionButtons /></section>
      <Section title="このようなお悩みはありませんか"><ul className="grid gap-3 md:grid-cols-2">{concerns.map(item => <li key={item} className="border border-[#ded4c3] bg-white/45 p-4 text-sm leading-relaxed text-[#665e50]">{item}</li>)}</ul></Section>
      <Section title="当院での治療の考え方"><h3 className="mb-4 font-serif text-xl font-medium leading-relaxed text-[#4b4338] md:text-2xl">動きすぎている筋肉を整え、表情のバランスを目指す</h3><div className="space-y-4 text-sm leading-loose text-[#665e50]"><p>顔面神経麻痺のあとには、筋肉の動きが弱いままの部分と、逆に過剰に動いたり緊張したりする部分が生じることがあります。</p><p>当院では、表情の動きや筋肉の緊張、左右のバランスを診察で確認し、ボトックスで過剰な動きや緊張をやわらげることで、左右差やこわばりの軽減を目指します。麻痺のない側の動きを調整する場合もあります。</p><p>効果の現れ方や持続期間には個人差があり、一般的に数か月で徐々に薄れていくため、経過を見ながら継続的な治療をご相談します。</p></div></Section>
      <Section title="ご相談の前に"><div className="space-y-4 text-sm leading-loose text-[#665e50]"><p>発症して間もない方や、まだ回復の途中にある方は、耳鼻咽喉科・脳神経内科など、顔面神経麻痺を診療する医療機関での治療と評価を優先してください。当院のご相談は、麻痺の治療経過が落ち着いたあとに残る症状を主な対象としています。現在ほかの医療機関で治療中の方は、主治医にもご相談ください。</p><p className="border-l border-[#b89e69] pl-4">この治療は麻痺そのものを治すものではありません。また、すべての方に適するわけではなく、診察の結果、治療をおすすめしない場合があります。</p></div></Section>
      <Section title="受診の流れ"><ol className="space-y-6">{[["オンライン初診を予約", "予約画面で『顔面神経麻痺・注入修正』を選択してください。"],["オンライン初診（20分・3,300円）", "これまでの経過やお悩みを伺い、治療の対象となるかを確認します。"],["対面診察", "対面での診察が必要かつ可能と判断した場合、表情の動き、筋肉の緊張、左右差を視診・触診で確認します。"],["治療・経過の確認", "適応があると判断した場合、内容・費用・リスクをご説明し、ご納得いただいたうえで施術します。効果の出方を確認し、次回以降の治療を調整します。"]].map(([title, body], i) => <li key={title} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b89e69] text-sm text-white">{i + 1}</span><div><h3 className="font-serif text-lg font-medium text-[#4b4338]">{title}</h3><p className="mt-1 text-sm leading-relaxed text-[#665e50]">{body}</p></div></li>)}</ol><p className="mt-8 text-sm leading-loose text-[#665e50]">予約前に確認したいことがある方は、LINEでお問い合わせください（友だち追加後「顔面神経麻痺相談」とお送りください）。LINEでは診断や治療方針はお伝えできません。</p></Section>
      <Section title="料金（自由診療・健康保険は適用されません）"><div className="space-y-6 text-sm leading-relaxed text-[#665e50]"><div><h3 className="mb-3 font-serif text-lg font-medium text-[#4b4338]">診察料</h3><ul className="space-y-2"><li>・オンライン初診：20分・3,300円</li><li>・初回対面診察：約60分・16,500円</li><li>・初回対面診察と同日に施術する場合：診察料13,200円＋施術料</li><li>・再診：診察料5,500円（20分目安）＋施術料</li></ul><p className="mt-3 text-xs">※オンライン初診料は、対面診察料とは別に必要です。</p></div><div><h3 className="mb-3 font-serif text-lg font-medium text-[#4b4338]">顔面神経麻痺のボトックス治療（基本料金から10％OFF適用後の料金）</h3><div className="overflow-hidden border border-[#ded4c3] bg-white/45"><table className="w-full text-left text-xs sm:text-sm"><thead className="bg-[#eee7da] text-[#8d7545]"><tr><th className="p-3">単位数</th><th className="p-3">初回</th><th className="p-3">再診・継続</th></tr></thead><tbody><tr><td className="border-t p-3">25U</td><td className="border-t p-3">59,400円</td><td className="border-t p-3">49,500円</td></tr><tr><td className="border-t p-3">50U</td><td className="border-t p-3">99,000円</td><td className="border-t p-3">89,100円</td></tr></tbody></table></div><ul className="mt-3 space-y-1 text-xs"><li>※診察料は別途で、割引対象外です。必要な単位数と適応は診察で判断します。</li><li>※継続価格は、前回治療から4か月以内・同一症状・同一目的の場合に適用します。</li><li>※施術前に治療内容と費用をご案内します。</li></ul></div></div></Section>
      <Section title="使用する医薬品について"><div className="space-y-4 text-sm leading-loose text-[#665e50]"><p>・使用医薬品：当院では、アラガン社製のボトックスビスタ®注用（A型ボツリヌス毒素製剤）を使用しています。</p><p>・適応外使用であること：本剤は国内で承認された医薬品ですが、承認されている効能・効果は「65歳未満の成人における眉間または目尻の表情皺」「65歳未満の成人における咬筋膨隆」です。顔面神経麻痺後の表情の左右差やこわばりに対する使用は、承認された効能・効果に含まれない適応外使用となります。</p><p>・入手経路：国内の製造販売元から、正規の流通経路で購入しています。</p><p>・国内の承認医薬品の有無：同一成分の国内承認医薬品として、ボトックスビスタ®注用（上記の効能・効果）と、ボトックス®注用（眼瞼痙攣、片側顔面痙攣など）がありますが、顔面神経麻痺後の症状に対する効能・効果での承認はありません。ボトックスビスタ®注用は、講習を受けた医師のみが使用できるという承認条件が付いています。</p><p>・諸外国における安全性等に係る情報：米国では1989年に初めて承認されていますが、顔面神経麻痺後の症状は承認された効能に含まれていません。米国の添付文書では、注射した部位から離れた部位に作用が及び、全身の脱力感、物が二重に見える、まぶたが下がる、飲み込みにくい、話しにくい、息苦しいなどの症状が、注射後数時間から数週間で起こる可能性があると警告されています。まれに生命に関わる場合があります。</p><p>・医薬品副作用被害救済制度について：適応外使用のため、万一重い副作用が生じても、医薬品副作用被害救済制度の対象外となります。</p></div></Section>
      <Section title="主なリスク・副作用"><p className="text-sm leading-loose text-[#665e50]">注射部位の痛み・内出血・腫れ、一時的な表情の違和感、まぶたや口元の動かしにくさ、頭痛などが生じることがあります。効果の程度や持続期間には個人差があり、左右差が残る場合や、期待した変化が得られない場合があります。<br /><br />妊娠中・授乳中の方、神経や筋肉の病気（重症筋無力症など）のある方、ボツリヌス製剤でアレルギーを起こしたことがある方は、治療を受けられない場合があります。<br /><br />治療後に飲み込みにくさ、話しにくさ、息苦しさが生じた場合は、速やかに医療機関を受診してください。</p></Section>
      <Section title="よくあるご質問"><div className="space-y-5">{faqs.map(([q, a]) => <div key={q} className="border-b border-[#ded4c3] pb-5"><h3 className="font-serif text-lg font-medium text-[#8d7545]">Q．{q}</h3><p className="mt-2 text-sm leading-relaxed text-[#665e50]">A．{a}</p></div>)}</div></Section>
      <Section title="お急ぎの症状がある方へ"><p className="border border-[#c9a9a0] bg-[#fffaf7] p-5 text-sm leading-loose text-[#714d46]">急に顔が動かしにくくなった場合は、速やかに医療機関を受診してください。手足の麻痺や、ろれつが回らないなどの症状を伴う場合は119番へ連絡してください。このLINEは緊急対応の窓口ではありません。</p></Section>
      <Section title="オンライン受診の注意事項"><ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#665e50]"><li>入室前に必ず接続確認テストを行ってください。</li><li>ブラウザはGoogle Chromeを推奨します。</li><li>LINEは即時に返信できない場合があります。</li><li>キャンセル料はかかりません。</li><li>予約システムからの変更・キャンセルは、予約時刻の6時間前まで可能です。</li><li>それ以降のキャンセルはLINEへご連絡ください。再予約はご自身で予約システムから行ってください。</li></ul></Section>
      <section className="border-t border-[#ded4c3] py-12 text-center"><h2 className="mb-4 font-serif text-2xl font-medium text-[#3f3a32] md:text-3xl">予約・相談</h2><p className="mb-6 text-sm leading-relaxed text-[#665e50]">予約画面で『顔面神経麻痺・注入修正』を選択してください。</p><ActionButtons /><p className="mt-4 text-xs text-[#766d5e]">LINEは友だち追加後、『顔面神経麻痺相談』とお送りください。</p><Link href="/beauty-public" className="mt-8 inline-block text-sm text-[#8d7545] underline underline-offset-4">美容クリニック総合案内へ戻る</Link></section>
    </div>
  </main>
}
