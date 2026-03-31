"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.donate": "Donate",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.donateNow": "Donate Now",
    "nav.language": "Language",
    "nav.english": "English",
    "nav.hindi": "हिन्दी",
    
    // Hero Section
    "hero.badge": "Gau Seva Mission",
    "hero.title": "गौ सेवा ही सच्ची",
    "hero.titleHighlight": "सेवा है",
    "hero.subtitle": "Join us in our sacred mission to provide shelter, medical care, and lifelong love to abandoned and rescued cows. Every life is sacred.",
    "hero.donateBtn": "Donate Now",
    "hero.visitBtn": "Visit Gaushala",
    
    // Stats
    "stats.cowsSheltered": "Total Cows Sheltered",
    "stats.dailyFeeding": "Daily Feeding Cost",
    "stats.monthlyExpense": "Monthly Expense",
    "stats.rescuedThisYear": "Rescued This Year",
    
    // About Section
    "about.badge": "Our Heritage",
    "about.title": "Nurturing Life with Devotion",
    "about.para1": "Founded in 1998, Dharma Sanctuary was born out of a single act of compassion—saving a calf from the streets of Vrindavan. Today, we are home to over 1,200 sacred beings who were once abandoned, injured, or destined for slaughter.",
    "about.para2": "Our gaushala is more than a shelter; it is a spiritual ecosystem where cows are treated as family. We provide specialized organic fodder, round-the-clock veterinary care, and a serene environment that echoes with the sound of bhajans.",
    "about.volunteers": "Join 500+ Active Volunteers",
    "about.quote": "Compassion begins with the voiceless.",
    
    // Donation Section
    "donate.badge": "Support the Mission",
    "donate.title": "Choose Your Gift of Seva",
    "donate.subtitle": "Your contribution directly funds the nutrition and medical needs of our cows. Every rupee brings us closer to a world without animal suffering.",
    "donate.feedCow": "Feed a cow",
    "donate.feedCowDesc": "Provide nutritious organic fodder for a single cow for one day.",
    "donate.medicalSupport": "Medical Support",
    "donate.medicalSupportDesc": "Covers essential vaccinations and emergency veterinary visits.",
    "donate.monthlyCare": "Monthly Care",
    "donate.monthlyCareDesc": "Complete sponsorship for a cow's shelter, food, and grooming.",
    "donate.supportNow": "Support Now",
    "donate.mostNeeded": "Most Needed",
    "donate.adoptTitle": "Adopt a Cow Virtually",
    "donate.adoptDesc": "Receive monthly updates, photos, and a certificate of adoption for your chosen cow. A perfect gift for birthdays or anniversaries.",
    "donate.taxExemption": "80G Tax Exemption Available",
    "donate.scanToPay": "Scan to Pay via UPI",
    
    // Gallery Section
    "gallery.badge": "The Sanctuary",
    "gallery.title": "Life at Dharma",
    "gallery.viewAll": "View All Gallery",
    "gallery.mainShelter": "The Main Shelter Area",
    
    // Testimonials
    "testimonials.title": "What Our Supporters Say",
    "testimonials.quote": "The peace one finds here is beyond words. Their dedication to every cow is an inspiration to us all.",
    "testimonials.author": "Priya Sharma",
    "testimonials.authorTitle": "Monthly Donor since 2019",
    
    // CTA Section
    "cta.title": "Be the Voice for the Voiceless",
    "cta.subtitle": "Your contribution today can save a life tomorrow. Join us in this sacred journey of Gau Seva.",
    "cta.donate": "Donate Now",
    "cta.volunteer": "Volunteer With Us",
    
    // Contact Section
    "contact.badge": "Get in Touch",
    "contact.title": "Visit the Sanctuary",
    "contact.hours": "We are open for visitors every day from 8:00 AM to 6:00 PM. Come experience the peace of Gau Seva firsthand.",
    "contact.address": "Our Address",
    "contact.addressValue": "Dharma Gaushala Road, Near Banke Bihari Temple, Vrindavan, UP",
    "contact.phone": "Phone Number",
    "contact.phoneValue": "+91 98765 43210",
    "contact.whatsapp": "WhatsApp Support",
    "contact.whatsappValue": "Message us on WhatsApp for immediate assistance.",
    "contact.sendMessage": "Send us a Message",
    "contact.name": "Your Name",
    "contact.email": "Email Address",
    "contact.howHelp": "How can you help?",
    "contact.message": "Your Message",
    "contact.messagePlaceholder": "Tell us about your interest or inquiry...",
    "contact.submit": "Send Message",
    "contact.selectOption": "Select an option",
    "contact.optionDonate": "Monthly Gau Seva (Sponsorship)",
    "contact.optionVisit": "Visit the Gaushala",
    "contact.optionVolunteer": "Volunteer Opportunity",
    "contact.optionOther": "Other Inquiry",
    
    // Footer
    "footer.tagline": "A dedicated space for the care and protection of abandoned cows, preserving the spirit of Gau Seva.",
    "footer.quickLinks": "Quick Links",
    "footer.missionStatement": "Mission Statement",
    "footer.ourAddress": "Our Address",
    "footer.termsOfService": "Terms of Service",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.contactUs": "Contact Us",
    "footer.followUs": "Follow Us",
    "footer.newsletter": "Newsletter",
    "footer.emailPlaceholder": "Email",
    "footer.copyright": "© 2024 Editorial Dharma Sanctuary. All Rights Reserved. Dedicated to Gau Seva.",
    
    // About Page
    "aboutPage.badge": "Our Sacred Mission",
    "aboutPage.title": "Where Every Gau Mata Finds Her Home.",
    "aboutPage.subtitle": "Dharma Sanctuary is more than a shelter; it is a living testament to the eternal bond between humanity and the sacred cow.",
    "aboutPage.founderBadge": "The Founder's Journey",
    "aboutPage.founderPara1": "It began on a cold winter morning in 2008. Acharya Vedant encountered an abandoned, elderly cow struggling in the bustling streets of Vrindavan. In her eyes, he didn't see an animal; he saw a mother who had given everything and was now left with nothing.",
    "aboutPage.founderPara2": "That moment of profound compassion birthed Dharma Sanctuary. Starting with just two rescued cows in a small rented plot, the mission has grown into a vast sanctuary of love, rooted in the ancient Vedic principles of Gau Seva.",
    "aboutPage.founderQuote": "The service of the cow is the service of the universe itself.",
    "aboutPage.founderQuoteAuthor": "— Acharya Vedant",
    "aboutPage.readBio": "Read the full biography",
    "aboutPage.purposeTitle": "Purpose & Path",
    "aboutPage.missionTitle": "Our Mission",
    "aboutPage.missionDesc": "To provide a permanent, dignified home for stray, elderly, and infirm cows. We integrate traditional Vedic care with modern veterinary medicine to ensure every Gau Mata lives a life of health, peace, and spiritual reverence.",
    "aboutPage.cowsSheltered": "Cows Sheltered",
    "aboutPage.support247": "24/7 Medical Care",
    "aboutPage.visionTitle": "Our Vision",
    "aboutPage.visionDesc": "A world where the sacred cow is restored to her position of honor at the heart of the community. Fostering a society built on non-violence and compassion.",
    "aboutPage.timelineTitle": "The Dharma Timeline",
    "aboutPage.timeline2008Title": "Foundation",
    "aboutPage.timeline2008Desc": "First rescue operation in Vrindavan with 2 cows.",
    "aboutPage.timeline2014Title": "Expansion",
    "aboutPage.timeline2014Desc": "Acquired 10 acres of land to build the main Sanctuary complex.",
    "aboutPage.timeline2021Title": "Hospital Inception",
    "aboutPage.timeline2021Desc": "Opened the state-of-the-art Gau Hospital for critical surgeries.",
    "aboutPage.teamBadge": "Our Dedicated Sevaks",
    "aboutPage.teamTitle": "The Heart of the Sanctuary",
    "aboutPage.teamSubtitle": "Our team blends spiritual devotion with professional expertise to provide the best care possible.",
    "aboutPage.teamMember1Name": "Dr. Rahul Sharma",
    "aboutPage.teamMember1Role": "Chief Veterinarian",
    "aboutPage.teamMember2Name": "Anjali Devi",
    "aboutPage.teamMember2Role": "Community Outreach",
    "aboutPage.teamMember3Name": "Swami Atmanand",
    "aboutPage.teamMember3Role": "Spiritual Guide",
    "aboutPage.teamMember4Name": "Vikram Singh",
    "aboutPage.teamMember4Role": "Operations Lead",
    "aboutPage.joinTitle": "Join the Circle of Compassion",
    "aboutPage.joinSubtitle": "Our sanctuary runs entirely on the kindness of donors like you. Every contribution helps us provide fodder, medical care, and a safe space for another Gau Mata.",
    "aboutPage.sponsorCow": "Sponsor a Cow",
    "aboutPage.volunteerWithUs": "Volunteer with Us",
    
    // Donate Page
    "donatePage.title": "Your Gau Seva Matters",
    "donatePage.subtitle": "Join our mission to provide sanctuary, medical care, and lifelong dignity to the sacred cows of India. Every contribution sustains a life.",
    "donatePage.scanTitle": "Scan to Support Our Sacred Work",
    "donatePage.scanSubtitle": "Instant UPI Donation via GPay, PhonePe, or Paytm",
    "donatePage.poweredBy": "Powered By",
    "donatePage.transparencyTitle": "100% Transparency Promise",
    "donatePage.transparencyDesc": "Every rupee is tracked and audited for Gau Seva.",
    "donatePage.taxTitle": "Tax Exemption Details",
    "donatePage.taxDesc": "All donations are 100% tax-exempt under Section 80G of the Income Tax Act. We will email your certificate within 48 hours of your contribution.",
    "donatePage.supportTier": "Support Tier",
    "donatePage.feedDay": "Feed for a Day",
    "donatePage.criticalCare": "Critical Care",
    "donatePage.medicalCheckups": "Medical Care & Checkups",
    "donatePage.goldSponsorship": "Gold Sponsorship",
    "donatePage.comprehensiveSupport": "Comprehensive Monthly Support",
    "donatePage.adoptTitle": "Adopt a Cow virtually",
    "donatePage.adoptBadge": "Unique Opportunity",
    "donatePage.adoptDesc": "Form a spiritual bond. Receive weekly updates, photos, and a chance to name your protected cow.",
    "donatePage.startAdoption": "Start Adoption Journey",
    
    // Gallery Page
    "galleryPage.badge": "Visual Stories of Devotion",
    "galleryPage.title": "Gallery of Souls",
    "galleryPage.subtitle": "Experience the serenity, love, and daily rhythms of our sanctuary through a curated lens of compassion.",
    "galleryPage.sacredMoments": "Sacred Moments",
    "galleryPage.filter": "Filter",
    "galleryPage.videoTitle": "Life at the Gaushala",
    "galleryPage.videoSubtitle": "Stories in motion from the heart of our sanctuary.",
    "galleryPage.video1Title": "Rescue Stories",
    "galleryPage.video1Desc": "Follow the journey of Nandi from the streets to a life of peace and health at our sanctuary.",
    "galleryPage.video2Title": "Daily Aarti",
    "galleryPage.video2Desc": "Experience the spiritual resonance of our evening ritual honoring the sacred Gau Mata.",
    "galleryPage.video3Title": "Cow Care Rituals",
    "galleryPage.video3Desc": "A deep dive into our holistic health practices, grooming, and specialized cow nutrition.",
    "galleryPage.wantMore": "Want to see more?",
    "galleryPage.wantMoreDesc": "Join us for a virtual tour or visit our sanctuary in person to experience the peace firsthand.",
    "galleryPage.bookVisit": "Book a Visit",
    "galleryPage.joinNewsletter": "Join Our Newsletter",
    
    // Contact Page
    "contactPage.title": "Connect with the Sanctuary",
    "contactPage.subtitle": "Whether you wish to visit, volunteer, or simply learn more about Gau Seva, we are here to welcome you. Your reach is a blessing to our herd.",
    "contactPage.reachTitle": "Reach Us Directly",
    "contactPage.phoneNumber": "Phone Number",
    "contactPage.whatsappSupport": "WhatsApp Support",
    "contactPage.whatsappMessage": "Message us on WhatsApp",
    "contactPage.emailAddress": "Email Address",
    "contactPage.location": "Sanctuary Location",
    "contactPage.locationValue": "108 Krishna Marg, Near Gir Forest, Junagadh, Gujarat - 362001",
    "contactPage.findUs": "Find us in Gujarat",
    "contactPage.inquiryTitle": "Send an Inquiry",
    "contactPage.inquirySubtitle": "We'll get back to you within 24 hours of receiving your message.",
    "contactPage.fullName": "Full Name",
    "contactPage.emailAddr": "Email Address",
    "contactPage.phoneNum": "Phone Number",
    "contactPage.howHelp": "How can you help?",
    "contactPage.messageLabel": "Message",
    "contactPage.messagePlaceholder": "How can we assist you today?",
    "contactPage.sendMessage": "Send Message",
    "contactPage.visitingHours": "Visiting Hours",
    "contactPage.monFri": "Monday - Friday",
    "contactPage.saturday": "Saturday",
    "contactPage.sundayFestivals": "Sunday & Festivals",
    "contactPage.guidelines": "Guidelines",
    "contactPage.guideline1": "Feeding only provided fodder is allowed.",
    "contactPage.guideline2": "Maintain silence near the mother cows.",
    "contactPage.guideline3": "Photography is allowed for personal use.",
    "contactPage.becomeGuardian": "Become a Guardian",
    "contactPage.guardianDesc": "Your support provides food, medicine, and a lifetime of care for the cows in our sanctuary.",
    "contactPage.startMonthly": "Start Monthly Support",
    "contactPage.learnMore": "Learn More",
  },
  hi: {
    // Navbar
    "nav.home": "मुख्य पृष्ठ",
    "nav.about": "हमारे बारे में",
    "nav.donate": "दान करें",
    "nav.gallery": "गैलरी",
    "nav.contact": "संपर्क",
    "nav.donateNow": "अभी दान करें",
    "nav.language": "भाषा",
    "nav.english": "English",
    "nav.hindi": "हिन्दी",
    
    // Hero Section
    "hero.badge": "गौ सेवा मिशन",
    "hero.title": "गौ सेवा ही सच्ची",
    "hero.titleHighlight": "सेवा है",
    "hero.subtitle": "हमारे पवित्र मिशन में शामिल हों जो परित्यक्त और बचाई गई गायों को आश्रय, चिकित्सा देखभाल और आजीवन प्यार प्रदान करता है। हर जीवन पवित्र है।",
    "hero.donateBtn": "अभी दान करें",
    "hero.visitBtn": "गौशाला देखें",
    
    // Stats
    "stats.cowsSheltered": "कुल संरक्षित गायें",
    "stats.dailyFeeding": "दैनिक भोजन व्यय",
    "stats.monthlyExpense": "म��सिक व्यय",
    "stats.rescuedThisYear": "इस वर्ष बचाई गई",
    
    // About Section
    "about.badge": "हमारी विरासत",
    "about.title": "समर्पण से जीवन का पोषण",
    "about.para1": "1998 में स्थापित, धर्म सैंक्चुअरी एक करु��ा के एक कार्य से जन्मी - वृंदावन की सड़कों से एक बछड़े को बचाना। आज, हम 1,200 से अधिक पवित्र प्राणियों का घर हैं जो कभी परित्यक्त, घायल या वध के लिए नियत थे।",
    "about.para2": "हमारी गौशाला एक आश्रय से कहीं अधिक है; यह एक आध्यात्मिक पारिस्थितिकी तंत्र है जहाँ गायों को परिवार की तरह माना जाता है। हम विशेष जैविक चारा, चौबीसों घंटे पशु चिकित्सा देखभाल और एक शांत वातावरण प्रदान करते हैं जो भजनों की ध्वनि से गूंजता है।",
    "about.volunteers": "500+ सक्रिय स्वयंसेवकों से जुड़ें",
    "about.quote": "करुणा मूक प्राणियों से शुरू होती है।",
    
    // Donation Section
    "donate.badge": "मिशन का समर्थन करें",
    "donate.title": "अपनी सेवा का उपहार चुनें",
    "donate.subtitle": "आपका योगदान सीधे हमारी गायों की पोषण और चिकित्सा जरूरतों को पूरा करता है। हर रुपया हमें पशु पीड़ा से मुक्त दुनिया के करीब लाता है।",
    "donate.feedCow": "गाय को खिलाएं",
    "donate.feedCowDesc": "एक दिन के लिए एक गाय को पौष्टिक जैविक चारा प्रदान करें।",
    "donate.medicalSupport": "चिकित्सा सहायता",
    "donate.medicalSupportDesc": "आवश्यक टीकाकरण और आपातकालीन पशु चिकित्सा यात्राओं को कवर करता है।",
    "donate.monthlyCare": "मासिक देखभाल",
    "donate.monthlyCareDesc": "गाय के आश्रय, भोजन और देखभाल के लिए पूर्ण प्रायोजन।",
    "donate.supportNow": "अभी सहायता करें",
    "donate.mostNeeded": "सबसे जरूरी",
    "donate.adoptTitle": "वर्चुअली गाय गोद लें",
    "donate.adoptDesc": "अपनी चुनी हुई गाय के मासिक अपडेट, फोटो और गोद लेने का प्रमाण पत्र प्राप्त करें। जन्मदिन या वर्षगांठ के लिए एक सही उपहार।",
    "donate.taxExemption": "80G कर छूट उपलब्ध",
    "donate.scanToPay": "UPI से भुगतान के लिए स्कैन करें",
    
    // Gallery Section
    "gallery.badge": "गौशाला",
    "gallery.title": "धर्म में जीवन",
    "gallery.viewAll": "पूरी गैलरी देखें",
    "gallery.mainShelter": "मुख्य आश्रय क्षेत्र",
    
    // Testimonials
    "testimonials.title": "हमारे समर्थक क्या कहते हैं",
    "testimonials.quote": "यहाँ जो शांति मिलती है वह शब्दों से परे है। हर गाय के प्रति उनका समर्पण हम सभी के लिए प्रेरणा है।",
    "testimonials.author": "प्रिया शर्मा",
    "testimonials.authorTitle": "2019 से मासिक दाता",
    
    // CTA Section
    "cta.title": "मूक प्राणियों की आवाज बनें",
    "cta.subtitle": "आपका आज का योगदान कल एक जीवन बचा सकता है। गौ सेवा की इस पवित्र यात्रा में हमसे जुड़ें।",
    "cta.donate": "अभी दान करें",
    "cta.volunteer": "स्वयंसेवक बनें",
    
    // Contact Section
    "contact.badge": "संपर्क करें",
    "contact.title": "गौशाला देखें",
    "contact.hours": "हम प्रतिदिन सुबह 8:00 बजे से शाम 6:00 बजे तक आगंतुकों के लिए खुले हैं। गौ सेवा की शांति का अनुभव करें।",
    "contact.address": "हमारा पता",
    "contact.addressValue": "धर्म गौशाला रोड, बांके बिहारी मंदिर के पास, वृंदावन, यूपी",
    "contact.phone": "फोन नंबर",
    "contact.phoneValue": "+91 98765 43210",
    "contact.whatsapp": "व्हाट्सएप सहायता",
    "contact.whatsappValue": "तुरंत सहायता के लिए व्हाट्सएप पर संदेश भेजें।",
    "contact.sendMessage": "संदेश भेजें",
    "contact.name": "आपका नाम",
    "contact.email": "ईमेल पता",
    "contact.howHelp": "आप कैसे मदद कर सकते हैं?",
    "contact.message": "आपका संदेश",
    "contact.messagePlaceholder": "अपनी रुचि या पूछताछ के बारे में बताएं...",
    "contact.submit": "संदेश भेजें",
    "contact.selectOption": "विकल्प चुनें",
    "contact.optionDonate": "मासिक गौ सेवा (प्रायोजन)",
    "contact.optionVisit": "गौशाला देखें",
    "contact.optionVolunteer": "स्वयंसेवक अवसर",
    "contact.optionOther": "अन्य पूछताछ",
    
    // Footer
    "footer.tagline": "परित्यक्त गायों की देखभाल और संरक्षण के लिए एक समर्पित स्थान, गौ सेवा की भावना को संजोए हुए।",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.missionStatement": "मिशन वक्तव्य",
    "footer.ourAddress": "हमारा पता",
    "footer.termsOfService": "सेवा की शर्तें",
    "footer.privacyPolicy": "गोपनीयता नीति",
    "footer.contactUs": "संपर्क करें",
    "footer.followUs": "फॉलो करें",
    "footer.newsletter": "न्यूज़लेटर",
    "footer.emailPlaceholder": "ईमेल",
    "footer.copyright": "© 2024 संपादकीय धर्म सैंक्चुअरी। सर्वाधिकार सुरक्षित। गौ सेवा को समर्���ित।",
    
    // About Page
    "aboutPage.badge": "हमारा पवित्र मिशन",
    "aboutPage.title": "जहाँ हर गौ माता को मिलता है अपना घर।",
    "aboutPage.subtitle": "धर्म सैंक्चुअरी एक आश्रय से कहीं अधिक है; यह मानवता और पवित्र गाय के बीच शाश्वत बंधन का जीवंत प्रमाण है।",
    "aboutPage.founderBadge": "संस्थापक की यात्रा",
    "aboutPage.founderPara1": "यह 2008 की एक ठंडी सर्दियों की सुबह शुरू हुई। आचार्य वेदांत ने वृंदावन की व्यस्त सड़कों पर संघर्ष करती एक परित्यक्त, बूढ़ी गाय को देखा। उसकी आंखों में, उन्होंने एक जानवर नहीं देखा; उन्होंने एक माँ देखी जिसने सब कुछ दिया था और अब कुछ नहीं बचा था।",
    "aboutPage.founderPara2": "गहन करुणा के उस क्षण ने धर्म सैंक्चुअरी को जन्म दिया। एक छोटे किराए के भूखंड में केवल दो बचाई गई गायों से शुरू होकर, मिशन गौ सेवा के प्राचीन वैदिक सिद्धांतों में निहित प्रेम के विशाल अभयारण्य में विकसित हो गया है।",
    "aboutPage.founderQuote": "गाय की सेवा ब्रह्मांड की सेवा है।",
    "aboutPage.founderQuoteAuthor": "— आचार्य वेदांत",
    "aboutPage.readBio": "पूरी जीवनी पढ़ें",
    "aboutPage.purposeTitle": "उद्देश्य और मार्ग",
    "aboutPage.missionTitle": "हमारा मिशन",
    "aboutPage.missionDesc": "भटकी, बुजुर्ग और कमजोर गायों के लिए स्थायी, सम्मानजनक घर प्रदान करना। हम पारंपरिक वैदिक देखभाल को आधुनिक पशु चिकित्सा के साथ एकीकृत करते हैं ताकि हर गौ माता स्वास्थ्य, शांति और आध्यात्मिक श्रद्धा का जीवन जी सके।",
    "aboutPage.cowsSheltered": "संरक्षित गायें",
    "aboutPage.support247": "24/7 चिकित्सा देखभाल",
    "aboutPage.visionTitle": "हमारी दृष्टि",
    "aboutPage.visionDesc": "एक ऐसी दुनिया जहाँ पवित्र गाय समुदाय के केंद्र में सम्मान की अपनी स्थिति में बहाल हो। अहिंसा और करुणा पर निर्मित समाज को बढ़ावा देना।",
    "aboutPage.timelineTitle": "धर्म की समय रेखा",
    "aboutPage.timeline2008Title": "स्थापना",
    "aboutPage.timeline2008Desc": "वृंदावन में 2 गायों के साथ पहला बचाव अभियान।",
    "aboutPage.timeline2014Title": "विस्तार",
    "aboutPage.timeline2014Desc": "मुख्य अभयारण्य परिसर बनाने के लिए 10 एकड़ भूमि अधिग्रहित।",
    "aboutPage.timeline2021Title": "अस्पताल की शुरुआत",
    "aboutPage.timeline2021Desc": "गंभीर सर्जरी के लिए अत्याधुनिक गौ अस्पताल खोला।",
    "aboutPage.teamBadge": "हमारे समर्पित सेवक",
    "aboutPage.teamTitle": "अभयारण्य का हृदय",
    "aboutPage.teamSubtitle": "हमारी टीम आध्यात्मिक भक्ति को पेशेवर विशेषज्ञता के साथ मिलाती है ताकि सर्वोत्तम देखभाल प्रदान की जा सके।",
    "aboutPage.teamMember1Name": "डॉ. राहुल शर्मा",
    "aboutPage.teamMember1Role": "मुख्य पशु चिकित्सक",
    "aboutPage.teamMember2Name": "अंजली देवी",
    "aboutPage.teamMember2Role": "सामुदायिक आउटरीच",
    "aboutPage.teamMember3Name": "स्वामी आत्मानंद",
    "aboutPage.teamMember3Role": "आध्यात्मिक गुरु",
    "aboutPage.teamMember4Name": "विक्रम सिंह",
    "aboutPage.teamMember4Role": "संचालन प्रमुख",
    "aboutPage.joinTitle": "करुणा के वृत्त में शामिल हों",
    "aboutPage.joinSubtitle": "हमारा अभयारण्य पूरी तरह से आप जैसे दाताओं की दया पर चलता है। हर योगदान हमें एक और गौ माता के लिए चारा, चिकित्सा देखभाल और सुरक्षित स्थान प्रदान करने में मदद करता है।",
    "aboutPage.sponsorCow": "गाय को प्रायोजित करें",
    "aboutPage.volunteerWithUs": "स्वयंसेवक बनें",
    
    // Donate Page
    "donatePage.title": "आपकी गौ सेवा मायने रखती है",
    "donatePage.subtitle": "भारत की पवित्र गायों को अभयारण्य, चिकित्सा देखभाल और आजीवन सम्मान प्रदान करने के हमारे मिशन में शामिल हों। हर योगदान एक जीवन को बनाए रखता है।",
    "donatePage.scanTitle": "हमारे पवित्र कार्य का समर्थन करने के लिए स्कैन करें",
    "donatePage.scanSubtitle": "GPay, PhonePe, या Paytm के माध्यम से तुरंत UPI दान",
    "donatePage.poweredBy": "द्वारा संचालित",
    "donatePage.transparencyTitle": "100% पारदर्शिता का वादा",
    "donatePage.transparencyDesc": "गौ सेवा के लिए हर रुपये को ट्रैक और ऑडिट किया जाता है।",
    "donatePage.taxTitle": "कर छूट विवरण",
    "donatePage.taxDesc": "सभी दान आयकर अधिनियम की धारा 80G के तहत 100% कर-मुक्त हैं। हम आपके योगदान के 48 घंटे के भीतर आपका प्रमाण पत्र ईमेल करेंगे।",
    "donatePage.supportTier": "सहायता स्तर",
    "donatePage.feedDay": "एक दिन का भोजन",
    "donatePage.criticalCare": "गंभीर देखभाल",
    "donatePage.medicalCheckups": "चिकित्सा देखभाल और जांच",
    "donatePage.goldSponsorship": "गोल्ड प्रायोजन",
    "donatePage.comprehensiveSupport": "व्यापक मासिक सहायता",
    "donatePage.adoptTitle": "वर्चुअली गाय गोद लें",
    "donatePage.adoptBadge": "अनूठा अवसर",
    "donatePage.adoptDesc": "आध्यात्मिक बंधन ��नाएं। साप्ताहिक अपडेट, फोटो और अपनी संरक्षित गाय का नाम रखने का मौका पाएं।",
    "donatePage.startAdoption": "गोद लेने की यात्रा शुरू करें",
    
    // Gallery Page
    "galleryPage.badge": "भक्ति की दृश्य कहानियां",
    "galleryPage.title": "आत्माओं की गैलरी",
    "galleryPage.subtitle": "करुणा के क्यूरेटेड लेंस के माध्यम से हमारे अभयारण्य की शांति, प्रेम और दैनिक लय का अनुभव करें।",
    "galleryPage.sacredMoments": "पवित्र क्षण",
    "galleryPage.filter": "फ़िल्टर",
    "galleryPage.videoTitle": "गौशाला में जीवन",
    "galleryPage.videoSubtitle": "हमारे अभयारण्य के हृदय से गतिमान कहानियां।",
    "galleryPage.video1Title": "बचाव की कहानियां",
    "galleryPage.video1Desc": "नंदी की सड़कों से हमारे अभयारण्य में शांति और स्वास्थ्य के जीवन तक की यात्रा का अनुसरण करें।",
    "galleryPage.video2Title": "दैनिक आरती",
    "galleryPage.video2Desc": "पवित्र गौ माता का सम्मान करने वाले हमारे शाम के अनुष्ठान की आध्यात्मिक अनुगूंज का अनुभव करें।",
    "galleryPage.video3Title": "गाय देखभाल अनुष्ठान",
    "galleryPage.video3Desc": "हमारी समग्र स्वास्थ्य प्रथाओं, संवारने और विशेष गाय पोषण में गहरी जानकारी।",
    "galleryPage.wantMore": "और देखना चाहते हैं?",
    "galleryPage.wantMoreDesc": "वर्चुअल टूर के लिए हमसे जुड़ें या शांति का सीधा अनुभव करने के लिए हमारे अभयारण्य में आएं।",
    "galleryPage.bookVisit": "विज़िट बुक करें",
    "galleryPage.joinNewsletter": "न्यूज़लेटर में शामिल हों",
    
    // Contact Page
    "contactPage.title": "अभयारण्य से जुड़ें",
    "contactPage.subtitle": "चाहे आप दर्शन करना चाहें, स्वयंसेवा करना चाहें, या बस गौ सेवा के बारे में और जानना चाहें, हम आपका स्वागत करने के लिए यहाँ हैं। आपका संपर्क हमारे झुंड के लिए आशीर्वाद है।",
    "contactPage.reachTitle": "सीधे संपर्क करें",
    "contactPage.phoneNumber": "फोन नंबर",
    "contactPage.whatsappSupport": "व्हाट्सएप सहायता",
    "contactPage.whatsappMessage": "व्हाट्सएप पर संदेश भेजें",
    "contactPage.emailAddress": "ईमेल पता",
    "contactPage.location": "अभयारण्य का स्थान",
    "contactPage.locationValue": "108 कृष्णा मार्ग, गिर वन के पास, जूनागढ़, गुजरात - 362001",
    "contactPage.findUs": "गुजरात में हमें खोजें",
    "contactPage.inquiryTitle": "पूछताछ भेजें",
    "contactPage.inquirySubtitle": "हम आपका संदेश प्राप्त होने के 24 घंटे के भीतर जवाब देंगे।",
    "contactPage.fullName": "पूरा नाम",
    "contactPage.emailAddr": "ईमेल पता",
    "contactPage.phoneNum": "फोन नंबर",
    "contactPage.howHelp": "आप कैसे मदद कर सकते हैं?",
    "contactPage.messageLabel": "संदेश",
    "contactPage.messagePlaceholder": "आज हम आपकी कैसे सहायता कर सकते हैं?",
    "contactPage.sendMessage": "संदेश भेजें",
    "contactPage.visitingHours": "दर्शन का समय",
    "contactPage.monFri": "सोमवार - शुक्रवार",
    "contactPage.saturday": "शनिवार",
    "contactPage.sundayFestivals": "रविवार और त्योहार",
    "contactPage.guidelines": "दिशानिर्देश",
    "contactPage.guideline1": "केवल प्रदान किया गया चारा खिलाने की अनुमति है।",
    "contactPage.guideline2": "माँ गायों के पास शांति बनाए रखें।",
    "contactPage.guideline3": "व्यक्तिगत उपयोग के लिए फोटोग्राफी की अनुमति है।",
    "contactPage.becomeGuardian": "संरक्षक बनें",
    "contactPage.guardianDesc": "आपका समर्थन हमारे अभयारण्य में गायों के लिए भोजन, दवा और आजीवन देखभाल प्रदान करता है।",
    "contactPage.startMonthly": "मासिक सहायता शुरू करें",
    "contactPage.learnMore": "और जानें",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("hi")

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem("dharma-language") as Language
    if (savedLang && (savedLang === "en" || savedLang === "hi")) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("dharma-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
