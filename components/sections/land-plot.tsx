"use client"

import { useState } from "react"
import Image from "next/image"
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function LandPlot() {
  const { ref, isVisible } = useScrollReveal(0.1)
  const [scale, setScale] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3))
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5))

  return (
    <section id="land-plot" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest text-gold uppercase border border-gold/30 rounded-full mb-4">
            {"Land Plot"}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight text-balance">
            {"토지 구획도"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {"각 필지별 면적과 위치를 확인하세요"}
          </p>
        </div>

        {/* Plot map with zoom */}
        <div className={`relative ${isVisible ? "animate-scale-in animation-delay-200" : "opacity-0"}`}>
          {/* Controls */}
          <div className="flex items-center justify-end gap-2 mb-4">
            <button
              onClick={zoomOut}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-background border border-border hover:border-gold/50 text-foreground transition-colors"
              aria-label="축소"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-sm text-muted-foreground font-medium px-2">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-background border border-border hover:border-gold/50 text-foreground transition-colors"
              aria-label="확대"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground hover:bg-gold hover:text-dark-gray transition-colors"
              aria-label="전체화면"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Image container */}
          <div
            className={`relative overflow-auto rounded-2xl border border-border bg-[#f5f4f0] shadow-xl ${
              isFullscreen ? "fixed inset-4 z-50" : "max-h-[700px]"
            }`}
          >
            {isFullscreen && (
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 z-10 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-gold hover:text-dark-gray transition-colors"
              >
                {"닫기"}
              </button>
            )}
            <div
              className="transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
              style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
            >
              <Image
                src="/images/land-plot-map.jpg"
                alt="서전주(이서)빌리지 토지 구획도"
                width={1600}
                height={1800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-40 bg-[#1a1a1a]/80" onClick={() => setIsFullscreen(false)} />
      )}
    </section>
  )
}
