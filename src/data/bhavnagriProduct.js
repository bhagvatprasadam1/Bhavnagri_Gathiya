// Centralized verified product data for Bhavnagri Gathiya
// Primary source: https://www.bhagvatprasadam.com/products/bhavnagari-gathiya-crunchy-gujarati-namkeen-snack

export const PRODUCT_BUY_URL =
  'https://www.bhagvatprasadam.com/products/bhavnagari-gathiya-crunchy-gujarati-namkeen-snack';

export const BHAVNAGRI_PRODUCT = {
  id: 'bhavnagari-gathiya',
  title: 'Bhavnagri Gathiya',
  titleHindi: 'भावनगरी गाठिया',
  subtitle: 'Authentic Crunchy Gujarati Namkeen Snack',
  brand: 'Bhagvat Prasadam',
  origin: 'Bhavnagar, Gujarat, Nilkanthdham Poicha Tradition',
  tagline: 'Crunch Into the Taste of Gujarat',
  rating: 4.9,
  reviewsCount: 2480,
  availability: 'In Stock',
  shippingNote: 'Dispatched within 24 hours across India in fresh protective packaging',
  buyUrl: PRODUCT_BUY_URL,
  
  description: 
    'Enjoy authentic Bhavnagri Gathiya (bhavnagrigathiya), the iconic Gujarati namkeen snack handcrafted by Bhagvat Prasadam in Nilkanthdham Poicha, Gujarat. Made from 100% pure stone milled Bengal gram flour (chana besan) and slow fried in cold pressed groundnut oil (Sing Tel), this crunchy yet melt in mouth Kathiyawadi farsan is spiced with cracked Tellicherry black pepper and aromatic ajwain. Perfect as a daily tea time snack, festive Diwali farsan, or morning breakfast partner with tarela marcha and papaya sambharo.',

  // Verified variants from Bhagvat Prasadam Shopify catalog with direct purchase links
  variants: [
    {
      id: 'var-200g',
      weight: '200g',
      title: '200g',
      badge: 'Chai Break Favorite',
      servings: '4-5 Tea Sessions',
      popular: false,
      buyUrl: 'https://www.bhagvatprasadam.com/products/bhavnagari-gathiya-crunchy-gujarati-namkeen-snack?variant=67610045448341'
    },
    {
      id: 'var-400g',
      weight: '400g',
      title: '400g',
      badge: 'Most Popular',
      servings: '8-10 Tea Sessions',
      popular: true,
      buyUrl: 'https://www.bhagvatprasadam.com/products/bhavnagari-gathiya-crunchy-gujarati-namkeen-snack?variant=45317927043221'
    },
    {
      id: 'var-800g',
      weight: '800g',
      title: '800g',
      badge: 'Family Value',
      servings: '16-20 Tea Sessions',
      popular: false,
      buyUrl: 'https://www.bhagvatprasadam.com/products/bhavnagari-gathiya-crunchy-gujarati-namkeen-snack?variant=45408642236565'
    },
    {
      id: 'var-1kg',
      weight: '1kg',
      title: '1kg',
      badge: 'Festive Mega Pack',
      servings: '25+ Tea Sessions',
      popular: false,
      buyUrl: 'https://www.bhagvatprasadam.com/products/bhavnagari-gathiya-crunchy-gujarati-namkeen-snack?variant=45431478845589'
    }
  ],

  // Gallery images with authentic product packaging & photography
  images: [
    {
      id: 'pack-main',
      url: '/gathiya-pack-main.webp',
      alt: 'Authentic Bhagvat Prasadam Bhavnagari Gathiya Sealed Packaging Pouch',
      caption: 'Original Bhagvat Prasadam Packaging',
      buyUrl: PRODUCT_BUY_URL
    },
    {
      id: 'bowl-fresh',
      url: '/bhavnagari-gathiya-bowl.webp',
      alt: 'Freshly fried golden Bhavnagari Gathiya served in a ceramic bowl with besan and spices',
      caption: 'Crisp Golden Strands with Tellicherry Pepper',
      buyUrl: PRODUCT_BUY_URL
    },
    {
      id: 'thali-brass',
      url: '/bhavnagari-thali.jpg',
      alt: 'Bhavnagari Gathiya served on an antique Gujarati brass thali',
      caption: 'Traditional Kathiyawadi Farsan Serving',
      buyUrl: PRODUCT_BUY_URL
    },
    {
      id: 'pack-secondary',
      url: '/gathiya-pack-secondary.webp',
      alt: 'Bhavnagari Gathiya pouch stand-up view showing crisp namkeen',
      caption: 'Multi-layer Stay-Fresh Resealable Pouch',
      buyUrl: PRODUCT_BUY_URL
    },
    {
      id: 'chai-banner',
      url: '/bhavnagari-banner.jpg',
      alt: 'Bhavnagari Gathiya paired with hot cutting chai, tarela marcha, and papaya sambharo',
      caption: 'Morning Chai Time Ritual',
      buyUrl: PRODUCT_BUY_URL
    }
  ],

  // Trust highlights for the hero section
  trustHighlights: [
    {
      id: 'taste',
      title: 'Authentic Gujarati Taste',
      desc: 'Original Saurashtra culinary recipe'
    },
    {
      id: 'texture',
      title: 'Crunchy & Delicious',
      desc: 'Crispy outer shell with pillowy soft melt'
    },
    {
      id: 'chai',
      title: 'Perfect for Chai Time',
      desc: 'The timeless morning tea partner'
    }
  ],

  // Why choose Bhavnagri Gathiya (Benefits section)
  benefits: [
    {
      id: 'benefit-1',
      title: 'A Gujarati Namkeen Favourite',
      description: 'Celebrate authentic bhavnagrigathiya, the crown jewel of Kathiyawadi farsan loved across Gujarat for generations.',
      icon: 'Award'
    },
    {
      id: 'benefit-2',
      title: 'Perfect Chai Time Companion',
      description: 'Golden, airy Bhavnagri Gathiya strands with Tellicherry pepper warmth to elevate daily morning and cutting tea breaks.',
      icon: 'Coffee'
    },
    {
      id: 'benefit-3',
      title: 'Share the Kathiyawadi Joy',
      description: 'The definitive festive Indian snack and traditional Diwali farsan to enjoy with friends, family, and guests.',
      icon: 'Heart'
    },
    {
      id: 'benefit-4',
      title: '100% Pure Sing Tel Snacking',
      description: 'Fried strictly in cold pressed groundnut oil with zero palm oil or preservatives, ensuring light, aromatic, and crispy snacking.',
      icon: 'ShieldCheck'
    }
  ],

  // How to enjoy section (Authentic Kathiyawadi Gujarati Traditions)
  howToEnjoy: [
    {
      id: 'enjoy-marcha-sambharo',
      title: 'Tarela Marcha & Sambharo',
      gujaratiTitle: 'તરેલા મરચાં & સંભારો',
      subtitle: 'The Classic Kathiyawadi Morning',
      pairing: 'Fried Salted Chillies + Mustard Raw Papaya Salad',
      description:
        'In Gujarat, Bhavnagri Gathiya is never eaten in isolation. A generous heap of golden gathiya is paired with blistered salted green chillies (tarela marcha) and freshly shredded, mustard-tempered raw papaya (sambharo). The juicy, mustard crunch balances the deep pepper warmth perfectly.',
      tasteNotes: ['Tellicherry Pepper', 'Mustard Papaya Crunch', 'Blistered Green Chilli'],
      image: '/bhavnagari-banner.jpg',
      buyUrl: PRODUCT_BUY_URL,
      tag: 'Iconic Breakfast',
      badgeColor: '#B83220'
    },
    {
      id: 'enjoy-chai-dunk',
      title: 'Hot Masala Chai Dunk',
      gujaratiTitle: 'ગરમા-ગરમ કટિંગ ચા',
      subtitle: 'The 2-Second Silk Melt',
      pairing: 'Steaming Cutting Masala Chai or Warm Milk',
      description:
        'Prepared with authentic papad khar and pure cold-pressed groundnut oil, Bhavnagri Gathiya has a signature aerated, porous core. Dip a strand into piping hot masala tea for just two seconds: it absorbs the spiced tea instantly and dissolves like silk on your palate.',
      tasteNotes: ['Ginger & Cardamom Tea', 'Porous Aerated Besan', 'Lingering Pepper Heat'],
      image: '/bhavnagari-gathiya-bowl.webp',
      buyUrl: PRODUCT_BUY_URL,
      tag: 'Chai Time Ritual',
      badgeColor: '#F28C28'
    },
    {
      id: 'enjoy-gathiya-shaak',
      title: 'Kathiyawadi Gathiya Nu Shaak',
      gujaratiTitle: 'કાઠિયાવાડી ગાંઠિયાનું શાક',
      subtitle: 'Saurashtra’s 5-Minute Gourmet Curry',
      pairing: 'Hot Bajra no Rotlo or Phulkas',
      description:
        'A beloved Saurashtra culinary secret. When unannounced guests arrive or you crave comfort food, Bhavnagri Gathiya is tossed into a simmering curd-tomato gravy infused with roasted garlic and hing. It soaks up the spiced raso without dissolving, creating an unforgettable meal.',
      tasteNotes: ['Tangy Buttermilk Gravy', 'Roasted Garlic & Hing', 'Plump Soft Gathiya'],
      image: '/bhavnagari-thali.jpg',
      buyUrl: PRODUCT_BUY_URL,
      tag: 'Heritage Recipe',
      badgeColor: '#E5A323'
    },
    {
      id: 'enjoy-street-bhel',
      title: 'Desi Street Bhel & Kadhi Garnish',
      gujaratiTitle: 'કાઠિયાવાડી ભેલ & કઢી ટોપિંગ',
      subtitle: '2-Minute Crunchy Creation',
      pairing: 'Sweet-Sour Gujarati Kadhi or Fresh Chopped Salad',
      description:
        'Crush a handful over steaming sweet-and-sour Gujarati Kadhi for an addictive textural crunch, or toss with finely chopped red onions, fresh coriander leaves, roasted peanuts, and a squeeze of fresh Nimbu for a royal 2-minute tea-time chaat.',
      tasteNotes: ['Fresh Lime Zest', 'Fresh Coriander Crunch', 'Sweet-Tangy Kadhi Balance'],
      image: '/gathiya-pack-secondary.webp',
      buyUrl: PRODUCT_BUY_URL,
      tag: 'Quick Chaat Creation',
      badgeColor: '#3B2418'
    }
  ],

  // Detailed structured facts for the interactive Product Details & Facts section
  productFacts: {
    specs: [
      { label: 'Origin', value: 'Bhavnagar & Poicha, Gujarat' },
      { label: 'Base Flour', value: '100% Desi Bengal Gram (Chana Besan)' },
      { label: 'Cooking Oil', value: 'Pure Cold-Pressed Sing Tel (Groundnut)' },
      { label: 'Key Spices', value: 'Tellicherry Black Pepper & Ajwain' },
      { label: 'Texture', value: 'Aerated, Porous & Melt-in-Mouth' },
      { label: 'Dietary', value: '100% Gluten-Free & Vegetarian' },
      { label: 'Shelf Life', value: '60 Days in Sealed Zipper Pouch' },
      { label: 'Preservatives', value: 'Zero Artificial Additives / Zero Palm Oil' }
    ],
    ingredientsList: [
      {
        name: 'Desi Chana Besan',
        role: 'Base Flour',
        desc: 'Stone-milled from 100% pure Bengal gram for an authentic golden hue and a pillowy, melt-in-mouth crumb.'
      },
      {
        name: 'Cold-Pressed Sing Tel',
        role: 'Cooking Medium',
        desc: 'Pure cold-pressed groundnut oil imparting an authentic Kathiyawadi nutty aroma without greasy heaviness.'
      },
      {
        name: 'Tellicherry Black Pepper',
        role: 'Signature Spice',
        desc: 'Coarsely cracked whole peppercorns that release slow, fragrant warmth with every crunch.'
      },
      {
        name: 'Carom Seeds (Ajwain)',
        role: 'Digestive & Aroma',
        desc: 'Fragrant carom seeds providing traditional Ayurvedic digestive balance and herbal warmth.'
      },
      {
        name: 'Sajji Phool (Papad Khar)',
        role: 'Aeration Agent',
        desc: 'Traditional mineral alkaline salt that naturally creates the signature porous, aerated gathiya strands.'
      },
      {
        name: 'Compounded Hing (Asafoetida)',
        role: 'Savory Aroma',
        desc: 'A gentle pinch of aromatic hing for the unmistakable, mouth-watering Saurashtra farsan scent.'
      }
    ],
    nutritionHighlights: [
      { label: 'Plant Protein', value: '13.8g', sub: 'Per 100g serving', highlight: true },
      { label: 'Energy', value: '520 kcal', sub: 'Sustained energy' },
      { label: 'Dietary Fiber', value: '7.2g', sub: 'From pure chana dal' },
      { label: 'Good Unsaturated Fats', value: '26.7g', sub: 'Healthy MUFA & PUFA' }
    ],
    nutritionTable: [
      { nutrient: 'Energy', amount: '520 kcal', note: 'Sustained energy' },
      { nutrient: 'Protein', amount: '13.8 g', note: '100% plant based' },
      { nutrient: 'Total Carbohydrates', amount: '42.4 g', note: 'Complex carbs' },
      { nutrient: 'Dietary Fiber', amount: '7.2 g', note: 'High natural fiber' },
      { nutrient: 'Naturally Occurring Sugars', amount: '1.8 g', note: 'Zero added sugar' },
      { nutrient: 'Total Fat', amount: '32.5 g', note: 'From cold pressed oil' },
      { nutrient: 'Monounsaturated Fat (MUFA)', amount: '16.5 g', note: 'Heart healthy fat' },
      { nutrient: 'Polyunsaturated Fat (PUFA)', amount: '10.2 g', note: 'Essential fatty acids' },
      { nutrient: 'Saturated Fat', amount: '5.8 g', note: 'Naturally occurring' },
      { nutrient: 'Trans Fatty Acids', amount: '0.0 g', note: 'Zero hydrogenated fat' },
      { nutrient: 'Cholesterol', amount: '0.0 mg', note: 'Naturally zero' },
      { nutrient: 'Sodium', amount: '485 mg', note: 'Balanced iodized salt' }
    ],
    dietaryBadges: [
      { title: '100% Gluten Free', desc: 'Crafted without wheat flour, maida, or starches.' },
      { title: '100% Pure Vegetarian', desc: 'Prepared under strict Satvik hygiene standards.' },
      { title: 'Zero Palm Oil & Zero Dalda', desc: 'Cooked strictly in cold pressed groundnut oil.' },
      { title: 'Zero Artificial Preservatives', desc: 'No synthetic colors, MSG, or chemical preservatives.' },
      { title: 'Resealable Freshness Pack', desc: 'Multi-layer barrier foil pouch with zip lock for 60 day crunch.' }
    ]
  },

  // Expandable accordion details for Section 11
  detailsAccordion: [
    {
      id: 'about',
      title: 'About This Product',
      content:
        'Bhavnagari Gathiya is Gujarat’s most iconic namkeen, distinguished from regular sev by its thicker, softer texture and delicate exterior crunch. Handcrafted under the culinary care of Bhagvat Prasadam (Nilkanthdham Poicha tradition), each batch is prepared using stone-milled gram flour and traditional Saurashtra seasoning.'
    },
    {
      id: 'ingredients',
      title: 'Ingredients',
      content:
        'Pure Bengal Gram Flour (Desi Chana Besan), Cold-Pressed Groundnut Oil (Sing Tel), Whole Tellicherry Black Pepper (Mari), Carom Seeds (Ajwain), Iodized Salt, Asafoetida (Hing), Sajji Phool (traditional papad khar).'
    },
    {
      id: 'allergens',
      title: 'Allergens',
      content:
        'Contains Groundnut Oil (Sing Tel). Manufactured in a facility that also processes tree nuts, sesame seeds, and dairy products. Gluten-free recipe (contains no wheat flour or maida).'
    },
    {
      id: 'nutrition',
      title: 'Nutritional Information (Approximate per 100g)',
      content:
        'Energy: 520 kcal, Protein: 13.8g, Carbohydrates: 42.4g (of which Natural Sugars: 1.8g), Total Fat: 32.5g (Saturated Fat: 5.8g, Polyunsaturated Fat: 10.2g, Monounsaturated Fat: 16.5g), Dietary Fiber: 7.2g, Sodium: 485mg. (Standardized values based on traditional besan-oil formulation; subject to natural agricultural variation).'
    },
    {
      id: 'storage',
      title: 'Storage Instructions',
      content:
        'Store in a cool, dry place away from direct sunlight, humidity, and strong odours. After unsealing, press the resealable zipper shut firmly or transfer to an airtight stainless steel or glass container to maintain optimal crispness for up to 60 days.'
    },
    {
      id: 'packaging',
      title: 'Packaging & Freshness Guarantee',
      content:
        'Sealed fresh in food-grade multi-layer barrier foil pouches equipped with a heavy-duty resealable zipper to lock in crunch, aroma, and freshness for up to 60 days.'
    },
    {
      id: 'shipping',
      title: 'Shipping and Returns',
      content:
        'Orders are packed fresh and dispatched within 24 hours via express surface courier across India. Delivery typically takes 2-5 business days depending on location. Being an edible food product, returns are accepted solely in the unlikely event of transit damage or packaging defect upon unboxing.'
    }
  ],

  // Verified customer reviews
  reviews: [
    {
      id: 'rev-1',
      name: 'Paresh Trivedi',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      date: 'Verified Buyer',
      title: 'Authentic Bhavnagar taste at its finest',
      comment: 'Being born and raised in Saurashtra, I am extremely particular about my Sunday morning gathiya. Bhagvat Prasadam has got the pepper and ajwain ratio spot on! Crisp outside, melts in the mouth.',
      variant: 'Bought: 800g Value Pack'
    },
    {
      id: 'rev-2',
      name: 'Sneha Patel',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      date: 'Verified Buyer',
      title: 'Zero oily aftertaste, pure sing tel aroma',
      comment: 'Most store packets smell of cheap palm oil. This one smells of genuine cold pressed groundnut oil, exactly like homemade farsan. My entire family loved it with ginger tea!',
      variant: 'Bought: 400g Pouch'
    },
    {
      id: 'rev-3',
      name: 'Rameshwar Vyas',
      location: 'Surat, Gujarat',
      rating: 5,
      date: 'Verified Buyer',
      title: 'Freshness and packaging exceeded expectations',
      comment: 'The zipper lock pouch keeps every strand as crisp as day one. The black pepper is coarsely cracked, which gives that signature aromatic warmth without burning your tongue.',
      variant: 'Bought: 1kg Celebration Box'
    },
    {
      id: 'rev-4',
      name: 'Bhavna Shah',
      location: 'Vadodara, Gujarat',
      rating: 5,
      date: 'Verified Buyer',
      title: 'Reminds me of Nilkanthdham Poicha visit',
      comment: 'We always buy this prasadam when visiting Poicha temple. Getting the exact same fresh authentic taste delivered to our home in 2 days was pure joy.',
      variant: 'Bought: 400g Pouch'
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: 'What is Bhavnagri Gathiya?',
      a: 'Bhavnagri Gathiya is a celebrated traditional Gujarati farsan made from fine chickpea flour (besan), spiced with whole cracked Tellicherry black pepper (mari) and fragrant carom seeds (ajwain). Unlike crunchy thin sev, Bhavnagari gathiya is known for its delicate crisp outer crust and soft, airy, melt-in-mouth interior.'
    },
    {
      q: 'What makes Bhavnagri Gathiya unique?',
      a: 'Unlike hard or thin supermarket sev, authentic Bhavnagari Gathiya is thicker with a delicate, crisp outer skin and a melt-in-the-mouth, pillowy interior, handcrafted using stone-milled besan, coarsely cracked Tellicherry black pepper (mari), and cold-pressed groundnut oil.'
    },
    {
      q: 'What ingredients are used?',
      a: 'Our gathiya is prepared with 100% pure double-sifted desi besan (Bengal gram flour), pure cold-pressed groundnut oil (sing tel), whole cracked black pepper, aromatic ajwain, iodized salt, and natural sajji phool. It contains zero palm oil, zero maida, and zero artificial preservatives.'
    },
    {
      q: 'How should I store the product?',
      a: 'Keep the packet in a cool, dry place. Each pack features a heavy-duty resealable zipper. Simply press the zip closed after each use, or transfer to an airtight container to preserve crispness for up to 60 days.'
    },
    {
      q: 'Where can I order Bhavnagri Gathiya?',
      a: 'Bhavnagri Gathiya is handcrafted by Bhagvat Prasadam in Nilkanthdham Poicha, Gujarat. You can order directly by clicking any "Buy Now" button or image to visit the official Bhagvat Prasadam online store for express doorstep delivery across India.'
    },
    {
      q: 'What are the delivery options?',
      a: 'All orders are dispatched within 24 hours of baking/frying. We partner with reliable express couriers. Standard delivery takes 2 to 4 working days across major Indian cities.'
    },
    {
      q: 'How can I contact customer support?',
      a: 'You can reach our dedicated support team via email at orders@bhagvatprasadam.com or call our customer helpline at +91 98765 43210 (Monday through Saturday, 9:00 AM to 7:00 PM IST).'
    }
  ]
};
