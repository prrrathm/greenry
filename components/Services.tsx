"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Briefcase, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate Offices",
    description: "Transform your workplace with professional plant installations that boost productivity and employee well-being.",
    features: ["Air quality improvement", "Stress reduction", "Professional aesthetics", "Ongoing maintenance"],
    price: "Starting from $299/month"
  },
  {
    icon: Home,
    title: "Home Spaces",
    description: "Create a peaceful, healthy home environment with carefully selected plants for every room.",
    features: ["Personalized selection", "Easy care guidance", "Seasonal updates", "Health benefits"],
    price: "Starting from $149/month"
  },
  {
    icon: Briefcase,
    title: "Co-working Spaces",
    description: "Enhance collaborative environments with plants that inspire creativity and reduce noise.",
    features: ["Flexible arrangements", "Community benefits", "Brand enhancement", "Member satisfaction"],
    price: "Starting from $199/month"
  },
  {
    icon: Users,
    title: "Event Spaces",
    description: "Temporary and permanent installations for conferences, events, and special occasions.",
    features: ["Event planning", "Temporary setups", "Custom arrangements", "Professional service"],
    price: "Custom pricing"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive plant solutions tailored to your specific environment and needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-green-600 mb-3">{service.price}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}