import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import "./globals.css"

const notoSans = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-sans" })
const notoSerif = Noto_Serif_JP({ subsets: ["latin"], variable: "--font-noto-serif" })

export const metadata: Metadata = {
  title: "Apollon Beauty Clinic",
  description: "美と癒しの空間で、心身ともにリフレッシュ。顔貌・修正相談と顔面神経麻痺後の表情・左右差のご相談も承ります。",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${notoSerif.variable}`}>{children}</body>
    </html>
  )
}
