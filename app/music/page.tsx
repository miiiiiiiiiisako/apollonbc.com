import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MusicTherapyPage() {
  return (
    <div className="min-h-screen bg-[#f8f4ec] flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-[#b89e69] mb-6">音楽療法</h1>

        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-[#f8f4ec] rounded-full flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#b89e69]"
            >
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">準備中</h2>
          <p className="text-gray-600 mb-6">
            音楽療法のページは現在準備中です。
            <br />
            近日公開予定ですので、しばらくお待ちください。
          </p>
          <p className="text-gray-600">
            ハープの癒しの音色で心身を深く癒し、本来の調和を取り戻す音楽療法は、
            <br />
            ストレスや不安の軽減、リラクゼーション効果を提供します。
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#b89e69] hover:text-[#a08a59] transition-colors duration-300 font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
