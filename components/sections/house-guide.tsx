"use client"

import Image from "next/image"
import { Clock, Ruler, Banknote } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const models = [
  {
    name: "30평형",
    image: "/images/house-30.jpg",
    pyeong: "30평",
    area: "약 99m\u00B2",
    price: "약 2.1억 ~ 2.7억원",
    features: ["2층 구조", "3룸 + 거실", "주차 2대", "개인 정원"],
  },
  {
    name: "34평형",
    image: "/images/house-34.jpg",
    pyeong: "34평",
    area: "약 112m\u00B2",
    price: "약 2.4억 ~ 3.1억원",
    features: ["2층 구조", "3룸 + 거실", "주차 2대", "넓은 정원", "다용도실"],
    recommended: true,
  },
  {
    name: "40평형",
    image: "/images/house-40.jpg",
    pyeong: "40평",
    area: "약 132m\u00B2",
    price: "약 2.8억 ~ 3.6억원",
    features: ["2층 구조", "4룸 + 거실", "주차 2대", "테라스", "드레스룸"],
  },
]

export function HouseGuide() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="house-guide" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest text-gold uppercase border border-gold/30 rounded-full mb-4">
            {"House Building Guide"}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight text-balance">
            {"주택 건축 안내"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {"토지 매입 후, 원하시는 평형으로 건축을 진행할 수 있습니다"}
          </p>
        </div>

        {/* Construction info bar */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>
          {[
            { icon: Banknote, label: "건축 단가", value: "평당 700~900만원" },
            { icon: Clock, label: "총 공사기간", value: "약 7개월" },
            { icon: Ruler, label: "건축 가능 면적", value: "건폐율 60%" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border">
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-lg font-bold text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Model cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, i) => (
            <div
              key={model.name}
              className={`group relative rounded-2xl overflow-hidden border bg-background transition-all duration-300 hover:shadow-xl ${
                model.recommended ? "border-gold shadow-lg ring-1 ring-gold/20" : "border-border"
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 2) * 150}ms` }}
            >
              {model.recommended && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 text-xs font-bold bg-gold text-dark-gray rounded-full">
                  {"추천"}
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={model.image}
                  alt={`${model.name} 주택 외관`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-black text-[#ffffff]">{model.name}</h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{model.pyeong}</p>
                    <p className="text-xs text-muted-foreground">{model.area}</p>
                  </div>
                  <p className="text-lg font-bold text-gold">{model.price}</p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">{"주요 특징"}</p>
                  <div className="flex flex-wrap gap-2">
                    {model.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
