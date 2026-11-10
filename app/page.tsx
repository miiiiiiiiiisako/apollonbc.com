"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const USER_STOPPED_MUSIC_KEY = "homepage-music-user-stopped"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/y2mate_com_Sunset01HarpHealing_music_in_Okinawa_by_Misako_Matsui_V2-vVe9JFmeL4M3xOA0paQEEgjnxB9MUe.mp3")
    let waitingForInteraction = false
    let disposed = false

    const handleLoadedMetadata = () => {
      if (!disposed) audio.currentTime = 8
    }
    const startAtEightSeconds = () => {
      if (disposed) return
      if (audio.readyState >= HTMLMediaElement.HAVE_METADATA) {
        audio.currentTime = 8
      } else {
        audio.addEventListener("loadedmetadata", handleLoadedMetadata, { once: true })
      }
    }
    const removeInteractionListeners = () => {
      document.removeEventListener("pointerdown", retryPlayback)
      document.removeEventListener("keydown", retryPlayback)
      waitingForInteraction = false
    }
    const playAudio = async () => {
      if (disposed) return
      startAtEightSeconds()
      try {
        await audio.play()
        if (disposed) {
          audio.pause()
          return
        }
        removeInteractionListeners()
      } catch {
        if (disposed) return
        if (!waitingForInteraction) {
          waitingForInteraction = true
          document.addEventListener("pointerdown", retryPlayback, { once: true })
          document.addEventListener("keydown", retryPlayback, { once: true })
        }
      }
    }
    function retryPlayback(event: Event) {
      if (disposed || sessionStorage.getItem(USER_STOPPED_MUSIC_KEY) === "true") return

      const target = event.target
      if (target instanceof Element && target.closest("button[aria-label='音声を再生'], button[aria-label='音声を停止']")) return

      waitingForInteraction = false
      void playAudio()
    }

    audio.loop = true
    audio.volume = 0.05
    audio.addEventListener("play", () => {
      if (disposed) {
        audio.pause()
        return
      }
      removeInteractionListeners()
      setIsPlaying(true)
    })
    audio.addEventListener("pause", () => {
      if (!disposed) setIsPlaying(false)
    })
    audioRef.current = audio

    if (sessionStorage.getItem(USER_STOPPED_MUSIC_KEY) !== "true") {
      void playAudio()
    }

    return () => {
      disposed = true
      removeInteractionListeners()
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.pause()
      audio.removeAttribute("src")
      audio.load()
      if (audioRef.current === audio) audioRef.current = null
    }
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      sessionStorage.removeItem(USER_STOPPED_MUSIC_KEY)
      if (audio.readyState >= HTMLMediaElement.HAVE_METADATA) audio.currentTime = 8
      try {
        await audio.play()
        if (audioRef.current !== audio) {
          audio.pause()
          audio.removeAttribute("src")
          audio.load()
        }
      } catch {
        if (audioRef.current === audio) setIsPlaying(false)
      }
    } else {
      sessionStorage.setItem(USER_STOPPED_MUSIC_KEY, "true")
      audio.pause()
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f4ec] text-[#3f3a32]">
      <video autoPlay muted loop className="fixed inset-0 z-0 h-full w-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Natural%20Spirituality%20Story%20Musical%20Video%20Compilation-ixB3oE1D2TBq5OuLWCvkYraOnv8DGl.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-0 bg-[rgba(248,244,236,0.68)]" />
      <button onClick={togglePlayback} aria-label={isPlaying ? "音声を停止" : "音声を再生"} className="absolute right-5 top-5 z-20 rounded-full bg-white/60 p-2 text-[#8d7545]">
        {isPlaying ? "Ⅱ" : "♪"}
      </button>
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-16 text-center">
        <p className="mb-5 text-xs tracking-[0.28em] text-[#8d7545]">Apollon.Beauty.Clinic</p>
        <h1 className="mb-5 font-serif text-4xl font-medium tracking-wide text-[#4b4338] md:text-5xl">Beauty and healing space.</h1>
        <p className="mb-12 text-sm tracking-[0.12em] text-[#665e50]">Refresh body and mind.</p>
        <div className="grid w-full max-w-2xl gap-5 sm:grid-cols-2">
          <Link href="/beauty-public" className="group border border-[#b89e69] bg-[#f8f4ec]/85 px-7 py-9 text-left transition hover:bg-white/90">
            <p className="mb-3 text-xs tracking-[0.2em] text-[#8d7545]">BEAUTY CLINIC</p>
            <h2 className="mb-3 font-serif text-2xl text-[#4b4338]">美容クリニック</h2>
            <p className="mb-6 text-sm leading-relaxed text-[#665e50]">紹介制の美容診療・修正相談・オンライン診療・コスメ</p>
            <span className="text-sm text-[#8d7545] underline underline-offset-4">総合案内を見る →</span>
          </Link>
          <Link href="/music" className="group border border-[#b89e69] bg-[#f8f4ec]/85 px-7 py-9 text-left transition hover:bg-white/90">
            <p className="mb-3 text-xs tracking-[0.2em] text-[#8d7545]">MUSIC THERAPY</p>
            <h2 className="mb-3 font-serif text-2xl text-[#4b4338]">音楽療法</h2>
            <p className="mb-6 text-sm leading-relaxed text-[#665e50]">ハープの生演奏による、1対1の音楽療法。対面・オンラインのセッションと、訪問演奏・講演のご依頼を承っています。</p>
            <span className="text-sm text-[#8d7545] underline underline-offset-4">音楽療法を見る →</span>
          </Link>

        </div>
        <Link href="/about" className="mt-8 text-xs text-[#8d7545] underline decoration-[#b89e69] underline-offset-4 transition hover:text-[#4b4338]">院長・クリニック紹介 →</Link>
      </section>
      <p className="pointer-events-none absolute bottom-3 left-1/2 z-20 w-full -translate-x-1/2 px-5 text-center text-[10px] text-[#8d7545]">
        {'BGM: "Sunset - Harp Healing music in Okinawa" by Misako Matsui'}
      </p>
    </main>
  )
}
