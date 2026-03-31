import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Grass, Stethoscope, Home as HomeIcon } from "lucide-react"

export const metadata = {
  title: "धर्म सैंक्चुअरी - गौ सेवा ही सच्ची सेवा है",
  description: "हमारी गौशाला एक सुरक्षित ठिकाना है जहाँ हम बीमार, बूढ़ी और परित्यक्त गायों की करुणा और भक्ति के साथ सेवा करते हैं।"
}

export default function HindiHomePage() {
  return (
    <>
      <Navbar lang="hi" />
      <main className="pt-20 pb-16 md:pb-0">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWg7Myun7eysDC-0OlYNnImRq7GKvctayRMbr9wviKPs6Pdav0fFNfB7C6Y7Zua8ZMP5kTkydoKzwJDSNXjEzQANFlV_5TR70zG3PFKEMkXQjTUBZClZVyGFs84d_YbbSNk5FcIFEbgU1VuX0LmVtQLQchDnLkKUo6uPFjXdENoDJe42u8iW-3LZ6NVIVklPehCd---qpJ4tsRRZoAcXc-sGFIvfGWcwusTdUW432t38lJ-qzmUFOUgxf81-IBpcbu_w3uJ5ximhKk"
              alt="peaceful close-up of a healthy indian cow grazing in a lush green meadow"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
          </div>
          <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase">सनातन धर्म और सेवा</span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-tight">
                गौ सेवा ही <br/><span className="text-secondary">सच्ची सेवा है</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                हमारी गौशाला एक सुरक्षित ठिकाना है जहाँ हम बीमार, बूढ़ी और परित्यक्त गायों की करुणा और भक्ति के साथ सेवा करते हैं। इस पवित्र कार्य में हमारे साथ जुड़ें।
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/donate" className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                  सहयोग दें
                </Link>
                <Link href="/gallery" className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-colors flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  हमारी कहानी देखें
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-tertiary-container/30 rounded-full blur-3xl" />
              <div className="relative rounded-[3rem] shadow-2xl border-[12px] border-surface-container-lowest overflow-hidden h-[500px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtgsNih7bpDNHEqJ9IIIgCQAXhosz01tpKWyooSINB6kqFBzAj_s1rI-J1IfLUvR8AtyWEDQM82YkY6UcFUcbrjv0K2IbK3-llXFiOPF13It_BFDwmRxwtXnIZAF3TezLfYbw_qh37WOZ0FVzrawKqMdCq8Gt68ult39hAbbH5Bk9tZSKOPhBsyJe_N8SdC0wfK_Wo-CFtbSIseTIfQ0mrMj6mOJF5C8-buc4Ft1GvohN6AJTbhoxmbcbaLwPdWao-eSQDY2-7wL6Q"
                  alt="beautiful traditional indian gaushala with cows resting peacefully"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-on-secondary">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">५००+ गायें</p>
                  <p className="text-xs text-on-surface-variant">सुरक्षित और सुखी</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-[2.5rem] flex flex-col justify-center border border-outline-variant/10">
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">हमारी सांख्यिकी</h2>
                <p className="text-on-surface-variant">पिछले एक दशक से, हम बेसहारा गौवंश के लिए समर्पित हैं। हर दान एक जीवन को बचाता है और एक पवित्र परंपरा को जीवंत रखता है।</p>
              </div>
              <div className="bg-primary-container/20 p-10 rounded-[2.5rem] text-center flex flex-col items-center justify-center border border-primary-container/20">
                <span className="text-5xl font-headline font-extrabold text-primary mb-2">१२+</span>
                <span className="text-sm font-bold uppercase tracking-widest text-on-primary-container">वर्षों का अनुभव</span>
              </div>
              <div className="bg-secondary-container/20 p-10 rounded-[2.5rem] text-center flex flex-col items-center justify-center border border-secondary-container/20">
                <span className="text-5xl font-headline font-extrabold text-secondary mb-2">१५००+</span>
                <span className="text-sm font-bold uppercase tracking-widest text-on-secondary-container">बचाई गई गायें</span>
              </div>
              <div className="bg-tertiary-container/20 p-10 rounded-[2.5rem] text-center flex flex-col items-center justify-center border border-tertiary-container/20">
                <span className="text-5xl font-headline font-extrabold text-tertiary mb-2">१००%</span>
                <span className="text-sm font-bold uppercase tracking-widest text-on-tertiary-container">पारदर्शिता</span>
              </div>
              <div className="md:col-span-3 bg-surface-container-lowest p-2 rounded-[2.5rem] overflow-hidden relative group">
                <div className="relative w-full h-48 rounded-[2.4rem] overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcS9hV17TzhlyfcdMTKL1uUhhmSekqD-KJZqFNVqh3vwpcSCvnPY2AA4kMzm6O5MwSMukqTsfz7cLGpK9bHmnIDPyabad5K1-43QSRCaMA6P1sXCxQhcAqAyyn2tEk5xVpFVmNhKVCmywEdxbxVTOU6OrTqaF8CZKvgsQc8z9pJ_dn_zwaGGY09FLWUlJchsdKlVIbpE9rH_R_pMxcE7akNit-jA3HqC7gChLsISE00YeqV40gq3_zgf1iUfvpArpSlJ7l5OjxN71o"
                    alt="sunset over tranquil countryside farm with cows"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">मर्यादा और करुणा का संगम</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-high rounded-[4rem] relative z-10 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAOO4lYmTzTJ8pfnQbP6BMnuCC7w_iOI9BIz7x9gyYlom1Bh11gaGsVHO6fdxJyAOcFX7c3YyTjRIqfD-zUjjGnPnAoIqEVnX4OdaNdLiUBK0sxAGbOacKfQvH0AKkIc0PyJrGp7aprbpuxxFOK45mTM0PhtG17AwVv1H3Uc04o9FvPp0sKpC9cXG3CAWm-cnUNQ6cCDP1R7Hx5DYDlXxv20vevxwRX6vwrsAaJaK27P6ytogcisZsLi8PyT5qDfGddk_8OlFH-zhb"
                  alt="portrait of a serene elder indian man with a white beard"
                  fill
                  className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full z-0" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-headline font-bold text-on-surface leading-tight">संस्थापक की कहानी: <span className="text-primary">एक संकल्प की यात्रा</span></h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                धर्म सैंक्चुअरी की शुरुआत एक छोटे से संकल्प से हुई थी—कि कोई भी गाय भूख से या सड़क पर तड़पकर नहीं मरेगी। स्वामी जी के मार्गदर्शन में, यह आज एक विशाल परिवार बन चुका है।
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed italic">
                {`"जब हम एक गाय की रक्षा करते हैं, तो हम वास्तव में अपनी संस्कृति और भविष्य की रक्षा कर रहे होते हैं।"`}
              </p>
              <div className="pt-6">
                <Link href="/about" className="text-primary font-bold flex items-center gap-2 group">
                  पूरी कहानी पढ़ें 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">दान के विकल्प</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">आपकी छोटी सी मदद हमारे गौवंश के जीवन में बड़ा बदलाव ला सकती है। अपनी इच्छानुसार योगदान चुनें।</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Option 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-outline-variant/10 group">
                <div className="w-16 h-16 bg-secondary-container/30 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                  <Grass className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-3">चारा और पोषण</h3>
                <p className="text-on-surface-variant mb-6">एक गाय के एक दिन के पौष्टिक चारे और पानी का खर्च उठाएं।</p>
                <div className="text-2xl font-headline font-bold text-primary mb-6">₹ ५०१ <span className="text-sm font-medium text-on-surface-variant">/ प्रतिदिन</span></div>
                <Link href="/donate" className="block w-full py-4 bg-surface-container-high rounded-full font-bold text-primary hover:bg-primary hover:text-on-primary transition-all text-center">सहयोग दें</Link>
              </div>
              {/* Option 2 (Featured) */}
              <div className="bg-primary-container p-8 rounded-[2rem] shadow-2xl scale-100 md:scale-105 relative z-10 text-on-primary-container border border-primary/20">
                <div className="absolute -top-4 right-8 bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">सर्वाधिक लोकप्रिय</div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-on-primary-container">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">चिकित्सा देखभाल</h3>
                <p className="mb-6 opacity-90">बीमार और घायल गायों के लिए दवाइयां और डॉक्टर की सेवाओं में मदद करें।</p>
                <div className="text-2xl font-headline font-bold mb-6">₹ २,१०० <span className="text-sm font-medium opacity-70">/ चिकित्सा किट</span></div>
                <Link href="/donate" className="block w-full py-4 bg-surface-container-lowest rounded-full font-bold text-primary shadow-lg active:scale-95 transition-all text-center">अभी योगदान करें</Link>
              </div>
              {/* Option 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-outline-variant/10 group">
                <div className="w-16 h-16 bg-tertiary-container/30 rounded-2xl flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-3">आश्रय निर्माण</h3>
                <p className="text-on-surface-variant mb-6">गायों के रहने के लिए सुरक्षित और आरामदायक शेड के निर्माण में सहायता दें।</p>
                <div className="text-2xl font-headline font-bold text-primary mb-6">₹ ५,००० <span className="text-sm font-medium text-on-surface-variant">/ एक हिस्सा</span></div>
                <Link href="/donate" className="block w-full py-4 bg-surface-container-high rounded-full font-bold text-primary hover:bg-primary hover:text-on-primary transition-all text-center">सहयोग दें</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">हमारी गैलरी</h2>
                <p className="text-on-surface-variant">गायों के सुखद जीवन की कुछ झलकियाँ।</p>
              </div>
              <Link href="/gallery" className="bg-surface-container-high px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
                सभी फोटो देखें <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/></svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="col-span-2 row-span-2 relative h-[400px] md:h-auto rounded-[2rem] overflow-hidden shadow-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBZleRS-piKYbs4_G674JC4FbX2QEctPBfehuaSpt2S5Ml7OPudDMDHej4Nzg4qiEO69Jc8O5oRgQuzAd5iapeQWUDBXg3LtFPMG2-PMr-yjUvvluTvJLptwp7vYmPdFaCIYeWbFfMTQ7V44tv1-ffHH5kmLfl2exbW5pJLo6C9ubKRyN6c02ZB-YwIAaTWokwnWIK7dh8Q6F7KdzrxJRxwXf4HXEi_gmyia_DMR2OCi78-wqMwtNG8jpKti8Sta82sD29PNi3W-8i"
                  alt="joyful portrait of several brown cows crowding around for fodder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-[2rem] overflow-hidden shadow-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIAhi0kjCk_zEMv-v9mNQY3i_XcrATnvPB8XBrRMam-_jxdg-PmrHN_NjrRhaVI9TI65HbTVdEW9NjS3vKaU6EPcyC-H3OuBEDPY0W2zXrP2ZOMrOOUGL06y9RIFr_1FZ9xgtnwnlZGK4VwvhLd3XWioEUvVSuFLtEzBG-BGZHgUckXTgyf_KOgK53pEfCHu2awAw-aCp75gkCdYbg8RRZaX5VdlgWtf9cWzrJvlBMKNFKQFAPgBkOF57lGWyLdxA45UjXbFZpYyXm"
                  alt="gentle close up of a cow"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-[2rem] overflow-hidden shadow-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfTnXO-VWTVI_WHCqxI7A7ZIfdunfW3DVh4aQziGmLRlau-TKBsAQ8xam7WofbIZAjB6ifZG7h-KKyvJ8xMczBPvVXiSi1rd0ybKoku7bLsHQdRWWC6wG3SV11s_3-6m6Dz4K6BAzt-pbqTszaeJ857vcLjIObSH5yugmUKiDGMR_4efH4FYw_Ctlxi8RMICXYQ1aZ5UK6Hh7lk6PREdBvx1nsEJa3cOlLB0t__ZONhYzPF3N3i7d8A_5BIlh3iba-1Ae7L-bDFKrU"
                  alt="lush green agricultural field"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 aspect-[2/1] relative rounded-[2rem] overflow-hidden shadow-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY6U-xh16KFJjqh5X-bZ5Jr3QoDRqRvcoeX0IxtcpQGv0mNgCvE5FBoNIYB6h1XtJ-dNDzMQcMnB33Qo8UqQxhS0qmF-zJPt26e1qVzJstCWE5DWFz2BY9taQCZt8eASvTA_h4eoRvp3qnLWzOBEUCne17ANcano8v1lsvciSk2wKk1pIGHoDcI5Lgc5XpkOP3oLbXdPGlavxC0epORkaj2Nw5qUtZwnfqPno-Kegila3FUDXjlIl9iMIJkLZZMApfUIxtH7MtTttf"
                  alt="wide shot of many healthy cows resting"
                  fill
                  className="object-cover"
                />
              </div>
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
              <h2 className="text-3xl font-headline font-bold text-on-surface mb-12">दानदाताओं के अनुभव</h2>
              <div className="space-y-8">
                <p className="text-2xl text-on-surface-variant font-medium leading-relaxed italic">
                  {`"यहाँ आकर जो शांति मिलती है, वह शब्दों में बयां नहीं की जा सकती। गौ सेवा के प्रति इनका समर्पण अतुलनीय है। मुझे खुशी है कि मैं इस मिशन का हिस्सा हूँ।"`}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-surface-container-highest overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUyuBIOc_0eQwKHyHzi34pKNJTP69J2wPhAHsSpk56yaUcBh4nGUd25R4xtSXY590PY7oEfsaQNj_-4TgF8sNAiLCMkMwGKix1nkcs8sphMKXif1TSskzxpfkH_gudpjAjRWrVOV98yTcRSbgUbIpq7NNRZdqqG6gIFp0ybhcd2XKpDRg0t_v2LoGX-xYxLUmwwN-EW5PVbUo60-NpRAVmruWSlo33fORACjPePNzUPPRoJAzC3qa2PMAsbFCiufZ6rEMBqlCEP91s"
                      alt="राजेश खन्ना"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-on-surface">राजेश खन्ना</p>
                    <p className="text-sm text-on-surface-variant">नियमित दानदाता, दिल्ली</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-surface-container-high rounded-[3rem] overflow-hidden grid md:grid-cols-2">
              <div className="p-12 md:p-16 space-y-8">
                <h2 className="text-4xl font-headline font-bold text-on-surface">हमसे संपर्क करें</h2>
                <p className="text-on-surface-variant">क्या आपके पास कोई प्रश्न है या आप हमारी गौशाला में आना चाहते हैं? हमें संदेश भेजें।</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <div>
                      <p className="font-bold">हमारा पता</p>
                      <p className="text-on-surface-variant">१२३, धर्म मार्ग, ऋषिकेश, उत्तराखंड - २४९२०१</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <div>
                      <p className="font-bold">फ़ोन नंबर</p>
                      <p className="text-on-surface-variant">+९१ १८०० १२३ ४५६७</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <div>
                      <p className="font-bold">ईमेल</p>
                      <p className="text-on-surface-variant">info@dharmasanctuary.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12 md:p-16 bg-surface-container-lowest">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">आपका नाम</label>
                    <input type="text" className="w-full p-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary transition-all" placeholder="अपना नाम लिखें"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">ईमेल</label>
                    <input type="email" className="w-full p-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary transition-all" placeholder="example@email.com"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">संदेश</label>
                    <textarea className="w-full p-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary transition-all" placeholder="आपका संदेश यहाँ लिखें..." rows={4}></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-primary text-on-primary rounded-full font-bold shadow-lg hover:shadow-xl transition-all">संदेश भेजें</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="hi" />
    </>
  )
}
