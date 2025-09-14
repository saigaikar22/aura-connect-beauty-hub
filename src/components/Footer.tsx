import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">A</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-rose-gold">AuraConnect</h3>
                <p className="text-xs text-soft-pink">by Shree Beauty Care</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Experience luxury beauty services in a serene, elegant environment. 
              Your journey to radiant beauty starts here.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-soft-pink hover:text-rose-gold">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-soft-pink hover:text-rose-gold">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-soft-pink hover:text-rose-gold">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-rose-gold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Products", href: "/products" },
                { label: "Special Offers", href: "/offers" },
                { label: "Gallery", href: "/gallery" },
                { label: "Book Appointment", href: "/booking" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block text-sm text-gray-300 hover:text-soft-pink transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-rose-gold">Our Services</h4>
            <div className="space-y-2">
              {[
                "Hair Styling & Color",
                "Makeup & Beauty",
                "Skincare Treatments",
                "Spa & Relaxation",
                "Bridal Packages",
                "Beauty Consultation",
              ].map((service) => (
                <p key={service} className="text-sm text-gray-300">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-rose-gold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-soft-pink mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  123 Beauty Street<br />
                  Elegant City, EC 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-soft-pink" />
                <a href="tel:+1234567890" className="text-sm text-gray-300 hover:text-soft-pink transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-soft-pink" />
                <a href="mailto:hello@auraconnect.com" className="text-sm text-gray-300 hover:text-soft-pink transition-colors">
                  hello@auraconnect.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-soft-pink mt-1" />
                <div className="text-sm text-gray-300">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} AuraConnect by Shree Beauty Care. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-soft-pink transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-soft-pink transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;