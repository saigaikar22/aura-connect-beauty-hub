import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Phone, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Offers", href: "/offers" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-cream/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-primary">AuraConnect</h1>
              <p className="text-xs text-muted-foreground">by Shree Beauty Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/admin" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Admin
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+1234567890" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
            <Button className="bg-gradient-primary border-0" size="sm" asChild>
              <Link to="/booking" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Book Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/admin" className="flex items-center justify-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <Shield className="w-4 h-4" />
                    Admin
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+1234567890" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
                <Button className="bg-gradient-primary border-0" size="sm" asChild>
                  <Link to="/booking" className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;