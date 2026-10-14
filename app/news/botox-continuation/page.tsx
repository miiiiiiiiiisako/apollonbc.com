import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ボトックス継続特典を開始しました | Apollon Beauty Clinic",
  description: "前回施術から約3か月〜15週以内に同じ部位のボトックス施術を継続される方は通常価格より1,000円OFF。対象条件と注意事項をご案内します。",
}

export default function BotoxContinuationPage() {
  return (
    <main className="min-h-screen bg-[#fdf8f0] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/beauty" className="text-sm text-[#8a754c] underline underline-offset-4">美容クリニックのお知らせに戻る</Link>
        <article className="mt-6 rounded-lg bg-white p-6 shadow-md sm:p-8">
          <header className="mb-8 border-b-2 border-[#b89e69] pb-6">
            <time dateTime="2026-10-14" className="text-sm text-gray-500">2026.10.14</time>
            <h1 className="mt-3 text-2xl font-semibold leading-relaxed text-gray-800">ボトックス継続特典を開始しました</h1>
          </header>
          <div className="space-y-6 text-sm leading-relaxed text-gray-600 sm:text-base">
            <p>ボトックスの定期メンテナンスをより続けていただきやすいよう、「ボトックス継続特典」を開始しました。</p>
            <p>前回施術から約3か月〜15週以内に、前回と同じ部位のボトックス施術を受けられる場合、通常価格より<strong className="text-amber-800">1,000円OFF</strong>となります。</p>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-gray-800">■ 対象</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>前回と同じ部位の施術</li>
                <li>前回施術から15週以内</li>
                <li>医師の診察にて適応と判断された場合</li>
              </ul>
            </section>
            <section className="rounded-md bg-amber-50 p-4">
              <h2 className="mb-2 text-lg font-semibold text-gray-800">■ 割引内容</h2>
              <p>通常価格より<strong className="text-xl text-amber-800">1,000円OFF</strong></p>
            </section>
            <section>
              <h2 className="mb-2 text-lg font-semibold text-gray-800">■ 注意事項</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>他の割引との併用はできません</li>
                <li>適応や施術時期は診察時に医師が判断します</li>
                <li>同一部位の再施術が対象です</li>
              </ul>
            </section>
            <p>額・眉間・アゴ・フェイスラインなど、定期的なメンテナンスをご希望の方はお気軽にご相談ください。</p>
            <a href="https://lin.ee/UqN5FdS" target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center rounded-full bg-[#b89e69] px-6 py-3 text-center font-medium text-gray-900 transition-colors hover:bg-[#a08a59] sm:w-auto">LINEで予約・お問い合わせ</a>
          </div>
        </article>
      </div>
    </main>
  )
}
