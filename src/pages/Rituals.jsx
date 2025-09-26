import { React, useState, useRef,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ritualsHero from "../../public/images/ritualsHero.png";
import { ritualBundles, ritualsContent } from "@/data";
import { ImLeaf } from "react-icons/im";
import { FaShoppingBasket } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AddToCartButton from "@/components/AddToCartButton";

const Rituals = () => {
  const [bundle, setBundle] = useState(ritualBundles[0]);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Use setTimeout to ensure element is rendered
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0); // or a slightly higher delay like 100ms if needed
    }
  }, [location]);





  const handleBundleChange = (id) => {
    const selectedBundle = ritualBundles.find((bundle) => bundle.id === id);
    setBundle(selectedBundle);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 80 } 
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, type: "spring", stiffness: 80 } 
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Refs for scroll detection
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <>
      <Helmet>
        <title>Rituals | Zuriya</title>
        <meta
          name="description"
          content="Discover Zuriya's Rituals: curated skincare bundles designed to elevate your daily self-care routine. Each ritual combines our best products to nourish, protect, and enhance your skin's natural beauty. Embrace the art of skincare with Zuriya's thoughtfully crafted rituals."
        />
        <link rel="canonical" href="/rituals" />
      </Helmet>

      <motion.div
        ref={heroRef}
        className="flex flex-col md:grid grid-cols-2 gap-4 items-center justify-between mt-5 text-center lg:px-50 px-5"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <motion.div variants={fadeInUp}>
          <motion.h2
            style={{ fontFamily: "Italiana" }}
            className="z-0 text-primary text-5xl md:text-9xl"
            variants={fadeInUp}
          >
            Rituals
          </motion.h2>
          <motion.p
            className="text-balance md:text-2xl lg:text-3xl"
            variants={fadeInUp}
          >
            Skincare is not a checklist it’s a pause, a breath, a moment for you. Zuriya rituals guide you through gentle steps that bring balance, glow, and intention to your day.
          </motion.p>
        </motion.div>
        <motion.img
          className="w-auto md:w-150 border-2 border-b-5 border-l-3 border-primary rounded-tl-full rounded-br-full"
          src={ritualsHero}
          alt=""
          variants={scaleIn}
        />
      </motion.div>

      <div className="flex flex-col items-center justify-center text-center my-10">
        {ritualsContent.map((ritual, index) => {
          const ritualRef = useRef(null);
          const ritualInView = useInView(ritualRef, { once: true, amount: 0.3 });

          return (
            <motion.div
              key={ritual.id}
              id={ritual.id}
              ref={ritualRef}
              style={index % 2 === 0 ? { direction: "ltr" } : { direction: "rtl" }}
              className="flex-col md:grid grid-cols-2 gap-4 items-center justify-between text-center lg:px-50 px-5 my-10"
              initial="hidden"
              animate={ritualInView ? "visible" : "hidden"}
              variants={staggerChildren}
            >
              <motion.img
                className="rounded-t-full border-5 border-primary w-auto md:w-150"
                src="https://placehold.co/400"
                alt=""
                variants={scaleIn}
              />
              <motion.div
                className="text-left bg-gradient-to-t from-card rounded-b-3xl p-3"
                style={{ direction: "ltr" }}
                variants={fadeInUp}
              >
                <motion.h2
                className="text-3xl font-serif my-2"
                  variants={fadeInUp}
                >
                  {ritual.name}
                </motion.h2>
                <motion.p
                  style={{ direction: "ltr" }}
                  className="text-left text-xl"
                  variants={fadeInUp}
                >
                  {ritual.description}
                </motion.p>
                <Dialog>
                    <DialogTrigger asChild>
                    <div>
                      <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button
                          onClick={() => handleBundleChange(ritual.id)}
                          style={{ direction: "ltr" }}
                          className="border-1 border-b-4 border-l-2 py-1 px-4 rounded-tl-full rounded-br-full border-primary hover:bg-primary hover:text-black font-bold flex items-center gap-2 text-primary"
                        >
                          Get ritual bundle <FaShoppingBasket />
                        </button>
                      </motion.div>
                    </div>
                  </DialogTrigger>
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                    >
                      <DialogContent className="bg-white/15 backdrop-blur border-0 border-white/30 shadow-lg">
                        <DialogTitle className="hidden">Your ritual bundle</DialogTitle>
                        <DialogHeader>
                          <motion.div
                            className="relative border-2 self-center border-primary rounded-2xl w-auto m-4 overflow-clip"
                            variants={fadeInUp}
                          >
                            <div className="overflow-clip">
                              <img
                                className="transition-transform duration-300 ease-in-out hover:scale-110"
                                src="https://placehold.co/400"
                                alt={bundle.name}
                              />
                            </div>
                            <motion.div
                              className="flex text-left flex-col bg-card text-card-foreground px-2 pt-2"
                              variants={fadeInUp}
                            >
                              <h2 className="text-2xl font-serif">{bundle.name}</h2>
                              <p className="text-muted-foreground">{bundle.shortDescription}</p>
                              <span className="text-xl font-serif">Ksh {bundle.price}</span>
                              <div className="flex gap-3 flex-row">
                                <AddToCartButton item={bundle} type="bundle"className="my-2"/>
                              </div>
                            </motion.div>
                          </motion.div>
                          <DialogDescription className="text-white text-center text-balance">
                            {bundle.fullDescription}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </motion.div>
                  </AnimatePresence>
                </Dialog>

                <Accordion style={{ direction: "ltr" }} type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <motion.span
                        className="text-xl"
                        whileHover={{ scale: 1.05 }}
                      >
                        View steps
                      </motion.span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <motion.ol
  style={{ direction: "ltr" }}
  className="list-decimal list-inside text-lg"
  variants={staggerChildren}
  initial="hidden"
  animate="visible"
>
  {ritual.steps.map((step, index) => (
    <motion.li
      key={index}
      className="text-left my-2 text-muted-foreground"
      variants={fadeInUp}
    >
      {step}
    </motion.li>
  ))}
</motion.ol>

                      <motion.p
                        style={{ fontFamily: "Amaranth", direction: "ltr" }}
                        className="flex text-left md:text-lg italic my-5"
                        variants={fadeInUp}
                      >
                        <ImLeaf className="text-primary text-2xl" />
                        Pro Tip: {ritual.proTip}
                      </motion.p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Rituals;