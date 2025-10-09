import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import productsImage from "@/assets/products-display.jpg";

const Products = () => {
  const products = [
    {
      name: "L'Oréal Hair Serum",
      price: "₹899",
      rating: 4,
      description: "Smoothens hair and adds shine. Perfect for frizzy and dry hair. Provides long-lasting smoothness.",
      image: productsImage,
      inStock: true,
    },
    {
      name: "Lakmé 9to5 Lipstick",
      price: "₹599",
      rating: 4,
      description: "Long-lasting matte finish. Available in multiple shades. Enriched with Vitamin E for soft lips.",
      image: productsImage,
      inStock: true,
    },
    {
      name: "Lotus Herbals Face Wash",
      price: "₹299",
      rating: 5,
      description: "Deep cleanses and refreshes skin. Removes impurities and excess oil. Suitable for all skin types.",
      image: productsImage,
      inStock: true,
    },
    {
      name: "O3+ Professional Facial Kit",
      price: "₹1,499",
      rating: 4,
      description: "Used for glowing skin treatments. Professional salon-grade quality. Complete facial care in one kit.",
      image: productsImage,
      inStock: true,
    },
    {
      name: "Biotique Bio Henna Fresh Powder",
      price: "₹199",
      rating: 5,
      description: "Natural hair color and conditioning. 100% organic ingredients. Adds shine and strength to hair.",
      image: productsImage,
      inStock: true,
    },
    {
      name: "Plum Green Tea Face Mist",
      price: "₹399",
      rating: 4,
      description: "Refreshing and hydrating face mist. Controls oil and minimizes pores. Perfect for on-the-go refreshment.",
      image: productsImage,
      inStock: false,
    },
    {
      name: "Maybelline Fit Me Foundation",
      price: "₹549",
      rating: 5,
      description: "Natural finish foundation. Matches skin tone perfectly. Oil-free and non-comedogenic formula.",
      image: productsImage,
      inStock: true,
    },
    {
      name: "Himalaya Nourishing Night Cream",
      price: "₹325",
      rating: 4,
      description: "Deep nourishment while you sleep. Reduces fine lines. Enriched with natural ingredients.",
      image: productsImage,
      inStock: true,
    },
    {
      name: "SUGAR Matte As Hell Crayon",
      price: "₹699",
      rating: 5,
      description: "Ultra-matte lip crayon. Comfortable wear all day. Rich pigmentation and smooth application.",
      image: productsImage,
      inStock: true,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Our Products
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Premium beauty and skincare products available at our salon
          </p>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-12 px-4 bg-gradient-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-accent rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Premium Beauty Products
            </h2>
            <p className="text-lg text-accent-foreground/90 mb-6 max-w-3xl mx-auto">
              We stock only the finest beauty and skincare products from trusted brands. Each product is carefully selected to ensure the best results for your beauty routine.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Best Selling Products
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden bg-gradient-soft">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors">
                    <Heart className="w-5 h-5 text-primary" />
                  </button>
                  {!product.inStock && (
                    <Badge className="absolute top-4 left-4 bg-destructive">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-serif text-xl">{product.name}</CardTitle>
                    {renderStars(product.rating)}
                  </div>
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="text-3xl font-bold text-primary">{product.price}</div>
                </CardContent>
                
                <CardFooter className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-primary border-0" 
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-16 px-4 bg-gradient-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Why Buy From Us?
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">✓</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">100% Authentic</h3>
              <p className="text-muted-foreground">
                All our products are genuine and sourced directly from authorized distributors
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">✓</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Expert Advice</h3>
              <p className="text-muted-foreground">
                Our beauty experts can help you choose the right products for your needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">✓</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Best Prices</h3>
              <p className="text-muted-foreground">
                Competitive pricing with special discounts for salon members
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
