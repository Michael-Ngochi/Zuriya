import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import aloe from "../../public/images/aloe.jpg";
import hands from "../../public/images/hands.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Zuriya</title>
        <meta
          name="description"
          content="Discover the story behind Zuriya, a Nairobi-born skincare brand dedicated to intentional beauty and self-care. Learn about our commitment to inclusivity, nature-inspired ingredients, and the art of mindful skincare rituals that empower you to celebrate your natural glow."
        />
        <link rel="canonical" href="/about" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6 text-center">
          <motion.h1
            style={{ fontFamily: "Italiana" }}
            className="md:text-9xl text-5xl text-primary mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-amber-50 font-sans text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            Zuriya was born in Nairobi from a desire to create beauty that feels
            intentional, not rushed. In a world that moves too quickly, we
            envisioned a brand that turns daily skincare into quiet moments of
            care.
          </motion.p>
        </div>
      </section>

      {/* Wave Divider with animation */}
      <motion.svg
        className="w-full h-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
      >
        <path
          fill="#1a2c1f"
          d="M0,192 C480,320 960,64 1440,192 L1440,0 L0,0 Z"
        ></path>
        <path
          fill="#a9954e"
          fillOpacity="0.3"
          d="M0,224 C480,352 960,96 1440,224 L1440,0 L0,0 Z"
        ></path>
      </motion.svg>

      {/* Story Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative bg-card rounded-3xl p-8 shadow-lg border border-muted overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-serif italic text-secondary text-xl mb-4">
              “True luxury is found in simplicity.”
            </p>
            <p className="font-sans md:text-lg leading-relaxed">
              Our story begins with a deep respect for nature. Inspired by
              remedies passed down through generations, we blend time-honored
              botanical wisdom with modern innovation. Each product is crafted
              with plant-powered ingredients, elegant textures, and minimalist
              design.
            </p>
          </motion.div>
          <motion.img
            src={aloe}
            alt="Botanical inspiration"
            className="rounded-3xl w-full h-auto object-cover shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* Inclusivity Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row gap-12 items-center">
          <motion.img
            src={hands}
            alt="Hands inclusivity"
            className="rounded-3xl md:w-1/2 h-auto object-cover shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="relative bg-card rounded-3xl p-8 shadow-lg border border-muted overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-serif italic text-secondary text-xl mb-4">
              “Beauty is about honoring who you already are.”
            </p>
            <p className="font-sans md:text-lg leading-relaxed">
              At Zuriya, inclusivity is at the heart of everything we do. We
              create for every complexion, every skin type, and every story. To
              us, beauty isn’t about transformation, it’s about celebrating your
              natural glow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <motion.section
        className="bg-gradient-to-r from-primary/10 via-card to-primary/10 py-24 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 space-y-8">
          <p className="font-sans md:text-xl leading-relaxed max-w-3xl mx-auto">
            Every jar, every bottle, and every ritual we share carries the same
            promise: to empower you to care for yourself with intention. When
            you choose Zuriya, you choose more than skincare—you choose a
            reminder to pause, breathe, and celebrate the glow that begins
            within.
          </p>
          <p className="font-serif text-3xl md:text-4xl text-secondary italic">
            Zuriya Cosmetics. Where Beauty Begins.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default About;
