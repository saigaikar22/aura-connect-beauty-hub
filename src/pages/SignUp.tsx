import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, Phone, MapPin, User } from "lucide-react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Registration will be implemented later
    console.log("Sign up attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-background to-accent/10 flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-2xl shadow-elegant border-border/50">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
            <UserPlus className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-3xl font-serif text-primary">Create Account</CardTitle>
          <CardDescription className="text-muted-foreground">
            Join us today and experience luxury beauty services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="pl-10"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-foreground">Address *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea
                  id="address"
                  placeholder="Enter your complete address"
                  className="pl-10 min-h-[80px] resize-none"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className="pl-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="pl-10"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                    minLength={6}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 rounded border-border" 
                required 
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <Button type="submit" className="w-full bg-gradient-primary border-0 h-11 text-base">
              Create Account
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-4 text-muted-foreground">Already have an account?</span>
              </div>
            </div>

            <Button type="button" variant="outline" className="w-full" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>

            <div className="text-center mt-4">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                ← Back to Home
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
