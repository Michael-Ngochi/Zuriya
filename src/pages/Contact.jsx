import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact us | Zuriya</title>
        <meta
          name="description"
          content="Demo contact page for Zuriya Cosmetics. Reach out to Michael Ngochi for inquiries about getting a similar website designed."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-serif text-primary mb-6"
        >
          We’d love to hear from you
        </motion.h1>

        {/* Subtext */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
>
  This is a <strong>demo contact page</strong> for{" "}
  <span className="font-serif text-primary">Zuriya Cosmetics</span>.
  Messages sent here will not be delivered. If you’d like a website like
  this built for your own brand or business, please reach out using{" "}
  <a href="#links" className="text-primary underline hover:text-secondary transition-colors">
    my links below
  </a>.
</motion.p>

        {/* Side by side layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden md:h-180 shadow-xl"
        >
          {/* Left: Hero image */}
          <div
            className="h-96 lg:h-auto bg-cover bg-center"
            style={{
              backgroundImage: "url('https://placehold.co/600')",
            }}
          >
            <div className="h-full w-full bg-black/40 flex items-center justify-center text-center p-6">
              <h2 className="text-white text-3xl font-serif max-w-md">
                Plant-powered beauty, designed with intention.
              </h2>
            </div>
          </div>

          {/* Right: Contact form */}
          <Card className="rounded-none border-l">
            <CardHeader>
              <CardTitle className="text-primary">Contact Zuriya</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Your Name" disabled />
              <Input type="email" placeholder="Your Email" disabled />
              <Textarea placeholder="Your Message" disabled />
              <Button className="w-full" disabled>
                Send Message (Demo Only)
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="text-center space-y-4 mt-16"
        >
<motion.div
  animate={{ scale: [1, 1.27, 1] }}
  transition={{ repeat: Infinity, duration: 2 }}
  className="flex flex-col items-center justify-center text-lg font-medium w-auto mx-auto space-y-2"
>
  <span>Want a website like this?</span>
  <MdKeyboardDoubleArrowDown className="text-primary text-2xl" />
</motion.div>

          <div id="links" className="flex md:flex-row gap-6 justify-center text-3xl">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://michael-ngochi.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-black transition-colors"
              title="View Portfolio"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:michael.n.michuki@gmail.com"
              className="text-muted-foreground hover:text-red-500 transition-colors"
              title="Email Me"
            >
              <FaEnvelope />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/michael-n-michuki/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
