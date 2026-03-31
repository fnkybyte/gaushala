import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Utensils, Receipt, Users, Grass, Stethoscope, Home as HomeIcon } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Navbar lang="en" />
      <main className="pt-20 pb-16 md:pb-0">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnsqzSUtuut69Fa4CAfO0dhAoDFdO5zVO7WZarKpTav473_hRC60sDhIXboS_h9uuL1s3kQEXK0M0kG3lWv5XhACZKq675eAMPIJXTitMy2c9SspqNUyUY4ORVeD0XENZNJI2TrSUaEU0FlGMNGYHYBhFQs1AnlKXRq7vyv2W_O5d4ef-Dc4gPGq7eJDotP04l3j3BzK4IBzFqjUxTPqrZGnE8o2Bx8h1EPr_XgZEkrVBw0s13ItNF4Czlbx2-derlxE8QoFHIME4z"
              alt="Close up of a peaceful brown cow in a sun-drenched Indian gaushala"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 via-on-background/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/20 border border-primary-container/30 backdrop-blur-sm text-primary-container font-headline text-sm font-bold mb-6">
                Gau Seva Mission
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold leading-tight mb-6">
                गौ सेवा ही सच्ची <span className="text-primary-container underline decoration-secondary">सेवा है</span>
              </h1>
              <p className="text-xl md:text-2xl text-surface-container-lowest/90 mb-10 leading-relaxed">
                Join us in our sacred mission to provide shelter, medical care, and lifelong love to abandoned and rescued cows. Every life is sacred.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/donate"
                  className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                >
                  Donate Now
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-headline font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Visit Gaushala
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_8px_32px_rgba(143,78,0,0.06)] border border-outline-variant/10 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center text-on-secondary-container mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <div className="text-4xl font-headline font-extrabold text-on-surface mb-2">1,200+</div>
              <div className="text-on-surface-variant font-headline font-semibold">Total Cows Sheltered</div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_8px_32px_rgba(143,78,0,0.06)] border border-outline-variant/10 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center text-on-primary-fixed mb-6 group-hover:scale-110 transition-transform">
                <Utensils className="w-7 h-7" />
              </div>
              <div className="text-4xl font-headline font-extrabold text-on-surface mb-2">₹15K</div>
              <div className="text-on-surface-variant font-headline font-semibold">Daily Feeding Cost</div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_8px_32px_rgba(143,78,0,0.06)] border border-outline-variant/10 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-tertiary-fixed rounded-2xl flex items-center justify-center text-on-tertiary-fixed mb-6 group-hover:scale-110 transition-transform">
                <Receipt className="w-7 h-7" />
              </div>
              <div className="text-4xl font-headline font-extrabold text-on-surface mb-2">₹4.5L</div>
              <div className="text-on-surface-variant font-headline font-semibold">Monthly Expense</div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_8px_32px_rgba(143,78,0,0.06)] border border-outline-variant/10 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center text-on-secondary-container mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <div className="text-4xl font-headline font-extrabold text-on-surface mb-2">850+</div>
              <div className="text-on-surface-variant font-headline font-semibold">Rescued This Year</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-primary/10 rounded-3xl" />
              <div className="relative z-10 w-full h-[500px] rounded-3xl shadow-xl overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZT72exysMfGHxUCq2YdAXAnstqTgnmBLNSxDIbsu4YK6h-CspBEllUVs2nI94-s-wg3tbSzaWG01rU_CpjDoMWyJBusGWfIbMUokynERYJUJd57WTn2-ONQIZ7gTl1DNxlMgBoxU-Y_rNZ0DkLLpQbsqJjYYXp6PDvGeOvh4bUNjhcKfYqZFqL2Af3ZJdFqpwwzxpkRoPOnoJYypURxjl8EmUN13UdqR7AaUM5BuwRcdlTIgtVpw6oyPQwKqIGovduZvacfdbo_nX"
                  alt="An elderly Indian man with a kind expression feeding a cow by hand"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-6 rounded-2xl shadow-lg z-20 max-w-[240px]">
                <p className="font-headline font-bold text-primary italic">{`"Compassion begins with the voiceless."`}</p>
                <p className="text-sm text-on-surface-variant mt-2">— Swami Dayananda</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-sm font-headline font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Heritage</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-8">Nurturing Life with Devotion</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                Founded in 1998, Dharma Sanctuary was born out of a single act of compassion—saving a calf from the streets of Vrindavan. Today, we are home to over 1,200 sacred beings who were once abandoned, injured, or destined for slaughter.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
                Our gaushala is more than a shelter; it is a spiritual ecosystem where cows are treated as family. We provide specialized organic fodder, round-the-clock veterinary care, and a serene environment that echoes with the sound of bhajans.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-4 border-surface-container-low overflow-hidden bg-primary-fixed flex items-center justify-center">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDokyAhTzH1usQn-RlZ15LW4Zg8TA1q0p8veCJ_yMkvH-5023lkdfAQjldkdbfiMXqqaMKAhHeQfYRNamsD67hWWdH89BtGs7pLqGOrQmLMAwSiXpv4zH6SzOnPmDcLM97Qr49EquvS3haCR6Cfr7ywgOweib6l1bdQuk9SJ0ayFWSDMmWfNUiDmH0a1pv4cc6L4YyYp8jZX1uEhs-v7G_6xXBZqH-B46iEZ_Ow-MRrASgLbnbFCIWWDPZ2eezAeInZE9K-d0wDEUXe"
                      alt="Team member"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-4 border-surface-container-low bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed">
                    +24
                  </div>
                </div>
                <p className="text-sm font-bold text-on-surface">Join 500+ Active Volunteers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-headline font-bold text-primary uppercase tracking-[0.2em] mb-4">Support the Mission</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-6">Choose Your Gift of Seva</h3>
              <p className="text-lg text-on-surface-variant">Your contribution directly funds the nutrition and medical needs of our cows. Every rupee brings us closer to a world without animal suffering.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Feed a Cow */}
              <div className="bg-surface-container-low p-10 rounded-3xl flex flex-col items-center text-center group hover:bg-primary-fixed transition-colors duration-500">
                <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary mb-8 shadow-sm">
                  <Grass className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-headline font-bold mb-2">Feed a cow</h4>
                <p className="text-on-surface-variant mb-6">Provide nutritious organic fodder for a single cow for one day.</p>
                <div className="text-4xl font-headline font-extrabold text-primary mb-8">₹501</div>
                <Link href="/donate" className="w-full bg-on-primary-container text-on-primary py-4 rounded-full font-headline font-bold hover:shadow-xl transition-all text-center">
                  Support Now
                </Link>
              </div>
              {/* Medical Support */}
              <div className="bg-primary-container p-10 rounded-3xl flex flex-col items-center text-center scale-100 md:scale-105 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-white/20 text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Needed</span>
                </div>
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-on-primary-container mb-8 shadow-sm">
                  <Stethoscope className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-headline font-bold mb-2 text-on-primary-container">Medical Support</h4>
                <p className="text-on-primary-container/80 mb-6">Covers essential vaccinations and emergency veterinary visits.</p>
                <div className="text-4xl font-headline font-extrabold text-on-primary-container mb-8">₹1,100</div>
                <Link href="/donate" className="w-full bg-surface-container-lowest text-on-primary-container py-4 rounded-full font-headline font-bold hover:shadow-xl transition-all text-center">
                  Support Now
                </Link>
              </div>
              {/* Monthly Care */}
              <div className="bg-surface-container-low p-10 rounded-3xl flex flex-col items-center text-center group hover:bg-secondary-container transition-colors duration-500">
                <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center text-secondary mb-8 shadow-sm">
                  <HomeIcon className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-headline font-bold mb-2">Monthly Care</h4>
                <p className="text-on-surface-variant mb-6">{`Complete sponsorship for a cow's shelter, food, and grooming.`}</p>
                <div className="text-4xl font-headline font-extrabold text-secondary mb-8">₹2,100</div>
                <Link href="/donate" className="w-full bg-secondary text-on-secondary py-4 rounded-full font-headline font-bold hover:shadow-xl transition-all text-center">
                  Support Now
                </Link>
              </div>
            </div>

            {/* Adopt Option */}
            <div className="bg-surface-container-highest rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <h4 className="text-3xl font-headline font-extrabold mb-4">Adopt a Cow Virtually</h4>
                <p className="text-lg text-on-surface-variant mb-6">Receive monthly updates, photos, and a certificate of adoption for your chosen cow. A perfect gift for birthdays or anniversaries.</p>
                <div className="flex items-center gap-4 text-primary font-headline font-bold">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  80G Tax Exemption Available
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-md">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH8UM15q2Sdie5OU69BtAAmUL5UlhQ2y0QRVF58t1Hns5OFyMSixppfoziH_B8abp-aoiMUUgxUSHGofUWWJ3enRFJ-P5yhsC4Mvcf4LqkxzjBwW9cJqWD6VsxYxHb9bc8Q1qLvtoms1xITK-nm5BeMn3CUQAFHYtj0YVRGAIh6iinuQyQsIkdNpz41CRMYcIDv6HJdO2VaVIcjCRDUaa1EY_bzKq1AQPIKdFCZIxkgRYQ-xukU4t0GYodeE8Cs3BWEiiuTh8086xp"
                    alt="UPI QR Code"
                    width={128}
                    height={128}
                    className="grayscale opacity-80"
                  />
                </div>
                <p className="font-bold text-xs uppercase tracking-widest text-on-surface-variant">Scan to Pay via UPI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-sm font-headline font-bold text-primary uppercase tracking-[0.2em] mb-4">The Sanctuary</h2>
              <h3 className="text-4xl font-headline font-extrabold text-on-surface">Life at Dharma</h3>
            </div>
            <Link href="/gallery" className="text-primary font-headline font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Gallery <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="col-span-2 row-span-2 group overflow-hidden rounded-3xl relative h-[400px] md:h-auto">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7AmntwN6hZd7SU_nx9MZHp9zURwFCXdQEOnVSxxSpxxdFG2LyfrMnj1hmpTAibu0ZEbgBbvVXtmBJHH12-kQOjlfxaOfBEJmwTAhxpqpMf3l_Ekzn3-_jeI0f6pmiTUw9SR3eitK7rnozw3FIXkRbo78ti-0jYPlhjdQfZX2s2hO7ZhrR0Rb_2c6ju-8-XwKgCiZa-qHxrlbtS6GTNqEqtbsfDzuukgSzlOge5HTlu1PsQPqVk23qSpz4hGGNawdLJuMN5mKwcoxl"
                alt="Wide angle shot of a clean, modern cow shelter"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-headline font-bold text-xl">The Main Shelter Area</span>
              </div>
            </div>
            <div className="group overflow-hidden rounded-3xl relative h-48 md:h-64">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBZleRS-piKYbs4_G674JC4FbX2QEctPBfehuaSpt2S5Ml7OPudDMDHej4Nzg4qiEO69Jc8O5oRgQuzAd5iapeQWUDBXg3LtFPMG2-PMr-yjUvvluTvJLptwp7vYmPdFaCIYeWbFfMTQ7V44tv1-ffHH5kmLfl2exbW5pJLo6C9ubKRyN6c02ZB-YwIAaTWokwnWIK7dh8Q6F7KdzrxJRxwXf4HXEi_gmyia_DMR2OCi78-wqMwtNG8jpKti8Sta82sD29PNi3W-8i"
                alt="Cows crowding around for fodder"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="group overflow-hidden rounded-3xl relative h-48 md:h-64">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIAhi0kjCk_zEMv-v9mNQY3i_XcrATnvPB8XBrRMam-_jxdg-PmrHN_NjrRhaVI9TI65HbTVdEW9NjS3vKaU6EPcyC-H3OuBEDPY0W2zXrP2ZOMrOOUGL06y9RIFr_1FZ9xgtnwnlZGK4VwvhLd3XWioEUvVSuFLtEzBG-BGZHgUckXTgyf_KOgK53pEfCHu2awAw-aCp75gkCdYbg8RRZaX5VdlgWtf9cWzrJvlBMKNFKQFAPgBkOF57lGWyLdxA45UjXbFZpYyXm"
                alt="Close up of a cow"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="col-span-2 group overflow-hidden rounded-3xl relative h-48">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfTnXO-VWTVI_WHCqxI7A7ZIfdunfW3DVh4aQziGmLRlau-TKBsAQ8xam7WofbIZAjB6ifZG7h-KKyvJ8xMczBPvVXiSi1rd0ybKoku7bLsHQdRWWC6wG3SV11s_3-6m6Dz4K6BAzt-pbqTszaeJ857vcLjIObSH5yugmUKiDGMR_4efH4FYw_Ctlxi8RMICXYQ1aZ5UK6Hh7lk6PREdBvx1nsEJa3cOlLB0t__ZONhYzPF3N3i7d8A_5BIlh3iba-1Ae7L-bDFKrU"
                alt="Green agricultural field for cow fodder"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-16 h-16 mx-auto text-secondary/30 mb-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <h2 className="text-3xl font-headline font-bold text-on-surface mb-12">What Our Supporters Say</h2>
              <div className="space-y-8">
                <p className="text-2xl text-on-surface-variant font-medium leading-relaxed italic">
                  {`"The peace one finds here is beyond words. Their dedication to Gau Seva is unparalleled. I am proud to be part of this mission."`}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-surface-container-highest overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUyuBIOc_0eQwKHyHzi34pKNJTP69J2wPhAHsSpk56yaUcBh4nGUd25R4xtSXY590PY7oEfsaQNj_-4TgF8sNAiLCMkMwGKix1nkcs8sphMKXif1TSskzxpfkH_gudpjAjRWrVOV98yTcRSbgUbIpq7NNRZdqqG6gIFp0ybhcd2XKpDRg0t_v2LoGX-xYxLUmwwN-EW5PVbUo60-NpRAVmruWSlo33fORACjPePNzUPPRoJAzC3qa2PMAsbFCiufZ6rEMBqlCEP91s"
                      alt="Rajesh Khanna"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-on-surface">Rajesh Khanna</p>
                    <p className="text-sm text-on-surface-variant">Regular Donor, Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="bg-secondary p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-secondary mb-6">Be the Voice for the Voiceless</h2>
              <p className="text-secondary-container text-lg mb-10 leading-relaxed">
                Your contribution today can save a life tomorrow. Join us in this sacred journey of Gau Seva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donate" className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
                  Donate Now
                </Link>
                <Link href="/contact" className="bg-white/10 text-on-secondary border border-white/30 px-10 py-4 rounded-full font-bold text-lg backdrop-blur-sm hover:bg-white/20 transition-all">
                  Volunteer With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Preview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-surface-container-high rounded-[3rem] overflow-hidden grid md:grid-cols-2">
              <div className="p-12 md:p-16 space-y-8">
                <h2 className="text-4xl font-headline font-bold text-on-surface">Visit the Sanctuary</h2>
                <p className="text-on-surface-variant">We are open for visitors every day from 8:00 AM to 6:30 PM. Come experience the peace of Gau Seva firsthand.</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <div>
                      <p className="font-bold">Our Address</p>
                      <p className="text-on-surface-variant">Dharma Temple Road, Near Banyan Temple, Vrindavan, UP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <div>
                      <p className="font-bold">Phone Number</p>
                      <p className="text-on-surface-variant">+91 9876 543 210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-on-surface-variant">info@dharmasanctuary.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12 md:p-16 bg-surface-container-lowest">
                <h3 className="text-2xl font-headline font-bold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full p-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary transition-all" 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary transition-all" 
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">Message</label>
                    <textarea 
                      className="w-full p-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary transition-all" 
                      placeholder="Your message here..."
                      rows={4}
                    />
                  </div>
                  <button type="submit" className="w-full py-4 bg-primary text-on-primary rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  )
}
