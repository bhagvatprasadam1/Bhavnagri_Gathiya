// Complete data specification for Bhagvat Prasadam Bhavnagari Gathiya
// Source: https://www.bhagvatprasadam.com/products/bhavnagari-gathiya-crunchy-gujarati-namkeen-snack

export const GATHIYA_PRODUCT = {
  id: 'bhavnagari-gathiya',
  title: 'Bhavnagari Gathiya',
  subtitle: 'Authentic Crunchy & Soft Gujarati Namkeen Snack',
  brand: 'Bhagvat Prasadam',
  origin: 'Bhavnagar, Gujarat (Nilkanthdham Poicha Tradition)',
  tagline: 'Crispy Outside. Pillowy Inside. Har Bite Mein Kathiyawadi Swag.',
  rating: 4.9,
  reviewsCount: 2480,
  verifiedBuyersCount: 18500,
  badge: 'Original Kathiyawadi Recipe',
  shelfLife: '60 Days Freshness Guaranteed in Resealable Zip Pouch',

  pricing: {
    basePrice: 110,
    mrp: 140,
    currency: '₹'
  },

  bundles: [
    {
      id: 'pack-250g',
      name: 'Trial Pack',
      weight: '250g',
      price: 110,
      originalPrice: 140,
      discountPercent: 21,
      badge: 'Chai Break Favorite',
      servings: '5-6 Tea Sessions',
      popular: false,
      freeShipping: false,
      description: 'Ideal for personal evening tea cravings or first-time crunchers.'
    },
    {
      id: 'pack-500g',
      name: 'Classic Zipper Pouch',
      weight: '500g',
      price: 210,
      originalPrice: 260,
      discountPercent: 19,
      badge: '⭐ MOST POPULAR',
      servings: '12-14 Tea Sessions',
      popular: true,
      freeShipping: false,
      description: 'Our signature heavy-duty zip pouch. Perfect for the daily family tea tin.'
    },
    {
      id: 'pack-1kg',
      name: 'Family Value Box',
      weight: '1kg (2 × 500g)',
      price: 399,
      originalPrice: 520,
      discountPercent: 23,
      badge: 'BEST VALUE • FREE DELIVERY',
      servings: '25+ Servings',
      popular: false,
      freeShipping: true,
      description: 'Save 23% and enjoy Free Express Delivery straight to your doorstep.'
    }
  ],

  images: {
    userBowl: '/bhavnagari-gathiya-bowl.webp',
    freshBowl: '/bhavnagari-gathiya-bowl.webp',
    banner: '/bhavnagari-banner.jpg',
    thali: '/bhavnagari-thali.jpg',
    chaiPairing: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=85'
  },

  ingredientsList: [
    {
      name: 'Desi Chana Besan',
      role: 'Fine Gram Flour',
      detail: '100% pure double-sifted Bengal gram flour. Zero maida, zero starch fillers, creating an airy, light dough.',
      highlight: 'High Plant Protein'
    },
    {
      name: 'Whole Tellicherry Mari',
      role: 'Coarse Black Pepper',
      detail: 'Whole peppercorns cracked daily into coarse granules. Delivers warm peppery aromatics that bloom gently on your palate.',
      highlight: 'Freshly Cracked'
    },
    {
      name: 'Fragrant Ajwain',
      role: 'Carom Seeds',
      detail: 'Cold-rubbed carom seeds that impart the iconic Bhavnagar farsan aroma and natural Ayurvedic digestive comfort.',
      highlight: 'Digestive Herb'
    },
    {
      name: 'Pure Sing Tel',
      role: 'Cold-Pressed Groundnut Oil',
      detail: 'Traditional Gujarat cooking oil. Clean, nutty fragrance, zero palm oil, zero trans fats, and zero greasiness.',
      highlight: '0% Palm Oil'
    }
  ],

  sensoryAnatomy: [
    {
      step: '01',
      title: 'Delicate Golden Outer Shell',
      description: 'A light, crumbly exterior fried for precisely 90 seconds in pure groundnut oil to lock in crispness without absorbing excess grease.',
      tag: 'Crispiness 10/10'
    },
    {
      step: '02',
      title: 'Airy, Pillowy Soft-Melt Core',
      description: 'Gram flour is hand-whipped with traditional sajji khar and water until the dough turns pillowy white, yielding an airy melt-in-the-mouth texture.',
      tag: 'Melt-in-Mouth Texture'
    },
    {
      step: '03',
      title: 'Coarse Tellicherry Black Mari',
      description: 'Freshly cracked whole black peppercorns (mari) provide subtle warmth that blooms on your palate without overpowering spice.',
      tag: 'Freshly Cracked Peppercorns'
    }
  ],

  pairingRituals: [
    {
      title: 'Tarela Marcha (Fried Chillies)',
      description: 'Green chillies lightly blistered in hot oil and tossed with roasted mustard seeds and sea salt.',
      icon: 'Flame'
    },
    {
      title: 'Kacha Papaya Sambharo',
      description: 'Crisp shredded green raw papaya warmed with turmeric, mustard seeds, and lemon juice.',
      icon: 'Salad'
    },
    {
      title: 'Garam Kadhi (Warm Besan Dip)',
      description: 'Sweet, sour, and mildly spiced Gujarati kadhi for the legendary Saurashtra Sunday breakfast.',
      icon: 'Soup'
    },
    {
      title: 'Kadak Masala Chai',
      description: 'Brewed with fresh ginger, crushed green cardamom, and full-cream milk.',
      icon: 'Coffee'
    }
  ],

  purityComparison: [
    {
      metric: 'Cooking Medium',
      bhagvat: '100% Pure Cold-Pressed Groundnut Oil (Sing Tel)',
      commercial: 'Cheap Palm Oil / Hydrogenated Vegetable Fats',
      isWinner: true
    },
    {
      metric: 'Base Flour',
      bhagvat: '100% Double-Sifted Desi Chana Besan (No Maida)',
      commercial: 'Besan mixed with Starch, Rice Flour or Refined Wheat',
      isWinner: true
    },
    {
      metric: 'Black Pepper (Mari)',
      bhagvat: 'Whole Tellicherry Peppercorns coarsely crushed daily',
      commercial: 'Commercial black pepper dust / synthetic flavouring',
      isWinner: true
    },
    {
      metric: 'Texture Quality',
      bhagvat: 'Authentic airy, crumbly soft-crust (Bhavnagar method)',
      commercial: 'Hard, rubbery or chalky bite',
      isWinner: true
    },
    {
      metric: 'Trans Fat & Preservatives',
      bhagvat: 'Zero Trans Fat • Zero Chemical Preservatives • Pure Satvik',
      commercial: 'Contains TBHQ, artificial emulsifiers & additives',
      isWinner: true
    }
  ],

  nutritionPer100g: [
    { label: 'Energy', value: '530 kcal' },
    { label: 'Plant Protein', value: '14.2 g' },
    { label: 'Carbohydrates', value: '41.5 g' },
    { label: 'Dietary Fiber', value: '8.4 g' },
    { label: 'Total Fats', value: '34.0 g' },
    { label: 'Trans Fats', value: '0.0 g' },
    { label: 'Cholesterol', value: '0.0 mg' },
    { label: 'Sodium', value: '680 mg' }
  ],

  faqs: [
    {
      q: 'Why is Bhavnagari Gathiya softer than regular sev or bhujia?',
      a: 'Bhavnagari Gathiya gets its legendary pillowy softness from an age-old Bhavnagar kneading technique where gram flour is rigorously hand-whipped with alkaline papad khar and water. This incorporates millions of tiny air micro-bubbles, making it light, airy, and gentle on the teeth unlike hard fried sev.'
    },
    {
      q: 'How long does it stay fresh after opening?',
      a: 'Our gathiya comes sealed in high-barrier resealable zip pouches. It stays fresh and perfectly crisp for 60 days. After opening the zipper, simply seal the pouch tightly or transfer to a dry steel container.'
    },
    {
      q: 'Is it very spicy?',
      a: 'No! Authentic Bhavnagari Gathiya does NOT use fiery red chillies. Its gentle warmth comes entirely from coarse black peppercorns (mari) and fragrant ajwain. It has a warming, peppery flavour that children and elders enjoy alike.'
    },
    {
      q: 'What oil is used for frying?',
      a: 'We strictly use 100% pure cold-pressed groundnut oil (Sing Tel), just like traditional Gujarati households. We never use cheap palm oil, cottonseed oil, or recycled fats.'
    }
  ],

  reviews: [
    {
      id: 1,
      author: 'Kishore Trivedi',
      location: 'Surat, Gujarat',
      rating: 5,
      date: '2 days ago',
      title: 'Pure Bhavnagar memory delivered home!',
      comment: 'Being born in Bhavnagar, I can vouch for the authenticity. The coarse mari (black pepper) hits just the right notes without being harsh, and that melt-in-the-mouth crumbly texture is unmatched. Finished the 500g pouch in 3 days!',
      verified: true,
      bundleBought: 'Classic Zipper Pouch (500g)'
    },
    {
      id: 2,
      author: 'Meera Patel',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      date: '1 week ago',
      title: 'Zero palm oil smell — pure groundnut oil bliss',
      comment: 'Most store-bought farsan leaves a greasy palm-oil coat on your tongue. Bhagvat Prasadam Bhavnagri Gathiya smells purely of besan, hing, and fresh sing tel. My grandfather loved the softness — he does not have to struggle chewing it at all.',
      verified: true,
      bundleBought: 'Family Value Box (1kg)'
    },
    {
      id: 3,
      author: 'Dr. Rajesh Solanki',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      date: '2 weeks ago',
      title: 'Our Sunday breakfast is incomplete without this',
      comment: 'Paired it with hot Gujarati kadhi and papaya sambharo on Sunday morning. Absolutely divine! Packaging is top-notch with a heavy-duty zipper.',
      verified: true,
      bundleBought: 'Classic Zipper Pouch (500g)'
    }
  ]
};
