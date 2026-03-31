"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Play, Filter } from "lucide-react"
import { useState } from "react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&h=600&fit=crop",
    alt: "Sacred cow at sunset",
    large: true,
  },
  {
    src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=600&h=400&fit=crop",
    alt: "Calf being fed",
    large: true,
  },
  {
    src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop",
    alt: "Historic sanctuary building",
    large: false,
  },
  {
    src: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=600&h=400&fit=crop",
    alt: "Cow with ear tag",
    large: false,
  },
  {
    src: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=600&h=400&fit=crop",
    alt: "Feeding time at sanctuary",
    large: false,
  },
]

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&h=300&fit=crop",
    title: "Rescue Stories",
    description: "Follow the journey of Nandi from the streets to a life of peace and health at our sanctuary.",
    duration: "4:20",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=400&h=300&fit=crop",
    title: "Daily Aarti",
    description: "Experience the spiritual resonance of our evening ritual honoring the sacred Gau Mata.",
    duration: "12:45",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=400&h=300&fit=crop",
    title: "Cow Care Rituals",
    description: "A deep dive into our holistic health practices, grooming, and specialized cow nutrition.",
    duration: "8:15",
  },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState("all")

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 text-center">
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
          VISUAL STORIES OF DEVOTION
        </p>
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface italic mb-6">
          Gallery of Souls
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
          Experience the serenity, love, and daily rhythms of our sanctuary through a
          curated lens of compassion.
        </p>
      </section>

      {/* Sacred Moments Gallery */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline text-2xl text-on-surface">Sacred Moments</h2>
            <button 
              className="w-10 h-10 rounded-full bg-on-surface text-surface flex items-center justify-center hover:bg-on-surface/80 transition-colors"
              onClick={() => setFilter(filter === "all" ? "featured" : "all")}
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {galleryImages.slice(0, 2).map((image, index) => (
              <div 
                key={index}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {galleryImages.slice(2).map((image, index) => (
              <div 
                key={index}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at the Gaushala - Video Section */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto bg-surface-container-low rounded-3xl p-8 md:p-12">
          <h2 className="font-headline text-2xl text-on-surface mb-2">Life at the Gaushala</h2>
          <p className="text-on-surface-variant mb-8">Stories in motion from the heart of our sanctuary.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                      <Play className="w-6 h-6 text-on-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <h3 className="font-headline text-lg text-primary mb-1">{video.title}</h3>
                <p className="text-sm text-on-surface-variant line-clamp-2">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Want to see more?
              </h2>
              <p className="text-on-secondary/80 max-w-md mx-auto mb-8">
                Join us for a virtual tour or visit our sanctuary in person to
                experience the peace firsthand.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-3 bg-primary-fixed text-on-primary-fixed rounded-full font-medium hover:bg-primary-fixed/90 transition-colors"
                >
                  Book a Visit
                </Link>
                <Link 
                  href="/contact"
                  className="px-8 py-3 bg-on-secondary text-secondary rounded-full font-medium hover:bg-on-secondary/90 transition-colors"
                >
                  Join Our Newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="gallery" />
    </div>
  )
}
