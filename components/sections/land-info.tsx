"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Check } from "lucide-react"

const landData = [
  { label: "위치", value: "전북 완주군 이서면" },
  { label: "지목", value: "대지 (주거용)" },
  { label: "용도지역", value: "제1종 전용주거지역" },
  { label: "필지면적", value: "80평 ~ 105평" },
  { label: "총 세대수", value: "72세대" },
  { label: "건폐율", value: "60% 이하" },
  { label: "용적률", value: "120% 이하" },
  { label: "기반시설", value: "도로·상하수도·도시가스 완료" },
  { label: "전기통신", value: "지중화 완료" },
  { label: "용도", value: "단독주택 전용" },
]

const features = [
  "사유지 토지 소유권 확보",
  "원하는 시기에 자유롭게 건축",
  "건축 설계 자유도 높음",
  "토지 가치 상승 기대",
]

export function LandInfo() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="land-info" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest text-gold uppercase border border-gold/30 rounded-full mb-4">
            {"Land Information"}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight text-balance">
            {"토지 분양 정보"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {"내 땅 위에 짓는 진짜 내 집, 토지 소유권이 보장됩니다"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main table */}
          <div className={`lg:col-span-2 ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>
            <div className="rounded-2xl border border-border overflow-hidden bg-card">
              <div className="bg-primary px-6 py-4">
                <h3 className="text-lg font-bold text-primary-foreground">{"토지 상세 정보"}</h3>
              </div>
              <div className="divide-y divide-border">
                {landData.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex ${i % 2 === 0 ? "bg-card" : "bg-secondary/50"}`}
                  >
                    <div className="w-36 md:w-44 flex-shrink-0 px-6 py-4 bg-primary/5 font-semibold text-foreground text-sm border-r border-border">
                      {item.label}
                    </div>
                    <div className="flex-1 px-6 py-4 text-sm text-foreground">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side card */}
          <div className={`${isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}>
            <div className="rounded-2xl border border-gold/30 bg-primary p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-gold mb-2">{"토지 선(先) 분양"}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
                  {"토지를 먼저 매입하고, 원하는 시기에 원하는 설계로 건축할 수 있습니다."}
                </p>
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="text-sm text-primary-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <p className="text-xs text-primary-foreground/60 mb-2">{"분양가 기준"}</p>
                <p className="text-3xl font-black text-gold">{"평당 200만원대~"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
