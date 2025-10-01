import Link from "next/link";
import ServiceCard from "@/components/services/ServiceCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MotionButton } from "@/components/ui/motion-button";

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile Detailing",
      description: "Professional detailing brought direct to your location",
      image: "exterior_after.png",
      features: [
        "Exterior and interior cleaning",
        "Paint decontamination and correction",
        "Premium wax or sealant application",
        "We bring all supplies and equipment",
      ],
      price: "$99",
      link: "/services/car-detailing",
    },
    {
      title: "Ceramic Coating",
      description: "Long-lasting paint protection with enhanced gloss",
      image: "window_after.png",
      features: [
        "9H hardness protection",
        "Hydrophobic properties",
        "UV protection",
        "2-5 year durability",
      ],
      price: "$599",
      link: "/services/ceramic-coating",
    },
  ];

  return (
    <section
      id="premium-mobile-car-detailing"
      className="py-16 md:py-20 bg-gradient-to-b from-white to-decent-light relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-decent-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-decent-lightBlue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-yellow-400/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-decent-blue mb-4 md:mb-5">
            Premium Mobile Car Detailing
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-decent-blue to-decent-lightBlue mx-auto mb-6 md:mb-8 relative">
            <div className="absolute -top-1 left-0 w-4 md:w-6 h-2 md:h-3 bg-decent-lightBlue rounded-full animate-bounce"></div>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a complete range of professional auto detailing services to
            keep your vehicle looking its absolute best
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-2  justify-center "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/services">
            <MotionButton
              className="bg-decent-blue hover:bg-decent-Blue text-white px-6 py-6 text-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </MotionButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
