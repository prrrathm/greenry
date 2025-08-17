import {
	Card,
	CardContent,
	// CardDescription,
	// CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Quote } from "lucide-react";
import Image from "next/image";
import FAQs from "@/components/FAQ";
// import BookingForm from "@/components/BookingFormDialog";
// import BookingFormBeta from "@/components/BookingForm";
import CTA from "@/components/CTA";
// import ClientsMarquee from "@/components/ClientsMarquee";
// import TestimonialsCarousel from "@/components/Testimonials";
import Features from "@/components/Features";
// import { ChevronRight, Quote } from "@/components/icons"; // Assuming icons for visuals

// Services data with expanded content
interface Testimonial {
	quote: string;
	author: string;
}

interface CaseStudy {
	title: string;
	description: string;
}

interface OfficePlantsService {
	title: string;
	image: string;
	description: string;
	features: string[];
	testimonial: Testimonial;
	caseStudy: CaseStudy;
}
const services: OfficePlantsService[] = [
	{
		title: "Office Plants",
		image: "/projects/office-new-1.jpg",
		description:
			"Transform your workplace into a thriving, green environment with our bespoke office plant service. We specialize in curating indoor plants that elevate both aesthetics and functionality. From compact desk succulents to towering floor plants like monstera or dracaena, our selections are tailored to your office’s lighting, space, and vibe. Research from NASA’s Clean Air Study shows plants like peace lilies and snake plants can remove up to 87% of air toxins in 24 hours, while a University of Exeter study found that plants boost productivity by 15%. Our process starts with a free on-site consultation, followed by expert plant selection, delivery, and installation. Pair this with our optional maintenance plans, and your office will stay lush with zero hassle.",
		features: [
			"Custom plant picks based on light, space, and style preferences",
			"Low-maintenance varieties like pothos and ZZ plants for busy teams",
			"Wide range of sizes: desk-friendly to statement pieces",
			"Optional care packages: watering, pruning, and health checks",
			"Eco-friendly pots in ceramic, recycled plastic, or wood finishes",
		],
		testimonial: {
			quote:
				"Evergreen turned our dull office into a vibrant space. Clients comment on the plants all the time, and our team feels more energized—it’s a win-win!",
			author: "Mark Thompson, CEO of BrightWave Solutions",
		},
		caseStudy: {
			title: "Revamping a Tech Startup’s Open-Plan Office",
			description:
				"For NextGen Tech, we installed 25 plants across their 2,000 sq ft office, including a mix of air-purifying species and aesthetic focal points. Post-installation, employee satisfaction surveys showed a 22% increase in reported well-being.",
		},
	},
	{
		title: "Green Walls",
		image: "/projects/office-new-2.jpg",
		description:
			"Elevate your space with a custom green wall—nature’s masterpiece meets modern design. These living walls blend lush foliage like ferns, ivy, and philodendrons into a vertical garden that’s as functional as it is stunning. Green walls purify air (absorbing CO2 at rates up to 1.7 kg per square meter annually, per EPA studies), reduce ambient noise by up to 10 decibels, and create a biophilic connection that lowers stress by 37%, according to the Journal of Environmental Psychology. We handle every step: design consultation, plant selection, irrigation system integration, and professional installation. Whether it’s a corporate lobby or a cozy café, our green walls are built to impress and endure.",
		features: [
			"Bespoke designs tailored to your space and brand",
			"Self-sustaining irrigation with smart water recycling",
			"Diverse plant mixes for texture and color variety",
			"Noise-dampening and air-cleaning benefits",
			"Full-service setup and ongoing care options",
		],
		testimonial: {
			quote:
				"Our green wall is the centerpiece of our headquarters. It’s a conversation starter and makes the space feel alive.",
			author: "Laura Chen, Facilities Manager at InnovateCo",
		},
		caseStudy: {
			title: "A Green Wall for a Boutique Hotel",
			description:
				"We crafted a 12x8 ft green wall for The Urban Retreat’s lobby, using 150 plants and a drip irrigation system. Guest feedback highlighted a ‘calming’ atmosphere, and the hotel saw a 10% uptick in repeat bookings.",
		},
	},
	{
		title: "Moss Walls",
		image: "/projects/office-new-3.jpg",
		description:
			"Introduce effortless elegance with our preserved moss walls—zero-maintenance art that brings nature indoors. Made from real moss, hand-harvested and preserved with eco-friendly techniques, these installations thrive without water, sunlight, or care. Ideal for low-light areas or high-traffic zones, moss walls offer acoustic benefits (absorbing up to 50% of mid-frequency noise, per Acoustical Society data) and subtle air purification. Customize them with vibrant greens, earthy tones, or even your logo in moss. They’re sustainable, durable, and a standout feature for offices, retail spaces, or homes looking for a unique touch.",
		features: [
			"No upkeep: no watering, trimming, or light needed",
			"Custom shapes, sizes, and color blends",
			"Sound-absorbing properties for quieter spaces",
			"Long-lasting preservation (up to 10 years)",
			"Hypoallergenic and dust-repellent materials",
		],
		testimonial: {
			quote:
				"The moss wall in our showroom is a total game-changer—low effort, high impact. Customers love the vibe it creates.",
			author: "Priya Patel, Owner of UrbanNest Boutique",
		},
		caseStudy: {
			title: "Moss Wall for a Wellness Studio",
			description:
				"We designed a 6x4 ft moss wall for Harmony Yoga, blending reindeer and cushion moss. The studio reported a noticeable drop in echo during classes, enhancing the meditative experience.",
		},
	},
	{
		title: "Plant Maintenance",
		image: "/projects/office-new-4.jpg",
		description:
			"Keep your indoor jungle thriving with our expert plant maintenance service. Our horticulturists provide tailored care—watering, fertilizing, pruning, pest control, and health assessments—to ensure every plant stays in peak condition. We serve spaces of all sizes, from a single ficus to a full office greenery setup. With flexible schedules (weekly, bi-weekly, or monthly), we adapt to your needs. If a plant falters, we replace it free of charge under our health guarantee. Studies show well-maintained plants can extend their lifespan by 50%, making this a smart investment for your green assets.",
		features: [
			"Personalized care plans for every plant type",
			"Trained specialists with organic pest solutions",
			"Flexible visit timing to suit your schedule",
			"Free replacements for plants that don’t thrive",
			"Detailed care reports after each visit",
		],
		testimonial: {
			quote:
				"Evergreen’s maintenance team saved our plants and our sanity. They’re reliable, professional, and truly care about the greenery.",
			author: "David Kim, Operations Lead at LegalEdge",
		},
		caseStudy: {
			title: "Rescuing a Corporate Plant Collection",
			description:
				"A 50-plant setup at Pinnacle Law was fading due to neglect. After 3 months of our care, 95% of the plants were revived, and we added a monthly plan to keep them flourishing.",
		},
	},
	{
		title: "Zen Garden",
		image: "/image-content/zen-1.JPG",
		description:
			"Craft your own sanctuary of calm with our custom Zen Garden designs. Using elements like raked sand, smooth stones, and carefully chosen greenery, these gardens embody harmony and mindfulness. Ideal for offices, meditation corners, or outdoor terraces, a Zen Garden creates a tranquil retreat from daily stress. Studies in environmental psychology highlight that exposure to such spaces can reduce anxiety and improve focus, making them perfect for both personal and professional environments.",
		features: [
			"Personalized layouts with stones, sand, and greenery",
			"Low-maintenance setup requiring minimal care",
			"Designed for mindfulness and stress relief",
			"Adaptable to indoor or outdoor spaces",
			"Enhances focus and calm in work environments",
		],
		testimonial: {
			quote:
				"Our Zen Garden transformed a dull corner of our office into a peaceful escape. Employees now use it daily to recharge.",
			author: "Sophia Martinez, HR Manager at Mediatech Group",
		},
		caseStudy: {
			title: "A Zen Garden for a Corporate Lounge",
			description:
				"We designed a 10x6 ft Zen Garden for a corporate lounge. Post-installation, employee wellness surveys showed a 30% rise in stress reduction ratings.",
		},
	},
	{
		title: "Design an Indoor Terrarium",
		image: "/image-content/indoor-terrarium.jpg",
		description:
			"Bring a miniature world of nature indoors with our bespoke terrarium design service. Using a mix of succulents, moss, ferns, and decorative elements like pebbles and driftwood, we create self-sustaining, low-maintenance ecosystems. Terrariums add a modern and artistic touch to desks, shelves, and reception areas while boosting indoor air quality. Research shows that small-scale greenery improves concentration and sparks creativity, making terrariums ideal for both homes and offices.",
		features: [
			"Custom plant selections tailored to your style",
			"Compact designs perfect for desks and shelves",
			"Low-maintenance ecosystems with self-sustaining balance",
			"Decorative accents for a unique artistic touch",
			"Great as gifts or office statement pieces",
		],
		testimonial: {
			quote:
				"Our terrarium workshop was a hit! Everyone left with a unique piece of living art that brightens their workspace.",
			author: "Nikhil Verma, Co-Founder of CreatiHive",
		},
		caseStudy: {
			title: "Terrarium Design for a Co-Working Space",
			description:
				"We created 20 custom terrariums for a co-working hub, placing them across desks and breakout zones. Members reported higher creativity and engagement levels in the following month.",
		},
	},
];

// FAQ data
const faqs = [
	{
		q: "How do you choose the right plants for my space?",
		a: "We assess your lighting, humidity, space layout, and style preferences during a free consultation, then recommend plants that thrive in those conditions.",
	},
	{
		q: "What’s included in the maintenance service?",
		a: "Watering, feeding, pruning, pest control, health checks, and free replacements if needed—customized to your plants and schedule.",
	},
	{
		q: "How long do moss walls last?",
		a: "With proper conditions (no direct sunlight or excessive humidity), our preserved moss walls can last 8-10 years.",
	},
];

// Component for individual service cards
function ServiceCard({ service }: { service: OfficePlantsService }) {
	return (
		<Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
			<Image
				src={service.image}
				alt={service.title}
				width={600}
				height={400}
				className="w-full h-64 object-cover"
			/>
			<CardHeader>
				<CardTitle className="text-2xl font-semibold text-primary">
					{service.title}
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<p className="text-gray-700 leading-relaxed">{service.description}</p>
				<h3 className="font-bold text-lg">Key Features</h3>
				<ul className="list-disc list-inside text-gray-600">
					{service.features.map((feature, index) => (
						<li key={index}>{feature}</li>
					))}
				</ul>
				{service.testimonial && (
					<div className="bg-gray-50 p-4 rounded-lg">
						<Quote className="h-6 w-6 text-primary mb-2" />
						<p className="italic text-gray-800">
							&quot;{service.testimonial.quote}&quot;
						</p>
						<p className="text-right mt-2 text-gray-600">
							- {service.testimonial.author}
						</p>
					</div>
				)}
				{service.caseStudy && (
					<div className="bg-gray-50 p-4 rounded-lg">
						<h4 className="font-bold text-lg mb-2">
							{service.caseStudy.title}
						</h4>
						<p className="text-gray-700">{service.caseStudy.description}</p>
					</div>
				)}
			</CardContent>
			{/* <CardFooter>
				<Button className="mt-4 bg-primary hover:bg-primary text-white flex items-center">
					Learn More <ChevronRight className="ml-2 h-4 w-4" />
				</Button>
			</CardFooter> */}
		</Card>
	);
}

// Main Services Page component
export default function ServicesPage() {
	return (
		<div className="pt-32 w-full border bg-gradient-to-br from-secondary via-white to-primary/40">
			{/* Hero Section */}
			<section className="text-center mb-16 flex flex-col items-center justify-end h-[40vh] gap-6">
				<Button
					size={"sm"}
					className="bg-secondary/50 hover:bg-secondary/60 text-primary border border-primary cursor-pointer font-semibold text-xs rounded-full hover:shadow-none transition-all hover:px-2 "
				>
					Book Free Consultation
				</Button>
				<h1 className="text-2xl sm:text-4xl font-roboto text-gray-700 font-bold md:mb-4">
					Our Plant Services
				</h1>
				<p className="text-sm md:text-xl text-gray-600 w-[80%] md:max-w-3xl mx-auto">
					At Evergreen, we bring nature indoors with expert solutions that
					enhance your space, health, and happiness. Explore our offerings
					below.
				</p>
			</section>
			{/* <ClientsMarquee /> */}

			{/* Services Grid */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 mx-6 md:mx-20">
				{services.map((service, index) => (
					<ServiceCard key={index} service={service} />
				))}
			</section>

			{/* Why Choose Evergreen */}

			{/* FAQ Section */}
			<section className="py-20  w-full bg-white">
				<Features />
				<div className="mx-0 px-0 sm:px-6 lg:px-8">
					<FAQs data={faqs} />
				</div>
			</section>
			{/* Final CTA */}
			<CTA />
		</div>
	);
}
