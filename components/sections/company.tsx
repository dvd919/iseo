"use client"

import { Building2, Wrench, Phone, Award } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Company() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="company" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest text-gold uppercase border border-gold/30 rounded-full mb-4">
            {"Company"}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight text-balance">
            {"신뢰할 수 있는 "}
            <span className="text-primary">{"리웍스"}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Building2,
              title: "시행사",
              description: "리웍스는 부동산 개발 전문 기업으로, 토지개발부터 건축까지 원스톱 서비스를 제공합니다.",
            },
            {
              icon: Wrench,
              title: "시공 실적",
              description: "다수의 단독주택 및 타운하우스 시공 경험으로 품질과 공기를 보장합니다.",
            },
            {
              icon: Award,
              title: "품질 보증",
              description: "하자보수 보증과 체계적인 사후관리로 입주 후에도 안심할 수 있습니다.",
            },
            {
              icon: Phone,
              title: "문의",
              description: "전문 상담사가 토지 선택부터 건축 완료까지 전 과정을 안내해 드립니다.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`p-6 rounded-2xl bg-card border border-border hover:border-gold/30 hover:shadow-md transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Contact highlight */}
        <div className={`mt-12 p-8 rounded-2xl bg-secondary border border-border text-center ${isVisible ? "animate-fade-in-up animation-delay-500" : "opacity-0"}`}>
          <p className="text-muted-foreground mb-2">{"분양 문의 전화"}</p>
          <a
            href="tel:010-0000-0000"
            className="text-3xl md:text-4xl font-black text-primary hover:text-gold transition-colors"
          >
            {"010-0000-0000"}
          </a>
          <p className="text-sm text-muted-foreground mt-2">{"평일 09:00 ~ 18:00 / 주말 상담 가능"}</p>
        </div>
      </div>
    </section>
  )
}
