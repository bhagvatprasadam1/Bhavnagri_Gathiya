import { CheckCircle2, ShieldCheck, Leaf, Activity, PackageCheck } from 'lucide-react';

export default function ProductDetailsAccordion() {
  const specs = [
    { label: 'Product Name', value: 'Bhavnagri Gathiya (bhavnagrigathiya)' },
    { label: 'Origin', value: 'Bhavnagar and Poicha, Gujarat' },
    { label: 'Base Flour', value: '100% Pure Bengal Gram (Chana Besan)' },
    { label: 'Cooking Oil', value: '100% Cold Pressed Groundnut Oil (Sing Tel)' },
    { label: 'Signature Spices', value: 'Whole Tellicherry Black Pepper and Ajwain' },
    { label: 'Dietary Standard', value: '100% Gluten Free and Pure Vegetarian' },
    { label: 'Shelf Life', value: '60 Days (in Sealed Zipper Pouch)' },
    { label: 'Oil Quality', value: 'Zero Palm Oil, Zero Vanaspati Dalda' },
  ];

  const nutritionData = [
    { name: 'Energy', value: '520 kcal' },
    { name: 'Protein', value: '13.8 g' },
    { name: 'Total Carbohydrates', value: '42.4 g' },
    { name: 'Dietary Fiber', value: '7.2 g', isSub: true },
    { name: 'Natural Sugars', value: '1.8 g', isSub: true },
    { name: 'Total Fat', value: '32.5 g' },
    { name: 'Unsaturated Fats (MUFA + PUFA)', value: '26.7 g', isSub: true },
    { name: 'Saturated Fat', value: '5.8 g', isSub: true },
    { name: 'Trans Fat', value: '0.0 g', isSub: true },
    { name: 'Sodium', value: '485 mg' },
  ];

  const ingredients = [
    'Pure Bengal Gram Flour (Desi Chana Besan)',
    'Cold Pressed Groundnut Oil (Sing Tel)',
    'Cracked Tellicherry Black Pepper (Mari)',
    'Carom Seeds (Ajwain)',
    'Traditional Papad Khar (Sajji Phool)',
    'Compounded Hing (Asafoetida)',
    'Iodized Salt',
  ];

  return (
    <section id="details" className="py-10 sm:py-14 md:py-16 bg-[#FFF8E9] border-b border-[#E8DCC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Clear Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
     
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#3B2418] tracking-tight">
            Bhavnagri Gathiya Details &amp; Facts
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Verified nutritional breakdown, 100% pure Sing Tel ingredients, and crispness storage facts for authentic Bhavnagri Gathiya.
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
          
          {/* COLUMN 1: Product Specifications & Ingredients */}
          <div className="space-y-4 sm:space-y-5">
            
            {/* Card 1: Specifications */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#E8DCC8]">
                <ShieldCheck className="w-5 h-5 text-[#E5A323]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                  Product Specifications
                </h3>
              </div>
              <div className="divide-y divide-[#E8DCC8]/50 text-xs sm:text-sm">
                {specs.map((item, idx) => (
                  <div key={idx} className="py-2 flex justify-between gap-4">
                    <span className="text-[#7A5F4F]">{item.label}</span>
                    <span className="font-bold text-[#3B2418] text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Ingredients */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#E8DCC8]">
                <Leaf className="w-5 h-5 text-[#2E7D32]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                  Ingredients
                </h3>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#3B2418] mb-3.5">
                {ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
              <div className="p-2.5 rounded-xl bg-[#FFF8E9] border border-[#E8DCC8] text-xs text-[#7A5F4F]">
                <strong>Allergen Advice:</strong> Contains Groundnut Oil (Sing Tel). 100% Gluten Free recipe (no wheat or maida).
              </div>
            </div>

          </div>

          {/* COLUMN 2: Nutrition Facts & Storage Guidelines */}
          <div className="space-y-4 sm:space-y-5">
            
            {/* Card 3: Nutrition Facts */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8DCC8]">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-[#B83220]" />
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                    Nutritional Facts
                  </h3>
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-[#7A5F4F]">Approx. Per 100g</span>
              </div>

              {/* 3 Quick Highlight Pills */}
              <div className="grid grid-cols-3 gap-2 mb-3.5">
                <div className="p-2 rounded-xl bg-[#FFF8E9] border border-[#E8DCC8] text-center">
                  <span className="block font-display font-black text-base sm:text-lg text-[#3B2418]">520</span>
                  <span className="text-[9px] sm:text-[10px] text-[#7A5F4F] uppercase font-bold">Calories (kcal)</span>
                </div>
                <div className="p-2 rounded-xl bg-[#FFF8E9] border border-[#E8DCC8] text-center">
                  <span className="block font-display font-black text-base sm:text-lg text-[#3B2418]">13.8g</span>
                  <span className="text-[9px] sm:text-[10px] text-[#7A5F4F] uppercase font-bold">Plant Protein</span>
                </div>
                <div className="p-2 rounded-xl bg-[#FFF8E9] border border-[#E8DCC8] text-center">
                  <span className="block font-display font-black text-base sm:text-lg text-[#3B2418]">0g</span>
                  <span className="text-[9px] sm:text-[10px] text-[#7A5F4F] uppercase font-bold">Trans Fat</span>
                </div>
              </div>

              {/* Nutrition Table */}
              <div className="divide-y divide-[#E8DCC8]/50 text-xs sm:text-sm">
                {nutritionData.map((row, idx) => (
                  <div key={idx} className="py-1.5 flex justify-between">
                    <span className={row.isSub ? 'pl-3 text-[#7A5F4F]' : 'font-medium text-[#3B2418]'}>
                      {row.name}
                    </span>
                    <span className="font-bold text-[#3B2418]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 4: Storage & Freshness */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#E8DCC8]">
                <PackageCheck className="w-5 h-5 text-[#F28C28]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                  Storage &amp; Freshness
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5A3B2B]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
                  <span><strong>Keep Sealed:</strong> Press the resealable zipper firmly shut after every use to lock out air and moisture.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
                  <span><strong>Cool and Dry:</strong> Store in a cool dry place away from direct sunlight, gas heat, and strong odors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
                  <span><strong>60 Day Crispness:</strong> For prolonged freshness, keep inside the original foil barrier pouch or an airtight container.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
