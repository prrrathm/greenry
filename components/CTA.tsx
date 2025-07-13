"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  const scrollToBooking = () => {
    document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-900  to-green-800 from-0% to-80%">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied clients who have created healthier, more productive environments with Greenry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToBooking}
              size="lg" 
              className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-black hover:bg-white hover:text-green-600 px-8 py-3 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-4567
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">24-48h</div>
              <div className="opacity-90">Quick Installation</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="opacity-90">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}