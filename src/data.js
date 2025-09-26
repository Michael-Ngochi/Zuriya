export const featuredProducts = [

    {id: 1, name: "Radiance Serum", description: "Glow in every drop.", image: "img11"},
    {id: 2, name: "Hydrate+ Cream", description: "Deep hydration for radiant skin.", image: "img11"},
    {id: 3, name: "SunShield SPF 30", description: "Protect and glow all day.", image: "img11"},
    {id: 4, name: "Refresh Mist", description: "Instant refreshment on the go.", image: "img11"},
    {id: 5, name: "Gell Cleanser", description: "Pure and gentle cleansing.", image: "img11"},
]


export const products = [
  {
    id: 1,
    name: "Radiance Serum",
    slug: "radiance-serum",
    type: "Dropper Bottle",
    tagline: "Glow-boosting Vitamin C + Botanicals",
    size: "30ml / 1 fl. oz.",
    price: 3200,
    shortDescription: "Brightens dull skin and evens tone with Vitamin C, Hyaluronic Acid, and Aloe Vera.",
    fullDescription: "Our Radiance Serum is designed to revive tired skin with a potent yet gentle blend of Vitamin C and plant-powered hydration. Aloe Vera calms irritation, while Hyaluronic Acid locks in moisture. With consistent use, your skin appears brighter, smoother, and naturally luminous.",
    keyIngredients: ["Vitamin C", "Hyaluronic Acid", "Aloe Vera"],
    image: "/images/products/radiance-serum.png",
    showcaseImage: "/images/showcase/radiance-serum-scene.png"
  },
  {
    id: 2,
    name: "Purifying Gel Cleanser",
    slug: "purifying-gel-cleanser",
    type: "Pump Bottle",
    tagline: "Gentle daily face wash with Green Tea",
    size: "150ml / 5 fl. oz.",
    price: 2500,
    shortDescription: "A refreshing gel cleanser that removes impurities without stripping skin.",
    fullDescription: "Infused with Green Tea and Aloe, our Purifying Gel Cleanser gently lifts away dirt, oil, and makeup while maintaining your skin’s natural balance. Its lightweight foam texture leaves your skin feeling clean, refreshed, and ready for the next step of your ritual.",
    keyIngredients: ["Green Tea", "Aloe Vera", "Chamomile"],
    image: "/images/products/purifying-cleanser.png",
    showcaseImage: "/images/showcase/purifying-cleanser-scene.png"
  },
  {
    id: 3,
    name: "Hydrate+ Cream",
    slug: "hydrate-plus-cream",
    type: "Cream Jar",
    tagline: "Deep hydration with Shea & Rosehip",
    size: "50ml / 1.7 fl. oz.",
    price: 3600,
    shortDescription: "A rich cream that deeply nourishes and restores skin barrier health.",
    fullDescription: "Our Hydrate+ Cream blends Shea Butter and Rosehip Oil with modern humectants to provide lasting hydration. It smooths dry patches, restores skin elasticity, and protects against environmental stressors — leaving your complexion plump and radiant.",
    keyIngredients: ["Shea Butter", "Rosehip Oil", "Glycerin"],
    image: "/images/products/hydrate-cream.png",
    showcaseImage: "/images/showcase/hydrate-cream-scene.png"
  },
  {
    id: 4,
    name: "SunShield SPF 30",
    slug: "sunshield-spf-30",
    type: "Squeeze Bottle",
    tagline: "Broad-spectrum lightweight protection",
    size: "100ml / 3.4 fl. oz.",
    price: 2800,
    shortDescription: "A fast-absorbing, non-greasy sunscreen that protects against UVA/UVB rays.",
    fullDescription: "SunShield SPF 30 is your daily defense against sun damage, crafted for lightweight wear. Infused with Aloe and Vitamin E, it shields your skin from harmful rays while keeping it hydrated and soothed. Perfect for daily use under makeup or alone.",
    keyIngredients: ["Zinc Oxide", "Vitamin E", "Aloe Vera"],
    image: "/images/products/sunshield-spf30.png",
    showcaseImage: "/images/showcase/sunshield-scene.png"
  },
  {
    id: 5,
    name: "Refresh Mist",
    slug: "refresh-mist",
    type: "Spray Bottle",
    tagline: "Hydrating toner with Cucumber & Sage",
    size: "100ml / 3.4 fl. oz.",
    price: 2200,
    shortDescription: "A cooling facial mist that tones, hydrates, and refreshes anytime.",
    fullDescription: "Refresh Mist is a versatile skin savior. With Cucumber, Sage, and Witch Hazel, it balances and tones the skin while delivering instant hydration. Perfect as a midday pick-me-up, post-cleanse toner, or on-the-go skin refresher.",
    keyIngredients: ["Cucumber", "Sage", "Witch Hazel"],
    image: "/images/products/refresh-mist.png",
    showcaseImage: "/images/showcase/refresh-mist-scene.png"
  }
];


