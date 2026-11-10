import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { absolute: "English Consultations | Apollon Beauty Clinic" },
  description:
    "Online and in-person consultations in English at Apollon Beauty Clinic in Shinagawa, Tokyo. Selected services do not require a referral.",
  alternates: {
    canonical: "https://www.apollonbc.com/en",
    languages: {
      en: "https://www.apollonbc.com/en",
      ja: "https://www.apollonbc.com/beauty-public",
    },
  },
}

const lineUrl = "https://lin.ee/oiYHa2N"
const buttonClass =
  "mt-auto inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-center text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white"

const services = [
  {
    eyebrow: "ONLINE MEDICAL",
    title: "Online consultation for skin, weight management, and hair thinning",
    description:
      "Speak with a doctor by video from home about skin concerns, weight management, or hair thinning. Prescriptions can be shipped within Japan.",
    href: "/en/online-consultation",
    action: "View consultations and fees",
  },
  {
    eyebrow: "ONLINE & IN-PERSON",
    title: "Concerns after filler or Botox treatments",
    description:
      "Consultations are available for concerns about appearance or facial expression following injectable treatments.",
    href: "/en/injectable-correction",
    action: "View consultation information",
  },
  {
    eyebrow: "ONLINE & IN-PERSON",
    title: "Facial expression concerns after facial palsy",
    description:
      "Consultations are available for facial asymmetry, tightness, or other expression concerns following facial palsy.",
    href: "/en/facial-palsy",
    action: "View consultation information",
  },
]

export default function EnglishHomePage() {
  return (
    <main lang="en" className="min-h-screen bg-[#f8f4ec] text-[#3f3a32]">
      <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold tracking-wide text-[#8d7545]">
            Apollon.Beauty.Clinic
          </Link>
          <Link href="/beauty-public" hrefLang="ja" className="text-sm text-[#8d7545] underline underline-offset-4">
            日本語
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
        <section className="py-16 md:py-24">
          <p className="mb-5 text-sm tracking-[0.2em] text-[#8d7545]">APOLLON BEAUTY CLINIC</p>
          <h1 className="mb-7 max-w-4xl text-balance font-serif text-[2.15rem] font-medium leading-[1.45] tracking-[0.04em] text-[#3f3a32] md:text-5xl">
            Apollon Beauty Clinic — Online and in-person consultations in English
          </h1>
          <p className="mb-8 max-w-3xl text-pretty text-base leading-loose text-[#665e50] md:text-lg">
            Consultations with Dr. Misako Matsui, Director, are available in English. The services below do not require a referral.
          </p>
          <p className="max-w-3xl border-l border-[#b89e69] pl-4 text-sm leading-relaxed text-[#665e50]">
            Our other aesthetic treatments are by referral only.
          </p>
        </section>

        <section className="border-t border-[#ded4c3] py-12 md:py-16">
          <p className="mb-3 text-sm tracking-[0.16em] text-[#8d7545]">CONSULTATIONS WITHOUT A REFERRAL</p>
          <h2 className="mb-8 text-balance font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">
            Services available in English
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.href} className="flex h-full flex-col border border-[#ded4c3] bg-white/45 p-6 md:p-7">
                <p className="mb-4 min-h-4 text-xs tracking-[0.18em] text-[#8d7545]">{service.eyebrow}</p>
                <h3 className="mb-4 font-serif text-xl font-medium leading-relaxed text-[#4b4338]">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-[#665e50]">{service.description}</p>
                <Link href={service.href} className={buttonClass}>
                  {service.action}
                </Link>
              </article>
            ))}
          </div>
          <Link href="/en/about" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-center text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white">
            About the doctor and the clinic
          </Link>
          <Link href="/en/music" className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-center text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white">
            Music therapy with live harp
          </Link>
        </section>

        <section className="border-t border-[#ded4c3] py-12 md:py-16">
          <h2 className="mb-6 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">
            Contact
          </h2>
          <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded border border-[#b89e69] px-8 py-3 text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white">
            Ask on LINE
          </a>
        </section>

        <section className="border-t border-[#ded4c3] py-12 md:py-16">
          <p className="mb-3 text-sm tracking-[0.16em] text-[#8d7545]">CLINIC INFORMATION</p>
          <h2 className="mb-8 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">
            Apollon Beauty Clinic
          </h2>
          <dl className="border-t border-[#ded4c3]">
            <div className="grid gap-2 border-b border-[#ded4c3] py-4 sm:grid-cols-[12rem_1fr]">
              <dt className="font-medium text-[#4b4338]">Address</dt>
              <dd className="text-sm leading-relaxed text-[#665e50]">1-15-24 Koyamadai, Shinagawa-ku, Tokyo 142-0061</dd>
            </div>
            <div className="grid gap-2 border-b border-[#ded4c3] py-4 sm:grid-cols-[12rem_1fr]">
              <dt className="font-medium text-[#4b4338]">Consultation hours</dt>
              <dd className="text-sm leading-relaxed text-[#665e50]">By appointment only</dd>
            </div>
            <div className="grid gap-2 border-b border-[#ded4c3] py-4 sm:grid-cols-[12rem_1fr]">
              <dt className="font-medium text-[#4b4338]">Services</dt>
              <dd className="text-sm leading-relaxed text-[#665e50]">Self-pay medical care; Japanese health insurance is not accepted.</dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  )
}
