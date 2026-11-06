import { ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../data/bhavnagriProduct';

export default function BrandStory() {
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="story" className="py-10 sm:py-14 md:py-16 bg-[#FFF8E9] relative overflow-hidden border-b border-[#E8DCC8]">
      {/* Background Subtle Ambient Shape */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E5A323]/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT: Large Lifestyle Food Image with Chai (Clickable Buy Links) */}
          <div className="lg:col-span-6 relative">
            <a
              href={PRODUCT_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to Buy Authentic Bhavnagri Gathiya"
              className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] w-full max-w-lg bg-white block group cursor-pointer"
            >
              <img
                src="/bhavnagari-banner.jpg"
                alt="Traditional Bhavnagri Gathiya served with hot masala tea, fried green chillies, and papaya sambharo"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </a>

            {/* Inset Plate (Clickable Buy Link) */}
            <a
              href={PRODUCT_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to Buy Bhavnagri Gathiya"
              className="absolute -bottom-4 -right-2 sm:-right-4 w-36 sm:w-48 aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white hidden sm:block bg-white hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src="/bhavnagari-thali.jpg"
                alt="Antique brass thali of farsan"
                className="w-full h-full object-cover"
              />
            </a>
          </div>

          {/* RIGHT: Heading, Description & Supporting Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
         

            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#3B2418] tracking-tight leading-[1.1] mb-3.5">
              A Little Taste of Gujarat: <br />
              <span className="text-[#F28C28]">Authentic Bhavnagri Gathiya.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#3B2418]/85 leading-relaxed mb-3 font-normal">
              From everyday morning cutting chai breaks to festive family gatherings, Bhavnagri Gathiya (bhavnagrigathiya) is the undisputed heart of authentic Gujarati food culture.
            </p>

            <p className="text-xs sm:text-sm text-[#3B2418]/70 leading-relaxed mb-5">
              In Bhavnagar and the revered spiritual kitchen of Nilkanthdham Poicha, master farsan karigars have spent generations perfecting the secret texture that makes authentic Bhavnagri Gathiya namkeen legendary. Hand-pressed through traditional perforated brass ladles into gently bubbling cold pressed groundnut oil (Sing Tel), each strand achieves an airy, crisp exterior and a melt in mouth core fragrant with Tellicherry black pepper and ajwain.
            </p>

            {/* Supporting Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E8DCC8] shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <h3 className="font-display font-bold text-sm text-[#3B2418]">Pure Sing Tel (Groundnut Oil)</h3>
                </div>
                <p className="text-xs text-[#7A5F4F]">
                  Traditional cooking oil delivering a rich nutty aroma and zero palm oil heaviness.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E8DCC8] shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-[#B83220] shrink-0" />
                  <h3 className="font-display font-bold text-sm text-[#3B2418]">Ayurvedic Spices</h3>
                </div>
                <p className="text-xs text-[#7A5F4F]">
                  Coarsely cracked Tellicherry black pepper and cold rubbed carom seeds for gentle digestion.
                </p>
              </div>
            </div>

            {/* Direct Action Buttons with Buy Now */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PRODUCT_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Buy Now</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo('product-showcase')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#E8DCC8]/50 text-[#3B2418] border border-[#E8DCC8] font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
              >
                <span>Explore Product</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
