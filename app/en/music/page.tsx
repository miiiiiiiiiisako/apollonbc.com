import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: { absolute: "Music Therapy with Harp | Apollon Beauty Clinic" },
  description: "One-to-one music therapy with live harp by Dr. Misako Matsui, physician and harp therapist. In-person and online sessions, hospital and facility visits, and lectures in Tokyo.",
  alternates: {
    canonical: "https://www.apollonbc.com/en/music",
    languages: {
      en: "https://www.apollonbc.com/en/music",
      ja: "https://www.apollonbc.com/music",
    },
  },
}

const musicLineUrl = "https://line.me/R/ti/p/@160orbcq"
const REQUEST_FORM_URL = "https://forms.gle/WhiNVLC87ttfQ42z9"
const buttonClass = "inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-center text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white"
const primaryButtonClass = "inline-flex min-h-12 w-full items-center justify-center rounded bg-[#b89e69] px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-[#a08a59]"

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return <>{eyebrow && <p className="mb-3 text-sm tracking-[0.16em] text-[#8d7545]">{eyebrow}</p>}<h2 className="mb-8 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">{title}</h2></>
}

const prices = [
  ["First session (in person, 60 minutes)", "¥16,500"],
  ["Regular session (in person, 60 minutes)", "¥22,000"],
  ["Continuing session (in person, 60 minutes, within 2 months of your previous session)", "¥19,800"],
  ["Extension (30 minutes)", "¥9,900"],
  ["Online session (45 minutes)", "¥11,000"],
  ["Hospital and facility visits, lectures and classes", "Quote based on details"],
]

