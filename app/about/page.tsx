import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "院長・クリニック紹介｜Apollon.Beauty.Clinic",
  description: "Apollon.Beauty.Clinic 院長・松井美彩子の経歴と診療方針、クリニックの概要をご紹介します。",
}

const beautyLineUrl = "https://lin.ee/oiYHa2N"
const musicLineUrl = "https://line.me/R/ti/p/@160orbcq"
const buttonClass = "inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-center text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white"

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return <>{eyebrow && <p className="mb-3 text-sm tracking-[0.16em] text-[#8d7545]">{eyebrow}</p>}<h2 className="mb-8 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">{title}</h2></>
}

const profileRows = [
  ["名称", "Apollon.Beauty.Clinic"],
  ["院長", "松井 美彩子"],
  ["所在地", "〒142-0061 東京都品川区小山台1-15-24"],
  ["診療内容", "美容皮膚科（自由診療）／音楽療法"],
  ["診療形態", "自由診療（保険適用外）・完全予約制"],
  ["ご予約・お問い合わせ", "美容はオンライン予約・LINE／音楽療法は音楽療法専用のLINE"],
  ["対面の美容診療", "紹介制"],
  ["ご紹介のない方も受け付けている相談", "注入後の仕上がり・修正相談／顔面神経麻痺の治療相談／オンライン診療（肌・ダイエット・育毛）／音楽療法"],
]

