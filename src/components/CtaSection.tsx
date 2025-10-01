
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CtaSection = () => {
  const checkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };
  
  return (
    <section className="py-16 bg-decent-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
        </svg>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-decent-lightBlue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Experience the Decent Detailers Difference?
          </motion.h2>
          
          <motion.p 
            className="text-decent-silver text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Schedule your mobile detailing service today and let us bring the showroom shine directly to you.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div variants={checkItemVariants} className="flex items-center justify-center">
              <Check size={20} className="text-green-400 mr-2" />
              <span className="text-white">No Travel</span>
            </motion.div>
            <motion.div variants={checkItemVariants} className="flex items-center justify-center">
              <Check size={20} className="text-green-400 mr-2" />
              <span className="text-white">Expert Service</span>
            </motion.div>
            <motion.div variants={checkItemVariants} className="flex items-center justify-center">
              <Check size={20} className="text-green-400 mr-2" />
              <span className="text-white">Premium Products</span>
            </motion.div>
            <motion.div variants={checkItemVariants} className="flex items-center justify-center">
              <Check size={20} className="text-green-400 mr-2" />
              <span className="text-white">Satisfaction Guarantee</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/booking">
              <Button size="lg" className="bg-white text-decent-blue hover:bg-decent-silver px-8 py-6 text-lg font-semibold rounded-md group">
                Book Your Appointment Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