export const bundles = [
  {
    id: "b1",
    name: "Morning Ritual Set",
    tagline: "Cleanse, protect, and glow through your day.",
    price: 4800, // discounted vs individual
    shortDescription: "A duo designed for fresh mornings: cleanser + SPF.",
    fullDescription: "The Morning Ritual Set pairs our Purifying Gel Cleanser with SunShield SPF 30 for the perfect start to your day. Begin with a refreshing cleanse, then protect your skin from UV rays with our lightweight, non-greasy sunscreen.",
    items: [2, 4], // product IDs
    image: "/images/bundles/morning-ritual.png",
    showcaseImage: "/images/showcase/morning-ritual-scene.png"
  },
  {
    id: "b2",
    name: "Evening Ritual Set",
    tagline: "Restore and hydrate overnight.",
    price: 7200,
    shortDescription: "Serum, cream, and mist to nourish your skin before bed.",
    fullDescription: "The Evening Ritual Set layers our Radiance Serum, Hydrate+ Cream, and Refresh Mist for ultimate overnight repair. Brighten, hydrate, and lock in moisture while you rest — wake up with a naturally refreshed glow.",
    items: [1, 3, 5],
    image: "/images/bundles/evening-ritual.png",
    showcaseImage: "/images/showcase/evening-ritual-scene.png"
  },
  {
    id: "b3",
    name: "Complete Zuriya Ritual",
    tagline: "The full collection in one bundle.",
    price: 12900,
    shortDescription: "Experience every Zuriya product for a complete self-care ritual.",
    fullDescription: "The Complete Zuriya Ritual includes all five of our signature products. From daily cleansing to sun protection and deep hydration, this bundle lets you experience the full power of plant-powered skincare in a cohesive ritual.",
    items: [1, 2, 3, 4, 5],
    image: "/images/bundles/complete-ritual.png",
    showcaseImage: "/images/showcase/complete-ritual-scene.png"
  }
];


export const ritualBundles = [
  {
    id: "r1",
    name: "Morning Glow Bundle",
    tagline: "Start your day with clarity and protection.",
    price: 7800,
    shortDescription: "Cleanser, serum, and SPF for a radiant morning routine.",
    fullDescription: "The Morning Glow Ritual pairs gentle cleansing with brightening and daily sun defense. Ideal for busy mornings, it leaves your skin refreshed, glowing, and protected from harmful UV rays.",
    items: [2, 1, 4], // cleanser, serum, SPF
    image: "/images/bundles/morning-glow.png",
    showcaseImage: "/images/showcase/morning-glow-scene.png",
    recommendedOn: "morning" // link to rituals page section
  },
  {
    id: "r2",
    name: "Evening Repair Bundle",
    tagline: "Reset and restore overnight.",
    price: 9200,
    shortDescription: "Cleanse, hydrate, and refresh for healthy evening repair.",
    fullDescription: "This set layers a cleanser, serum, cream, and hydrating mist for complete nighttime nourishment. It resets your skin barrier, repairs daily stress, and ensures you wake up with a refreshed glow.",
    items: [2, 1, 3, 5],
    image: "/images/bundles/evening-repair.png",
    showcaseImage: "/images/showcase/evening-repair-scene.png",
    recommendedOn: "evening"
  },
  {
    id: "r3",
    name: "Hydration Boost Bundle",
    tagline: "Anytime skin refresh.",
    price: 5200,
    shortDescription: "A weekend or midday duo for deep hydration.",
    fullDescription: "Pair our Refresh Mist with Hydrate+ Cream for an instant surge of hydration. Perfect for self-care days, travel, or whenever your skin needs a quick reset.",
    items: [5, 3],
    image: "/images/bundles/hydration-boost.png",
    showcaseImage: "/images/showcase/hydration-boost-scene.png",
    recommendedOn: "selfcare"
  },
  {
    id: "r4",
    name: "Complete Ritual Collection",
    tagline: "The ultimate Zuriya experience.",
    price: 12900,
    shortDescription: "Every step of skincare in one set.",
    fullDescription: "Our complete ritual includes all five Zuriya products for a full daily routine. From cleansing to hydration and sun protection, it’s your all-in-one plant-powered skincare journey.",
    items: [1, 2, 3, 4, 5],
    image: "/images/bundles/complete-ritual.png",
    showcaseImage: "/images/showcase/complete-ritual-scene.png",
    recommendedOn: "all"
  }
];


