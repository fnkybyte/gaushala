"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Home, Heart, Image, Phone, Globe } from "lucide-react"

interface NavbarProps {
  lang?: "en" | "hi"
}

const navLinksEn = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/donate", label: "Donate" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

const navLinksHi = [
  { href: "/hi", label: "मुख्य पृष्ठ" },
  { href: "/about", label: "हमारे बारे में" },
  { href: "/donate", label: "दान करें" },
  { href: "/gallery", label: "गैलरी" },
  { href: "/contact", label: "संपर्क" },
]

export function Navbar({ lang = "en" }: NavbarProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = lang === "hi" ? navLinksHi : navLinksEn
  const logoText = lang === "hi" ? "धर्म सैंक्चुअरी" : "Dharma Sanctuary"
  const donateText = lang === "hi" ? "अभी दान करें" : "Donate Now"
  const langSwitchHref = lang === "hi" ? "/" : "/hi"
  const langSwitchLabel = lang === "hi" ? "English" : "हिन्दी"

  const isActive = (href: string) => {
    if (href === "/" || href === "/hi") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <Link href={lang === "hi" ? "/hi" : "/"} className="text-2xl font-bold text-primary flex items-center gap-2 font-headline">
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
            <Link
              href={langSwitchHref}
              className="text-on-surface-variant hover:text-primary transition-colors font-headline text-sm font-semibold tracking-wide"
            >
              {langSwitchLabel}
            </Link>
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
              <Link
                href={langSwitchHref}
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-surface-variant font-headline text-base font-semibold py-2"
              >
                {langSwitchLabel}
              </Link>
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
        <Link href={lang === "hi" ? "/hi" : "/"} className={`flex flex-col items-center gap-1 ${isActive("/") || isActive("/hi") ? "text-primary-container" : "text-on-surface-variant"}`}>
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">{lang === "hi" ? "मुख्य" : "Home"}</span>
        </Link>
        <Link href="/donate" className={`flex flex-col items-center gap-1 ${isActive("/donate") ? "text-primary-container" : "text-on-surface-variant"}`}>
          <Heart className="w-5 h-5" />
          <span className="text-[10px] font-bold">{lang === "hi" ? "दान" : "Donate"}</span>
        </Link>
        <Link href="/gallery" className={`flex flex-col items-center gap-1 ${isActive("/gallery") ? "text-primary-container" : "text-on-surface-variant"}`}>
          <Image className="w-5 h-5" />
          <span className="text-[10px] font-bold">{lang === "hi" ? "गैलरी" : "Gallery"}</span>
        </Link>
        <Link href={langSwitchHref} className="flex flex-col items-center gap-1 text-on-surface-variant">
          <Globe className="w-5 h-5" />
          <span className="text-[10px] font-bold">{langSwitchLabel}</span>
        </Link>
      </nav>
    </>
  )
}
