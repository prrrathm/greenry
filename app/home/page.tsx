"use client";

import ClientLogos from "@/components/v2/BrandClients";
// import Stacker from "@/components/v2/ClientPersona";
import ClientPersona from "@/components/v2/ClientPersona";
// import CountrySelectionBanner from "@/components/v2/CountrySelectionBar";
import Footer from "@/components/v2/footer";
import ContactFormSection from "@/components/v2/Form";
// import EnquiryForm from "@/components/v2/Form";
import HeroSection from "@/components/v2/HeroSection";
import MainTagline from "@/components/v2/maintagline";
import OneStopShop from "@/components/v2/OneStopSolution";
import OfficeLocations from "@/components/v2/OurPresence";
import Testimonials from "@/components/v2/Testimonials";
import WhyChooseFlipspaces from "@/components/v2/WhyChooseUs";

export default function Home() {
	return (
		<div className="w-full">
			<main>
				<HeroSection />
				<MainTagline />
				<OneStopShop />
				<ClientPersona />
				<WhyChooseFlipspaces />
				<Testimonials />
				<ClientLogos />
				<ContactFormSection />
				<OfficeLocations />
				<Footer />
			</main>
		</div>
	);
}
