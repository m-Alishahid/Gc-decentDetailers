import { Wrench, Car, Check, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildrenVariants = {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-decent-lightBlue/10 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-decent-lightBlue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-decent-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-14"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-decent-blue mb-4 tracking-tight">
            About Decent Detailers
          </h2>
          <div className="w-24 h-1 bg-decent-lightBlue mx-auto mb-6 relative">
            <motion.div 
              className="absolute -top-1 left-0 w-6 h-3 bg-decent-blue rounded-full"
              animate={{ x: [0, 60, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bringing showroom-quality results to your doorstep with{" "}
            <span className="text-decent-blue font-semibold">years of expertise</span>.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text & Features */}
          <motion.div
            variants={staggerChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-decent-blue mb-5"
            >
              We Don't Just Clean Cars – We Restore Them to Showroom Perfection
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-8 text-base md:text-lg"
            >
              At Decent Detailers, we bring expertise, premium products, and certified techniques 
              directly to your doorstep. Our fully mobile service means you get professional 
              results without the hassle.
            </motion.p>
            
            <motion.div 
              variants={staggerChildrenVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
            >
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
                className="flex items-start bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <div className="bg-decent-blue/10 p-3 rounded-full mr-3">
                  <Car size={28} className="text-decent-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-decent-blue mb-1">Come to You Service</h4>
                  <p className="text-sm text-gray-600">No travel fees, no waiting in lines</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
                className="flex items-start bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <div className="bg-decent-blue/10 p-3 rounded-full mr-3">
                  <Check size={28} className="text-decent-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-decent-blue mb-1">Showroom-Quality Results</h4>
                  <p className="text-sm text-gray-600">From basic washes to ceramic coatings</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
                className="flex items-start bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <div className="bg-decent-blue/10 p-3 rounded-full mr-3">
                  <Users size={28} className="text-decent-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-decent-blue mb-1">Trusted Pros</h4>
                  <p className="text-sm text-gray-600">Certified in paint correction and coatings</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
                className="flex items-start bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <div className="bg-decent-blue/10 p-3 rounded-full mr-3">
                  <Wrench size={28} className="text-decent-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-decent-blue mb-1">Premium Products</h4>
                  <p className="text-sm text-gray-600">Using only the best detailing products</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 italic border-l-4 border-decent-lightBlue pl-4 py-2 bg-decent-light/30 text-base"
            >
              "We're obsessed with the details so you can enjoy that new-car feeling – wherever you park."
            </motion.p>
          </motion.div>
          
          {/* Right: Image Only */}
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Image 
                src="/slider_1.png"
                alt="Car detailing professional at work" 
                width={400}
                height={340}
                className="w-[400px] h-[340px] object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;