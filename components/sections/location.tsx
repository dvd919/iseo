"use client"

import Image from "next/image"
import { TrendingUp, Building2, Bus } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const locationFeatures = [
  {
    icon: TrendingUp,
    title: "1조 투자 개발호재",
    description:
      "피지컬 AI 실증센터 300m 인접, 1조원 규모의 국가 프로젝트 수혜 지역으로 향후 부동산 가치 상승이 기대됩니다.",
  },
  {
    icon: Building2,
    title: "혁신도시 생활권",
    description:
      "전북혁신도시 1.2km 거리에 위치하여 대형마트, 병원, 관공서 등 모든 생활 인프라를 편리하게 이용할 수 있습니다.",
  },
  {
    icon: Bus,
    title: "초등학교 통학버스",
    description:
      "단지 내 초등학교 통학버스 운행으로 자녀 교육환경이 안전하게 보장됩니다.",
  },
]

export function Location() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="location" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest text-gold uppercase border border-gold/30 rounded-full mb-4">
            {"Location & Value"}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight text-balance">
            {"미래가치가 "}
            <span className="text-primary">{"검증된 입지"}</span>
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            {locationFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className="flex gap-5 group"
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-primary-foreground group-hover:bg-gold transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: map image */}
          <div className={`relative ${isVisible ? "animate-scale-in animation-delay-300" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/images/location-map.jpg"
                alt="서전주(이서)빌리지 위치도"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 right-4 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-lg">
                <span className="text-sm font-bold text-gold">{"혁신도시 1.2km"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
