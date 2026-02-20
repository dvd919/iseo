"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"

const navItems = [
  { label: "프로젝트", href: "#highlights" },
  { label: "입지", href: "#location" },
  { label: "배치도", href: "#masterplan" },
  { label: "토지", href: "#land-info" },
  { label: "건축", href: "#house-guide" },
  { label: "환경", href: "#nature" },
  { label: "문의", href: "#contact" },
]

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)

      // Determine active section
      const sections = navItems.map((item) => item.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex-shrink-0">
          <span className={`text-lg font-black transition-colors ${scrolled ? "text-primary" : "text-[#ffffff]"}`}>
            {"서전주(이서)빌리지"}
          </span>
        </a>

        {/* Nav items - hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="메인 네비게이션">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "")
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? scrolled
                      ? "text-gold bg-primary/5"
                      : "text-gold"
                    : scrolled
                      ? "text-foreground hover:text-gold"
                      : "text-[#ffffff]/80 hover:text-[#ffffff]"
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <a
          href="tel:010-0000-0000"
          className="flex items-center gap-2 px-4 py-2 bg-gold text-dark-gray text-sm font-bold rounded-lg hover:bg-gold-light transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{"상담전화"}</span>
        </a>
      </div>
    </header>
  )
}
