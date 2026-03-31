"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Menu, X, Home, Heart, Image, Phone, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage, t } = useLanguage()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/donate", label: t("nav.donate") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const logoText = language === "hi" ? "धर्म सैंक्चुअरी" : "Dharma Sanctuary"
  const donateText = t("nav.donateNow")

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const handleLanguageChange = (lang: "en" | "hi") => {
    setLanguage(lang)
    setLangDropdownOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2 font-headline">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L4 9v12h16V9l-8-6zm0 2.5L18 10v9H6v-9l6-4.5z"/>
              <circle cx="12" cy="14" r="2"/>
            </svg>
            {logoText}
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-headline text-sm font-semibold tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-primary border-b-2 border-primary-container pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-headline text-sm font-semibold tracking-wide"
              >
                <span className="text-lg">{language === "en" ? "🇺🇸" : "🇮🇳"}</span>
                <span>{language === "en" ? "English" : "हिन्दी"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/20 overflow-hidden min-w-[160px]">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-container transition-colors ${
                      language === "en" ? "bg-primary-fixed/20 text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    <span className="text-xl">🇺🇸</span>
                    <span className="font-headline font-semibold">English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("hi")}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-container transition-colors ${
                      language === "hi" ? "bg-primary-fixed/20 text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    <span className="text-xl">🇮🇳</span>
                    <span className="font-headline font-semibold">हिन्दी</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <Link
            href="/donate"
            className="hidden md:block bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-headline font-bold text-sm hover:bg-primary-container/90 transition-all active:scale-95 duration-200 shadow-lg shadow-primary/10"
          >
            {donateText}
          </Link>
          
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface border-t border-outline-variant/20 px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-headline text-base font-semibold py-2 ${
                    isActive(link.href) ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="flex items-center gap-4 py-2">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    language === "en" 
                      ? "bg-primary-fixed text-on-primary-fixed" 
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  <span>🇺🇸</span>
                  <span className="font-headline font-semibold text-sm">English</span>
                </button>
                <button
                  onClick={() => handleLanguageChange("hi")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    language === "hi" 
                      ? "bg-primary-fixed text-on-primary-fixed" 
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  <span>🇮🇳</span>
                  <span className="font-headline font-semibold text-sm">हिन्दी</span>
                </button>
              </div>
              
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-headline font-bold text-center"
              >
                {donateText}
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface flex justify-around items-center p-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link href="/" className={`flex flex-col items-center gap-1 ${isActive("/") ? "text-primary-container" : "text-on-surface-variant"}`}>
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">{language === "hi" ? "मुख्य" : "Home"}</span>
        </Link>
        <Link href="/donate" className={`flex flex-col items-center gap-1 ${isActive("/donate") ? "text-primary-container" : "text-on-surface-variant"}`}>
          <Heart className="w-5 h-5" />
          <span className="text-[10px] font-bold">{language === "hi" ? "दान" : "Donate"}</span>
        </Link>
        <Link href="/gallery" className={`flex flex-col items-center gap-1 ${isActive("/gallery") ? "text-primary-container" : "text-on-surface-variant"}`}>
          <Image className="w-5 h-5" />
          <span className="text-[10px] font-bold">{language === "hi" ? "गैलरी" : "Gallery"}</span>
        </Link>
        <Link href="/contact" className={`flex flex-col items-center gap-1 ${isActive("/contact") ? "text-primary-container" : "text-on-surface-variant"}`}>
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold">{language === "hi" ? "संपर्क" : "Contact"}</span>
        </Link>
      </nav>
    </>
  )
}
