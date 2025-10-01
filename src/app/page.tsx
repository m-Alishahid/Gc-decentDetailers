"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/services/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/testimonial/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import ProcessSection from "@/components/ProcessSection";
import DiscountModal from "@/components/DiscountModal";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const Index = () => {
  const [showDiscount, setShowDiscount] = useState(false);
  const [alreadyTriggered, setAlreadyTriggered] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const availed = localStorage.getItem("discountAvailed");
    if (availed) return; // agar pehle avail ho gaya hai to kuch na karo

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show modal jab user 500px se neeche scroll kar le
      if (scrollY > 500 && scrollY < 1000 && !alreadyTriggered) {
        setShowDiscount(true);
        setAlreadyTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [alreadyTriggered]);

  const handleAvailDiscount = () => {
    localStorage.setItem("discountAvailed", "true");
    setShowDiscount(false);
  };

  const discountData = {
    title: "Special Offer Just for You!",
    description: "Book your premium detailing today and save instantly.",
    discountText: "15% OFF",
    discountCode: "discount15",
    buttonText: "Avail the Discount",
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />

      {/* Discount Modal */}
      <DiscountModal
        isOpen={showDiscount}
        onClose={() => setShowDiscount(false)}
        onAvail={handleAvailDiscount}
        data={discountData}
      />

      <div className="bg-white">
        <motion.div
          id="premium-mobile-car-detailing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-16 md:py-20"
        >
          <ServicesSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-16 md:py-20"
        >
          <ProcessSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-16 md:py-20"
        >
          <AboutSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-16 md:py-20"
        >
          <FeaturedWorks />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-16 md:py-20"
        >
          <TestimonialsSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-16 md:py-20"
        >
          <CtaSection />
        </motion.div>
      </div>

    </div>
  );
};

export default Index;
