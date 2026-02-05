"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingBag, Video, CheckCircle, Clock, MessageCircle, ChevronRight, X } from "lucide-react"

export default function OnlineSkincarePage() {
  const [modalContent, setModalContent] = useState<"terms" | "privacy" | "commerce" | null>(null)

  return (
    <div className="bg-[#f8f4ec] min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* ヘッダー */}
        <header className="text-center mb-12">
          <Link href="/" className="text-[#b89e69] hover:underline text-sm mb-4 inline-block">
            ← トップページに戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-[#b89e69] mb-4">
            オンライン診療×ABC Skin Labo
          </h1>
          <p className="text-gray-700 max-w-xl mx-auto">
            医師が厳選したスキンケアと、自宅で受けられるオンライン診察
          </p>
        </header>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="https://apollonbconline.stores.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#b89e69] text-white rounded-full hover:bg-[#a08a59] transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            ABC Skin Labo
          </a>
          <a
            href="https://web.booking.clius.jp/reserve/apollonbc-onlin_medical-counseling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            <Video className="mr-2 h-5 w-5" />
            オンライン診察予約
          </a>
        </div>

        {/* セクション1: ABC Skin Laboについて */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#b89e69] mb-6 text-center">
              医師が厳選した、あなただけの美肌処方
            </h2>
            <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              <strong>ABC Skin Labo</strong>は、美容皮膚科医が選び抜いた、本当に結果の出るスキンケア商品をお届けするオンラインストアです。
            </p>

            <div className="bg-[#f8f4ec] rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-[#b89e69] mb-4">なぜホームスキンケアなのか？</h3>
              <p className="text-gray-700 mb-4">
                美しい肌は、毎日のケアの積み重ねで作られます。<br />
                クリニックでの施術は月に1回でも、ホームケアは毎日行うもの。<br />
                だからこそ、正しい製品選びと使い方が、肌の運命を左右します。
              </p>
              <p className="text-[#b89e69] font-bold text-lg">
                当院通院患者のホームスキンケアによる肌改善率：100％
              </p>
            </div>

            <h3 className="text-xl font-semibold text-[#b89e69] mb-6 border-b-2 border-[#b89e69] pb-2">
              ABC Skin Laboの3つの特長
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#f8f4ec] rounded-lg p-5">
                <div className="w-12 h-12 bg-[#b89e69] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 text-center">医師が実際に使用・検証した製品のみ</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>・成分、濃度、使用感まで医師自身が確認</li>
                  <li>・クリニックでも使用している信頼の製品</li>
                </ul>
              </div>
              <div className="bg-[#f8f4ec] rounded-lg p-5">
                <div className="w-12 h-12 bg-[#b89e69] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 text-center">あなたの肌悩みに直接アプローチ</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>・シミ・くすみケア</li>
                  <li>・毛穴・ニキビケア</li>
                  <li>・エイジングケア</li>
                  <li>・敏感肌・赤み対策</li>
                  <li>・保湿・バリア機能改善</li>
                </ul>
              </div>
              <div className="bg-[#f8f4ec] rounded-lg p-5">
                <div className="w-12 h-12 bg-[#b89e69] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 text-center">通院不要で、クリニック品質を自宅で</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>・忙しくてクリニックに通えない方</li>
                  <li>・遠方にお住まいの方</li>
                  <li>・まずは自宅ケアから始めたい方</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-4">こんなお悩みありませんか？</h4>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#b89e69] mr-2 flex-shrink-0 mt-0.5" />
                  ドラッグストアの商品では物足りない
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#b89e69] mr-2 flex-shrink-0 mt-0.5" />
                  高価な化粧品を買っても効果を感じない
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#b89e69] mr-2 flex-shrink-0 mt-0.5" />
                  自分の肌に何が必要かわからない
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#b89e69] mr-2 flex-shrink-0 mt-0.5" />
                  情報が多すぎて、何を選べばいいか迷う
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#b89e69] mr-2 flex-shrink-0 mt-0.5" />
                  クリニックに行く時間がない
                </li>
              </ul>
              <p className="text-[#b89e69] font-semibold text-center">
                そんなあなたに、ABC Skin Laboがあります
              </p>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://apollonbconline.stores.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#b89e69] text-white rounded-full hover:bg-[#a08a59] transition-colors font-semibold shadow-lg"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                ABC Skin Laboで商品を見る
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* セクション2: オンライン診察について */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#b89e69] mb-6 text-center">
              まずは医師に相談してみませんか？
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              「どの製品を選べばいいかわからない…」<br />
              そんな方のために、オンライン診察をご用意しています。
            </p>

            <div className="bg-teal-50 rounded-lg p-6 mb-8 text-center">
              <h3 className="text-2xl font-bold text-teal-700 mb-2">オンライン診察　1,100円〜</h3>
              <p className="text-gray-600">ビデオ通話で、医師があなたの肌を診察</p>
            </div>

            <p className="text-gray-700 mb-6 text-center">
              自宅にいながら、美容皮膚科専門医による本格的な診察が受けられます。
            </p>

            <h4 className="text-lg font-semibold text-[#b89e69] mb-4 border-b border-[#b89e69] pb-2">
              診察で分かること
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#f8f4ec] rounded-lg p-4">
                <h5 className="font-semibold text-gray-800 mb-2">あなたの肌タイプと現在の状態</h5>
                <p className="text-gray-600 text-sm">肌質、水分量、バリア機能の状態を評価</p>
              </div>
              <div className="bg-[#f8f4ec] rounded-lg p-4">
                <h5 className="font-semibold text-gray-800 mb-2">適切なスキンケアの選び方</h5>
                <p className="text-gray-600 text-sm">肌悩みやライフスタイルに合わせた製品の提案</p>
              </div>
              <div className="bg-[#f8f4ec] rounded-lg p-4">
                <h5 className="font-semibold text-gray-800 mb-2">正しい使用方法とスキンケアの順番</h5>
                <p className="text-gray-600 text-sm">効果を最大化する使い方を指導</p>
              </div>
              <div className="bg-[#f8f4ec] rounded-lg p-4">
                <h5 className="font-semibold text-gray-800 mb-2">生活習慣のアドバイス</h5>
                <p className="text-gray-600 text-sm">食事、睡眠、紫外線対策など</p>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-[#b89e69] mb-4 border-b border-[#b89e69] pb-2">
              オンライン診察メニュー
            </h4>
            <div className="space-y-4 mb-8">
              <div className="bg-[#f8f4ec] rounded-lg p-5">
                <h5 className="font-semibold text-gray-800 mb-3">美肌・スキンケア相談</h5>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>・肌診断とスキンケア提案</li>
                  <li>・シミ・肝斑治療（内服薬・外用薬処方可能）</li>
                  <li>・ニキビ・ニキビ跡治療</li>
                  <li>・毛穴・皮脂対策</li>
                  <li>・エイジングケア相談</li>
                </ul>
              </div>
              <div className="bg-[#f8f4ec] rounded-lg p-5">
                <h5 className="font-semibold text-gray-800 mb-3">その他の診察</h5>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li><strong>育毛治療</strong> - AGAやびまん性脱毛症の相談・お薬処方</li>
                  <li><strong>音楽療法相談</strong> - ストレスケア、メンタルヘルスサポート</li>
                  <li><strong>アートメイク前診察</strong> - ※アーティストから当院受診の紹介があった方のみ</li>
                </ul>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-[#b89e69] mb-4 border-b border-[#b89e69] pb-2">
              オンライン診察をお勧めする理由
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">製品選びの失敗が減る</h5>
                  <p className="text-gray-600 text-sm">医師の診断に基づいた提案だから、無駄な買い物をしなくて済みます</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">効果が出るのが早い</h5>
                  <p className="text-gray-600 text-sm">正しい製品×正しい使い方＝最短で結果が出る</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">継続的なサポート</h5>
                  <p className="text-gray-600 text-sm">肌の変化に合わせて、製品や使い方の見直しが可能</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">処方薬も対応</h5>
                  <p className="text-gray-600 text-sm">必要に応じて、医療機関でしか手に入らない処方薬もご案内</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-gray-800 mb-3">初めての方へ</h4>
              <p className="text-gray-600 mb-4">
                「オンライン診察って何を話せばいいの？」<br />
                そんな不安も不要です。医師が丁寧にヒアリングしながら進めますので、リラックスしてご参加ください。
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-4 w-4 mr-1 text-[#b89e69]" />
                  所要時間：15〜30分程度
                </div>
                <div className="flex items-center text-gray-700">
                  <MessageCircle className="h-4 w-4 mr-1 text-[#b89e69]" />
                  準備するもの：スマートフォンまたはPC、素顔の状態
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://web.booking.clius.jp/reserve/apollonbc-onlin_medical-counseling"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors font-semibold shadow-lg"
              >
                <Video className="mr-2 h-5 w-5" />
                オンライン診察を予約する
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* セクション3: ご利用の流れ */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#b89e69] mb-8 text-center border-b-2 border-[#b89e69] pb-4">
              ご利用の流れ
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#b89e69] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">予約・問診票記入</h4>
                  <p className="text-gray-600 text-sm">ホームページ予約フォームより診察日時をご予約ください。その後問診票のご記入をお願いします</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#b89e69] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">診察料のお支払い</h4>
                  <p className="text-gray-600 text-sm">診察前に診察料をお支払いください</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#b89e69] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">オンライン診察</h4>
                  <p className="text-gray-600 text-sm">ビデオ通話にて医師が診察いたします</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#b89e69] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">処方</h4>
                  <p className="text-gray-600 text-sm">診察結果に基づき、必要に応じて医薬品を処方いたします</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#b89e69] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">処方薬代金のお支払い</h4>
                  <p className="text-gray-600 text-sm">処方薬代金をお支払いください</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#b89e69] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">発送</h4>
                  <p className="text-gray-600 text-sm">お支払い確認後、営業日1週間以内に処方薬をご自宅へお届けいたします</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTAボタン（繰り返し） */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="https://apollonbconline.stores.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#b89e69] text-white rounded-full hover:bg-[#a08a59] transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            ABC Skin Labo
          </a>
          <a
            href="https://web.booking.clius.jp/reserve/apollonbc-onlin_medical-counseling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            <Video className="mr-2 h-5 w-5" />
            オンライン診察予約
          </a>
        </div>

        {/* フッター */}
        <footer className="text-center pt-8 border-t border-gray-200">
          <div className="flex justify-center gap-6 text-xs text-gray-500">
            <button
              onClick={() => setModalContent("terms")}
              className="hover:text-gray-700 hover:underline"
            >
              利用規約
            </button>
            <button
              onClick={() => setModalContent("privacy")}
              className="hover:text-gray-700 hover:underline"
            >
              プライバシーポリシー
            </button>
            <button
              onClick={() => setModalContent("commerce")}
              className="hover:text-gray-700 hover:underline"
            >
              特定商取引法に基づく表記
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            © 2026 Apollon Beauty Clinic. All rights reserved.
          </p>
        </footer>
      </div>

      {/* モーダル */}
      {modalContent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-white rounded-lg max-w-3xl max-h-[80vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            {modalContent === "terms" && (
              <div className="prose prose-sm max-w-none">
                <h2 className="text-xl font-bold text-[#b89e69] mb-4">利用規約</h2>
                <h3 className="font-semibold mt-4">第1条（適用）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>本規約は、アポロンビューティークリニック（以下「当院」といいます）が提供するオンライン診察サービス（以下「本サービス」といいます）の利用条件を定めるものです。</li>
                  <li>利用者は、本規約に同意の上、本サービスを利用するものとします。</li>
                </ol>

                <h3 className="font-semibold mt-4">第2条（定義）</h3>
                <p className="text-sm text-gray-700">本規約において使用する用語の定義は、以下の通りとします。</p>
                <ul className="list-disc pl-5 text-sm text-gray-700">
                  <li>利用者：本サービスを利用する方</li>
                  <li>オンライン診察：インターネットを通じたビデオ通話による診察</li>
                  <li>処方薬：診察結果に基づき医師が処方する医薬品</li>
                </ul>

                <h3 className="font-semibold mt-4">第3条（サービス内容）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>当院は、利用者に対してオンライン診察サービスを提供します。</li>
                  <li>オンライン診察の内容には、音楽療法、肌診断、アートメイク前診察などが含まれます。</li>
                  <li>診察結果に基づき、医師の判断により処方薬を提供する場合があります。</li>
                </ol>

                <h3 className="font-semibold mt-4">第4条（利用登録）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>利用者は、当院ホームページの予約フォームから必要事項を入力し、予約を行うものとします。</li>
                  <li>当院は、利用者が以下のいずれかに該当する場合、予約を承認しないことがあります。
                    <ul className="list-disc pl-5 mt-1">
                      <li>虚偽の情報を申告した場合</li>
                      <li>過去に本規約違反により利用停止処分を受けたことがある場合</li>
                      <li>その他、当院が不適切と判断した場合</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-semibold mt-4">第5条（料金および支払い）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>利用者は、診察料を診察前に支払うものとします。</li>
                  <li>処方薬が処方された場合、利用者は処方薬代金および送料を発送前に支払うものとします。</li>
                  <li>料金は診察内容により異なり、詳細は特定商取引法に基づく表記ページに記載します。</li>
                  <li>支払方法は、クレジットカード決済または銀行振込とします。</li>
                </ol>

                <h3 className="font-semibold mt-4">第6条（キャンセル・返金）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>利用者は、診察開始の24時間前までに連絡することで、予約をキャンセルすることができます。</li>
                  <li>前項のキャンセルの場合、翌月末までに返金いたしますが、振込手数料等すべての手数料は利用者の負担とします。</li>
                  <li>診察開始後のキャンセルおよび返金は、原則として受け付けません。</li>
                  <li>処方薬発送後のキャンセルおよび返品は、医薬品の性質上お受けできません。</li>
                </ol>

                <h3 className="font-semibold mt-4">第7条（不良品・誤配送）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>商品到着後7日以内に到着時の写真を添えてご連絡いただいた場合に限り、不良品または誤配送について交換または返金対応いたします。</li>
                  <li>前項の返金対応における手数料は当院が負担いたします。</li>
                </ol>

                <h3 className="font-semibold mt-4">第8条（禁止事項）</h3>
                <p className="text-sm text-gray-700">利用者は、本サービスの利用にあたり、以下の行為を行ってはならないものとします。</p>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>虚偽の情報を提供する行為</li>
                  <li>他人になりすまして本サービスを利用する行為</li>
                  <li>当院または第三者の知的財産権、プライバシー権その他の権利を侵害する行為</li>
                  <li>法令または公序良俗に違反する行為</li>
                  <li>本サービスの運営を妨げる行為</li>
                  <li>その他、当院が不適切と判断する行為</li>
                </ol>

                <h3 className="font-semibold mt-4">第9条（サービスの停止・中断）</h3>
                <p className="text-sm text-gray-700">当院は、以下のいずれかに該当する場合、利用者への事前通知なく、本サービスの全部または一部を停止または中断することができます。</p>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>本サービスに係るシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電、天災などの不可抗力により本サービスの提供が困難な場合</li>
                  <li>インターネット回線または通信機器の障害により本サービスの提供が困難な場合</li>
                  <li>その他、当院が停止または中断を必要と判断した場合</li>
                </ol>

                <h3 className="font-semibold mt-4">第10条（免責事項）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>当院は、本サービスの利用により利用者に生じた損害について、当院の故意または重過失による場合を除き、一切の責任を負いません。</li>
                  <li>当院は、診察内容や処方薬の効果について保証するものではありません。</li>
                  <li>通信環境の不具合により診察が中断した場合、可能な限り再接続を試みますが、診察の完了を保証するものではありません。</li>
                </ol>

                <h3 className="font-semibold mt-4">第11条（個人情報の取り扱い）</h3>
                <p className="text-sm text-gray-700">当院は、利用者の個人情報を、別途定めるプライバシーポリシーに従い、適切に取り扱います。</p>

                <h3 className="font-semibold mt-4">第12条（規約の変更）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>当院は、必要に応じて本規約を変更することができます。</li>
                  <li>規約を変更した場合、当院ホームページに掲載することにより、利用者に通知します。</li>
                  <li>変更後の規約は、ホームページに掲載された時点で効力を生じるものとします。</li>
                </ol>

                <h3 className="font-semibold mt-4">第13条（準拠法および管轄裁判所）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>本規約の準拠法は日本法とします。</li>
                  <li>本サービスに関して紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
                </ol>

                <p className="text-sm text-gray-500 mt-4">制定日：2026年2月5日</p>
              </div>
            )}

            {modalContent === "privacy" && (
              <div className="prose prose-sm max-w-none">
                <h2 className="text-xl font-bold text-[#b89e69] mb-4">プライバシーポリシー</h2>
                <p className="text-sm text-gray-700">アポロンビューティークリニック（以下「当院」といいます）は、利用者の個人情報の重要性を認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます）を遵守し、以下のプライバシーポリシー（以下「本ポリシー」といいます）に基づき、適切に個人情報を取り扱います。</p>

                <h3 className="font-semibold mt-4">第1条（個人情報）</h3>
                <p className="text-sm text-gray-700">本ポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できる情報を指します。</p>

                <h3 className="font-semibold mt-4">第2条（個人情報の収集）</h3>
                <p className="text-sm text-gray-700">当院は、本サービスの提供にあたり、以下の個人情報を収集します。</p>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>氏名</li>
                  <li>生年月日</li>
                  <li>性別</li>
                  <li>住所</li>
                  <li>電話番号</li>
                  <li>メールアドレス</li>
                  <li>診察内容・病歴・健康状態に関する情報</li>
                  <li>支払情報（クレジットカード情報、銀行口座情報等）</li>
                  <li>その他、診察・処方に必要な医療情報</li>
                </ol>

                <h3 className="font-semibold mt-4">第3条（個人情報の利用目的）</h3>
                <p className="text-sm text-gray-700">当院は、収集した個人情報を以下の目的で利用します。</p>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>オンライン診察の実施および処方薬の提供</li>
                  <li>診察予約の管理および連絡</li>
                  <li>料金の請求および決済処理</li>
                  <li>処方薬の配送</li>
                  <li>お問い合わせへの対応</li>
                  <li>サービス向上のための統計データの作成（個人を特定できない形式）</li>
                  <li>重要なお知らせやサービスに関する情報提供</li>
                  <li>その他、本サービスの提供に必要な業務</li>
                </ol>

                <h3 className="font-semibold mt-4">第4条（個人情報の第三者提供）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>当院は、以下のいずれかに該当する場合を除き、利用者の同意なく個人情報を第三者に提供しません。
                    <ul className="list-disc pl-5 mt-1">
                      <li>法令に基づく場合</li>
                      <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                      <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合</li>
                      <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                    </ul>
                  </li>
                  <li>当院は、処方薬の配送のため、配送業者に必要最小限の個人情報（氏名、住所、電話番号）を提供します。</li>
                </ol>

                <h3 className="font-semibold mt-4">第5条（個人情報の管理）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>当院は、個人情報の紛失、破壊、改ざんおよび漏洩などのリスクに対して、適切な安全管理措置を講じます。</li>
                  <li>当院は、個人情報へのアクセスを、業務上必要な従業員に限定し、適切な監督を行います。</li>
                  <li>当院は、個人情報の取り扱いを外部に委託する場合、委託先に対して適切な監督を行います。</li>
                </ol>

                <h3 className="font-semibold mt-4">第6条（個人情報の開示・訂正・削除）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>利用者は、当院に対して、自己の個人情報の開示を請求することができます。</li>
                  <li>利用者は、自己の個人情報に誤りがある場合、当院に対して訂正または削除を請求することができます。</li>
                  <li>前2項の請求を行う場合は、当院の問い合わせ窓口（shopping.by.apollonbc.injapan@gmail.com）までご連絡ください。</li>
                  <li>当院は、請求内容を確認の上、合理的な期間内に対応いたします。</li>
                  <li>法令により保存が義務付けられている医療情報等については、削除に応じられない場合があります。</li>
                </ol>

                <h3 className="font-semibold mt-4">第7条（Cookie等の利用）</h3>
                <p className="text-sm text-gray-700">当院は、本サービスの利便性向上のため、Cookieを使用する場合があります。利用者は、ブラウザの設定によりCookieの受け取りを拒否することができますが、その場合、本サービスの一部機能が利用できなくなる可能性があります。</p>

                <h3 className="font-semibold mt-4">第8条（アクセス解析ツール）</h3>
                <p className="text-sm text-gray-700">当院は、本サービスの利用状況を把握するため、Google Analyticsなどのアクセス解析ツールを使用する場合があります。これらのツールは、Cookieを使用してデータを収集しますが、個人を特定する情報は含まれません。</p>

                <h3 className="font-semibold mt-4">第9条（プライバシーポリシーの変更）</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>当院は、法令の変更や事業内容の変更等に応じて、本ポリシーを変更することがあります。</li>
                  <li>変更後のプライバシーポリシーは、当院ホームページに掲載した時点で効力を生じるものとします。</li>
                  <li>重要な変更がある場合は、ホームページ上で分かりやすく告知いたします。</li>
                </ol>

                <h3 className="font-semibold mt-4">第10条（お問い合わせ窓口）</h3>
                <p className="text-sm text-gray-700">個人情報の取り扱いに関するご質問、開示・訂正・削除のご請求は、以下までご連絡ください。</p>
                <p className="text-sm text-gray-700 mt-2">
                  アポロンビューティークリニック<br />
                  運営責任者：松井美彩子<br />
                  所在地：〒142-0062 東京都品川区小山台1-15-24<br />
                  メールアドレス：shopping.by.apollonbc.injapan@gmail.com<br />
                  電話番号：070-8930-6374<br />
                  受付時間：営業日9:00〜15:00
                </p>

                <p className="text-sm text-gray-500 mt-4">制定日：2026年2月5日</p>
              </div>
            )}

            {modalContent === "commerce" && (
              <div className="prose prose-sm max-w-none">
                <h2 className="text-xl font-bold text-[#b89e69] mb-4">特定商取引法に基づく表記</h2>
                
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 text-gray-700 w-1/3">販売事業者名</th>
                      <td className="py-3 text-gray-600">アポロンビューティークリニック</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 text-gray-700">運営責任者</th>
                      <td className="py-3 text-gray-600">松井美彩子</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 text-gray-700">本社所在地</th>
                      <td className="py-3 text-gray-600">〒142-0062 東京都品川区小山台1-15-24</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 text-gray-700">問い合わせ窓口</th>
                      <td className="py-3 text-gray-600">
                        メールアドレス：shopping.by.apollonbc.injapan@gmail.com<br />
                        電話番号：070-8930-6374<br />
                        ※お問い合わせは基本的にメールで対応いたします<br />
                        ※受付時間：営業日9:00〜15:00<br />
                        ※営業日1週間以内にご返信・ご対応いたします
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 text-gray-700">サービス内容</th>
                      <td className="py-3 text-gray-600">オンライン診察および診察後の処方薬の提供</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 text-gray-700">料金</th>
                      <td className="py-3 text-gray-600">
                        オンライン診察料：診察内容により異なります（音楽療法、肌診断、アートメイク前診察など、診察時に医師よりご説明いたします）<br />
                        処方薬代金：診察内容により異なります（診察時に医師よりご説明いたします）<br />
                        送料：全国一律600円（税込）
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 text-gray-700">商品代金以外の必要料金</th>
                      <td className="py-3 text-gray-600">
                        送料：全国一律600円（税込）<br />
                        銀行振込の場合：振込手数料はお客様のご負担となります
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 text-gray-700">お支払い方法</th>
                      <td className="py-3 text-gray-600">クレジットカード決済、銀行振込</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 text-gray-700">代金の支払い時期</th>
                      <td className="py-3 text-gray-600">
                        オンライン診察料：診察前に事前お支払い<br />
                        処方薬代金：処方薬発送前に事前お支払い<br />
                        銀行振込の場合：診察は事前振込、処方薬は振込確認後に発送いたします
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 text-gray-700">商品の引き渡し時期</th>
                      <td className="py-3 text-gray-600">お支払い確認後、営業日1週間以内に発送いたします。配送業者の状況により、お届けまで発送から1〜3日程度かかります。</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 text-gray-700">返品・交換・キャンセルについて</th>
                      <td className="py-3 text-gray-600">
                        診察前のキャンセル：診察開始の24時間前までのご連絡で返金いたします（翌月末までに返金。振込手数料等すべての手数料はお客様のご負担となります）<br />
                        診察後のキャンセル：診察終了後の返品・キャンセルはお受けできません<br />
                        処方薬のキャンセル・返品：医薬品という商品の性質上、発送後の返品・キャンセルはお受けできません<br />
                        不良品・誤配送：商品到着後7日以内に到着時の写真を添えてご連絡いただければ、交換または返金対応いたします（その際の返金対応における手数料は当院が負担いたします）
                      </td>
                    </tr>
                    <tr>
                      <th className="text-left py-3 pr-4 text-gray-700">返金方法</th>
                      <td className="py-3 text-gray-600">
                        返金が発生する場合は、お支払い方法に応じて以下の方法で返金いたします。<br />
                        クレジットカード決済：決済取消処理を行います<br />
                        銀行振込：ご指定の口座へ振込いたします
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="font-semibold mt-6 mb-3">オンライン診察ご利用の流れ</h3>
                <ol className="list-decimal pl-5 text-sm text-gray-700">
                  <li>予約：ホームページ予約フォームより診察日時をご予約ください</li>
                  <li>診察料のお支払い：診察前に診察料をお支払いください</li>
                  <li>オンライン診察：ビデオ通話にて医師が診察いたします</li>
                  <li>処方：診察結果に基づき、必要に応じて医薬品を処方いたします</li>
                  <li>処方薬代金のお支払い：処方薬代金をお支払いください</li>
                  <li>発送：お支払い確認後、営業日1週間以内に処方薬をご自宅へお届けいたします</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
