import React from "react";
import aloe from "../../public/images/aloe.jpg";
import hands from "../../public/images/hands.png";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl mb-6 text-primary text-center">
        About Us
      </h1>

      {/* Hero section with overlay */}
      <div
        className="relative h-72 md:h-96 bg-cover bg-center rounded-2xl overflow-hidden border-b-4 border-primary"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <p className="text-center text-amber-50 font-sans md:text-2xl max-w-2xl leading-relaxed">
            Zuriya was born in Nairobi from a desire to create beauty that feels
            intentional, not rushed. In a world that moves too quickly, we
            envisioned a brand that turns daily skincare into quiet moments of
            care.
          </p>
        </div>
      </div>

      {/* Story section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
        <p className="font-sans md:text-2xl leading-relaxed">
          Our story begins with a deep respect for nature. Inspired by remedies
          passed down through generations, we blend time-honored botanical
          wisdom with modern innovation. Each product is crafted with
          plant-powered ingredients, elegant textures, and minimalist design
          because true luxury is found in simplicity.
        </p>
        <img
          src={aloe}
          alt="Botanical inspiration"
          className="rounded-3xl w-full h-auto object-cover"
        />
      </div>

      {/* Inclusivity section */}
      <div className="flex flex-col-reverse md:flex-row gap-12 items-center my-20">
        <img
          src={hands}
          alt="Hands inclusivity"
          className="rounded-3xl md:w-1/2 h-auto object-cover"
        />
        <p className="font-sans md:text-2xl leading-relaxed">
          At Zuriya, inclusivity is at the heart of everything we do. We create
          for every complexion, every skin type, and every story. To us, beauty
          isn’t about transformation, it’s about honoring who you already are.
        </p>
      </div>

      {/* Closing statement */}
      <div className="text-center space-y-6">
        <p className="font-sans md:text-xl leading-relaxed max-w-2xl mx-auto">
          Every jar, every bottle, and every ritual we share carries the same
          promise: to empower you to care for yourself with intention. When you
          choose Zuriya, you choose more than skincare, you choose a reminder to
          pause, breathe, and celebrate the glow that begins within.
        </p>
        <p className="font-serif text-2xl text-secondary">
          Zuriya Cosmetics. Where Beauty Begins.
        </p>
      </div>
    </div>
  );
};

export default About;
