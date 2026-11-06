import { useState } from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { BHAVNAGRI_PRODUCT, PRODUCT_BUY_URL } from '../data/bhavnagriProduct';

export default function ProductShowcase() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="product-showcase" className="py-10 sm:py-14 md:py-16 bg-white relative border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight">
            Authentic Bhavnagri Gathiya Showcase
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Original Kathiyawadi recipe handcrafted in 100% pure Sing Tel and nitrogen-sealed in stay-fresh zipper barrier packaging.
          </p>
        </div>

        {/* 2-Column Split: Gallery Left, Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: Product Gallery (All Clickable with Buy Links) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Preview with Buy Link */}
            <a
              href={PRODUCT_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to Buy Bhavnagri Gathiya on Bhagvat Prasadam"
              className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#FFF8E9] border-2 border-[#E8DCC8] shadow-md group cursor-pointer block"
            >
              <img
                src={BHAVNAGRI_PRODUCT.images[activeImageIndex].url}
                alt={BHAVNAGRI_PRODUCT.images[activeImageIndex].alt}
                className="w-full h-full object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
              />
            </a>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
              {BHAVNAGRI_PRODUCT.images.map((img, idx) => {
                const isActive = activeImageIndex === idx;
                return (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    title={img.caption}
                    className={`aspect-square rounded-xl overflow-hidden bg-[#FFF8E9] border-2 transition-all cursor-pointer p-1 relative group ${
                      isActive
                        ? 'border-[#E5A323] ring-2 ring-[#E5A323]/50 shadow-sm'
                        : 'border-[#E8DCC8] opacity-75 hover:opacity-100 hover:border-[#3B2418]/40'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Product Information & Key Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-start text-left">
            
            {/* Brand & Hindi Title */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-[#F28C28] uppercase tracking-wider">
                {BHAVNAGRI_PRODUCT.brand}
              </span>
              <span className="text-xs font-medium text-[#7A5F4F]">
                ({BHAVNAGRI_PRODUCT.titleHindi})
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight mb-2">
              {BHAVNAGRI_PRODUCT.title} <span className="text-xl sm:text-2xl text-[#A8681E] font-normal">({BHAVNAGRI_PRODUCT.titleHindi})</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-semibold text-[#F28C28] mb-3">
              {BHAVNAGRI_PRODUCT.subtitle}, Authentic Kathiyawadi Farsan
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#3B2418]/80 leading-relaxed mb-4">
              {BHAVNAGRI_PRODUCT.description}
            </p>

            {/* Key Quality & Craft Highlights */}
            <div className="rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] p-4 sm:p-5 space-y-2.5 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3B2418] block border-b border-[#E8DCC8]/60 pb-1.5">
                Authentic Recipe Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#3B2418]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>100% Pure Sing Tel (Groundnut Oil)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Double Sifted Desi Bengal Gram Besan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Tellicherry Black Pepper and Ajwain</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Zero Palm Oil, Zero Preservatives</span>
                </div>
              </div>
            </div>

            {/* PROMINENT DIRECT BUY NOW BUTTON */}
            <div className="space-y-2.5 mb-4">
              <a
                href={PRODUCT_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Buy Now on Bhagvat Prasadam</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-75" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo('details')}
                className="w-full py-2.5 px-6 rounded-xl bg-white hover:bg-[#FFF8E9] text-[#3B2418] border border-[#E8DCC8] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Full Ingredients &amp; Specifications</span>
              </button>
            </div>

          

          </div>

        </div>
      </div>
    </section>
  );
}
