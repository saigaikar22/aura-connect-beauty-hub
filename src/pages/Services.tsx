import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Scissors, Crown, Flower2, Hand, Droplet, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import hairImage from "@/assets/service-hair.jpg";
import bridalImage from "@/assets/service-bridal.jpg";
import facialImage from "@/assets/service-facial.jpg";
import nailsImage from "@/assets/service-nails.jpg";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Haircut & Styling",
      description: "Expert haircuts and styling tailored to your face shape and personality. From classic cuts to trendy styles, our experienced stylists will give you the perfect look.",
      price: "₹499",
      image: hairImage,
      popular: true,
    },
    {
      icon: Sparkles,
      title: "Hair Coloring & Highlights",
      description: "Transform your look with our professional coloring services. We use premium products for vibrant, long-lasting color that enhances your natural beauty.",
      price: "₹1,299",
      image: hairImage,
      popular: false,
    },
    {
      icon: Crown,
      title: "Bridal Makeup",
      description: "Look stunning on your special day with our comprehensive bridal package. Includes hair styling, makeup, draping, and pre-bridal treatments for a flawless bridal look.",
      price: "₹4,999",
      image: bridalImage,
      popular: true,
    },
    {
      icon: Flower2,
      title: "Facial & Cleanup",
      description: "Rejuvenate your skin with our luxurious facial treatments. Deep cleansing, exfoliation, and nourishment for radiant, glowing skin.",
      price: "₹799",
      image: facialImage,
      popular: true,
    },
    {
      icon: Hand,
      title: "Manicure & Pedicure",
      description: "Pamper your hands and feet with our professional nail care services. Includes nail shaping, cuticle care, massage, and polish application.",
      price: "₹599",
      image: nailsImage,
      popular: false,
    },
    {
      icon: Droplet,
      title: "Waxing & Threading",
      description: "Smooth, hair-free skin with our gentle waxing and precise threading services. We use quality products for minimal discomfort and maximum results.",
      price: "₹299",
      image: facialImage,
      popular: false,
    },
    {
      icon: HeartPulse,
      title: "Spa & Massage Therapy",
      description: "Relax and unwind with our therapeutic spa treatments. Full body massage, aromatherapy, and relaxation techniques to rejuvenate your mind and body.",
      price: "₹999",
      image: facialImage,
      popular: false,
    },
    {
      icon: Sparkles,
      title: "Hair Spa Treatment",
      description: "Deep conditioning treatment for damaged and dry hair. Restores shine, strength, and vitality to your hair with premium products.",
      price: "₹899",
      image: hairImage,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Discover our comprehensive range of beauty and wellness services designed to make you look and feel amazing
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 bg-gradient-primary border-0">
                        Popular
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button size="sm" className="bg-gradient-primary border-0" asChild>
                      <Link to="/booking">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-16 px-4 bg-gradient-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Special Packages
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">
              Save more with our exclusive service packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Party Package</CardTitle>
                <CardDescription>Perfect for special occasions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>✓ Hair Styling</li>
                  <li>✓ Makeup</li>
                  <li>✓ Manicure</li>
                  <li>✓ Pedicure</li>
                </ul>
                <div className="text-3xl font-bold text-primary">₹2,499</div>
                <p className="text-sm text-muted-foreground line-through">₹2,896</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-primary border-0" asChild>
                  <Link to="/booking">Book Package</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-primary border-none text-primary-foreground hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary-foreground/20 text-primary-foreground border-0">Most Popular</Badge>
                <CardTitle className="font-serif text-2xl">Bridal Package</CardTitle>
                <CardDescription className="text-primary-foreground/80">Complete bridal transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li>✓ Bridal Makeup</li>
                  <li>✓ Hair Styling</li>
                  <li>✓ Pre-Bridal Facial</li>
                  <li>✓ Manicure & Pedicure</li>
                  <li>✓ Draping Service</li>
                </ul>
                <div className="text-3xl font-bold">₹7,999</div>
                <p className="text-sm line-through opacity-80">₹9,495</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                  <Link to="/booking">Book Package</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Spa Retreat</CardTitle>
                <CardDescription>Complete relaxation experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>✓ Full Body Massage</li>
                  <li>✓ Facial Treatment</li>
                  <li>✓ Hair Spa</li>
                  <li>✓ Aromatherapy</li>
                </ul>
                <div className="text-3xl font-bold text-primary">₹3,499</div>
                <p className="text-sm text-muted-foreground line-through">₹4,096</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-primary border-0" asChild>
                  <Link to="/booking">Book Package</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Ready to Transform?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your appointment today and experience the luxury of professional beauty care
          </p>
          <Button size="lg" className="bg-gradient-primary border-0" asChild>
            <Link to="/booking">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