export default function AboutPage() {
  return <main className="min-h-screen bg-[#f8f4ec] text-[#3f3a32]">
    <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur"><div className="mx-auto flex max-w-5xl items-center justify-between"><Link href="/" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link><a href={beautyLineUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8d7545] underline underline-offset-4">LINEで相談</a></div></header>
    <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
      <section className="py-16 md:py-24"><p className="mb-5 text-sm tracking-[0.2em] text-[#8d7545]">ABOUT</p><h1 className="mb-7 font-serif text-[2.15rem] font-medium leading-[1.45] tracking-[0.08em] md:text-5xl">院長・クリニック紹介</h1><p className="max-w-3xl text-base leading-loose text-[#665e50] md:text-lg">どのような医師が、どのような考えで診療しているのか。美容医療と音楽療法、それぞれの取り組みと、クリニックの概要をご紹介します。</p></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="DIRECTOR" title="院長紹介" /><div className="grid items-start gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-12"><div className="relative aspect-[4/5] overflow-hidden"><Image src="/images/director-matsui.jpg" alt="Apollon.Beauty.Clinic 院長 松井美彩子" fill priority sizes="(min-width: 768px) 38vw, 100vw" className="object-cover" /></div><div className="space-y-8 text-sm leading-loose text-[#665e50] md:text-base"><div><p className="mb-2 text-sm text-[#8d7545]">院長　医師・医学博士／ハープセラピスト</p><h3 className="font-serif text-2xl text-[#3f3a32]">松井 美彩子</h3><p className="text-sm">まつい みさこ</p></div><div className="space-y-4"><p>医師として美容医療に携わりながら、ハープ奏者として音楽療法の研究と実践を続けています。</p><p>美容医療では、流行の形に近づけるのではなく、その方らしさを大切にしながら、お顔全体の調和を整えることを大切にしています。美容診療は、友人や家族にも安心して受けてもらえる医療を届けたいという思いから、紹介制で行っています。</p><p>音楽療法では、ハープの音色が心と体に与える影響を、脳波を用いて科学的に確かめる研究に取り組んでいます。見た目と心の両面から、その方が自分らしく過ごせるよう支えたいと考えています。</p></div><div><h4 className="mb-3 font-serif text-lg text-[#4b4338]">略歴</h4><ul className="list-disc space-y-2 pl-5"><li>帝京大学医学部 卒業</li><li>昭和医科大学 臨床研修</li><li>2020年　美容医療に従事。マグノリア皮膚科クリニック（東京・渋谷）勤務（現在も非常勤で診療）</li><li>2022年　Apollon.Beauty.Clinic にて紹介制の診療を開始</li><li>2026年3月　昭和医科大学大学院 医学研究科にて博士号取得（生理学）</li><li>現在　昭和医科大学 研究生／精神科クリニックにて非常勤で診療</li></ul></div><div><h4 className="mb-3 font-serif text-lg text-[#4b4338]">所属学会</h4><ul className="list-disc space-y-2 pl-5"><li>日本美容内科学会</li><li>日本生理学会</li><li>日本音楽療法学会</li></ul></div></div></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><p className="mb-2 text-xs text-[#766d5e]">美容医療の診療方針</p><SectionHeading eyebrow="BEAUTY｜PHILOSOPHY" title="その人らしさを、大切に。" /><h3 className="mb-6 font-serif text-xl text-[#4b4338] md:text-2xl">お顔全体のバランスを整える美容医療。</h3><figure className="mb-8"><div className="relative aspect-[3/2] overflow-hidden"><Image src="/images/consultation.jpg" alt="院長が表情の動きや左右差を確認している診察の様子" fill sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" /></div><figcaption className="mt-2 text-xs leading-relaxed text-[#766d5e]">写真は診察の様子を再現したもので、掲載の同意を得ています。</figcaption></figure><div className="max-w-4xl space-y-5 text-sm leading-loose text-[#665e50] md:text-base"><p>一人ひとりのお顔には、その方ならではの個性と魅力があります。</p><p>私が大切にしているのは、特定の形や流行に近づけることよりも、その方の魅力を活かしながら、お顔全体の調和を整えることです。</p><p>気になっている部分が、少しずつ気にならなくなる。ご自身のお顔を、今より好きになれる。そんな変化を、一緒に目指したいと考えています。</p>{[["お顔と、その方の生活をみて考える", "同じお悩みでも、適した治療は一人ひとり異なります。お顔の骨格や皮膚、ボリューム、表情、左右の筋肉の動きを、視診・触診で確認し、気になる症状がなぜ生じているのかを評価したうえで、治療の選択肢を検討します。\nまた、お仕事や日常生活、希望する治療・避けたい治療、取れるダウンタイム、大切な予定までの期間も伺います。治療する部位だけでなく、治療しない部位や進める順序も含めて、その方に合う計画をご相談します。"],["ご希望があっても、治療を見送ることがあります", "患者さまのご希望を伺うことは大切ですが、お顔全体の調和を損なうと判断した場合や、安全性・適応に懸念がある場合には、治療をおすすめしません。\n例えば、唇をさらに大きくしたいというご希望でも、現在の形や全体とのバランスを評価し、追加の注入を見送ることがあります。涙袋を新たに作る目的の注入も、原則として行っていません。\nその理由をご説明し、必要に応じて別の選択肢をご提案します。治療をしないことも、大切な判断のひとつです。"],["安全性を重視し、診察をもとに治療する", "左右差や違和感を、見た目だけで判断することはしません。これまでの治療歴や現在の状態、表情の動き、触れたときの所見を確認し、治療の必要性とリスクを検討します。\nできることと難しいことをお伝えし、ご納得いただいたうえで治療を進めます。"]].map(([title, body]) => <div key={title} className="border-t border-[#ded4c3] pt-7"><h3 className="mb-3 font-serif text-xl text-[#4b4338]">{title}</h3>{body.split("\n").map((line) => <p key={line} className="mb-3 last:mb-0">{line}</p>)}</div>)}<p className="text-right font-serif text-lg text-[#4b4338]">院長　松井美彩子</p></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading title="初診から継続診療まで、院長が一貫して担当します。" /><div className="max-w-3xl space-y-4 text-sm leading-loose text-[#665e50] md:text-base"><p>当院では、初診・再診を問わず、診察とカウンセリングはすべて院長・松井美彩子が担当します。</p><p>お悩みやこれまでの治療歴を伺うところから、お顔の状態・表情・バランスの評価、治療の選択肢やリスク、費用のご説明まで、医師が直接行います。</p><p>初回の対面診察では、診察・カウンセリングに約60分を確保しています。</p></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="MUSIC THERAPY" title="ハープの音色を、医療の現場へ。" /><div className="flex flex-col gap-8 md:flex-row-reverse md:items-start md:gap-12"><div className="relative mx-auto aspect-[2/3] w-full max-w-[440px] overflow-hidden"><Image src="/images/harp-artist.jpg" alt="ハープを手にする院長 松井美彩子" fill sizes="(min-width: 768px) 440px, 100vw" className="object-cover object-center" /></div><div className="flex-1 space-y-6 text-sm leading-loose text-[#665e50] md:text-base"><div className="space-y-4"><p>8歳でハープを始め、音楽の道と医学の道のあいだで迷いながら、医師になりました。</p><p>研修医の頃、声を失い、体を動かすことも難しくなった患者さんと向き合い、「医療だけでは届かないところに、自分にできることはないか」と考えるようになりました。そこで後期研修をいったん見送り、米国の International Harp Therapy Program（IHTP）を2年かけて修了しました。</p><p>現在は昭和医科大学で、脳波（EEG）を用いて、ハープの音色が心身に与える影響を研究しています。研究テーマがうつ症状とも関わることから、精神科クリニックでも診療を行っています。</p><p>音楽療法の経験を、科学的な根拠とともに医療の現場へ届けることを目指しています。</p></div><div><h3 className="mb-3 font-serif text-xl text-[#4b4338]">主な活動</h3><ul className="list-disc space-y-2 pl-5"><li>米国 International Harp Therapy Program（IHTP）修了</li><li>昭和医科大学にて、脳波を用いたハープ音楽療法の研究</li><li>日本音楽療法学会などでの学術発表</li><li>病院でのボランティア演奏、地域の高齢者向け音楽療法講座</li><li>世界ハープ会議に奨学生として参加</li><li>台湾での招待演奏</li></ul></div><div><h3 className="mb-3 font-serif text-xl text-[#4b4338]">ハープ奏者としての受賞</h3><ul className="list-disc space-y-2 pl-5"><li>2020年　香港国際ハープコンクール H部門 金賞</li><li>2021年　福井県音楽コンクール 総合優勝（知事賞）</li></ul></div><p className="text-xs text-[#766d5e]">音楽療法は、医学的な治療の代わりになるものではありません。治療中の方は、主治医にもご相談ください。</p><div className="flex flex-col gap-4"><Link href="/music" className={buttonClass}>音楽療法のページを見る</Link><a href="https://misakomatsui.com" target="_blank" rel="noopener noreferrer" className="text-[#8d7545] underline underline-offset-4">研究・音楽活動のプロフィール</a><a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className="text-[#8d7545] underline underline-offset-4">音楽療法のご相談（LINE）</a></div></div></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="CLINIC" title="クリニック概要" /><dl className="border-t border-[#ded4c3]">{profileRows.map(([term, description]) => <div key={term} className="grid gap-2 border-b border-[#ded4c3] py-4 sm:grid-cols-[14rem_1fr]"><dt className="font-medium text-[#4b4338]">{term}</dt><dd className="text-sm leading-relaxed text-[#665e50]">{description}</dd></div>)}</dl><p className="mt-5 text-sm leading-relaxed text-[#665e50]">通常の対面での美容診療は、ご紹介の方のみ承っています。ご紹介のない方は、下記の相談からお申し込みください。</p></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading title="ご相談・ご予約" /><div className="grid gap-4 sm:grid-cols-2"><Link href="/online-medical" className={buttonClass}>オンライン診療を見る</Link><Link href="/correction" className={buttonClass}>注入後の修正相談を見る</Link><Link href="/facial-palsy" className={buttonClass}>顔面神経麻痺の相談を見る</Link><Link href="/music" className={buttonClass}>音楽療法のページを見る</Link><a href={beautyLineUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>美容のご相談（LINE）</a><a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>音楽療法のご相談（LINE）</a></div></section>
    </div>
  </main>
}
