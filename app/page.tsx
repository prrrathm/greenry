import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import GalleryCarousel from "@/components/carousel/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FAQs from "@/components/FAQ";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  
  const faqs = [
    {
      q: "What is Greenry?",
      a: "Greenry is an environmental organization focused on biodiversity conservation and ecological restoration through premium plant solutions for businesses and homes."
    },
    {
      q: "What types of projects does Greenry undertake?",
      a: "We specialize in corporate office installations, home plant solutions, co-working space transformations, and event space arrangements with ongoing maintenance support."
    },
    {
      q: "How can I get involved with Greenry's initiatives?",
      a: "You can book a free consultation through our website, call us directly, or reach out via email. We offer customized solutions for every space and budget."
    },
    {
      q: "Where does Greenry operate?",
      a: "Greenry operates nationwide, providing professional plant installation and maintenance services across multiple regions with local expert support."
    },
    {
      q: "Why is biodiversity conservation important?",
      a: "Biodiversity conservation ensures ecosystem stability, supports life-sustaining services, helps combat climate change, and creates healthier indoor environments that boost productivity and well-being."
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Hero />
      <Features />
      <Services />
      
      {/* Projects Gallery Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we&apos;ve transformed workspaces and homes with our sustainable plant solutions.
            </p>
          </div>
          <GalleryCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </section>

      <Testimonials />
      <BookingForm />
      <CTA />
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FAQs data={faqs} />
        </div>
      </section>

      <Footer />
    </div>
  );
}