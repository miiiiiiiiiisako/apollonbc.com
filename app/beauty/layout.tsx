import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "紹介患者さま専用 | Apollon Beauty Clinic",
  robots: { index: false, follow: false },
}

export default function ReferralLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
