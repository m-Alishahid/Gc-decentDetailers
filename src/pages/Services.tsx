import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Check, Car, Truck, Zap } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Services = () => {
  const [activeTab, setActiveTab] = useState("car-detailing");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const serviceCategories: Record<
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
  > = {
    "car-detailing": {
      title: "Car Detailing Packages",
      description:
        "Professional detailing services for your car, customized to your needs.",
      image: "/slider_1.png",
      sections: [
        {
          title: "Exterior Packages",
          packages: [
            {
              name: "Basic Wash Package",
              price: "$170",
              features: [
                "Exterior hand wash",
                "Tire dressing",
                "Basic rim cleaning",
                "Window cleaning",
              ],
            },
            {
              name: "Premium Exterior Package",
              price: "$240",
              features: [
                "Everything in Basic",
                "Clay bar treatment",
                "Hand wax application",
                "Wheel well cleaning",
                "Exterior plastic trim treatment",
              ],
            },
          ],
        },
        {
          title: "Interior Packages",
          packages: [
            {
              name: "Basic Interior Package",
              price: "$190",
              features: [
                "Complete vacuuming",
                "Dashboard/console wipe down",
                "Door panel cleaning",
                "Basic mat cleaning",
              ],
            },
            {
              name: "Premium Interior Package",
              price: "$230",
              features: [
                "Everything in Basic",
                "Leather/vinyl conditioning",
                "Carpet shampooing",
                "Headliner cleaning",
                "Interior odor elimination",
              ],
            },
          ],
        },
      ],
    },
    "rv-boat": {
      title: "RV & Boat Packages",
      description:
        "Specialized cleaning and detailing for larger vehicles, priced per foot.",
      image: "/boat.png",
      sections: [
        {
          title: "RV/Boat Packages (Price per foot)",
          packages: [
            {
              name: "Exterior Only",
              price: "$25/ft",
              features: [
                "Full exterior wash",
                "Wax application",
                "Hull/deck cleaning",
                "Awning cleaning",
              ],
            },
            {
              name: "Interior Only",
              price: "$25/ft",
              features: [
                "Complete vacuuming",
                "Surface cleaning",
                "Cabinet wiping",
                "Floor cleaning",
              ],
            },
            {
              name: "Complete Detail",
              price: "$50/ft",
              features: [
                "Full exterior and interior",
                "Upholstery cleaning",
                "Mold/mildew treatment",
                "Protective coatings",
              ],
            },
          ],
        },
      ],
    },
    "specialty-vehicles": {
      title: "Specialty Vehicle Packages",
      description:
        "Tailored detailing services for motorcycles, ATVs, and other specialty vehicles.",
      image:
        "/bike.jpg",
      sections: [
        {
          title: "Specialty Vehicle Packages",
          packages: [
            {
              name: "ATV/UTV Package",
              price: "$170",
              features: [
                "Full exterior wash",
                "Underbody cleaning",
                "Plastic trim restoration",
                "Interior wipe down",
              ],
            },
            {
              name: "Motorcycle Package",
              price: "$175",
              features: [
          "Pressure Rinse Frame, Tank, Fenders",
          "Gentle Soap Wash + Hand Dry",
          "Wheels, Rims & Spokes Cleaning",
          "Degrease & Polish Exhaust & Chrome Parts",
          "Chain & Sprocket Cleaning + Lubrication",
          "Headlight & Mirrors Polish",
          "Tire Shine",
          "Seat Deep Clean & Condition",
          "Handlebar & Console Wipe Down",
          "Plastic Covers & Panels Protected",
          "UV Protectant on Exposed Surfaces",
              ],
            },
          ],
        },
      ],
    },
    "add-ons": {
      title: "Add-On Services",
      description:
        "Enhance your detailing package with these premium add-on services.",
      image: "/adds_on.jpg",
      sections: [
        {
          title: "Exterior Enhancements",
          packages: [
            {
              name: "Headlight restoration",
              price: "$99",
              features: [
                "Professional restoration to remove yellowing and haziness",
              ],
            },
            // {
            //   name: "Full window tinting",
            //   price: "$249",
            //   features: [
            //     "High-quality film with UV protection and heat rejection",
            //   ],
            // },
          ],
        },
      ],
    },
  };

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
            <TabsList className="grid w-full grid-cols-4 mb-12 rounded-xl bg-white shadow-md p-2">
              <TabsTrigger
                value="car-detailing"
                className="text-sm py-3 rounded-lg data-[state=active]:bg-decent-blue data-[state=active]:text-white"
              >
                <Car size={16} className="mr-2" />
                Car Detailing
              </TabsTrigger>
              <TabsTrigger
                value="rv-boat"
                className="text-sm py-3 rounded-lg data-[state=active]:bg-decent-blue data-[state=active]:text-white"
              >
                <Truck size={16} className="mr-2" />
                RV & Boat
              </TabsTrigger>
              <TabsTrigger
                value="specialty-vehicles"
                className="text-sm py-3 rounded-lg data-[state=active]:bg-decent-blue data-[state=active]:text-white"
              >
                🏍️ Specialty
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
