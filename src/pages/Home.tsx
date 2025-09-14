import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Calendar, Sparkles, Heart, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredServices = [
    {
      name: "Bridal Package",
      description: "Complete bridal transformation for your special day",
      price: "From $299",
      duration: "4-6 hours",
      image: "💄",
    },
    {
      name: "Signature Facial",
      description: "Rejuvenating skincare treatment with premium products",
      price: "$89",
      duration: "60 mins",
      image: "✨",
    },
    {
      name: "Hair Styling",
      description: "Professional cuts, colors, and styling",
      price: "From $45",
      duration: "1-3 hours",
      image: "💇‍♀️",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely amazing experience! The team at AuraConnect made me feel like royalty.",
    },
    {
      name: "Emily Chen",
      rating: 5,
      text: "Best beauty salon in the city. Professional service and stunning results every time.",
    },
    {
      name: "Maria Rodriguez",
      rating: 5,
      text: "My go-to place for all beauty needs. The staff is incredibly talented and friendly.",
    },
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Heart, value: "98%", label: "Satisfaction Rate" },
    { icon: Sparkles, value: "50+", label: "Beauty Services" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-soft py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Discover Your
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Natural Beauty</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience luxury beauty services in an elegant, serene environment. 
              At AuraConnect by Shree Beauty Care, your radiant transformation begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary border-0" asChild>
                <Link to="/booking" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Your Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="font-serif text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Indulge in our carefully curated beauty treatments designed to enhance your natural radiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.image}</div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                  <Button 
                    className="w-full bg-gradient-primary border-0 group-hover:opacity-90 transition-opacity" 
                    asChild
                  >
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-20 px-4 bg-gradient-accent">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-8">
            Special Offers This Month
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  New Client Special
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Get 20% off your first visit! Choose from any of our premium services 
                  and experience the AuraConnect difference.
                </p>
                <Button size="lg" className="bg-gradient-primary border-0" asChild>
                  <Link to="/offers">View All Offers</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our satisfied customers about their AuraConnect experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-charcoal">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal text-center">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-rose-gold mb-6">
            Ready to Begin Your Beauty Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why AuraConnect is the premier 
            destination for beauty and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary border-0" asChild>
              <Link to="/booking" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-charcoal" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;