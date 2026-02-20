"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Nature() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="nature" className="relative py-0 overflow-hidden" ref={ref}>
      {/* Full-width background */}
      <div
        className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/nature-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b3a2d]/85 to-[#1b3a2d]/60" />

        <div className={`relative z-10 text-center px-6 py-24 max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest text-gold uppercase border border-gold/40 rounded-full mb-6">
            {"Natural Environment"}
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#ffffff] leading-tight mb-6 text-balance">
            {"자연과 함께하는"}
            <br />
            <span className="text-gold">{"프리미엄 주거"}</span>
          </h2>

          <p className="text-lg md:text-xl text-[#e5e2db] leading-relaxed max-w-2xl mx-auto mb-8">
            {"전북도 소유 6.3만평 묘포장 인접, 사계절 푸른 자연환경 속에서 쾌적한 단독주택 생활을 누릴 수 있습니다."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { value: "6.3만평", label: "묘포장 인접" },
              { value: "34%", label: "공원·녹지 비율" },
              { value: "300m", label: "AI 실증센터" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-5 rounded-xl bg-[#ffffff]/10 backdrop-blur-sm border border-[#ffffff]/10">
                <p className="text-3xl font-black text-gold">{stat.value}</p>
                <p className="text-sm text-[#e5e2db] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
