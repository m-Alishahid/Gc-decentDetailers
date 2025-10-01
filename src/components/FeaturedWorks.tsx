"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeaturedWorks = () => {
  const [activeTab, setActiveTab] = useState("all");

  const beforeAfterImages = [
    {
      id: 1,
      category: "exterior",
      title: "Exterior Detail",
      description: "Full exterior restoration on a black sedan",
      before: "/exterior_before.png",
      after: "/exterior_after.png",
      link: "/services/car-detailing",
    },
    {
      id: 2,
      category: "interior",
      title: "Interior Transformation",
      description: "Complete interior cleaning and restoration",
      before: "/interior_before.png",
      after: "/interior_after.png",
      link: "/services/car-detailing",
    },
    {
      id: 3,
      category: "ceramic",
      title: "Ceramic Coating",
      description: "Premium ceramic coating application",
      before: "/window_before.png",
      after: "/window_after.png",
      link: "/services/ceramic-coating",
    },
  ];

  const filteredImages =
    activeTab === "all"
      ? beforeAfterImages
      : beforeAfterImages.filter((img) => img.category === activeTab);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-decent-light to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-decent-blue mb-4">
            Our <span className="text-decent-lightBlue">Featured</span> Work
          </h2>
          <div className="w-28 h-1 bg-decent-lightBlue mx-auto mb-6 relative">
            <div className="absolute -top-1 left-0 w-6 h-3 bg-decent-blue rounded-full animate-bounce"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the Decent Detailers difference with our before and after
            transformations
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {["all", "exterior", "interior", "ceramic"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "bg-decent-blue hover:bg-decent-Blue text-white shadow-lg"
                  : "text-decent-blue border-decent-blue hover:scale-105"
              } transition-all duration-300 capitalize px-6 py-2`}
            >
              {tab === "all" ? "All Work" : tab}
              {activeTab === tab && <ChevronRight className="ml-1 h-4 w-4" />}
            </Button>
          ))}
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <motion.div
            className={`grid gap-10 ${
              filteredImages.length === 1
                ? "grid-cols-1 max-w-2xl mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 30px -10px rgba(0, 0, 0, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden transition-all duration-300 border-2 border-gray-100 hover:border-decent-lightBlue rounded-2xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-1">
                        {/* Before */}
                        <div className="relative group">
                          <Image
                            src={item.before}
                            alt={`Before ${item.title}`}
                            width={400}
                            height={256}
                            className="w-full h-64 object-cover transition-all duration-700 filter group-hover:brightness-90"
                          />
                          <div className="absolute top-4 left-4 bg-black/90 text-white px-4 py-1 text-sm rounded-full shadow-md">
                            Before
                          </div>
                        </div>
                        {/* After */}
                        <div className="relative group">
                          <Image
                            src={item.after}
                            alt={`After ${item.title}`}
                            width={400}
                            height={256}
                            className="w-full h-64 object-cover transition-all duration-700 filter group-hover:brightness-110"
                          />
                          <div className="absolute top-4 right-4 bg-decent-blue text-white px-4 py-1 text-sm rounded-full shadow-md">
                            After
                          </div>
                        </div>
                      </div>
                      <div className="p-6 bg-white border-t-2 border-decent-light text-center">
                        <h3 className="text-xl font-bold text-decent-blue mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                        <Link href={item.link}>
                          <Button
                            variant="link"
                            className="text-decent-lightBlue p-0 mt-3 hover:text-decent-blue transition-colors"
                          >
                            View Details <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-6">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredImages.map((item) => (
                <CarouselItem key={item.id} className="basis-full">
                  <Card className="overflow-hidden border-2 border-gray-100 hover:border-decent-lightBlue rounded-xl">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-1">
                          {/* Before */}
                          <div className="relative">
                            <Image
                              src={item.before}
                              alt={`Before ${item.title}`}
                              width={200}
                              height={192}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-black/90 text-white px-3 py-1 text-xs rounded-full">
                              Before
                            </div>
                          </div>
                          {/* After */}
                          <div className="relative">
                            <Image
                              src={item.after}
                              alt={`After ${item.title}`}
                              width={200}
                              height={192}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-decent-blue text-white px-3 py-1 text-xs rounded-full">
                              After
                            </div>
                          </div>
                        </div>
                        <div className="p-4 bg-white text-center">
                          <h3 className="text-lg font-bold text-decent-blue">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative h-8 w-8 border-decent-blue text-decent-blue" />
              <CarouselNext className="relative h-8 w-8 border-decent-blue text-decent-blue" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
