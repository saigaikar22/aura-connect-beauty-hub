import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Phone, Mail, User, MessageSquare } from "lucide-react";
import { useState } from "react";

const Booking = () => {
  const [selectedService, setSelectedService] = useState("");
  const [estimatedCost, setEstimatedCost] = useState("");
  const [estimatedDuration, setEstimatedDuration] = useState("");

  const services = [
    { id: "facial", name: "Signature Facial", price: 89, duration: "60 mins" },
    { id: "haircut", name: "Hair Cut & Style", price: 65, duration: "90 mins" },
    { id: "coloring", name: "Hair Coloring", price: 120, duration: "2-3 hours" },
    { id: "makeup", name: "Professional Makeup", price: 75, duration: "45 mins" },
    { id: "bridal", name: "Bridal Package", price: 299, duration: "4-6 hours" },
    { id: "manicure", name: "Luxury Manicure", price: 45, duration: "45 mins" },
    { id: "pedicure", name: "Spa Pedicure", price: 55, duration: "60 mins" },
    { id: "massage", name: "Relaxation Massage", price: 95, duration: "75 mins" },
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"
  ];

  const handleServiceChange = (serviceId: string) => {
    setSelectedService(serviceId);
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setEstimatedCost(`$${service.price}`);
      setEstimatedDuration(service.duration);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show an alert. In real app, this would submit to backend
    alert("Booking request submitted! We'll contact you shortly to confirm your appointment.");
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-charcoal mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-muted-foreground">
            Schedule your beauty transformation at AuraConnect
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Appointment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Full Name *
                      </Label>
                      <Input id="fullName" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number *
                      </Label>
                      <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Select Service *</Label>
                    <Select onValueChange={handleServiceChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your desired service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name} - ${service.price} ({service.duration})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input 
                        id="date" 
                        type="date" 
                        min={new Date().toISOString().split('T')[0]}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Preferred Time *
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Special Requests or Notes
                    </Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Any allergies, preferences, or special requests..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary border-0" size="lg">
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedService ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">
                        {services.find(s => s.id === selectedService)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{estimatedDuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated Cost:</span>
                      <span className="font-semibold text-primary">{estimatedCost}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    Select a service to see pricing details
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>• Appointments are subject to availability</p>
                <p>• We'll contact you within 24 hours to confirm</p>
                <p>• Cancellations require 24-hour notice</p>
                <p>• Please arrive 15 minutes early</p>
                <p>• Consultation is included in all services</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent border-primary/20">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-primary mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Call us directly to book or ask questions
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+1234567890" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (234) 567-890
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;