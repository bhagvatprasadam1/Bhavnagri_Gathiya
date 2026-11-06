import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../data/bhavnagriProduct';

export default function HeroSection() {
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-4 pb-8 sm:pt-8 sm:pb-12 md:pb-16 bg-[#FFF8E9] bg-subtle-pattern overflow-hidden border-b border-[#E8DCC8]"
    >
      {/* Background Soft Atmospheric Glows with Animated Breathing Effect */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-2 sm:top-10 right-0 w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] rounded-full bg-gradient-to-br from-[#E5A323]/30 to-[#F28C28]/25 blur-2xl sm:blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -bottom-10 left-0 w-[240px] sm:w-[450px] h-[240px] sm:h-[450px] rounded-full bg-[#E5A323]/25 blur-2xl sm:blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Message, Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
       


            {/* Main Heading */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#3B2418] mb-3.5">
              Crunch Into Authentic <br />
              <span className="text-[#F28C28] inline-block relative">
                Bhavnagri Gathiya.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#E5A323]"
                  height="10"
                  viewBox="0 0 240 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7C65 2 175 2 237 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#3B2418]/85 leading-relaxed max-w-xl mb-5">
              Discover the irresistible crunch of authentic Bhavnagri Gathiya (bhavnagrigathiya), Gujarat's most beloved tea time namkeen snack. Handcrafted in 100% pure cold pressed groundnut oil (Sing Tel) with stone milled Bengal gram besan, whole Tellicherry black pepper, and fragrant ajwain for the legendary melt in mouth Saurashtra crunch.
            </p>

       

            {/* Primary & Secondary CTAs with Direct BUY NOW */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href={PRODUCT_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 sm:py-3.5 px-6 sm:px-7 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Buy Now</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo('product-showcase')}
                className="py-3 sm:py-3.5 px-6 sm:px-7 rounded-2xl bg-white hover:bg-[#E8DCC8]/50 text-[#3B2418] border border-[#E8DCC8] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

         
          </motion.div>

          {/* RIGHT COLUMN: Realistic Bhavnagri Gathiya Product Presentation with Responsive Animated Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0 py-8 sm:py-10 lg:py-4 px-2"
          >
            {/* Animated Atmospheric Glow & Orbital Rings Behind Hero Image (Fully Visible on Small and Large Screens) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
              {/* 1. Breathing Golden Radiant Halo - Highly visible on mobile and desktop */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.65, 0.95, 0.65],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-[320px] h-[320px] xs:w-[370px] xs:h-[370px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tr from-[#E5A323]/50 via-[#F28C28]/40 to-[#FFD572]/50 blur-2xl sm:blur-3xl"
              />

              {/* 2. Primary Rotating Concentric Dashed Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute w-[310px] h-[310px] xs:w-[360px] xs:h-[360px] sm:w-[420px] sm:h-[420px] lg:w-[470px] lg:h-[470px] rounded-full border-2 border-dashed border-[#E5A323]/50"
              />

              {/* 3. Counter-Rotating Inner Dotted Accent Ring (Clean artisan ring, without any badges or sparkles) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute w-[260px] h-[260px] xs:w-[310px] xs:h-[310px] sm:w-[370px] sm:h-[370px] lg:w-[410px] lg:h-[410px] rounded-full border border-dotted border-[#F28C28]/40"
              />

              {/* 4. Floating Warm Amber Ambient Light Orbs - Clearly visible around the card on small screens */}
              <motion.div
                animate={{
                  y: [-12, 12, -12],
                  x: [-6, 6, -6],
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.5, 0.85, 0.5],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 right-1 xs:right-4 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F28C28]/35 blur-xl"
              />
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  x: [6, -6, 6],
                  scale: [1, 1.15, 1],
                  opacity: [0.45, 0.8, 0.45],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
                className="absolute -bottom-4 left-1 xs:left-4 sm:left-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E5A323]/40 blur-xl"
              />
            </div>

            {/* Main Product Showcase Card: Packaging (Clickable Image Link) with Gentle Levitation */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-20 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white"
            >
              <a
                href={PRODUCT_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to Buy Bhavnagri Gathiya on Bhagvat Prasadam"
                className="relative block bg-gradient-to-b from-[#FFFDF8] via-[#FFF8E9] to-[#FFF3DC] p-4 sm:p-6 text-center group cursor-pointer overflow-hidden"
              >
                {/* Internal Animated Warm Aura behind Product Pack */}
                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.35, 0.7, 0.35],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-64 h-56 sm:h-64 rounded-full bg-gradient-to-tr from-[#E5A323]/25 via-[#F28C28]/20 to-transparent blur-2xl pointer-events-none"
                />

                {/* Internal Subtle Sunlight Sweep */}
                <motion.div
                  animate={{
                    opacity: [0.15, 0.35, 0.15],
                    x: ['-20%', '20%', '-20%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/35 to-transparent pointer-events-none"
                />

                <img
                  src="/gathiya-pack-main.webp"
                  alt="Authentic Bhagvat Prasadam Bhavnagri Gathiya (bhavnagrigathiya) Sealed Pouch"
                  className="relative z-10 w-full max-h-[250px] xs:max-h-[280px] sm:max-h-[320px] object-contain mx-auto transform group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  loading="eager"
                />
              </a>
            </motion.div>

            {/* Floating Brass Thali Inset (Clickable Image Link) with Gentle Responsive Float */}
            <motion.a
              href={PRODUCT_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to Buy Bhavnagri Gathiya"
              animate={{
                y: [4, -4, 4],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute -bottom-3 -left-2 sm:-left-4 z-25 w-20 xs:w-24 sm:w-32 h-20 xs:h-24 sm:h-32 rounded-2xl overflow-hidden shadow-lg border-3 sm:border-4 border-white hover:scale-105 transition-transform cursor-pointer block"
            >
              <img
                src="/bhavnagari-thali.jpg"
                alt="Traditional Kathiyawadi Gujarati farsan thali with Bhavnagri Gathiya namkeen"
                className="w-full h-full object-cover"
              />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