export default function EnglishMusicTherapyPage() {
  return <main lang="en" className="min-h-screen bg-[#f8f4ec] font-sans text-[#3f3a32]">
    <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur"><div className="mx-auto flex max-w-5xl items-center justify-between gap-4"><Link href="/en" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon Beauty Clinic</Link><div className="flex items-center gap-4"><Link href="/music" hrefLang="ja" className="text-sm text-[#8d7545] underline underline-offset-4">日本語</Link><a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8d7545] underline underline-offset-4">Contact on LINE</a></div></div></header>
    <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
      <section className="py-10 md:py-16"><div className="relative mb-10 aspect-[16/10] overflow-hidden md:aspect-[16/8]"><Image src="/images/harp-seaside.jpg" alt="Misako Matsui playing the harp by the sea" fill priority sizes="(min-width: 1024px) 960px, 100vw" className="object-cover object-left" /></div><p className="mb-5 text-sm tracking-[0.2em] text-[#8d7545]">MUSIC THERAPY</p><h1 className="mb-7 max-w-4xl font-serif text-[2.15rem] font-medium leading-[1.45] tracking-[0.06em] md:text-5xl">Time to rest your mind and body, with the sound of the harp.</h1><p className="mb-8 max-w-3xl text-base leading-loose text-[#665e50] md:text-lg">Dr. Misako Matsui, director of the clinic and both a physician and a harp therapist, offers one-to-one music therapy with live harp music. No referral is needed.</p><a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>Book or ask on LINE</a><p className="mt-3 text-center text-xs leading-relaxed text-[#766d5e]">You are welcome to message us in English.</p></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="ABOUT" title="About Music Therapy" /><div className="max-w-4xl space-y-4 text-sm leading-loose text-[#665e50] md:text-base"><p>Music therapy is an approach that supports the state of the mind and body through the experience of listening to and feeling music.</p><p>At our clinic, based on the methods the director learned through the International Harp Therapy Program (IHTP) in the United States, the harp is played live, with the pieces, tempo, and pitch chosen according to what you share and how you are on the day. No musical experience or knowledge is needed. You may lie down or close your eyes and spend the time in whatever position is comfortable.</p></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading title="Who uses our sessions" /><ul className="grid gap-3 text-sm leading-relaxed text-[#665e50] md:grid-cols-2">{["People who have been feeling tense or anxious and would like time to settle","People who would like to add something other than medication to how they spend their time, in relation to sleep or mood","People undergoing treatment or recovering who would like a calm time","People who would like to listen to live harp music, one-to-one, at their own pace"].map((item) => <li key={item} className="border-b border-[#ded4c3] py-3">{item}</li>)}</ul><p className="mt-5 text-xs leading-relaxed text-[#766d5e]">Music therapy is not a substitute for medical treatment. If you are seeing a doctor or receiving treatment, please also consult your doctor before applying.</p></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="THERAPIST" title="Your therapist: Dr. Misako Matsui, Director" /><div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12"><div className="w-full max-w-[420px] overflow-hidden"><Image src="/images/harp-performance.jpg" alt="Dr. Misako Matsui playing the harp" width={1080} height={1328} sizes="(min-width: 768px) 420px, 100vw" className="h-auto w-full" /></div><div className="max-w-xl space-y-5 text-sm leading-loose text-[#665e50] md:text-base"><p>Physician, MD, PhD. Completed the International Harp Therapy Program (IHTP) in the United States. At Showa Medical University, she researches the effects of the sound of the harp on the mind and body using EEG (brain-wave measurement). Because her research relates to depressive symptoms, she also sees patients at a psychiatric clinic.</p><Link href="/en/about" className="text-[#8d7545] underline underline-offset-4">About the doctor and the clinic</Link></div></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="SESSION" title="Sessions" /><div className="grid gap-6 md:grid-cols-2"><article className="border border-[#ded4c3] bg-white/45 p-6 md:p-7"><h3 className="mb-4 font-serif text-xl text-[#4b4338]">In-person session (60 minutes)</h3><p className="mb-4 text-sm leading-loose text-[#665e50]">Held in a private room at the clinic. We begin by asking how you are and what you would like, and then you listen to live harp music. At the end, we ask how the time felt for you. Extensions are available.</p><p className="text-sm leading-loose text-[#665e50]">Location: Apollon Beauty Clinic (Koyamadai, Shinagawa-ku, Tokyo). Directions will be provided when you book.</p></article><article className="border border-[#ded4c3] bg-white/45 p-6 md:p-7"><h3 className="mb-4 font-serif text-xl text-[#4b4338]">Online session (45 minutes)</h3><p className="text-sm leading-loose text-[#665e50]">Join by video call from home or anywhere convenient. To hear the sound clearly, please choose a quiet place and prepare earphones or speakers.</p></article></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="PRICE" title="Fees (tax included)" /><div className="overflow-x-auto border border-[#ded4c3] bg-white/45"><table className="w-full min-w-[580px] text-left text-sm"><thead className="bg-[#eee7da] text-[#8d7545]"><tr><th className="p-4">Session</th><th className="p-4">Fee</th></tr></thead><tbody>{prices.map(([name, price]) => <tr key={name}><td className="border-t border-[#ded4c3] p-4">{name}</td><td className="border-t border-[#ded4c3] p-4">{price}</td></tr>)}</tbody></table></div><p className="mt-4 text-xs leading-relaxed text-[#766d5e]">Health insurance does not apply. Payment methods and the cancellation policy will be explained when you book.</p></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="FLOW" title="How to Book" /><ol className="grid gap-4 md:grid-cols-4">{[["Contact us on LINE","Add our music therapy LINE account as a friend, and send us \"In person\" or \"Online\" along with your preferred dates and times."],["Confirming your appointment","We will confirm the date and time and explain how the session will go."],["On the day","After a short conversation, you will listen to live harp music."],["Afterward","If you would like to continue, please let us know and we will arrange your next session."]].map(([title, body], index) => <li key={title} className="border border-[#ded4c3] bg-white/45 p-5"><span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#b89e69] text-sm text-white">{index + 1}</span><h3 className="mb-2 font-serif text-lg text-[#4b4338]">{title}</h3><p className="text-sm leading-relaxed text-[#665e50]">{body}</p></li>)}</ol><a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className={`${primaryButtonClass} mt-7`}>Book or ask on LINE</a></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading eyebrow="FOR FACILITIES" title="Requests for Hospital and Facility Visits and Lectures" /><p className="mb-7 max-w-4xl text-sm leading-loose text-[#665e50] md:text-base">We accept requests for live performances at hospitals, facilities for older adults, palliative care settings, academic conferences, and corporate or community events, as well as lectures and classes on music therapy and research. Please let us know the date, location, number of participants, and budget. We will provide a quote based on the details.</p><div className="grid gap-4 sm:grid-cols-2">{REQUEST_FORM_URL ? <a href={REQUEST_FORM_URL} target="_blank" rel="noopener noreferrer" className={buttonClass}>Request form</a> : <button type="button" disabled className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded border border-[#c9c2b7] bg-[#e7e2da] px-5 py-3 text-sm text-[#8f8678]">Request form (coming soon)</button>}<a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>Contact us on LINE</a></div></section>

      <section className="border-t border-[#ded4c3] py-12 md:py-16"><SectionHeading title="Main Activities" /><ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-[#665e50] md:text-base"><li>Volunteer performances at hospitals</li><li>Music therapy classes and small concerts for older adults in the community (Minato City Lifelong Learning Center)</li><li>Academic presentations, including at the Japanese Music Therapy Association</li><li>Attended the World Harp Congress as a scholarship recipient</li><li>Invited performance in Taiwan</li><li>2020: Gold Prize, Category H, Hong Kong International Harp Competition</li><li>2021: Overall First Prize (Governor&apos;s Award), Fukui Music Competition</li></ul></section>

      <section className="border-t border-[#ded4c3] py-12 text-center"><a href={musicLineUrl} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>Book or ask on LINE</a><div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-6"><Link href="/en" className="text-[#8d7545] underline underline-offset-4">Back to English home</Link><Link href="/en/about" className="text-[#8d7545] underline underline-offset-4">About the doctor and the clinic</Link></div></section>
    </div>
  </main>
}