export const ritualsContent = [
  {
    id: "r1",
    name: "Morning Glow Ritual",
    description:
      "Awaken your senses with a refreshing three-step ritual designed to brighten and protect. The Morning Glow Ritual blends gentle cleansing with a boost of radiance and lightweight sun protection. Perfect for busy mornings, it sets the tone for a day where your skin feels fresh, glowing, and shielded from the elements.",
    steps: [
      "Cleanse. Begin with the Purifying Gel Cleanser to wash away overnight buildup, leaving your skin balanced and clear.",
      "Brighten. Apply 3–4 drops of the Radiance Serum while skin is still slightly damp for deeper absorption and glow.",
      "Protect. Finish with SunShield SPF30, a weightless shield against UV rays that keeps your skin safe all day."
    ],
    proTip:
      "Massage the cleanser for 60 seconds to activate the botanicals and boost circulation.",
    price: 7800,
    cta: "Shop Morning Ritual →"
  },
  {
    id: "r2",
    name: "Evening Repair Ritual",
    description:
      "Unwind at the end of the day with a four-step ritual crafted to restore balance and nourish deeply. The Evening Repair Ritual works overnight, layering hydration and renewal to repair daily stress. Wake up to skin that feels replenished, calm, and naturally radiant.",
    steps: [
      "Cleanse. Melt away makeup and impurities with the Purifying Gel Cleanser.",
      "Repair. Press in the Radiance Serum to support skin renewal and even tone.",
      "Hydrate. Smooth on Hydrate+ Cream to lock in nourishment overnight.",
      "Refresh. Mist with the Refresh Mist before bed for calming hydration that seals your routine."
    ],
    proTip:
      "Layer mist → serum → cream to maximize absorption and strengthen your barrier.",
    price: 9200,
    cta: "Shop Evening Ritual →"
  },
  {
    id: "r3",
    name: "Hydration Boost Ritual",
    description:
      "For moments when your skin craves an instant reset, the Hydration Boost Ritual delivers comfort in two simple steps. Whether it’s after a workout, during a long day, or while traveling, this ritual provides a surge of moisture that leaves skin soft, plump, and refreshed.",
    steps: [
      "Refresh — Spritz the Refresh Mist whenever your skin feels tight, dull, or fatigued.",
      "Deep Hydrate — Seal in moisture with Hydrate+ Cream for a smooth, dewy finish."
    ],
    proTip:
      "Keep the mist in your bag for on-the-go hydration throughout the day.",
    price: 5200,
    cta: "Shop Hydration Ritual →"
  },
  {
    id: "r4",
    name: "Complete Ritual Collection",
    description:
      "Experience the full Zuriya journey with all five essentials in one collection. From your first morning cleanse to your evening hydration boost, the Complete Ritual Collection ensures every step of your routine is intentional, plant-powered, and nourishing.",
    steps: [
      "Morning: Cleanse → Serum → SPF",
      "Evening: Cleanse → Serum → Mist → Cream",
      "Anytime: Mist + Cream for hydration boost"
    ],
    proTip:
      "Alternate between misting and layering cream to adjust hydration levels based on your skin’s needs.",
    price: 12900,
    cta: "Shop Complete Ritual →"
  }
];


