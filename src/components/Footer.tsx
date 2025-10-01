import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-decent-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/lovable-uploads/0d2360a7-2b5e-482b-881c-8b268207b1db.png"
              alt="Decent Detailers Logo"
              width={120}
              height={80}
              className="h-20 mb-4"
              priority
            />
            <p className="text-decent-silver mb-4 text-center md:text-left">
              Bringing showroom-quality results directly to your doorstep with 9+ years of expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1B1ncBZGvp/" className="hover:text-decent-silver transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-decent-silver transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
          
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="/" className="hover:text-decent-silver transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-decent-silver transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-decent-silver transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-decent-silver transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-decent-silver transition-colors">Book Now</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Contact Us</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li className="flex items-center justify-center md:justify-start">
                <Phone size={18} className="mr-2" />
                <a href="tel:+15555555555" className="hover:text-decent-silver transition-colors">(555) 555-5555</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@decentdetailers.com" className="hover:text-decent-silver transition-colors">info@decentdetailers.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MapPin size={18} className="mr-2" />
                <span> RI/MA/CT</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Clock size={18} className="mr-2" />
                <span>Mon-Sat: 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-decent-silver/30" />

        <div className="text-center text-decent-silver text-sm">
          <p>&copy; {currentYear} Decent Detailers. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-white transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;