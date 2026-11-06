import { ExternalLink } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../data/bhavnagriProduct';

export default function HowToEnjoy() {
  const rituals = [
    {
      step: '01',
      title: 'Tarela Marcha & Sambharo',
      gujarati: 'તરેલા મરચાં & સંભારો',
      occasion: 'Classic Saurashtra Breakfast',
      pairing: 'Fried Chillies + Mustard Papaya',
      description:
        'The iconic morning ritual across Gujarat. Crispy, golden gathiya is paired with salted fried green chillies and crunchy mustard raw papaya salad.',
      image: '/tarela-marcha-sambharo.jpg',
    },
    {
      step: '02',
      title: 'Hot Masala Chai Dunk',
      gujarati: 'ગરમા ગરમ કટિંગ ચા',
      occasion: 'The 2 Second Silk Melt',
      pairing: 'Steaming Cutting Masala Chai',
      description:
        'Thanks to its aerated, porous core and pure sing tel, Bhavnagri Gathiya absorbs hot tea in two seconds and melts like silk on the tongue.',
      image: '/bhavnagari-gathiya-bowl.webp',
    },
    {
      step: '03',
      title: 'Kathiyawadi Gathiya Nu Shaak',
      gujarati: 'ગાંઠિયાનું શાક',
      occasion: '5 Minute Gourmet Dinner',
      pairing: 'Curd Garlic Gravy and Bajra Rotlo',
      description:
        'Saurashtra’s beloved comfort food. Simmer gathiya for 2 minutes in a spiced garlic tomato raso for an instant, soul satisfying curry.',
      image: '/bhavnagari-thali.jpg',
    },
    {
      step: '04',
      title: 'Desi Street Bhel & Kadhi',
      gujarati: 'કાઠિયાવાડી ભેલ & કઢી',
      occasion: 'Crispy Evening Snacking',
      pairing: 'Fresh Lime, Onions and Kadhi',
      description:
        'Crush over sweet and tangy Gujarati Kadhi for an irresistible crunch, or toss with chopped onions, fresh coriander, and a squeeze of fresh lemon.',
      image: '/gathiya-pack-secondary.webp',
    },
  ];

  return (
    <section id="how-to-enjoy" className="py-10 sm:py-14 md:py-16 bg-[#FFFDF8] border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Elegant Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            How Gujarat Truly Enjoys <br />
            <span className="text-[#F28C28]">Bhavnagri Gathiya</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-2 leading-relaxed">
            Four timeless culinary rituals that celebrate the unique airy texture and Tellicherry pepper warmth of authentic Bhavnagri Gathiya (bhavnagrigathiya).
          </p>
        </div>

        {/* Official Bhavnagri Gathiya Heritage Promotional Banner with Product Link */}
        <div className="mb-8 sm:mb-10">
          <a
            href={PRODUCT_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Click to Buy Authentic Bhavnagri Gathiya on Bhagvat Prasadam"
            className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#E8DCC8] hover:border-[#E5A323] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
          >
            {/* Main High Resolution Banner Image */}
            <img
              src="/bhavnagri-banner.png"
              alt="Authentic Bhavnagri Gathiya, Crispy, Tasty, Traditional Gujarati Namkeen"
              className="w-full h-auto object-cover transform group-hover:scale-[1.012] transition-transform duration-700"
              loading="lazy"
            />

            {/* Subtle Warm Sheen Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Interactive Floating Buy Now Pill */}
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-xl bg-[#E5A323] group-hover:bg-[#F28C28] text-[#3B2418] group-hover:text-white font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-wider shadow-lg transition-all transform group-hover:scale-105">
                <span>Buy Now</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-85" />
              </span>
            </div>
          </a>
        </div>

        {/* 4 Clean Editorial Cards in a Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {rituals.map((item) => (
            <div
              key={item.step}
              className="group bg-white rounded-3xl border border-[#E8DCC8] p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Clean Photo Container (Informational / Lifestyle, No Link) */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FFF8E9] border border-[#E8DCC8]/60 mb-3.5 select-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Step Number Tag */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-lg bg-white/95 backdrop-blur-sm border border-[#E8DCC8] text-[#3B2418] font-black text-[11px] shadow-sm">
                    {item.step}
                  </div>
                </div>

                {/* Card Typography */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-bold text-[#A8681E] font-display">
                      {item.gujarati}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#7A5F4F] tracking-wide">
                      {item.occasion}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-base sm:text-lg text-[#3B2418] leading-snug">
                    {item.title}
                  </h3>

                  <div className="inline-block py-0.5 px-2 rounded-lg bg-[#FFF8E9] border border-[#E8DCC8] text-[10px] sm:text-[11px] text-[#7A5F4F] font-medium">
                    <strong className="text-[#3B2418]">Pairs with:</strong> {item.pairing}
                  </div>

                  <p className="text-xs text-[#5A3B2B] leading-relaxed pt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
