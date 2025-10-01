import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/lovable-uploads/0d2360a7-2b5e-482b-881c-8b268207b1db.png"
            alt="Decent Detailers Logo"
            width={isScrolled ? 72 : 96}
            height={isScrolled ? 48 : 64}
            className={`transition-all duration-300 ${isScrolled ? "h-12" : "h-16"}`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="font-medium text-decent-blue hover:text-decent-lightBlue transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="font-medium text-decent-blue hover:text-decent-lightBlue transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="font-medium text-decent-blue hover:text-decent-lightBlue transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-medium text-decent-blue hover:text-decent-lightBlue transition-colors"
          >
            Contact
          </Link>
          <Link href="/booking">
            <Button className="bg-decent-blue hover:bg-decent-lightBlue text-white rounded-md">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden">
          <a
            href="tel:+15555555555"
            className="mr-4 p-2 bg-decent-blue text-white rounded-full"
          >
            <Phone size={20} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-decent-blue p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="py-2 px-4 font-medium text-decent-blue hover:bg-decent-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="py-2 px-4 font-medium text-decent-blue hover:bg-decent-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="py-2 px-4 font-medium text-decent-blue hover:bg-decent-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-2 px-4 font-medium text-decent-blue hover:bg-decent-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="py-2 px-4 font-medium text-white bg-decent-blue hover:bg-decent-lightBlue rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;