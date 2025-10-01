import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael S.",
      rating: 5,
      testimonial: "The detailers were extremely professional and did an amazing job on my SUV. It looks better than when I first bought it!",
      date: "April 10, 2025"
    },
    {
      name: "Jessica R.",
      rating: 5,
      testimonial: "So convenient that they came to my house. The ceramic coating they applied makes water bead up beautifully and the car stays clean longer.",
      date: "March 22, 2025"
    },
    {
      name: "David T.",
      rating: 5,
      testimonial: "I got window tinting done and couldn't be happier with the results. Professional service and excellent quality.",
      date: "February 15, 2025"
    },
    {
      name: "Amanda K.",
      rating: 4,
      testimonial: "Great service and attention to detail. My car looks amazing after the full detail. Would definitely recommend!",
      date: "January 30, 2025"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const, // TypeScript fix: ensure string literal
      },
    },
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-decent-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-decent-lightBlue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-decent-blue mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-decent-lightBlue mx-auto mb-6 relative">
            <div className="absolute -top-1 left-0 w-6 h-3 bg-decent-blue rounded-full animate-bounce"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - here's what our satisfied customers have to say
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;