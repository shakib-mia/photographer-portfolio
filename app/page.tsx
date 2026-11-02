import Footer from "./src/components/layout/Footer";
import Navbar from "./src/components/layout/Navbar";
import AboutPreview from "./src/components/sections/AboutPreview";
import ContactCTA from "./src/components/sections/ContactCTA";
import FeaturedWorks from "./src/components/sections/FeaturedWorks";
import Hero from "./src/components/sections/Hero";
import ServicesPreview from "./src/components/sections/ServicesPreview";
import Testimonials from "./src/components/sections/Testimonials";

export default function HomePage() {
	return (
		<>
			<main>
				<Hero />
				<FeaturedWorks />
				<AboutPreview />
				<ServicesPreview />
				<Testimonials />
				<ContactCTA />
				{/* Additional homepage sections will be added here. */}
			</main>
		</>
	);
}
