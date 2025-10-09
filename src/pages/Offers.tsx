import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Calendar, Percent, Users, Sparkles, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import offersImage from "@/assets/offers-banner.jpg";

const Offers = () => {
  const offers = [
    {
      icon: Sparkles,
      title: "Festival Offer",
      discount: "20% OFF",
      description: "Get 20% off on all makeup services during the festive season",
      details: "Valid on bridal makeup, party makeup, and professional makeup services",
      validity: "Valid till: Dec 31, 2025",
      color: "bg-gradient-primary",
      featured: true,
    },
    {
      icon: Gift,
      title: "Combo Deal",
      discount: "₹1,499",
      description: "Hair Spa + Facial + Manicure @ Special Price",
      details: "Save ₹1,097 with this exclusive combo package",
      validity: "Limited time offer",
      color: "bg-gradient-accent",
      featured: true,
    },
    {
      icon: Users,
      title: "Student Offer",
      discount: "15% OFF",
      description: "Special discount for students on all services",
      details: "Valid college ID required. Applicable on all beauty services",
      validity: "Year-round offer",
      color: "bg-secondary",
      featured: false,
    },
    {
      icon: Percent,
      title: "New Customer Offer",
      discount: "FREE",
      description: "First-time visitors get a free hair consultation",
      details: "Personalized hair care advice and product recommendations included",
      validity: "For new customers only",
      color: "bg-primary",
      featured: false,
    },
    {
      icon: Calendar,
      title: "Monthly Membership",
      discount: "30% OFF",
      description: "Become a member and save on every visit",
      details: "Get 30% off on all services, priority booking, and exclusive perks",
      validity: "Annual membership",
      color: "bg-gradient-primary",
      featured: true,
    },
    {
      icon: Sparkles,
      title: "Bridal Special",
      discount: "₹2,000 OFF",
      description: "Exclusive discount on bridal packages",
      details: "Book your bridal package and get ₹2,000 off on total bill",
      validity: "Advance booking required",
      color: "bg-rose-gold",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Banner */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src={offersImage} 
          alt="Special Offers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-charcoal/80 flex items-center justify-center">
          <div className="text-center text-primary-foreground px-4">
            <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-0 text-lg px-4 py-1">
              Limited Time Only
            </Badge>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4">
              Special Offers
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Exclusive deals and discounts on our premium beauty services
            </p>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              View All Offers
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Featured Offers
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">
              Don't miss out on these amazing deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => {
              const IconComponent = offer.icon;
              return (
                <Card 
                  key={index} 
                  className={`overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 ${
                    offer.featured ? 'border-primary' : ''
                  } relative group`}
                >
                  {offer.featured && (
                    <div className="absolute -right-12 top-8 rotate-45 bg-primary text-primary-foreground text-xs font-bold py-1 px-12">
                      POPULAR
                    </div>
                  )}
                  
                  <div className={`${offer.color} p-6 text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-2">
                        {offer.title}
                      </h3>
                      <div className="text-4xl font-bold text-white">
                        {offer.discount}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardDescription className="text-base font-medium text-foreground">
                      {offer.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {offer.details}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{offer.validity}</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button className="w-full bg-gradient-primary border-0" asChild>
                      <Link to="/booking">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Redeem */}
      <section className="py-16 px-4 bg-gradient-soft">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              How to Redeem Offers
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                Choose Your Offer
              </h3>
              <p className="text-muted-foreground">
                Select from our range of exciting offers and deals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                Book Appointment
              </h3>
              <p className="text-muted-foreground">
                Schedule your visit online or call us directly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                Enjoy Your Service
              </h3>
              <p className="text-muted-foreground">
                Mention the offer code and enjoy discounted services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <ul className="list-disc list-inside space-y-2">
                <li>All offers are subject to availability and may be modified or withdrawn without prior notice</li>
                <li>Offers cannot be combined with other promotions or discounts</li>
                <li>Prior appointment is mandatory for availing special offers</li>
                <li>Offer validity dates must be strictly adhered to</li>
                <li>For student offers, valid ID proof is required at the time of service</li>
                <li>Membership offers require minimum contract period</li>
                <li>Management reserves the right to refuse service without prior notice</li>
                <li>Refunds are not available on promotional packages once booked</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-serif text-4xl font-bold text-primary-foreground mb-6">
            Ready to Save Big?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Book your appointment now and take advantage of our exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link to="/booking">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:+1234567890">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
