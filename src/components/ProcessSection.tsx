
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Book Online",
      description: "Schedule your appointment in just a few clicks with our easy booking system.",
      icon: "calendar"
    },
    {
      number: "02",
      title: "We Come To You",
      description: "Our fully equipped mobile team arrives at your location - home or office.",
      icon: "car"
    },
    {
      number: "03",
      title: "Premium Service",
      description: "We perform our detailed service using only professional-grade products.",
      icon: "tool"
    },
    {
      number: "04",
      title: "Guaranteed Results",
      description: "Enjoy your vehicle's showroom-quality finish with our satisfaction guarantee.",
      icon: "check"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-decent-lightBlue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-decent-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-decent-blue mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-decent-lightBlue mx-auto mb-6 relative">
            <div className="absolute -top-1 left-0 w-6 h-3 bg-decent-blue rounded-full animate-bounce"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple four-step process brings professional detailing right to your doorstep
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 relative group hover:border-decent-lightBlue transition-all duration-300 hover:shadow-xl border border-gray-100">
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-decent-lightBlue" />
                  </div>
                )}
                
                <motion.div 
                  className="absolute -top-5 left-6 bg-decent-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-bold"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                >
                  {step.number}
                </motion.div>
                
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-decent-blue mb-3 group-hover:text-decent-lightBlue transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center text-decent-lightBlue">
                    <Check size={16} className="mr-2" />
                    <span className="font-medium">Hassle-free process</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
