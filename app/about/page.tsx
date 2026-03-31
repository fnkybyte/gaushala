import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Clock } from "lucide-react"

export const metadata = {
  title: "About Us | Dharma Sanctuary",
  description: "Learn about Dharma Sanctuary - our sacred mission to provide a permanent, dignified home for stray, elderly, and infirm cows."
}

export default function AboutPage() {
  return (
    <>
      <Navbar lang="en" />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center overflow-hidden bg-surface-container-low">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMALyVnbXYwk8Q3LeVn5FBJIsKFMPSIUCTCvMRgUm82R8ruOCF0adAHaepp-wG3A0RifjRZE3SS-CuIUEK_L1-92NoEwhRBqLZlSuTNz81lhiYIdXB1RPCgd57Lp2c07hquOgBje5CVcUb_j0YLXdKJf8Wyv6V9QvRtq4HDg71-H6Fbd1keXJlRD1HtkTO_08GYSAUT1_BdPGrW9WpJBlwrVFG7A5NyRdVermKRd6wEqVFD-BLtQNlSntqd-ftEMxXKkPFKJPCPLZG"
              alt="Soft ethereal background of a sunlit meadow with distant hills"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <span className="uppercase tracking-[0.3em] text-primary font-bold text-sm mb-4 block">Our Sacred Mission</span>
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface leading-tight max-w-3xl">
              Where Every <span className="text-primary">Gau Mata</span> Finds Her Home.
            </h1>
            <p className="mt-8 text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Dharma Sanctuary is more than a shelter; it is a living testament to the eternal bond between humanity and the sacred cow.
            </p>
          </div>
        </section>

        {/* Founder&apos;s Story */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-surface-container h-[500px] w-full rounded-xl overflow-hidden editorial-shadow relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMrQOGhzUoCmatiettsRHnenIDmgFlH2wzo1w2ahiIIqpisqYeDDGBdp-QsT3IIbqtKbNuKpCoTKiUtJYtg6qY3ef2CVwCjUwEa8Gw9J3Sz4BhtHBKwbqTVTbxH4bkz3LvD7dnBiJKqYnJPJ6GoWoFtcnzHEKoYoJPcIuSwOfisU5L2iZOgmr_OfSgrWLTcPiXbpmLsJ7N8gwsV1eSmWn7wRdcZQ1baM0nY1Xbs2q8c00s8m48RP2_NYT_-ws7d8XSnQCoHKpc0iPX"
                  alt="An elderly Indian man with a kind face gently stroking a white calf under the shade of a banyan tree"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 bg-primary-container p-8 rounded-xl hidden lg:block editorial-shadow max-w-xs">
                <p className="font-headline font-bold text-on-primary-container italic text-lg leading-snug">
                  {`"The service of the cow is the service of the universe itself."`}
                </p>
                <p className="mt-4 text-sm font-bold text-on-primary-container uppercase tracking-wider opacity-80">— Acharya Vedant</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-headline font-bold text-4xl text-on-surface">{`The Founder's Journey`}</h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                {`It began on a cold winter morning in 2008. Acharya Vedant encountered an abandoned, elderly cow struggling in the bustling streets of Vrindavan. In her eyes, he didn't see an animal; he saw a mother who had given everything and was now left with nothing.`}
              </p>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                That moment of profound compassion birthed Dharma Sanctuary. Starting with just two rescued cows in a small rented plot, the mission has grown into a vast sanctuary of love, rooted in the ancient Vedic principles of <span className="text-secondary font-bold">Gau Seva</span>.
              </p>
              <div className="pt-4">
                <button className="flex items-center gap-2 text-primary font-bold group">
                  Read the Full Biography 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-surface-container-low py-24 rounded-[3rem] mx-4 md:mx-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline font-extrabold text-4xl text-on-surface">Purpose & Path</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl editorial-shadow flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-on-surface mb-4">Our Mission</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    To provide a permanent, dignified home for stray, elderly, and infirm cows. We integrate traditional Vedic care with modern veterinary medicine to ensure every Gau Mata lives a life of health, peace, and spiritual reverence.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-surface p-4 rounded-lg">
                    <span className="text-secondary font-extrabold text-2xl block">500+</span>
                    <span className="text-xs uppercase font-bold tracking-widest text-on-surface-variant">Cows Sheltered</span>
                  </div>
                  <div className="bg-surface p-4 rounded-lg">
                    <span className="text-secondary font-extrabold text-2xl block">24/7</span>
                    <span className="text-xs uppercase font-bold tracking-widest text-on-surface-variant">Medical Care</span>
                  </div>
                </div>
              </div>
              <div className="bg-primary p-10 rounded-xl editorial-shadow text-on-primary flex flex-col justify-center">
                <div className="w-14 h-14 bg-primary-container rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-on-primary-container" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4">Our Vision</h3>
                <p className="opacity-90 text-lg leading-relaxed">
                  A world where the sacred cow is restored to her position of honor at the heart of the community, fostering a society built on non-violence and compassion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <h2 className="font-headline font-extrabold text-4xl text-center mb-16">The Dharma Timeline</h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start relative">
              <div className="w-24 text-right pt-1 flex-shrink-0">
                <span className="font-headline font-extrabold text-primary text-xl">2008</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary z-10" />
                <div className="w-0.5 h-full absolute top-4 bg-outline-variant/30" />
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow flex-grow">
                <h4 className="font-bold text-on-surface text-lg">Foundation</h4>
                <p className="text-on-surface-variant mt-2">First rescue operation in Vrindavan with 2 cows.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start relative">
              <div className="w-24 text-right pt-1 flex-shrink-0">
                <span className="font-headline font-extrabold text-primary text-xl">2014</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary z-10" />
                <div className="w-0.5 h-full absolute top-4 bg-outline-variant/30" />
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow flex-grow">
                <h4 className="font-bold text-on-surface text-lg">Expansion</h4>
                <p className="text-on-surface-variant mt-2">Acquired 10 acres of land to build the main Sanctuary complex.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start relative">
              <div className="w-24 text-right pt-1 flex-shrink-0">
                <span className="font-headline font-extrabold text-primary text-xl">2021</span>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary z-10" />
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow flex-grow">
                <h4 className="font-bold text-on-surface text-lg">Hospital Inception</h4>
                <p className="text-on-surface-variant mt-2">Opened the state-of-the-art Gau Hospital for critical surgeries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="uppercase tracking-widest text-secondary font-bold text-sm mb-4 block">Our Dedicated Sevaks</span>
                <h2 className="font-headline font-extrabold text-4xl text-on-surface">The Heart of the Sanctuary</h2>
              </div>
              <p className="max-w-md text-on-surface-variant">Our team blends spiritual devotion with professional expertise to provide the best care possible.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Team Member 1 */}
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGLTA2wcDRBkn60Oi5t7YYLxuNYprX0EOacemWZhyn53iG6cgrr_2pzvQpphY_RD2sOvJNMWTsuUN31KzxpWB5bUQBSDoHtQdpAIYG2Pnx0n0zbkOBImOzLn_Gu1kziQfKP1O4htHJCdUBlvoiCgRWjngCbzxeF7x1O4bAU7_l_CQB_OC1q8_mvLJPUjrH6Ke9bpXhIoicm7yTvcJUqIEcIDLcT4ebz_OfmTOY_Tb_t1sixktMdX6RzUSMwOo6t9in-LFexqreq3QT"
                    alt="Portrait of Dr. Rahul Sharma"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="font-headline font-bold text-xl text-on-surface">Dr. Rahul Sharma</h4>
                <p className="text-primary font-semibold text-sm">Chief Veterinarian</p>
              </div>
              {/* Team Member 2 */}
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh1HsB4r_TMxUOKSqX8RzrQ_5yyk2zC8O6Khovtihl5p4bagEdDcoL_f5J8YCxNlNlUrCRPdvlYU9e_ZnhLLSvucxCaWNU4-JaqbuZFB70Nuf4XXzrVsxjj9CSpwcO6rYUJU-9wlrw9Yl-xLPZYEBVZFHgM6Bs8kGdgjgiJ1L_b4IK6UwNoeQFQUrq1HEh5Pu61gOqB-NGnVEvyHly4EGThaZcIkzJXevv507DKV9EG9Nu4HcPlU5RXo5bEL8fHoYjKUa0zh2N9gZK"
                    alt="Portrait of Anjali Devi"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="font-headline font-bold text-xl text-on-surface">Anjali Devi</h4>
                <p className="text-primary font-semibold text-sm">Community Outreach</p>
              </div>
              {/* Team Member 3 */}
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQtc0z-ulCTO2kNc0Eaxp2PZuUlZGws6acASGt9ADOvHJJJ4bfYvkMlygfm4P1fUN3tIVrGJ_WLm83GtLI1Sf6QmgOyMHfB5fVl6vRfIXb8p8T7OLwkrVKJCfCfZ7LRtve3opJinXFXPovR7XUTebjTcDTiDxJsEEJBeRJhy1vzwbkXaTpfuEOLQMQF6p7IOESEPCY8xSoVB-vPA8CJK5GHXnbfe3XK0yB7SPWD3B6znL7yrf4cgg3LeXZS4zIu4WTogCnVasPzoy0"
                    alt="Portrait of Swami Atmanand"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="font-headline font-bold text-xl text-on-surface">Swami Atmanand</h4>
                <p className="text-primary font-semibold text-sm">Spiritual Guide</p>
              </div>
              {/* Team Member 4 */}
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYOwXs-rdbYuXrFPo-_p5YqRtwiu3ONFV6_3FL7KpM3r46GlEeeMTcXZM9AlNFbh86gHq5viPZzprbnpF8U0tS6ij7mx0_2hSxbQekgKJrWNb_U3fmUtY-X6frjBu7ZG9DjHgKjpV9zFzff_x2O6Lenb5_RKv4XvpcKhyIMZmvvjauyMoEnoKiNz2IKXPUp2-vbUf99kErBhcn7nSUqVxQ1tit5AUVFBEkSWLDSvh6HDMxIyXT51ZBk2SOHn8_3cw9t9sAb2Typ6C_"
                    alt="Portrait of Vikram Singh"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="font-headline font-bold text-xl text-on-surface">Vikram Singh</h4>
                <p className="text-primary font-semibold text-sm">Operations Lead</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 text-center max-w-4xl mx-auto">
          <h2 className="font-headline font-extrabold text-4xl text-on-surface mb-8">Join the Circle of Compassion</h2>
          <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">
            Our sanctuary runs entirely on the kindness of donors like you. Every contribution helps us provide fodder, medical care, and a safe space for another Gau Mata.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/donate" className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 hover:bg-primary-container hover:text-on-primary-container transition-all">
              Sponsor a Cow
            </Link>
            <Link href="/contact" className="bg-surface-container-lowest text-primary border-2 border-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-container/10 transition-all">
              Volunteer with Us
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  )
}
