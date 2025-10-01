
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConfirmationModal from "@/components/ConfirmationModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        type: "contact", // ✅ zaroor bhejna hai
      }),
    });

    if (res.ok) {
      setShowConfirmation(true);
      toast({
        title: "Message Sent ✅",
        description: "We'll get back to you as soon as possible!",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      toast({
        title: "Error ❌",
        description: "Failed to send message",
        variant: "destructive",
      });
    }
  } catch (err) {
    toast({
      title: "Error ❌",
      description: "Something went wrong",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gradient-to-b from-decent-light to-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-decent-blue mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-decent-lightBlue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to book? Get in touch with our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-decent-blue mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-decent-blue hover:bg-decent-lightBlue text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="bg-decent-blue rounded-xl shadow-xl p-8 text-white mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone size={24} className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+15555555555" className="text-decent-silver hover:text-white transition-colors">
                        (555) 555-5555
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@decentdetailers.com" className="text-decent-silver hover:text-white transition-colors">
                        info@decentdetailers.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={24} className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Service Area</p>
                      <p className="text-decent-silver">
                        We come to your location - serving a 30-mile radius
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-decent-silver">Monday - Friday: 8am - 6pm</p>
                      <p className="text-decent-silver">Saturday: 9am - 4pm</p>
                      <p className="text-decent-silver">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-decent-blue mb-6">Ready to Book?</h2>
                <p className="text-gray-700 mb-6">
                  Skip the message and go straight to our online booking system to schedule your service.
                </p>
                <Button asChild className="bg-decent-blue hover:bg-decent-lightBlue text-white">
                  <a href="/booking" className="flex items-center">
                    Book Now <ArrowRight size={16} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ConfirmationModal
        open={showConfirmation}
        onClose={handleCloseConfirmation}
        title="Message Sent Successfully!"
        description={`Thank you ${formData.name}! We've received your message and will get back to you as soon as possible at ${formData.email}.`}
      />
      
     
    </div>
  );
};

export default Contact;
