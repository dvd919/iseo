"use client"

import { Phone, MapPin, Clock } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function FinalCTA() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-primary overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest text-gold uppercase border border-gold/30 rounded-full mb-6">
            {"Contact Us"}
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#ffffff] leading-tight mb-6 text-balance">
            {"지금이 "}
            <span className="text-gold">{"마지막 기회"}</span>
            {"입니다"}
          </h2>

          <p className="text-lg text-[#e5e2db] mb-12 max-w-2xl mx-auto leading-relaxed">
            {"전북혁신도시 인접 72세대 대단지, 한정된 물량이 빠르게 소진되고 있습니다. 지금 바로 상담받으세요."}
          </p>
        </div>

        {/* Contact card */}
        <div className={`bg-[#ffffff]/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#ffffff]/10 ${isVisible ? "animate-scale-in animation-delay-200" : "opacity-0"}`}>
          <a
            href="tel:010-0000-0000"
            className="inline-block text-4xl md:text-5xl font-black text-gold hover:text-gold-light transition-colors mb-8"
          >
            {"010-0000-0000"}
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-[#ffffff]/5">
              <Phone className="w-6 h-6 text-gold" />
              <div>
                <p className="text-sm font-semibold text-[#ffffff]">{"전화 상담"}</p>
                <p className="text-xs text-[#e5e2db]">{"010-0000-0000"}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-[#ffffff]/5">
              <MapPin className="w-6 h-6 text-gold" />
              <div>
                <p className="text-sm font-semibold text-[#ffffff]">{"현장 주소"}</p>
                <p className="text-xs text-[#e5e2db]">{"전북 완주군 이서면"}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-[#ffffff]/5">
              <Clock className="w-6 h-6 text-gold" />
              <div>
                <p className="text-sm font-semibold text-[#ffffff]">{"상담 시간"}</p>
                <p className="text-xs text-[#e5e2db]">{"09:00 ~ 18:00"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 ${isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}>
          <a
            href="tel:010-0000-0000"
            className="flex items-center gap-3 px-8 py-4 bg-gold text-dark-gray font-bold text-lg rounded-lg hover:bg-gold-light transition-colors"
          >
            <Phone className="w-5 h-5" />
            {"지금 전화하기"}
          </a>
          <a
            href="#hero"
            className="flex items-center gap-3 px-8 py-4 border-2 border-[#ffffff]/30 text-[#ffffff] font-bold text-lg rounded-lg hover:bg-[#ffffff]/10 transition-colors"
          >
            {"처음으로"}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-20 pt-8 border-t border-[#ffffff]/10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm text-[#e5e2db]/60">
          {"\u00A9 2025 리웍스. All rights reserved."}
        </p>
        <p className="text-xs text-[#e5e2db]/40 mt-2">
          {"본 광고는 분양 안내를 위한 것으로, 실제와 다소 차이가 있을 수 있습니다."}
        </p>
      </div>
    </section>
  )
}
