import { Button } from "@/components/ui/button";
import React from "react";
import img11 from "../../public/images/img11.png";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { featuredProducts } from "@/data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Labeledimage from "@/components/Labeledimage";

function Home() {
  return (
    <>
<div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Top section left */}
      <div className="flex flex-col gap-6 p-8 pl-15 h-full justify-center bg-gradient-to-r from-black/100 to-black/0">
        {/* Hero text */}
        <motion.div
          className="flex flex-col gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          <motion.h1
            style={{ fontFamily: "italiana" }}
            className="text-primary font-medium text-5xl md:text-7xl lg:text-9xl"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            Where beauty begins
          </motion.h1>

          <motion.h3
            className="text-emerald-50 font-sans text-lg md:text-xl lg:text-2xl max-w-2xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            Plant-powered skincare crafted with elegance and intention. Discover
            rituals that celebrate your natural glow.
          </motion.h3>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex gap-3 flex-col sm:flex-row"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.5 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <Button style={{ width: "15rem",height:"3rem" }}>Explore Products</Button>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <Button style={{ width: "15rem",height:"3rem" }} variant="outline">Learn Our Story</Button>
          </motion.div>
        </motion.div>
      </div>
    </div>

 {/*Brand promise section */}
 <Card className="my-10 mx-3 bg-card ">
      <CardHeader className="px-6 pt-6 border-primary border-2">
        <CardTitle className="text-3xl font-bold text-center">Beauty is more than skin deep. It’s ritual, not routine</CardTitle>
      </CardHeader>
    </Card>

{/* Featured Products Section */}
<div className="md:my-10  lg:mx-30 w-max-full overflow-hidden">
    <h2 style={{fontFamily:"italiana"}} className="text-4xl font-bold text-center mb-6">Featured Products</h2>
    <Carousel className="relative bg-card p-4 rounded-lg overflow-hidden">
  <CarouselContent className="">
    {/* Map through featuredProducts to create CarouselItems */ }
    {featuredProducts.map((product) => (
      <CarouselItem key={product.id}>
        <Labeledimage title={product.name} description={product.description} src={img11} />
      </CarouselItem>
    ))}
    
  </CarouselContent>
  <CarouselPrevious className="lg:w-20 lg:h-20 absolute left-3 top-1/2 -translate-y-1/2 z-10"/>
  <CarouselNext  className="lg:w-20 lg:h-20 absolute right-3 top-1/2 -translate-y-1/2 z-10" />
</Carousel>
</div>

{/* Rituals and Ingredients Story */}
<div className="my-16 mx-4 md:mx-25 grid grid-cols-1 md:grid-cols-2 gap-8">
  <Card className="bg-card shadow-md hover:shadow-lg transition-all p-6 rounded-xl">
    <CardTitle>
      <h3 className="text-2xl font-serif text-foreground mb-3">Rituals</h3>
    </CardTitle>
    <p className="text-muted-foreground mb-6">
      Self-care is not routine, it’s ritual. From morning cleanses to evening hydration, 
      Zuriya fits effortlessly into your day.
    </p>
    <button className="inline-block px-5 py-2 rounded-lg bg-accent border-1 border-primary font-medium tracking-wide hover:bg-primary text-accent-foreground transition-colors">
      Learn More
    </button>
  </Card>

  <Card className="bg-card shadow-md hover:shadow-lg transition-all p-6 rounded-xl">
    <h3 className="text-2xl font-serif text-foreground mb-3">Ingredients</h3>
    <p className="text-muted-foreground">
      Our products are dermatologically tested, made with natural ingredients, 
      and proudly crafted in Nairobi.
    </p>
  </Card>
</div>

{/* Closing section with CTA */}
<div>
  <Card className="my-10 mx-3 bg-muted bg-card">
      <CardHeader className="mx-5 md:mx-50 mt-4 px-6 pt-6 border-primary border-2">
        <CardTitle className="text-3xl font-bold text-center">Ready to elevate your skincare ritual?</CardTitle>
        <CardDescription className="text-center mb-4">Discover the balance between elegance and nature. Start your journey with Zuriya today.</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center pb-6 mt-4">
        <Button style={{width:"10rem"}}>Shop Now</Button>
      </CardFooter>
    </Card>
</div>
 </>
  );
}

export default Home;
