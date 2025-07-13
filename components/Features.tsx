"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Heart, TrendingUp, Shield, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Air Purification",
    description: "Our plants naturally filter toxins and improve air quality, creating healthier indoor environments."
  },
  {
    icon: Heart,
    title: "Stress Reduction",
    description: "Studies show that plants reduce stress levels by up to 37% and improve overall well-being."
  },
  {
    icon: TrendingUp,
    title: "Productivity Boost",
    description: "Increase workplace productivity by 15% with strategically placed greenery."
  },
  {
    icon: Shield,
    title: "Low Maintenance",
    description: "Carefully selected plants that thrive with minimal care, perfect for busy lifestyles."
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our plant specialists provide ongoing care guidance and maintenance support."
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Professional installation and setup within 24-48 hours of your consultation."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Greenry?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive plant solutions that transform your space into a thriving, 
            productive environment while supporting your health and well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-green-800" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}