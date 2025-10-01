import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const CarDetailing = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-white to-decent-light">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-decent-blue/10 z-0"></div>
          <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-decent-blue mb-6">
                  Professional <span className="text-decent-lightBlue">Car Detailing</span> Services
                </h1>
                <p className="text-gray-700 text-lg mb-8">
                  Our premium mobile car detailing service brings showroom-quality results directly to your doorstep, saving you time and hassle.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
                    <Check size={18} className="text-decent-lightBlue" />
                    <span className="text-sm font-medium">Mobile Service</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
                    <Check size={18} className="text-decent-lightBlue" />
                    <span className="text-sm font-medium">Premium Products</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
                    <Check size={18} className="text-decent-lightBlue" />
                    <span className="text-sm font-medium">Expert Technicians</span>
                  </div>
                </div>
                <Link href="/booking?service=car-detailing">
                  <Button className="bg-decent-lightBlue hover:bg-decent-blue text-white group">
                    Book Car Detailing Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/exterior_after.png"
                    alt="Professional car detailing service"
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
            <h2 className="text-3xl md:text-4xl font-bold text-decent-blue mb-4">Car Detailing Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our variety of packages designed to keep your vehicle looking its absolute best
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
              <h3 className="text-xl font-bold text-decent-blue mb-2">Basic Wash Package</h3>
              <p className="text-3xl font-bold text-decent-lightBlue mb-4">$150</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Exterior hand wash</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Tire dressing</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Basic rim cleaning</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Window cleaning</span>
                </div>
              </div>
              <Link href="/booking?service=basic-wash" className="block">
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
              <h3 className="text-xl font-bold text-decent-blue mb-2">Premium Exterior Package</h3>
              <p className="text-3xl font-bold text-decent-lightBlue mb-4">$190</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Everything in Basic</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Clay bar treatment</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Hand wax application</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Wheel well cleaning</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Exterior plastic treatment</span>
                </div>
              </div>
              <Link href="/booking?service=premium-exterior" className="block">
                <Button className="w-full bg-decent-lightBlue hover:bg-decent-blue text-white">
                  Select Package
                </Button>
              </Link>
            </motion.div>

            {/* Full Detail Package */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 border border-decent-light/30"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-decent-blue mb-2">Full Premium Detail</h3>
              <p className="text-3xl font-bold text-decent-lightBlue mb-4">$299</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Premium Exterior + Interior</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Engine bay cleaning</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Interior UV protectant</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Carpet shampooing</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-decent-lightBlue mt-1" />
                  <span className="text-gray-700">Leather conditioning</span>
                </div>
              </div>
              <Link href="/booking?service=full-premium" className="block">
                <Button className="w-full bg-decent-blue hover:bg-decent-lightBlue text-white">
                  Select Package
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="bg-decent-blue rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Vehicle?</h2>
            <p className="mb-6 max-w-lg mx-auto">
              Schedule your car detailing appointment today and experience our premium service. 
              We come to your location for maximum convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking">
                <Button className="bg-white text-decent-blue hover:bg-decent-lightBlue hover:text-white">
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-decent-blue hover:bg-decent-lightBlue hover:text-white">
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

export default CarDetailing;