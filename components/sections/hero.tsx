"use client"

import { Phone, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/50 to-[#1b3a2d]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-32 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 border border-gold/40 rounded-full bg-[#1a1a1a]/30 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-sm font-medium tracking-widest text-gold uppercase">
            {"분양 중"}
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#ffffff] leading-tight mb-6 animate-fade-in-up tracking-tight">
          <span className="block text-balance">{"토지 80평 + 주택 34평형"}</span>
          <span className="block mt-2 text-gold text-balance">
            {"4억원대"}
            <span className="text-[#ffffff]">{"로 완벽한 내 집 마련"}</span>
          </span>
        </h1>

        {/* Sub text */}
        <div className="flex flex-col items-center gap-3 mb-10 animate-fade-in-up animation-delay-200">
          <p className="text-lg md:text-xl text-[#e5e2db] font-light leading-relaxed max-w-2xl">
            {"전북혁신도시 1.2km"}
            <span className="mx-2 text-gold">{"/"}</span>
            {"전북 최대 규모 72세대 단독주택단지"}
          </p>
          <p className="text-base md:text-lg text-gold-light font-medium">
            {"1조원 피지컬 AI 실증단지 수혜 입지"}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <a
            href="tel:010-0000-0000"
            className="flex items-center gap-3 px-8 py-4 bg-gold text-dark-gray font-bold text-lg rounded-lg hover:bg-gold-light transition-colors"
          >
            <Phone className="w-5 h-5" />
            {"문의하기"}
          </a>
          <a
            href="#location"
            className="flex items-center gap-3 px-8 py-4 border-2 border-[#ffffff]/30 text-[#ffffff] font-bold text-lg rounded-lg hover:bg-[#ffffff]/10 transition-colors backdrop-blur-sm"
          >
            <MapPin className="w-5 h-5" />
            {"현장안내"}
          </a>
        </div>

        {/* Stat badges */}
        <div className="grid grid-cols-3 gap-4 mt-16 max-w-xl mx-auto animate-fade-in-up animation-delay-600">
          {[
            { value: "72", label: "세대 규모" },
            { value: "80+", label: "평 토지" },
            { value: "1.2km", label: "혁신도시" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-4 py-3 rounded-lg bg-[#ffffff]/5 backdrop-blur-sm border border-[#ffffff]/10">
              <span className="text-2xl md:text-3xl font-black text-gold">{stat.value}</span>
              <span className="text-xs md:text-sm text-[#e5e2db] mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#ffffff]/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  )
}
