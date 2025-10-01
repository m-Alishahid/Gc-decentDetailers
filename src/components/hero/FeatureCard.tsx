
import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgClass: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  bgClass,
  delay = 0
}) => {
  return (
    <motion.div 
      className={`absolute bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-2xl z-20 max-w-[280px] overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay * 0.2, duration: 0.6 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div className="flex items-start">
        <div className={`bg-gradient-to-br ${bgClass} rounded-full p-2 mr-3`}>
          {icon}
        </div>
        <div>
          <p className="font-semibold text-decent-blue text-lg">{title}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
