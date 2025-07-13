"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "Greenry transformed our office environment completely. Our team's productivity has increased significantly, and the air quality is noticeably better. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, StartupHub",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "The consultation was thorough and professional. They understood our space perfectly and delivered exactly what we needed. Our employees love the new green environment.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "HR Director, InnovateCo",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "Working with Greenry was seamless. From consultation to installation, everything was handled professionally. The ongoing support has been exceptional.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Facility Manager, CorpCenter",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "The low-maintenance aspect was exactly what we needed. Beautiful plants that thrive with minimal care, and the team provides excellent ongoing support.",
    rating: 5
  },
  {
    name: "Lisa Park",
    role: "Creative Director, DesignStudio",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "Our creative space has been completely revitalized. The plants add such positive energy, and our clients always comment on the beautiful environment.",
    rating: 5
  },
  {
    name: "Robert Kim",
    role: "Office Manager, LegalFirm",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
    content: "Professional service from start to finish. The team understood our corporate environment needs and delivered a solution that exceeded expectations.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied businesses who have transformed their workspaces with Greenry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}