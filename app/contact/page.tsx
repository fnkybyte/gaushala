"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Phone, MessageSquare, Mail, MapPin, Clock, Check } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    helpType: "Monthly Gau Seva (Sponsorship)",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you within 24 hours.")
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface mb-6 text-balance">
            {t("contactPage.title")}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
            {t("contactPage.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Reach Us Directly Card */}
            <div className="bg-primary-fixed/30 rounded-3xl p-8">
              <h2 className="font-headline text-xl text-primary font-semibold mb-6">{t("contactPage.reachTitle")}</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-on-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant/70 uppercase tracking-wider mb-1">{t("contactPage.phoneNumber")}</p>
                    <a href="tel:+919876543210" className="text-on-surface font-medium hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-on-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant/70 uppercase tracking-wider mb-1">{t("contactPage.whatsappSupport")}</p>
                    <a href="https://wa.me/919876543210" className="text-on-surface font-medium hover:text-primary transition-colors">
                      {t("contactPage.whatsappMessage")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-on-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant/70 uppercase tracking-wider mb-1">{t("contactPage.emailAddress")}</p>
                    <a href="mailto:seva@dharmasanctuary.org" className="text-on-surface font-medium hover:text-primary transition-colors">
                      seva@dharmasanctuary.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-on-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant/70 uppercase tracking-wider mb-1">{t("contactPage.location")}</p>
                    <p className="text-on-surface font-medium">
                      {t("contactPage.locationValue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative rounded-3xl overflow-hidden h-64">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                alt="Map location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 bg-surface/95 px-4 py-2 rounded-full text-sm text-on-surface">
                  <MapPin className="w-4 h-4 text-primary" />
                  {t("contactPage.findUs")}
                </span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-on-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 spirit-shadow">
            <h2 className="font-headline text-2xl text-on-surface mb-2">{t("contactPage.inquiryTitle")}</h2>
            <p className="text-on-surface-variant mb-8">
              {t("contactPage.inquirySubtitle")}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-on-surface-variant/70 uppercase tracking-wider mb-2">
                    {t("contactPage.fullName")}
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Gaurav Sharma"
                    className="w-full px-4 py-3 bg-surface-container rounded-xl border-0 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant/70 uppercase tracking-wider mb-2">
                    {t("contactPage.emailAddr")}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="gaurav@example.com"
                    className="w-full px-4 py-3 bg-surface-container rounded-xl border-0 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-on-surface-variant/70 uppercase tracking-wider mb-2">
                    {t("contactPage.phoneNum")}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 bg-surface-container rounded-xl border-0 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant/70 uppercase tracking-wider mb-2">
                    {t("contactPage.howHelp")}
                  </label>
                  <select
                    value={formData.helpType}
                    onChange={(e) => setFormData({...formData, helpType: e.target.value})}
                    className="w-full px-4 py-3 bg-surface-container rounded-xl border-0 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
                  >
                    <option>Monthly Gau Seva (Sponsorship)</option>
                    <option>One-time Donation</option>
                    <option>Volunteer</option>
                    <option>Visit the Sanctuary</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-on-surface-variant/70 uppercase tracking-wider mb-2">
                  {t("contactPage.messageLabel")}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder={t("contactPage.messagePlaceholder")}
                  rows={4}
                  className="w-full px-4 py-3 bg-surface-container rounded-xl border-0 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                {t("contactPage.sendMessage")}
              </button>
            </form>

            {/* Visiting Hours & Guidelines */}
            <div className="grid md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-outline-variant/20">
              <div className="bg-surface-container rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-headline font-semibold text-on-surface">{t("contactPage.visitingHours")}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">{t("contactPage.monFri")}</span>
                    <span className="text-on-surface font-medium">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">{t("contactPage.saturday")}</span>
                    <span className="text-on-surface font-medium">07:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">{t("contactPage.sundayFestivals")}</span>
                    <span className="text-on-surface font-medium">06:00 - 20:00</span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">&#128004;</span>
                  <h3 className="font-headline font-semibold text-on-surface">{t("contactPage.guidelines")}</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-on-surface-variant">{t("contactPage.guideline1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-on-surface-variant">{t("contactPage.guideline2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-on-surface-variant">{t("contactPage.guideline3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Guardian CTA */}
      <section className="px-4 md:px-8 lg:px-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden py-16 px-8 text-center">
            {/* Background with trees silhouette */}
            <div className="absolute inset-0 bg-secondary" />
            <div className="absolute bottom-0 left-0 right-0 h-24">
              <svg viewBox="0 0 1200 100" className="w-full h-full fill-secondary-container/30">
                <path d="M0,100 L0,60 Q50,40 100,60 T200,50 T300,55 T400,45 T500,55 T600,50 T700,55 T800,45 T900,55 T1000,50 T1100,55 T1200,60 L1200,100 Z" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="font-headline text-3xl md:text-4xl text-on-secondary font-bold mb-4">
                {t("contactPage.becomeGuardian")}
              </h2>
              <p className="text-on-secondary/80 max-w-md mx-auto mb-8">
                {t("contactPage.guardianDesc")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link 
                  href="/donate"
                  className="px-8 py-3 bg-surface text-secondary rounded-full font-medium hover:bg-surface/90 transition-colors"
                >
                  {t("contactPage.startMonthly")}
                </Link>
                <Link 
                  href="/about"
                  className="px-8 py-3 bg-on-secondary text-secondary rounded-full font-medium hover:bg-on-secondary/90 transition-colors"
                >
                  {t("contactPage.learnMore")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
