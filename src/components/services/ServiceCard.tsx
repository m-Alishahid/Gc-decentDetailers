
import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MotionButton } from "@/components/ui/motion-button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  price: string;
  link: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  features,
  price,
  link,
}: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-52 md:h-60 overflow-hidden relative group">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-decent-blue/80 to-transparent opacity-90"></div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <motion.span 
            className="bg-white text-decent-blue px-3 py-1.5 rounded-full font-semibold text-sm shadow-lg"
            whileHover={{ y: -3, scale: 1.05 }}
          >
            From {price}
          </motion.span>
          <motion.div 
            className="bg-decent-lightBlue text-white p-2 rounded-full shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </motion.div>
        </div>
      </div>
      
      <div className="p-5 md:p-6 flex-grow flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-decent-blue to-decent-lightBlue mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm md:text-base">{description}</p>
        
        <div className="space-y-2.5 mb-6 flex-grow">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="bg-decent-lightBlue/10 rounded-full p-1 mr-2">
                <Check size={14} className="text-decent-lightBlue" />
              </div>
              <span className="text-xs md:text-sm text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
        
        <Link href={link} className="mt-auto block">
          <MotionButton 
            className="w-full bg-gradient-to-r from-decent-blue to-decent-lightBlue hover:opacity-90 text-white transition-all duration-300"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </MotionButton>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
