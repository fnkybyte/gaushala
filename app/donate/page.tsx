"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Heart, Leaf, Plus, Shield, ArrowRight, Building2, QrCode, Smartphone } from "lucide-react"

const donationTiers = [
  {
    icon: Leaf,
    label: "SUPPORT TIER",
    amount: "₹501",
    description: "Feed for a Day",
    featured: false,
  },
  {
    icon: Plus,
    label: "CRITICAL CARE",
    amount: "₹1,100",
    description: "Medical Care & Checkups",
    featured: false,
  },
  {
    icon: Heart,
    label: "GOLD SPONSORSHIP",
    amount: "₹2,100",
    description: "Comprehensive Monthly Support",
    featured: true,
  },
]

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 text-center">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary mb-6 text-balance">
          Your Gau Seva Matters
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Join our mission to provide sanctuary, medical care, and lifelong dignity to the
          sacred cows of India. Every contribution sustains a life.
        </p>
      </section>

      {/* Donation Options */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* QR Code Section */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 spirit-shadow">
            <h2 className="font-headline text-2xl text-primary mb-2">
              Scan to Support Our Sacred Work
            </h2>
            <p className="text-on-surface-variant mb-8">
              Instant UPI Donation via GPay, PhonePe, or Paytm
            </p>
            
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center mb-6">
              <div className="w-48 h-48 bg-surface-container rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <QrCode className="w-32 h-32 text-on-surface-variant/30" />
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-primary-fixed px-3 py-1 rounded text-xs font-medium text-on-primary-fixed">
                  UPI
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-xs text-on-surface-variant/60">UPI Direct Donations</p>
                  <p className="text-xs text-on-surface-variant/60">for Donations</p>
                </div>
              </div>
              <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-lg text-sm font-medium">
                SAFE & WORK
              </div>
              <p className="text-xs text-on-surface-variant/60 mt-2">Safe and Work</p>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-on-surface-variant/60">
              <span className="text-xs">POWERED BY</span>
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
                <h3 className="font-headline text-secondary font-semibold">100% Transparency Promise</h3>
                <p className="text-sm text-on-surface-variant">Every rupee is tracked and audited for Gau Seva.</p>
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
                <h3 className="font-headline text-xl text-primary font-semibold mb-2">Tax Exemption Details</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  All donations are 100% tax-exempt under Section 80G of
                  the Income Tax Act. We will email your certificate within 48
                  hours of your contribution.
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
                UNIQUE OPPORTUNITY
              </span>
              <h2 className="font-headline text-3xl md:text-4xl text-white font-bold mb-4">
                Adopt a Cow virtually
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Form a spiritual bond. Receive weekly updates, photos,
                and a chance to name your protected cow.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-on-surface text-surface px-6 py-3 rounded-full font-medium hover:bg-on-surface/90 transition-colors w-fit"
              >
                Start Adoption Journey
                <Heart className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="donate" />
    </div>
  )
}
