"use client"

import { useState, useEffect, useRef, useLayoutEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { ZoomIn, ZoomOut, Maximize2, X } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function MasterPlan() {
  const { ref, isVisible } = useScrollReveal(0.1)
  const [scale, setScale] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const pendingScroll = useRef<{ left: number; top: number } | null>(null)

  useEffect(() => { setMounted(true) }, [])

  const zoom = (newScale: number) => {
    const container = containerRef.current
    if (container) {
      const centerX = container.scrollLeft + container.clientWidth / 2
      const centerY = container.scrollTop + container.clientHeight / 2
      const factor = newScale / scale
      pendingScroll.current = {
        left: centerX * factor - container.clientWidth / 2,
        top: centerY * factor - container.clientHeight / 2,
      }
    }
    setScale(newScale)
  }

  useLayoutEffect(() => {
    if (pendingScroll.current && containerRef.current) {
      containerRef.current.scrollLeft = pendingScroll.current.left
      containerRef.current.scrollTop = pendingScroll.current.top
      pendingScroll.current = null
    }
  }, [scale])

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
              onClick={() => zoom(Math.max(scale - 0.25, 0.5))}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-background border border-border hover:border-gold/50 text-foreground transition-colors"
              aria-label="축소"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-sm text-muted-foreground font-medium px-2">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => zoom(Math.min(scale + 0.25, 3))}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-background border border-border hover:border-gold/50 text-foreground transition-colors"
              aria-label="확대"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsFullscreen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground hover:bg-gold hover:text-dark-gray transition-colors"
              aria-label="전체화면"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Image container */}
          <div ref={containerRef} className="overflow-auto rounded-2xl border border-border bg-background shadow-xl max-h-[600px]">
            <div style={{ width: `${scale * 100}%` }}>
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

      {/* Fullscreen portal */}
      {mounted && isFullscreen && createPortal(
        <div className="fixed inset-0 z-[100] bg-[#1a1a1a]/90 flex flex-col" onClick={() => setIsFullscreen(false)}>
          <div className="flex items-center justify-end p-4">
            <button
              onClick={() => setIsFullscreen(false)}
              className="flex items-center gap-2 px-4 py-2 bg-background text-foreground rounded-lg font-medium hover:bg-gold hover:text-dark-gray transition-colors"
            >
              <X className="w-4 h-4" />
              {"닫기"}
            </button>
          </div>
          <div className="flex-1 overflow-auto p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src="/images/masterplan.jpg"
              alt="서전주(이서)빌리지 단지 배치도"
              width={1400}
              height={900}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
