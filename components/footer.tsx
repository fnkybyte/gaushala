"use client"

import Link from "next/link"
import { Share2, Camera, ExternalLink, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()
  const isHindi = language === "hi"
  
  const content = {
    en: {
      title: "Dharma Sanctuary",
      description: "A peaceful home for rescued cows, dedicated to the ancient practice of Gau Seva and sustainable living.",
      quickLinks: "Quick Links",
      mission: "Mission Statement",
      address: "Our Address",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      gauSeva: "Gau Seva",
      adopt: "Adopt",
      volunteer: "Volunteer",
      register: "Register",
      contribute: "Contribute",
      newsletter: "Newsletter",
      newsletterDesc: "Get updates on our new initiatives.",
      emailPlaceholder: "Email address",
      copyright: "© 2024 Editorial Dharma Sanctuary. All Rights Reserved. Dedicated to Gau Seva."
    },
    hi: {
      title: "धर्म सैंक्चुअरी",
      description: "गौ माता की निस्वार्थ सेवा और सनातन धर्म के संरक्षण के लिए समर्पित एक पावन धाम।",
      quickLinks: "त्वरित लिंक",
      mission: "मिशन विवरण",
      address: "हमारा पता",
      terms: "सेवा की शर्तें",
      privacy: "गोपनीयता नीति",
      gauSeva: "गौ सेवा",
      adopt: "गोद लें",
      volunteer: "स्वयंसेवक बनें",
      register: "पंजीकरण",
      contribute: "सहयोग राशि",
      newsletter: "न्यूज़लेटर",
      newsletterDesc: "हमारी नई पहलों के बारे में अपडेट पाने के लिए जुड़ें।",
      emailPlaceholder: "ईमेल पता",
      copyright: "© 2024 Editorial Dharma Sanctuary. All Rights Reserved. गौ सेवा के लिए समर्पित।"
    }
  }

  const t = isHindi ? content.hi : content.en

  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-surface-container-low py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <div className="col-span-1">
          <div className="text-lg font-bold text-primary mb-4 font-headline">{t.title}</div>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            {t.description}
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <Camera className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-on-surface mb-6">{t.quickLinks}</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">
                {t.mission}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors">
                {t.address}
              </Link>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                {t.terms}
              </a>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                {t.privacy}
              </a>
            </li>
          </ul>
        </div>

        {/* Gau Seva */}
        <div>
          <h4 className="font-bold text-on-surface mb-6">{t.gauSeva}</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/donate" className="text-on-surface-variant hover:text-primary transition-colors">
                {t.adopt}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors">
                {t.volunteer}
              </Link>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                {t.register}
              </a>
            </li>
            <li>
              <Link href="/donate" className="text-on-surface-variant hover:text-primary transition-colors">
                {t.contribute}
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-on-surface mb-6">{t.newsletter}</h4>
          <p className="text-sm text-on-surface-variant mb-4">{t.newsletterDesc}</p>
          <div className="flex bg-surface-container-lowest p-1 rounded-full shadow-inner">
            <input 
              type="email" 
              className="bg-transparent border-none focus:ring-0 text-sm px-4 flex-grow text-on-surface placeholder:text-on-surface-variant/50" 
              placeholder={t.emailPlaceholder}
            />
            <button className="bg-primary text-on-primary p-2 rounded-full hover:bg-primary/90 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/20 text-center text-sm text-on-surface-variant opacity-80">
        {t.copyright}
      </div>
    </footer>
  )
}
