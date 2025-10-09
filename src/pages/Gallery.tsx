import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import aboutSalon from "@/assets/about-salon.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const galleryItems = [
    {
      image: gallery1,
      title: "Hair Transformation",
      category: "hair",
      description: "Beautiful hair styling and coloring transformation",
    },
    {
      image: gallery2,
      title: "Bridal Makeup",
      category: "bridal",
      description: "Stunning bridal makeup and styling",
    },
    {
      image: gallery3,
      title: "Glowing Skin",
      category: "facial",
      description: "Radiant skin after facial treatment",
    },
    {
      image: serviceHair,
      title: "Hair Styling",
      category: "hair",
      description: "Professional hair styling service",
    },
    {
      image: serviceBridal,
      title: "Bridal Look",
      category: "bridal",
      description: "Complete bridal transformation",
    },
    {
      image: serviceFacial,
      title: "Facial Treatment",
      category: "facial",
      description: "Relaxing facial therapy",
    },
    {
      image: serviceNails,
      title: "Nail Art",
      category: "nails",
      description: "Beautiful manicure and nail art",
    },
    {
      image: aboutSalon,
      title: "Our Salon",
      category: "salon",
      description: "Luxurious salon interiors",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "bridal", label: "Bridal" },
    { id: "hair", label: "Hair" },
    { id: "facial", label: "Facial" },
    { id: "nails", label: "Nails" },
    { id: "salon", label: "Salon" },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Witness the magic of transformation - Browse through our stunning before & after results
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-background sticky top-0 z-40 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={filter === category.id ? "bg-gradient-primary border-0" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-gradient-soft">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                      <h3 className="font-serif text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-primary-foreground/80">{item.description}</p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-gradient-primary border-0 capitalize">
                    {item.category}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-charcoal/95 z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center text-primary-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your appointment today and let us create magic for you too!
          </p>
          <Button size="lg" className="bg-gradient-primary border-0" asChild>
            <a href="/booking">Book Your Transformation</a>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-primary-foreground">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-sm md:text-base opacity-90">Happy Clients</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-sm md:text-base opacity-90">Years Experience</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm md:text-base opacity-90">Beauty Services</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-sm md:text-base opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
