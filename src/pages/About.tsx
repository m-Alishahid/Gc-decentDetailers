import Navbar from "@/components/Navbar";
import { Wrench, Car, Check, Users, Award, Clock } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gradient-to-b from-decent-light to-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-decent-blue mb-4">About Us</h1>
            <div className="w-24 h-1 bg-decent-lightBlue mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about Decent Detailers and our passion for automotive care
            </p>
          </div>
          
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-decent-blue mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                At Decent Detailers, we don't just clean cars – we restore them to showroom perfection. 
                What started as a passion project in a home garage has grown into a premier mobile detailing 
                service with over 9 years of experience serving our community.
              </p>
              <p className="text-gray-700 leading-relaxed mb-5">
                We founded Decent Detailers with a simple mission: bring professional, high-quality auto 
                detailing services directly to our customers. By eliminating the need for you to drive to 
                a physical location, we save you time and make the entire experience more convenient.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we've expanded our services to include window tinting and ceramic coating, 
                always maintaining our commitment to excellence and customer satisfaction.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/about_us.jpg"
                  alt="Car detailing professional at work" 
                  width={700}
                  height={420}
                  className="w-full h-[420px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-decent-blue mb-10 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Car size={32} />, title: "Mobile Convenience", desc: "We come to your home or workplace, saving you time and hassle." },
                { icon: <Award size={32} />, title: "Expert Technicians", desc: "Certified in paint correction, ceramic coating and window tinting." },
                { icon: <Wrench size={32} />, title: "Premium Products", desc: "We use only professional-grade detailing products and tools." },
                { icon: <Clock size={32} />, title: "Flexible Scheduling", desc: "Appointments that fit your busy life, including evenings & weekends." },
                { icon: <Users size={32} />, title: "Customer Focused", desc: "We understand your needs and deliver personalized service." },
                { icon: <Check size={32} />, title: "Guaranteed Results", desc: "Satisfaction guaranteed – we make it right if you're not happy." },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-start h-full"
                >
                  <div className="bg-decent-blue/10 p-4 rounded-full mb-4">
                    <div className="text-decent-blue">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-decent-blue mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-decent-lightBlue/10 to-decent-light/40 p-10 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-decent-blue mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
              "We're obsessed with the details so you can enjoy that new-car feeling – wherever you park. 
              Our mission is to provide convenient, professional car care services that exceed expectations 
              and build lasting relationships with our customers."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;