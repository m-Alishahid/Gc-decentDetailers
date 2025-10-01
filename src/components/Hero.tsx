import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Images for the carousel
  const images = [
    "heroback2.png", // Car wash
    "about_us.jpg", // Car interior cleaning (alternate)
    "heroback3.png" // Car polish
  ];

  useEffect(() => {
    setIsMounted(true);

    // Auto-advance slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!isMounted) {
    return <div className="min-h-screen bg-decent-dark"></div>;
  }

  return (
    <div id="hero-section" className="relative min-h-[90vh] overflow-hidden bg-decent-dark">
      {/* Background overlay and gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50 z-10" />

      {/* Background image */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={`/${image}`}
            alt={`Mobile car detailing ${index + 1}`}
            fill
            className="w-full h-full object-cover"
            priority={index === 0}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="w-full md:w-2/3 lg:w-1/2 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Decent Detailers <br />
              <span className="text-decent-lightBlue">Wherever You Park</span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md">
              Showroom-quality results brought directly to your doorstep with our premium mobile car detailing service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <Button className="bg-decent-blue hover:bg-decent-lightBlue text-white px-8 py-6 text-lg">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="bg-transparent border-white text-white hover-decent-Blue px-8 py-6 text-lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="focus:outline-none"
          >
            <Circle
              className={`${
                index === currentSlide
                  ? "text-decent-lightBlue fill-decent-lightBlue"
                  : "text-white/60"
              } transition-colors`}
              size={14}
            />
          </button>
        ))}
      </div>

      {/* Wave separator removed to match the design in the image */}
    </div>
  );
};

export default Hero;