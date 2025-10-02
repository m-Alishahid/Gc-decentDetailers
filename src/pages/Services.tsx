import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Check, Car, Truck, Zap } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { service, additionalServices, extraServices } from "@/utils/services";

const Services = () => {
  const [activeTab, setActiveTab] = useState("car-detailing");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Generate service categories from services.ts
  const generateServiceCategories = () => {
    const categories: Record<
      string,
      {
        title: string;
        description: string;
        image: string;
        sections: {
          title: string;
          packages: { name: string; price: string; features: string[] }[];
        }[];
      }
    > = {};

    // Car Detailing - using suv data
    categories["car-detailing"] = {
      title: "Car Detailing Packages",
      description: "Professional detailing services for your car, customized to your needs.",
      image: "/slider_1.png",
      sections: [
        {
          title: "Exterior Packages",
          packages: [
            {
              name: (service.suv.exterior as any)?.basic?.name || "Basic Exterior",
              price: `$${(service.suv.exterior as any)?.basic?.price || 160}`,
              features: (service.suv.exterior as any)?.basic?.includes || [],
            },
            {
              name: (service.suv.exterior as any)?.premium?.name || "Premium Exterior",
              price: `$${(service.suv.exterior as any)?.premium?.price || 190}`,
              features: (service.suv.exterior as any)?.premium?.includes || [],
            },
          ],
        },
        {
          title: "Interior Packages",
          packages: [
            {
              name: (service.suv.interior as any)?.basic?.name || "Basic Interior",
              price: `$${(service.suv.interior as any)?.basic?.price || 180}`,
              features: (service.suv.interior as any)?.basic?.includes || [],
            },
            {
              name: (service.suv.interior as any)?.premium?.name || "Premium Interior",
              price: `$${(service.suv.interior as any)?.premium?.price || 220}`,
              features: (service.suv.interior as any)?.premium?.includes || [],
            },
          ],
        },
      ],
    };

    // RV - separate category
    categories["rv"] = {
      title: "RV Packages",
      description: "Specialized cleaning and detailing for recreational vehicles, priced per foot.",
      image: "/rv.png", // Using boat image since no specific RV image
      sections: [
        {
          title: "RV Packages (Price per foot)",
          packages: [
            {
              name: (service.rv.exterior as any)?.name || "Exterior Only",
              price: `$${(service.rv.exterior as any)?.pricePerFt || 25}/ft`,
              features: (service.rv.exterior as any)?.includes || [],
            },
            {
              name: (service.rv.interior as any)?.name || "Interior Only",
              price: `$${(service.rv.interior as any)?.pricePerFt || 25}/ft`,
              features: (service.rv.interior as any)?.includes || [],
            },
            {
              name: (service.rv.full as any)?.name || "Complete Detail",
              price: `$${(service.rv.full as any)?.pricePerFt || 40}/ft`,
              features: (service.rv.full as any)?.includes || [],
            },
          ],
        },
      ],
    };

    // Boat - separate category
    categories["boat"] = {
      title: "Boat Packages",
      description: "Professional detailing services for boats and marine vessels, priced per foot.",
      image: "/boat.png",
      sections: [
        {
          title: "Boat Packages (Price per foot)",
          packages: [
            {
              name: (service.boat.exterior as any)?.name || "Exterior Only",
              price: `$${(service.boat.exterior as any)?.pricePerFt || 23}/ft`,
              features: (service.boat.exterior as any)?.includes || [],
            },
            {
              name: (service.boat.interior as any)?.name || "Interior Only",
              price: `$${(service.boat.interior as any)?.pricePerFt || 19}/ft`,
              features: (service.boat.interior as any)?.includes || [],
            },
            {
              name: (service.boat.full as any)?.name || "Complete Detail",
              price: `$${(service.boat.full as any)?.pricePerFt || 35}/ft`,
              features: (service.boat.full as any)?.includes || [],
            },
          ],
        },
      ],
    };

    // Specialty Vehicles - using bike
    categories["specialty-vehicles"] = {
      title: "Motorcycle Packages",
      description: "Tailored detailing services for motorcycles and specialty vehicles.",
      image: "/bike.jpg",
      sections: [
        {
          title: "Motorcycle Packages",
          packages: [
            {
              name: (service.bike.full as any)?.basic?.name || "Motorcycle Package",
              price: `$${(service.bike.full as any)?.basic?.price || 170}`,
              features: (service.bike.full as any)?.basic?.includes || [],
            },
          ],
        },
      ],
    };

    // Jet Ski - separate category
    categories["jet-ski"] = {
      title: "Jet Ski Packages",
      description: "Professional detailing services for jet skis and watercraft.",
      image: "/jetski.png", // Using boat image since no specific jetski image
      sections: [
        {
          title: "Jet Ski Packages",
          packages: [
            {
              name: (service.jetski.full as any)?.name || "Jet Ski Package",
              price: `$${(service.jetski.full as any)?.price || 220}`,
              features: (service.jetski.full as any)?.includes || [],
            },
          ],
        },
      ],
    };

    // Add-Ons - using additionalServices and extraServices
    categories["add-ons"] = {
      title: "Add-On Services",
      description: "Enhance your detailing package with these premium add-on services.",
      image: "/adds_on.jpg",
      sections: [
        {
          title: "Additional Services",
          packages: additionalServices.map(add => ({
            name: add.name,
            price: `$${add.price}`,
            features: [`${add.name} service`],
          })),
        },
        {
          title: "Ceramic Coating",
          packages: Object.values(extraServices.ceramiccoating).map(pkg => ({
            name: pkg.name,
            price: `$${pkg.price}`,
            features: pkg.includes,
          })),
        },
      ],
    };

    return categories;
  };

  const serviceCategories = generateServiceCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-decent-blue mb-4">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-decent-lightBlue mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer professional detailing services to keep your vehicle in
              showroom condition.
            </p>
          </motion.div>

          {/* Tabs */}
          <Tabs
            defaultValue="car-detailing"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-6 mb-12 rounded-xl bg-white shadow-md p-2">
              <TabsTrigger
                value="car-detailing"
                className="text-sm py-3 rounded-lg data-[state=active]:bg-decent-blue data-[state=active]:text-white"
              >
                <Car size={16} className="mr-2" />
                Car Detailing
              </TabsTrigger>
              <TabsTrigger
                value="rv"
                className="text-sm py-3 rounded-lg data-[state=active]:bg-decent-blue data-[state=active]:text-white"
              >
                🏠 RV
              </TabsTrigger>
              <TabsTrigger
                value="boat"
                className="text-sm py-3 rounded-lg data-[state=active]:bg-decent-blue data-[state=active]:text-white"
              >
                🚤 Boat
              </TabsTrigger>
              <TabsTrigger
                value="specialty-vehicles"
                className="text-sm py-3 rounded-lg data-[state=active]:bg-decent-blue data-[state=active]:text-white"
              >
                🏍️ Bike
              </TabsTrigger>
              <TabsTrigger
                value="jet-ski"
                className="text-sm py-3 rounded-lg data-[state=active]:bg-decent-blue data-[state=active]:text-white"
              >
                🚤 Jet Ski
              </TabsTrigger>
              <TabsTrigger
                value="add-ons"
                className="text-sm py-3 rounded-lg data-[state=active]:bg-decent-blue data-[state=active]:text-white"
              >
                <Zap size={16} className="mr-2" />
                Add-Ons
              </TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            {Object.entries(serviceCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                  {/* Left Side Content */}
                  <div>
                    <h2 className="text-2xl font-bold text-decent-blue mb-3">
                      {category.title}
                    </h2>
                    <p className="text-gray-700 mb-8">{category.description}</p>

                    {category.sections.map((section, idx) => (
                      <div key={idx} className="mb-10">
                        <h3 className="text-lg font-semibold text-decent-blue mb-4 border-b pb-2">
                          {section.title}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {section.packages.map((pkg, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ y: -4 }}
                              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
                            >
                              <div className="flex justify-between items-center mb-3">
                                <h3 className="text-lg font-bold text-decent-blue">
                                  {pkg.name}
                                </h3>
                                <span className="text-lg font-semibold text-decent-lightBlue">
                                  {pkg.price}
                                </span>
                              </div>
                              <ul className="space-y-2 text-sm text-gray-600">
                                {pkg.features.map((feature, i) => (
                                  <li key={i} className="flex items-start">
                                    <Check className="h-4 w-4 text-decent-blue mr-2 mt-1" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Side Image */}
                  <div className="sticky top-24 hidden lg:block">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <AspectRatio ratio={16 / 10}>
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="w-full h-full object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          priority={key === "car-detailing"}
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Bottom CTA */}
          <motion.div
            className="mt-20 bg-white shadow-md border border-gray-100 p-10 rounded-2xl text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-decent-blue mb-4">
              Customized Packages Available
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Don't see exactly what you're looking for? We can create a custom
              detailing package tailored to your vehicle. Contact us today to
              discuss your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/booking"
                className="bg-decent-blue hover:bg-decent-lightBlue text-white px-6 py-3 rounded-lg transition"
              >
                Book Now
              </a>
              <a
                href="/contact"
                className="bg-white border border-decent-blue text-decent-blue hover:bg-decent-light px-6 py-3 rounded-lg transition"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
