// import Hero from "@/components/Hero";
import VideoHero from "@/components/VideoHero";
import Features from "@/components/Features";
import Services from "@/components/Services";
// import GalleryCarousel from "@/components/carousel/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import CTA from "@/components/CTA";
import FAQs from "@/components/FAQ";
// import { EmblaOptionsType } from "embla-carousel";
import ClientsMarquee from "@/components/ClientsMarquee";
// import ProjectsCarousel from "@/components/ProjectsCarousel";
import ProjectCarouselBeta from "@/components/ProjectsCarousel/ProjectCarousel";
// import AutoPlayVideo from "@/components/VideoPlayer";
// import { ProjectsCarousel } from "@/components/carousel/ProjectsCarousel";
import { Metadata } from "next";
// import Stacker from "@/components/Stacker";
import MainTagline from "@/components/v2/maintagline";

export const metadata: Metadata = {
	title: "Evergreenry - Premium Office Plants & Biophilic Design Solutions",
	description:
		"Transform your workspace with Evergreenry's premium office plants, green walls, moss walls, and biophilic design solutions. Expert installation and maintenance services nationwide. Boost productivity by 15% and improve air quality naturally.",
	openGraph: {
		title: "Premium Office Plants & Biophilic Design Solutions | Evergreenry",
		description:
			"Transform your workspace with premium office plants, green walls & biophilic design. NASA-approved air purifying plants that boost productivity by 15%.",
		images: ["/og-home.jpg"],
		url: "https://evergreenry.com",
	},
	twitter: {
		card: "summary_large_image",
		title: "Premium Office Plants & Biophilic Design Solutions | Evergreenry",
		description:
			"Transform your workspace with premium office plants, green walls & biophilic design. NASA-approved air purifying plants that boost productivity by 15%.",
		images: ["/og-home.jpg"],
	},
};

export default function Home() {
	// const OPTIONS: EmblaOptionsType = { loop: true, };
	// const SLIDE_COUNT = 5;
	// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

	const faqs = [
		{
			q: "What is Evergreenry?",
			a: `We add biophilia !
			Evergreenry , established in 2018 with the former name We Decor, has been greening up corporates in India with the help of plants, planters, green walls, moss walls, gardens and other landscape design elements.`,
		},
		{
			q: "What types of projects does Evergreenry undertake?",
			a: `Evergreenry greens up corporates, commercial buildings, hospitality spaces in India with the help of plants, planters, green walls, moss walls, gardens and other landscape design elements.
			We provide landscape design and execution services for both indoor &amp; outdoor work to Architects, Designers, end clients, commercial and hospitality clients and farm houses.`,
		},
		{
			q: `What’s the process of adding plants to my office?`,
			a: "Contact Us through email / call ---- We do a site visit and understand your design through drawings ---- We send you a proposal to choose options from ---- You choose and we deliver",
		},
		{
			q: "Where does Evergreenry operate?",
			a: "Evergreenry has full fledged design as well as execution offices in Delhi NCR and Bangalore from where we serve North as well as South India clients respectively.",
		},
		{
			q: "What is Biophilia?",
			a: `Biophilia mean connection to nature.
				Biophilic design in architecture is based on the belief that humans have an innate connection to nature, and that by bringing elements of the natural world in to our built environment, we can improve our health, happiness, and overall quality of life.
				Evergreenry does this with the help of plants, green walls, moss walls and other plants elements in office spaces.`,
		},
		{
			q: "Would you have a quick planting solution for my office?",
			a: "Yes, Evergreenry has set packages of quick planting service in planters, where you place an order and relax. We deliver to you in stipulated time period basis the quantity of plants &amp; planters required.",
		},
		{
			q: "Does Evergreenry add only natural greenery or even faux plants are an option?",
			a: "Greenery in any form is good. We add biophilia in natural , artificial (faux) as well as preserved form. You get plants, green walls, moss walls – in all natural, artificial and preserved way.",
		},
	];

	const websiteJsonLd = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Evergreenry",
		url: "https://evergreenry.com",
		description:
			"Premium office plants, biophilic design solutions, green walls, and plant maintenance services for businesses nationwide.",
		potentialAction: {
			"@type": "SearchAction",
			target: "https://evergreenry.com/search?q={search_term_string}",
			"query-input": "required name=search_term_string",
		},
	};

	const faqJsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.a,
			},
		})),
	};

	const serviceJsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Office Plants & Biophilic Design Services",
		description:
			"Premium office plants, green walls, moss walls, zen gardens, and biophilic design solutions for businesses.",
		provider: {
			"@type": "Organization",
			name: "Evergreenry",
			url: "https://evergreenry.com",
		},
		areaServed: "India",
		serviceType: "Landscaping and Plant Installation",
		offers: [
			{
				"@type": "Offer",
				name: "Office Plants Installation",
				description:
					"Custom plant selection and installation for office environments",
			},
			{
				"@type": "Offer",
				name: "Green Wall Design",
				description: "Living wall installation with irrigation systems",
			},
			{
				"@type": "Offer",
				name: "Plant Maintenance",
				description: "Regular care and maintenance services for office plants",
			},
		],
	};

	return (
		<div className="min-h-screen relative">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
			/>
			{/* <Stacker /> */}
			{/* <Hero /> */}
			<VideoHero />
			<MainTagline />
			<Services />
			{/* <ProjectsCarousel slides={[1,2,3,4]} /> */}
			{/* <section className="min-h-[60vh] h-[50vh] sm:h-[70vh] md:h-screen px-4 sm:px-8 md:px-20 rounded-xl flex items-center">
				<AutoPlayVideo src="/videos/home-banner.mp4" />
			</section> */}
			<ClientsMarquee />

			{/* Projects Gallery Section */}
			{/* <section className="py-20 bg-green-50">
				<div className="">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
							Our Recent Projects
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover how we&apos;ve transformed workspaces and homes with our
							sustainable plant solutions.
						</p>
					</div>
			<ProjectsCarousel />
				</div>
			</section> */}

			<ProjectCarouselBeta />
			<BookingForm />
			<Testimonials />
			<Features />

			{/* FAQ Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-0 sm:px-6 lg:px-8">
					<FAQs data={faqs} />
				</div>
			</section>
			<CTA />
		</div>
	);
}
