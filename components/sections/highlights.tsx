"use client"

import { MapPin, Home, Flame, TreePine, Shield, BarChart3, Cpu } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const highlights = [
  {
    icon: MapPin,
    title: "전북혁신도시 1.2km",
    description: "혁신도시 생활 인프라 도보권",
  },
  {
    icon: Home,
    title: "72세대 대단지",
    description: "전북 최대 규모 단독주택단지",
  },
  {
    icon: Flame,
    title: "도시가스 / 지중화 완료",
    description: "전기통신 지중화 기반시설 완비",
  },
  {
    icon: TreePine,
    title: "공원·도로·주민시설 34%",
    description: "쾌적한 주거환경 확보",
  },
  {
    icon: Shield,
    title: "제1종 전용주거지역",
    description: "법적으로 보장된 주거 전용지",
  },
  {
    icon: BarChart3,
    title: "건폐율 60% / 용적률 120%",
    description: "넉넉한 건축 가능 면적",
  },
  {
    icon: Cpu,
    title: "피지컬AI 실증센터 300m",
    description: "1조원 투자 미래가치 수혜",
  },
]

export function Highlights() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="highlights" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest text-gold uppercase border border-gold/30 rounded-full mb-4">
            {"Project Highlights"}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight text-balance">
            {"왜 "}
            <span className="text-primary">{"서전주 이서 빌리지"}</span>
            {"인가"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {"투자가치와 실거주를 모두 만족하는 프리미엄 단독주택단지"}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`group relative flex flex-col items-start p-6 bg-background rounded-xl border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } ${i === highlights.length - 1 ? "sm:col-span-2 lg:col-span-1 xl:col-span-1" : ""}`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
