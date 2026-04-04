"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Heart, Leaf, Plus, Shield, ArrowRight, Building2, QrCode, Smartphone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function DonatePage() {
  const { t } = useLanguage()

  const donationTiers = [
    {
      icon: Leaf,
      label: t("donatePage.supportTier"),
      amount: "₹501",
      description: t("donatePage.feedDay"),
      featured: false,
    },
    {
      icon: Plus,
      label: t("donatePage.criticalCare"),
      amount: "₹1,100",
      description: t("donatePage.medicalCheckups"),
      featured: false,
    },
    {
      icon: Heart,
      label: t("donatePage.goldSponsorship"),
      amount: "₹2,100",
      description: t("donatePage.comprehensiveSupport"),
      featured: true,
    },
  ]

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 text-center">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary mb-6 text-balance">
          {t("donatePage.title")}
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {t("donatePage.subtitle")}
        </p>
      </section>

      {/* Donation Options */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* QR Code Section */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 spirit-shadow">
            <h2 className="font-headline text-2xl text-primary mb-2">
              {t("donatePage.scanTitle")}
            </h2>
            <p className="text-on-surface-variant mb-8">
              {t("donatePage.scanSubtitle")}
            </p>
            
            <div className="bg-white rounded-2xl p-4 flex flex-col items-center mb-6">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <Image
                  src="/images/upi-qr-code.jpeg"
                  alt="UPI QR Code for donations"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-lg text-sm font-medium mt-4">
                SCAN TO DONATE
              </div>
              <p className="text-xs text-on-surface-variant/60 mt-2">PhonePe / Google Pay / Paytm</p>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-on-surface-variant/60">
              <span className="text-xs">{t("donatePage.poweredBy").toUpperCase()}</span>
              <Building2 className="w-5 h-5" />
              <Smartphone className="w-5 h-5" />
              <QrCode className="w-5 h-5" />
            </div>
            
            {/* 100% Transparency Promise */}
            <div className="mt-6 bg-secondary-fixed/30 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-on-secondary" />
              </div>
              <div>
                <h3 className="font-headline text-secondary font-semibold">{t("donatePage.transparencyTitle")}</h3>
                <p className="text-sm text-on-surface-variant">{t("donatePage.transparencyDesc")}</p>
              </div>
            </div>
          </div>

          {/* Donation Tiers */}
          <div className="space-y-4">
            {donationTiers.map((tier, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-6 transition-all hover:scale-[1.02] ${
                  tier.featured 
                    ? "bg-tertiary-container" 
                    : "bg-surface-container-lowest spirit-shadow"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  tier.featured ? "bg-tertiary" : "bg-primary-fixed"
                }`}>
                  <tier.icon className={`w-6 h-6 ${
                    tier.featured ? "text-on-tertiary" : "text-on-primary-fixed"
                  }`} />
                </div>
                <p className={`text-xs font-medium tracking-wider mb-1 ${
                  tier.featured ? "text-on-tertiary-container" : "text-primary"
                }`}>
                  {tier.label}
                </p>
                <p className={`font-headline text-3xl font-bold mb-1 ${
                  tier.featured ? "text-on-tertiary-container" : "text-on-surface"
                }`}>
                  {tier.amount}
                </p>
                <p className={tier.featured ? "text-on-tertiary-container/80" : "text-on-surface-variant"}>
                  {tier.description}
                </p>
                {index === donationTiers.length - 1 && (
                  <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-on-tertiary-container/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Exemption */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary-fixed/30 rounded-3xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-on-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <h3 className="font-headline text-xl text-primary font-semibold mb-2">{t("donatePage.taxTitle")}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {t("donatePage.taxDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adopt a Cow Section */}
      <section className="px-4 md:px-8 lg:px-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=1200&h=600&fit=crop"
              alt="Cow in sanctuary"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-xl">
              <span className="inline-block bg-secondary text-on-secondary text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
                {t("donatePage.adoptBadge").toUpperCase()}
              </span>
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold mb-4">
                {t("donatePage.adoptTitle")}
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("donatePage.adoptDesc")}
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-on-surface text-surface px-6 py-3 rounded-full font-medium hover:bg-on-surface/90 transition-colors w-fit"
              >
                {t("donatePage.startAdoption")}
                <Heart className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
