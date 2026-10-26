import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "紹介患者さま専用ページ｜Apollon.Beauty.Clinic",
  robots: { index: false, follow: false, nocache: true },
}

export default function ReferralLoginLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
