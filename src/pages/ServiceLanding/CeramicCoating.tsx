import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const CeramicCoating = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-white to-decent-light">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-decent-blue/5 z-0"></div>
          <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-decent-blue mb-6">
                  Professional{" "}
                  <span className="text-decent-lightBlue">Ceramic Coating</span>{" "}
                  Services
                </h1>
                <p className="text-gray-700 text-lg mb-8">
                  Long-lasting paint protection with enhanced gloss and
                  hydrophobic properties that keep your vehicle looking
                  showroom-new for years.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
                    <Check size={18} className="text-decent-lightBlue" />
                    <span className="text-sm font-medium">9H Hardness</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
                    <Check size={18} className="text-decent-lightBlue" />
                    <span className="text-sm font-medium">Hydrophobic</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
                    <Check size={18} className="text-decent-lightBlue" />
                    <span className="text-sm font-medium">2-5 Year Protection</span>
                  </div>
                </div>

                <Link href="/booking">
                  <Button className="bg-decent-lightBlue hover:bg-decent-blue text-white group">
                    Book Ceramic Coating Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/window_after.png"
                    alt="Professional ceramic coating service"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-decent-blue mb-4">
              Ceramic Coating Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our ceramic coating packages with varying durability
              and protection levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 border border-decent-light/30"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-decent-blue mb-2">
                Basic Ceramic
              </h3>
              <p className="text-3xl font-bold text-decent-lightBlue mb-4">
                $599
              </p>
              <div className="space-y-3 mb-6">
                <Feature text="1-year protection" />
                <Feature text="Basic paint correction" />
                <Feature text="Hydrophobic properties" />
                <Feature text="Enhanced gloss finish" />
              </div>

              <Link href="/booking">
                <Button className="w-full bg-decent-blue hover:bg-decent-lightBlue text-white">
                  Select Package
                </Button>
              </Link>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 border-2 border-decent-lightBlue relative"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-decent-lightBlue text-white text-sm font-bold py-1 px-4 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-decent-blue mb-2">
                Premium Ceramic
              </h3>
              <p className="text-3xl font-bold text-decent-lightBlue mb-4">
                $999
              </p>
              <div className="space-y-3 mb-6">
                <Feature text="3-year protection" />
                <Feature text="2-step paint correction" />
                <Feature text="Superior hydrophobic effect" />
                <Feature text="Superior gloss finish" />
                <Feature text="Chemical resistance" />
              </div>

              <Link href="/booking">
                <Button className="w-full bg-decent-lightBlue hover:bg-decent-blue text-white">
                  Select Package
                </Button>
              </Link>
            </motion.div>

            {/* Luxury Package */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 border border-decent-light/30"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-decent-blue mb-2">
                Luxury Ceramic
              </h3>
              <p className="text-3xl font-bold text-decent-lightBlue mb-4">
                $1499
              </p>
              <div className="space-y-3 mb-6">
                <Feature text="5-year protection" />
                <Feature text="3-step paint correction" />
                <Feature text="Ultimate hydrophobic effect" />
                <Feature text="Maximum gloss finish" />
                <Feature text="Enhanced scratch resistance" />
                <Feature text="UV protection" />
              </div>

              <Link href="/booking">
                <Button className="w-full bg-decent-blue hover:bg-decent-lightBlue text-white">
                  Select Package
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* How It Works */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-decent-blue mb-4">
              How Ceramic Coating Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our professional ceramic coating process ensures the best results
              for your vehicle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Step number="1" title="Wash & Decontamination" text="Thorough cleaning to remove all contaminants from the paint surface" />
            <Step number="2" title="Paint Correction" text="Remove swirls, scratches and imperfections for a perfect surface" />
            <Step number="3" title="Coating Application" text="Expert application of ceramic coating in a controlled environment" />
            <Step number="4" title="Curing & Final Inspection" text="Allow proper curing time and perform quality control inspection" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="bg-decent-blue rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Protect Your Vehicle's Paint Today
            </h2>
            <p className="mb-6 max-w-lg mx-auto">
              Schedule your ceramic coating appointment and give your vehicle
              the ultimate protection with a stunning glossy finish.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking">
                <Button className="bg-white text-decent-blue hover:bg-decent-lightBlue hover:text-white">
                  Book Now
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-decent-blue">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Reusable Feature Item
const Feature = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2">
    <Check size={18} className="text-decent-lightBlue mt-1" />
    <span className="text-gray-700">{text}</span>
  </div>
);

// Reusable Step Item
const Step = ({ number, title, text }: { number: string; title: string; text: string }) => (
  <div className="text-center">
    <div className="bg-decent-blue/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl font-bold text-decent-blue">{number}</span>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

export default CeramicCoating;