"use client"

import { useState, useEffect } from "react"
import { Phone, MessageSquare, CalendarCheck, X, Menu } from "lucide-react"

const menuItems = [
  {
    icon: Phone,
    label: "전화상담",
    href: "tel:010-0000-0000",
    color: "bg-primary text-primary-foreground hover:bg-gold hover:text-dark-gray",
  },
  {
    icon: MessageSquare,
    label: "문자문의",
    href: "sms:010-0000-0000",
    color: "bg-primary text-primary-foreground hover:bg-gold hover:text-dark-gray",
  },
  {
    icon: CalendarCheck,
    label: "방문예약",
    href: "#contact",
    color: "bg-gold text-dark-gray hover:bg-gold-light",
  },
]

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Menu items */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-fade-in-up">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 pl-4 pr-5 py-3 rounded-full shadow-lg ${item.color} font-medium text-sm transition-all duration-200 hover:scale-105`}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 ${
          isOpen
            ? "bg-foreground text-background rotate-0"
            : "bg-gold text-dark-gray"
        } hover:scale-110`}
        aria-label={isOpen ? "메뉴 닫기" : "빠른 문의"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  )
}
