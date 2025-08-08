"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function Home() {
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const textSectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/y2mate_com_Sunset01HarpHealing_music_in_Okinawa_by_Misako_Matsui_V2-vVe9JFmeL4M3xOA0paQEEgjnxB9MUe.mp3",
    )
    audioRef.current.loop = true

    // 音声が読み込まれたら最初の8秒をスキップする
    audioRef.current.addEventListener("loadedmetadata", () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 8
      }
    })

    // スクロールアニメーション用のIntersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (textSectionRef.current) {
      observer.observe(textSectionRef.current)
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
      if (textSectionRef.current) {
        observer.unobserve(textSectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.play().catch((error) => console.log("Audio playback failed:", error))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isMuted])

  const passwordPrompt = () => {
    const password = prompt("パスワードを入力してください:")
    if (password === "ApBC") {
      window.location.href = "/beauty"
    } else {
      alert("パスワードが間違っています。")
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0.05
        // 再生時にも8秒からスタートするようにする
        audioRef.current.currentTime = 8
        audioRef.current.play().catch((error) => console.log("Audio playback failed:", error))
      } else {
        audioRef.current.pause()
      }
    }
    setIsMuted(!isMuted)
  }

  return (
    <div className="relative overflow-x-hidden">
      <video
        autoPlay
        muted
        loop
        className="fixed right-0 bottom-0 min-w-full min-h-full w-auto h-auto z-[-1] object-cover"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Natural%20Spirituality%20Story%20Musical%20Video%20Compilation-ixB3oE1D2TBq5OuLWCvkYraOnv8DGl.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-5 right-5 z-10">
        <button onClick={toggleMute} className="bg-white bg-opacity-50 p-2 rounded-full">
          {isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                clipRule="evenodd"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* 1ページ目 */}
      <section className="h-screen flex flex-col justify-center items-center bg-[rgba(248,244,236,0.7)]">
        <div className="text-center p-5">
          <h1 className="text-4xl md:text-5xl font-bold text-[#b89e69] mb-5">Apollon Beauty Clinic</h1>
          <p
            className="text-base md:text-lg mb-8 max-w-2xl mx-auto italic tracking-wide font-medium"
            style={{ color: "#f8f5f0", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
          >
            Beauty and healing space. Refresh body and mind.
          </p>

          <div className="space-x-4 mb-16">
            <button
              onClick={passwordPrompt}
              className="inline-block px-6 py-3 bg-[#b89e69] text-white rounded hover:bg-[#a08a59] transition-colors"
            >
              美容クリニック
            </button>
            <Link
              href="/music"
              className="inline-block px-6 py-3 bg-[#b89e69] text-white rounded hover:bg-[#a08a59] transition-colors"
            >
              音楽療法
            </Link>
          </div>
        </div>
      </section>

      {/* 2ページ目 */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-[rgba(248,244,236,0.7)]">
        <div
          ref={textSectionRef}
          className={`max-w-3xl mx-auto p-5 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ paddingTop: "0", marginTop: "-2rem" }}
        >
          <p className="text-base md:text-lg mb-6 leading-relaxed font-light tracking-wider">
            <span className="block text-[#b89e69] text-xl md:text-2xl font-medium mb-4 border-b border-[#b89e69] pb-2">
              \ 完全紹介制の美容クリニック
            </span>
            あなただけの美しさを引き出す
            <br />
            <span className="italic">オーダーメイドの施術</span>をご提供。
          </p>

          <p className="text-base md:text-lg leading-relaxed font-light tracking-wider">
            <span className="block text-[#b89e69] text-xl md:text-2xl font-medium mb-4 border-b border-[#b89e69] pb-2">
              音楽療法
            </span>
            ハープの音色で心身を深く癒し、
            <br />
            <span className="italic">本来の調和を取り戻します</span>。
          </p>
        </div>
      </section>

      <footer className="relative w-full bg-[rgba(248,244,236,0.7)] py-2 text-center">
        <p className="text-xs text-gray-600">BGM: "Sunset - Harp Healing music in Okinawa" by Misako Matsui</p>
      </footer>
    </div>
  )
}
