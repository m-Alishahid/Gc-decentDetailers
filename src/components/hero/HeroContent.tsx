import Link from "next/link";
import { Star, Car, MapPin, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { MotionButton } from "@/components/ui/motion-button";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import FeatureCard from "./FeatureCard";
import Image from "next/image";

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6
      } 
    }
  };
  
  const featureCards = [
    {
      icon: <Shield size={isMobile ? 18 : 20} className="text-white" />,
      title: "100% Satisfaction",
      description: "Quality guaranteed service",
      bgClass: "from-decent-blue to-decent-lightBlue",
      position: "top-0 right-0"
    },
    {
      icon: <MapPin size={isMobile ? 18 : 20} className="text-white" />,
      title: "Mobile Service",
      description: "We come to your location, saving you time and hassle",
      bgClass: "from-decent-lightBlue to-blue-500",
      position: "bottom-20 right-20"
    },
    {
      icon: <Star size={isMobile ? 18 : 20} className="text-white" />,
      title: "5-Star Service",
      description: "Join our hundreds of satisfied customers",
      bgClass: "from-yellow-400 to-yellow-600",
      position: "top-40 left-0"
    }
  ];

  return (
    <div className="container mx-auto px-4 h-full flex items-center relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-12 md:py-20">
        {/* Left Column - Text Content */}
        <motion.div 
          className="w-full md:w-1/2 text-white"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.div 
            className="inline-block bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6"
            variants={fadeInUp}
          >
            <div className="flex items-center">
              <Star size={isMobile ? 16 : 18} className="text-yellow-400 fill-yellow-400 mr-1" />
              <span className="font-semibold text-sm md:text-base">Trusted by 500+ Satisfied Customers</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
            variants={fadeInUp}
          >
            <span className="text-white block mb-2">Premium Mobile </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-decent-lightBlue to-white">Car Detailing</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-lg"
            variants={fadeInUp}
          >
            Showroom-quality results brought directly to your doorstep. No travel fees, no waiting in lines.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 md:mb-8"
            variants={fadeInUp}
          >
            <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20 flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Car size={isMobile ? 18 : 24} className="text-decent-lightBlue flex-shrink-0" />
              <span className="text-white font-medium text-sm md:text-base">9+ Years Experience</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20 flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <MapPin size={isMobile ? 18 : 24} className="text-decent-lightBlue flex-shrink-0" />
              <span className="text-white font-medium text-sm md:text-base">We Come To You</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20 flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Clock size={isMobile ? 18 : 24} className="text-decent-lightBlue flex-shrink-0" />
              <span className="text-white font-medium text-sm md:text-base">Flexible Hours</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20 flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Shield size={isMobile ? 18 : 24} className="text-decent-lightBlue flex-shrink-0" />
              <span className="text-white font-medium text-sm md:text-base">Fully Insured</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
          >
            <Link href="/booking" className="w-full sm:w-auto">
              <MotionButton 
                className="bg-decent-lightBlue hover:bg-decent-blue text-white rounded-md px-4 py-3 md:px-6 md:py-4 text-base md:text-lg w-full group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </MotionButton>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <MotionButton 
                variant="outline" 
                className="border-white bg-white/10 text-white hover:bg-white hover:text-decent-blue rounded-md px-4 py-3 md:px-6 md:py-4 text-base md:text-lg w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </MotionButton>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Right Column - Feature Cards (visible on desktop only) */}
        <motion.div 
          className="w-full md:w-1/2 relative hidden md:block min-h-[400px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {featureCards.map((card, index) => (
            <div key={index} className={`absolute ${card.position}`}>
              <FeatureCard 
                icon={card.icon} 
                title={card.title} 
                description={card.description} 
                bgClass={card.bgClass}
                delay={index}
              />
            </div>
          ))}
          
          {/* Example work image */}
          <motion.div 
            className="absolute bottom-40 left-24 z-10 overflow-hidden rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <AspectRatio ratio={16/9} className="w-[240px]">
              <Image
                src="https://images.unsplash.com/photo-1600979576531-397b9a3fee72?q=80&w=600&auto=format&fit=crop"
                alt="Car detailing result"
                fill
                className="object-cover w-full h-full"
                loading="eager"
                sizes="(max-width: 640px) 100vw, 240px"
                style={{ objectFit: "cover" }}
              />
            </AspectRatio>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;