"use client"

import { useState } from "react"
import Image from "next/image"
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function MasterPlan() {
  const { ref, isVisible } = useScrollReveal(0.1)
  const [scale, setScale] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3))
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5))

  return (
    <section id="masterplan" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest text-gold uppercase border border-gold/30 rounded-full mb-4">
            {"Master Plan"}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight text-balance">
            {"단지 배치도"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {"72세대가 조화롭게 배치된 프리미엄 단독주택단지"}
          </p>
        </div>

        {/* Masterplan image with zoom */}
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
            className={`relative overflow-auto rounded-2xl border border-border bg-background shadow-xl ${
              isFullscreen ? "fixed inset-4 z-50" : "max-h-[600px]"
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
                src="/images/masterplan.jpg"
                alt="서전주(이서)빌리지 단지 배치도"
                width={1400}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {[
              { color: "bg-primary", label: "주거용지" },
              { color: "bg-gold", label: "상업시설" },
              { color: "bg-[#4ade80]", label: "공원/녹지" },
              { color: "bg-muted-foreground", label: "도로" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-sm ${item.color}`} />
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen overlay bg */}
      {isFullscreen && (
        <div className="fixed inset-0 z-40 bg-[#1a1a1a]/80" onClick={() => setIsFullscreen(false)} />
      )}
    </section>
  )
}
