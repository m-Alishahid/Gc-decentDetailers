// import React from "react";
// import { motion } from "framer-motion";
// import { Check, ArrowRight, Shield } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Image from "next/image";

// const WindowTinting = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="pt-24 pb-16 bg-gradient-to-b from-white to-decent-light">
//         {/* Hero Section */}
//         <div className="relative overflow-hidden">
//           <div className="absolute inset-0 bg-decent-blue/5 z-0"></div>
//           <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
//             <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
//               <motion.div 
//                 className="w-full md:w-1/2"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-decent-blue mb-6">
//                   Professional <span className="text-decent-lightBlue">Window Tinting</span> Services
//                 </h1>
//                 <p className="text-gray-700 text-lg mb-8">
//                   Premium window film installation that enhances comfort, style, privacy and protects your vehicle's interior from harmful UV rays.
//                 </p>
//                 <div className="flex flex-wrap gap-4 mb-8">
//                   <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
//                     <Check size={18} className="text-decent-lightBlue" />
//                     <span className="text-sm font-medium">Heat Rejection</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
//                     <Check size={18} className="text-decent-lightBlue" />
//                     <span className="text-sm font-medium">UV Protection</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
//                     <Check size={18} className="text-decent-lightBlue" />
//                     <span className="text-sm font-medium">Enhanced Privacy</span>
//                   </div>
//                 </div>
//                 <Link href="/booking?service=window-tinting">
//                   <Button className="bg-decent-lightBlue hover:bg-decent-blue text-white group">
//                     Book Window Tinting Now
//                     <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Button>
//                 </Link>
//               </motion.div>
//               <motion.div 
//                 className="w-full md:w-1/2"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//               >
//                 <div className="rounded-lg overflow-hidden shadow-xl">
//                   <Image
//                     src="/ceramic_after.png"
//                     alt="Professional window tinting service"
//                     width={600}
//                     height={400}
//                     className="w-full h-auto"
//                     priority
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* Packages Section */}
//         <div className="container mx-auto px-4 py-16">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-decent-blue mb-4">Window Tinting Packages</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Choose from our premium window tinting options with different levels of heat rejection and UV protection
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Standard Package */}
//             <motion.div 
//               className="bg-white rounded-xl shadow-lg p-6 border border-decent-light/30"
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.1 }}
//             >
//               <h3 className="text-xl font-bold text-decent-blue mb-2">Standard Tint Package</h3>
//               <p className="text-3xl font-bold text-decent-lightBlue mb-4">$199</p>
//               <div className="space-y-3 mb-6">
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">Basic heat rejection (30%)</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">UV protection (99%)</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">5-year warranty</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">2-4 hour installation</span>
//                 </div>
//               </div>
//               <Link href="/booking?service=standard-tint" className="block">
//                 <Button className="w-full bg-decent-blue hover:bg-decent-lightBlue text-white">
//                   Select Package
//                 </Button>
//               </Link>
//             </motion.div>

//             {/* Premium Package */}
//             <motion.div 
//               className="bg-white rounded-xl shadow-lg p-6 border-2 border-decent-lightBlue relative"
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.2 }}
//             >
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-decent-lightBlue text-white text-sm font-bold py-1 px-4 rounded-full">
//                 MOST POPULAR
//               </div>
//               <h3 className="text-xl font-bold text-decent-blue mb-2">Premium Ceramic Tint</h3>
//               <p className="text-3xl font-bold text-decent-lightBlue mb-4">$299</p>
//               <div className="space-y-3 mb-6">
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">Superior heat rejection (50%)</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">UV protection (99%)</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">Lifetime warranty</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">Better clarity and visibility</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">2-4 hour installation</span>
//                 </div>
//               </div>
//               <Link href="/booking?service=premium-tint" className="block">
//                 <Button className="w-full bg-decent-lightBlue hover:bg-decent-blue text-white">
//                   Select Package
//                 </Button>
//               </Link>
//             </motion.div>

//             {/* Luxury Package */}
//             <motion.div 
//               className="bg-white rounded-xl shadow-lg p-6 border border-decent-light/30"
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.3 }}
//             >
//               <h3 className="text-xl font-bold text-decent-blue mb-2">Luxury Ceramic IR Tint</h3>
//               <p className="text-3xl font-bold text-decent-lightBlue mb-4">$399</p>
//               <div className="space-y-3 mb-6">
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">Maximum heat rejection (70%)</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">UV protection (99.9%)</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">Lifetime warranty</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">Infrared rejection technology</span>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Check size={18} className="text-decent-lightBlue mt-1" />
//                   <span className="text-gray-700">Scratch-resistant coating</span>
//                 </div>
//               </div>
//               <Link href="/booking?service=luxury-tint" className="block">
//                 <Button className="w-full bg-decent-blue hover:bg-decent-lightBlue text-white">
//                   Select Package
//                 </Button>
//               </Link>
//             </motion.div>
//           </div>
//         </div>

//         {/* Benefits Section */}
//         <div className="container mx-auto px-4 py-12">
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <h2 className="text-2xl md:text-3xl font-bold text-decent-blue mb-6 text-center">
//               Benefits of Professional Window Tinting
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="p-4 border border-decent-light rounded-lg">
//                 <Shield className="h-10 w-10 text-decent-lightBlue mb-4" />
//                 <h3 className="text-lg font-semibold mb-2">UV Protection</h3>
//                 <p className="text-gray-600 text-sm">
//                   Blocks up to 99% of harmful UV rays that can cause interior fading and skin damage
//                 </p>
//               </div>
//               <div className="p-4 border border-decent-light rounded-lg">
//                 <Shield className="h-10 w-10 text-decent-lightBlue mb-4" />
//                 <h3 className="text-lg font-semibold mb-2">Heat Reduction</h3>
//                 <p className="text-gray-600 text-sm">
//                   Keeps your vehicle cooler by rejecting up to 70% of solar heat
//                 </p>
//               </div>
//               <div className="p-4 border border-decent-light rounded-lg">
//                 <Shield className="h-10 w-10 text-decent-lightBlue mb-4" />
//                 <h3 className="text-lg font-semibold mb-2">Glare Reduction</h3>
//                 <p className="text-gray-600 text-sm">
//                   Reduces eye strain and improves visibility by minimizing harsh sunlight
//                 </p>
//               </div>
//               <div className="p-4 border border-decent-light rounded-lg">
//                 <Shield className="h-10 w-10 text-decent-lightBlue mb-4" />
//                 <h3 className="text-lg font-semibold mb-2">Enhanced Privacy</h3>
//                 <p className="text-gray-600 text-sm">
//                   Prevents outsiders from seeing into your vehicle while maintaining visibility from inside
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="container mx-auto px-4 py-12">
//           <div className="bg-decent-blue rounded-2xl p-8 md:p-12 text-white text-center">
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for Professional Window Tinting?</h2>
//             <p className="mb-6 max-w-lg mx-auto">
//               Schedule your window tinting appointment today and enjoy a cooler, more comfortable ride with enhanced privacy.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Link href="/booking">
//                 <Button className="bg-white text-decent-blue hover:bg-decent-lightBlue hover:text-white">
//                   Book Now
//                 </Button>
//               </Link>
//               <Link href="/contact">
//                 <Button variant="outline" className="border-white text-white hover:bg-white hover:text-decent-blue">
//                   Contact Us
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default WindowTinting;