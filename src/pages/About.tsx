import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-salon.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={aboutImage} 
          alt="Our Beautiful Salon" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-primary/40 flex items-center justify-center">
          <div className="text-center text-primary-foreground px-4">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl italic">"Where Beauty Meets Confidence"</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          </div>
          
          <div className="prose prose-lg mx-auto text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Welcome to AuraConnect by Shree Beauty Care, where passion meets expertise in the world of beauty and self-care. Our journey began with a simple dream - to create a sanctuary where every individual can discover their inner and outer radiance.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Founded with love and dedication, we have been transforming lives through our premium beauty treatments, exceptional service, and unwavering commitment to excellence. Our salon is not just a place for beauty services; it's a haven where confidence is nurtured and beauty is celebrated.
            </p>
            <p className="text-lg leading-relaxed">
              With years of experience and a team of highly skilled professionals, we blend traditional techniques with modern innovations to deliver results that exceed expectations. Every service we offer is a testament to our passion for making you look and feel your absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gradient-soft">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">Passion</h3>
                <p className="text-muted-foreground">
                  We love what we do and it shows in every service we provide
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">Experience</h3>
                <p className="text-muted-foreground">
                  Years of expertise in hair, skincare, and beauty treatments
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  Premium products and services for exceptional results
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Modern techniques blended with timeless beauty traditions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-accent border-none">
              <CardContent className="p-8">
                <h3 className="font-serif text-3xl font-bold text-accent-foreground mb-4">Our Mission</h3>
                <p className="text-accent-foreground text-lg leading-relaxed">
                  To make every client feel beautiful, confident, and relaxed by providing world-class beauty services in a luxurious and welcoming environment. We are committed to enhancing natural beauty while ensuring the highest standards of care and professionalism.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary border-none">
              <CardContent className="p-8">
                <h3 className="font-serif text-3xl font-bold text-primary-foreground mb-4">Our Vision</h3>
                <p className="text-primary-foreground text-lg leading-relaxed">
                  To become the most trusted and sought-after beauty destination in the city, recognized for excellence, innovation, and the transformative experiences we create. We aspire to set new standards in the beauty industry while staying true to our core values.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-soft">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Experience the Difference
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of satisfied clients who trust us with their beauty journey. Book your appointment today and discover why we're the preferred choice for beauty and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary border-0" asChild>
              <Link to="/booking">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
