import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check, X } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  features: string[];
  pros: string[];
  cons: string[];
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Himalaya Purifying Neem Face Wash",
    category: "facewash",
    price: 145,
    rating: 4.5,
    reviews: 1250,
    features: ["Neem Extract", "Turmeric", "Oil Control", "Acne Prevention"],
    pros: ["Natural ingredients", "Affordable", "Widely available"],
    cons: ["May dry skin", "Strong fragrance"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Cetaphil Gentle Skin Cleanser",
    category: "facewash",
    price: 499,
    rating: 4.7,
    reviews: 2100,
    features: ["Soap-Free", "Fragrance-Free", "All Skin Types", "pH Balanced"],
    pros: ["Dermatologist recommended", "Gentle formula", "No harsh chemicals"],
    cons: ["Higher price", "May not remove heavy makeup"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Neutrogena Deep Clean Gel",
    category: "facewash",
    price: 275,
    rating: 4.3,
    reviews: 890,
    features: ["Deep Cleansing", "Oil-Free", "Glycerin", "Salicylic Acid"],
    pros: ["Deep pore cleansing", "Good for oily skin", "Trusted brand"],
    cons: ["Can be drying", "Strong chemical scent"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Lakme Perfect Radiance Cream",
    category: "moisturizer",
    price: 195,
    rating: 4.2,
    reviews: 650,
    features: ["SPF 15", "Brightening", "Lightweight", "Vitamin E"],
    pros: ["Affordable", "Sun protection", "Nice fragrance"],
    cons: ["May feel greasy", "Low SPF"],
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Plum Green Tea Moisturizer",
    category: "moisturizer",
    price: 425,
    rating: 4.6,
    reviews: 1450,
    features: ["Green Tea Extract", "Oil-Free", "Non-Comedogenic", "Antioxidants"],
    pros: ["Natural ingredients", "Lightweight", "Matte finish"],
    cons: ["Pricier", "May not be hydrating enough for dry skin"],
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Lotus Herbals Whiteglow Cream",
    category: "moisturizer",
    price: 215,
    rating: 4.1,
    reviews: 780,
    features: ["Brightening", "SPF 25", "Herbal Formula", "Mulberry Extract"],
    pros: ["Good SPF", "Brightening effect", "Affordable"],
    cons: ["May leave white cast", "Heavy texture"],
    image: "/placeholder.svg"
  }
];

const categories = [
  { value: "facewash", label: "Face Wash" },
  { value: "moisturizer", label: "Moisturizer" },
];

const CompareProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [product1, setProduct1] = useState<string>("");
  const [product2, setProduct2] = useState<string>("");

  const filteredProducts = products.filter(p => p.category === selectedCategory);
  const selectedProduct1 = products.find(p => p.id.toString() === product1);
  const selectedProduct2 = products.find(p => p.id.toString() === product2);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? "fill-primary text-primary" : "text-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  const getBestProduct = () => {
    if (!selectedProduct1 || !selectedProduct2) return null;
    
    const score1 = selectedProduct1.rating * 0.6 + (selectedProduct1.pros.length - selectedProduct1.cons.length) * 0.4;
    const score2 = selectedProduct2.rating * 0.6 + (selectedProduct2.pros.length - selectedProduct2.cons.length) * 0.4;
    
    if (score1 > score2) return selectedProduct1;
    if (score2 > score1) return selectedProduct2;
    return null;
  };

  const bestProduct = getBestProduct();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Compare Products</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare two products side-by-side to make an informed decision
          </p>
        </div>
      </section>

      {/* Selection Section */}
      <section className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Select Products to Compare</CardTitle>
            <CardDescription>Choose a category and two products to compare</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Select value={selectedCategory} onValueChange={(value) => {
                setSelectedCategory(value);
                setProduct1("");
                setProduct2("");
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={product1} onValueChange={setProduct1} disabled={!selectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Product 1" />
                </SelectTrigger>
                <SelectContent>
                  {filteredProducts.map((product) => (
                    <SelectItem 
                      key={product.id} 
                      value={product.id.toString()}
                      disabled={product.id.toString() === product2}
                    >
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={product2} onValueChange={setProduct2} disabled={!selectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Product 2" />
                </SelectTrigger>
                <SelectContent>
                  {filteredProducts.map((product) => (
                    <SelectItem 
                      key={product.id} 
                      value={product.id.toString()}
                      disabled={product.id.toString() === product1}
                    >
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Comparison Section */}
      {selectedProduct1 && selectedProduct2 && (
        <>
          {/* Recommendation Banner */}
          {bestProduct && (
            <section className="container mx-auto px-4 pb-8">
              <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-primary">Our Recommendation</Badge>
                  </div>
                  <p className="text-lg font-semibold">
                    Based on ratings and features, we recommend:{" "}
                    <span className="text-primary">{bestProduct.name}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This product has a higher overall rating and better feature-to-price ratio.
                  </p>
                </CardContent>
              </Card>
            </section>
          )}

          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Product 1 */}
                <Card className={bestProduct?.id === selectedProduct1.id ? "border-primary shadow-lg" : ""}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{selectedProduct1.name}</CardTitle>
                      {bestProduct?.id === selectedProduct1.id && (
                        <Badge className="bg-primary">Best Choice</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <img src={selectedProduct1.image} alt={selectedProduct1.name} className="w-full h-full object-cover rounded-lg" />
                    </div>

                    <div>
                      <p className="text-3xl font-bold text-primary">₹{selectedProduct1.price}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2">Rating</p>
                      <div className="flex items-center gap-3">
                        {renderStars(selectedProduct1.rating)}
                        <span className="text-sm text-muted-foreground">
                          {selectedProduct1.rating} ({selectedProduct1.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2">Key Features</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct1.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary">{feature}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2">Pros</p>
                      <ul className="space-y-1">
                        {selectedProduct1.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2">Cons</p>
                      <ul className="space-y-1">
                        {selectedProduct1.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Product 2 */}
                <Card className={bestProduct?.id === selectedProduct2.id ? "border-primary shadow-lg" : ""}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{selectedProduct2.name}</CardTitle>
                      {bestProduct?.id === selectedProduct2.id && (
                        <Badge className="bg-primary">Best Choice</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <img src={selectedProduct2.image} alt={selectedProduct2.name} className="w-full h-full object-cover rounded-lg" />
                    </div>

                    <div>
                      <p className="text-3xl font-bold text-primary">₹{selectedProduct2.price}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2">Rating</p>
                      <div className="flex items-center gap-3">
                        {renderStars(selectedProduct2.rating)}
                        <span className="text-sm text-muted-foreground">
                          {selectedProduct2.rating} ({selectedProduct2.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2">Key Features</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct2.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary">{feature}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2">Pros</p>
                      <ul className="space-y-1">
                        {selectedProduct2.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2">Cons</p>
                      <ul className="space-y-1">
                        {selectedProduct2.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" onClick={() => {
                  setProduct1("");
                  setProduct2("");
                  setSelectedCategory("");
                }}>
                  Compare Different Products
                </Button>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CompareProducts;
