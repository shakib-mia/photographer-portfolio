import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	Check,
	Clock,
	Heart,
	Camera,
	Sparkles,
	Sun,
} from "lucide-react";

const services = [
	{
		slug: "wedding",
		number: "01",
		category: "Wedding photography",
		title: "The art of forever.",
		subtitle: "Your day. Your people. Your story.",
		description:
			"A wedding is not just a celebration. It is a collection of fleeting moments, quiet emotions, and people who mean everything. My approach combines honest storytelling with an editorial eye, preserving the feeling of your day in photographs you will return to for years to come.",
		philosophy:
			"The most meaningful photographs are rarely the ones you plan. They happen in the glance across the room, the hand held a little tighter, and the laughter that arrives when nobody is watching.",
		heroImage:
			"https://images.unsplash.com/photo-1519741497674-611481863552?w=2000&q=90",
		heroAlt: "An elegant wedding celebration captured in natural light",
		introImage:
			"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=85",
		introAlt: "A couple sharing an intimate wedding moment",
		gallery: [
			{
				src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=85",
				alt: "A couple celebrating their wedding",
			},
			{
				src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1200&q=85",
				alt: "An intimate wedding detail",
			},
			{
				src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=85",
				alt: "An elegant wedding setting",
			},
		],
		icon: Heart,
		idealFor:
			"Couples who value genuine emotion, meaningful details, and timeless imagery.",
		duration: "Half-day or full-day coverage",
		deliverables: [
			"Pre-wedding consultation",
			"Personalized photography planning",
			"Candid wedding-day coverage",
			"Editorial couple portraits",
			"Professionally edited photographs",
			"Private online gallery",
			"High-resolution digital delivery",
		],
		process: [
			{
				title: "Getting to know you",
				description:
					"We talk about your relationship, your plans, and the moments that matter most to you.",
			},
			{
				title: "Planning your day",
				description:
					"Together, we discuss the timeline, locations, lighting, and important details.",
			},
			{
				title: "Being present",
				description:
					"You enjoy your celebration while I document the genuine moments as they unfold.",
			},
			{
				title: "Your photographs",
				description:
					"Your images are carefully selected, edited, and delivered in a private gallery.",
			},
		],
		portfolioSlug: "the-art-of-together",
		portfolioTitle: "The Art of Together",
	},
	{
		slug: "portrait",
		number: "02",
		category: "Portrait photography",
		title: "Your story, in focus.",
		subtitle: "An honest expression of you.",
		description:
			"Portrait photography is an opportunity to see yourself from a different perspective. Through natural light, thoughtful composition, and gentle direction, I create images that feel personal rather than posed — photographs that reflect who you are, not simply how you look.",
		philosophy:
			"You don't need to know how to pose or perform in front of a camera. The best portraits begin with a comfortable atmosphere, a little patience, and the freedom to be yourself.",
		heroImage:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=2000&q=90",
		heroAlt: "An expressive portrait photographed in soft natural light",
		introImage:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=85",
		introAlt: "A natural and expressive personal portrait",
		gallery: [
			{
				src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=85",
				alt: "A thoughtful individual portrait",
			},
			{
				src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=85",
				alt: "A softly lit portrait",
			},
			{
				src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=85",
				alt: "A contemporary portrait",
			},
		],
		icon: Camera,
		idealFor:
			"Individuals, creatives, professionals, and people building a personal brand.",
		duration: "A relaxed individual session",
		deliverables: [
			"Personal creative consultation",
			"Location and styling guidance",
			"Guided portrait session",
			"Natural posing direction",
			"Carefully retouched photographs",
			"Private digital gallery",
			"High-resolution image delivery",
		],
		process: [
			{
				title: "Understanding your vision",
				description:
					"We discuss the mood, personality, and purpose you want your portraits to communicate.",
			},
			{
				title: "Finding your style",
				description:
					"We plan the location, wardrobe, lighting, and visual direction around you.",
			},
			{
				title: "The portrait session",
				description:
					"With simple guidance and a relaxed pace, we create space for natural expressions.",
			},
			{
				title: "The final selection",
				description:
					"Your strongest images are refined and delivered through a private online gallery.",
			},
		],
		portfolioSlug: "in-her-own-light",
		portfolioTitle: "In Her Own Light",
	},
	{
		slug: "editorial",
		number: "03",
		category: "Editorial photography",
		title: "A vision, made visible.",
		subtitle: "Imagery with a point of view.",
		description:
			"Editorial photography brings ideas to life through visual storytelling. From fashion concepts to creative campaigns, every frame is shaped by composition, atmosphere, and intention. The result is imagery with a distinctive visual identity and a story worth exploring.",
		philosophy:
			"Great editorial imagery does more than show a product or a person. It creates a feeling, communicates an idea, and invites the viewer into a carefully imagined world.",
		heroImage:
			"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=2000&q=90",
		heroAlt: "A fashion editorial portrait with a distinctive visual style",
		introImage:
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=85",
		introAlt: "A fashion editorial photographed with artistic direction",
		gallery: [
			{
				src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=85",
				alt: "An editorial fashion composition",
			},
			{
				src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=85",
				alt: "A fashion portrait with expressive styling",
			},
			{
				src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85",
				alt: "A contemporary fashion story",
			},
		],
		icon: Sparkles,
		idealFor:
			"Fashion labels, independent designers, creative campaigns, and emerging brands.",
		duration: "Planned according to the creative brief",
		deliverables: [
			"Creative consultation and briefing",
			"Concept development",
			"Moodboard and visual direction",
			"Shoot planning and coordination",
			"Editorial photography session",
			"Professional image editing",
			"High-resolution final delivery",
		],
		process: [
			{
				title: "The creative brief",
				description:
					"We define the audience, objectives, references, and message behind your project.",
			},
			{
				title: "Building the concept",
				description:
					"We shape the moodboard, visual direction, styling, and photography plan.",
			},
			{
				title: "Production day",
				description:
					"The concept takes shape through deliberate composition, light, and creative collaboration.",
			},
			{
				title: "Final image collection",
				description:
					"The selected images are refined and prepared according to the agreed project requirements.",
			},
		],
		portfolioSlug: "the-quiet-elegance",
		portfolioTitle: "The Quiet Elegance",
	},
	{
		slug: "lifestyle",
		number: "04",
		category: "Lifestyle photography",
		title: "Life, as it unfolds.",
		subtitle: "The beauty of being present.",
		description:
			"Everyday life has its own quiet beauty. Lifestyle photography documents the interactions, environments, and experiences that make ordinary moments meaningful. The approach is natural and observant, creating photographs that feel lived-in, personal, and full of atmosphere.",
		philosophy:
			"Not every meaningful moment announces itself. Sometimes it is the light entering a room, the familiar rhythm of a morning, or the people who make a place feel like home.",
		heroImage:
			"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=2000&q=90",
		heroAlt: "Warm sunlight falling across a beautiful natural landscape",
		introImage:
			"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=85",
		introAlt: "A peaceful landscape captured in natural light",
		gallery: [
			{
				src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=85",
				alt: "A tranquil natural landscape",
			},
			{
				src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1200&q=85",
				alt: "Golden light across an open landscape",
			},
			{
				src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=85",
				alt: "A scenic outdoor environment",
			},
		],
		icon: Sun,
		idealFor:
			"Families, couples, travel stories, everyday experiences, and lifestyle brands.",
		duration: "Planned around your story and location",
		deliverables: [
			"Initial consultation",
			"Location and session planning",
			"Natural documentary-style coverage",
			"Thoughtful composition and lighting",
			"Artistic color grading",
			"Private online gallery",
			"High-resolution digital delivery",
		],
		process: [
			{
				title: "Your everyday story",
				description:
					"We talk about the people, places, and experiences you want to preserve.",
			},
			{
				title: "Choosing the setting",
				description:
					"We select a location and timing that support the natural atmosphere of your story.",
			},
			{
				title: "Letting moments happen",
				description:
					"Rather than over-directing, I observe and photograph the interactions that unfold.",
			},
			{
				title: "A collection to keep",
				description:
					"Your images are curated and edited into a cohesive collection you can revisit.",
			},
		],
		portfolioSlug: "between-earth-and-sky",
		portfolioTitle: "Between Earth and Sky",
	},
];

type Service = (typeof services)[number];

export function generateStaticParams() {
	return services.map((service) => ({
		slug: service.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const service = services.find((item) => item.slug === slug);

	if (!service) {
		return {
			title: "Service Not Found",
		};
	}

	return {
		title: service.category,
		description: service.description,
		openGraph: {
			title: `${service.category} | ÉLORE`,
			description: service.description,
			images: [service.heroImage],
		},
	};
}

function getRelatedServices(currentService: Service) {
	const index = services.findIndex(
		(service) => service.slug === currentService.slug,
	);

	const nextService = services[(index + 1) % services.length];
	const previousService =
		services[(index - 1 + services.length) % services.length];

	return { nextService, previousService };
}

export default async function ServiceDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const service = services.find((item) => item.slug === slug);

	if (!service) {
		notFound();
	}

	const { nextService, previousService } = getRelatedServices(service);
	const Icon = service.icon;

	return (
		<>
			<main className="overflow-hidden">
				{/* Hero */}
				<section className="px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
					<div className="mx-auto max-w-350">
						<Link
							href="/services"
							className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#77746d] transition-colors hover:text-[#a58b68]"
						>
							<ArrowLeft
								size={16}
								className="transition-transform group-hover:-translate-x-1"
							/>
							All services
						</Link>

						<div className="mt-12 grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-16">
							<div>
								<span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#a58b68]">
									<Icon size={17} />
									{service.category}
								</span>

								<h1 className="mt-7 font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.98] tracking-[-0.055em]">
									{service.title}
								</h1>

								<p className="mt-6 font-serif text-xl italic text-[#a58b68] md:text-2xl">
									{service.subtitle}
								</p>
							</div>

							<div className="border-t border-[#24231f]/15 pt-6 md:pb-2">
								<span className="text-xs uppercase tracking-[0.2em] text-[#77746d]">
									{service.number} / 04
								</span>

								<p className="mt-5 text-base leading-8 text-[#77746d] md:text-lg">
									{service.description}
								</p>

								<Link
									href={`/contact?service=${service.slug}`}
									className="group mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]"
								>
									Discuss your project
									<ArrowUpRight
										size={17}
										className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
									/>
								</Link>
							</div>
						</div>

						<div className="relative mt-14 aspect-16/8 overflow-hidden md:mt-20">
							<Image
								src={service.heroImage}
								alt={service.heroAlt}
								fill
								priority
								sizes="100vw"
								className="object-cover"
							/>

							<div className="absolute inset-0 bg-black/10" />

							<span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-white md:bottom-10 md:left-10">
								ÉLORE — Visual stories
							</span>
						</div>
					</div>
				</section>

				{/* Philosophy */}
				<section className="px-6 py-20 md:px-10 md:py-32">
					<div className="mx-auto grid max-w-350 gap-12 md:grid-cols-2 md:items-center md:gap-24">
						<div className="relative aspect-4/5 overflow-hidden">
							<Image
								src={service.introImage}
								alt={service.introAlt}
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
							/>
						</div>

						<div>
							<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a58b68]">
								The philosophy
							</span>

							<h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
								More than a moment.
								<br />
								<span className="italic text-[#a58b68]">
									A feeling that stays.
								</span>
							</h2>

							<p className="mt-8 text-base leading-8 text-[#77746d]">
								{service.philosophy}
							</p>

							<div className="mt-10 border-l border-[#a58b68] pl-6">
								<p className="font-serif text-xl leading-relaxed md:text-2xl">
									Photography should not simply show you what
									happened. It should help you remember how it
									felt.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* What's included */}
				<section className="bg-[#efede6] px-6 py-24 md:px-10 md:py-32">
					<div className="mx-auto grid max-w-350 gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
						<div>
							<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a58b68]">
								Your experience
							</span>

							<h2 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.045em] md:text-7xl">
								Considered
								<br />
								from{" "}
								<span className="italic text-[#a58b68]">
									start to finish.
								</span>
							</h2>

							<p className="mt-7 max-w-125 text-base leading-8 text-[#77746d]">
								Every detail contributes to the final
								experience. Here is what you can expect when we
								work together.
							</p>

							<div className="mt-10 flex items-start gap-4 border-t border-[#24231f]/15 pt-6">
								<Clock
									size={21}
									strokeWidth={1.5}
									className="mt-1 shrink-0 text-[#a58b68]"
								/>

								<div>
									<p className="text-sm font-semibold">
										Session format
									</p>
									<p className="mt-2 text-sm leading-7 text-[#77746d]">
										{service.duration}
									</p>
								</div>
							</div>

							<div className="mt-6 flex items-start gap-4 border-t border-[#24231f]/15 pt-6">
								<Camera
									size={21}
									strokeWidth={1.5}
									className="mt-1 shrink-0 text-[#a58b68]"
								/>

								<div>
									<p className="text-sm font-semibold">
										A personal approach
									</p>
									<p className="mt-2 text-sm leading-7 text-[#77746d]">
										Each project is planned around your
										individual needs, preferences, and
										creative vision.
									</p>
								</div>
							</div>
						</div>

						<div className="border-t border-[#24231f]/15">
							{service.deliverables.map((item, index) => (
								<div
									key={item}
									className="flex items-center gap-5 border-b border-[#24231f]/15 py-6"
								>
									<span className="text-xs tracking-[0.15em] text-[#a58b68]">
										{String(index + 1).padStart(2, "0")}
									</span>

									<span className="flex-1 text-sm leading-7 md:text-base">
										{item}
									</span>

									<Check
										size={17}
										strokeWidth={1.5}
										className="shrink-0 text-[#a58b68]"
									/>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Creative process */}
				<section className="px-6 py-24 md:px-10 md:py-32">
					<div className="mx-auto max-w-350">
						<div className="max-w-200">
							<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a58b68]">
								The process
							</span>

							<h2 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.045em] md:text-7xl">
								A thoughtful
								<br />
								<span className="italic text-[#a58b68]">
									way of working.
								</span>
							</h2>

							<p className="mt-7 max-w-125 text-base leading-8 text-[#77746d]">
								A clear, collaborative process gives us the
								space to focus on what matters: creating
								meaningful photographs.
							</p>
						</div>

						<div className="mt-16 grid gap-10 border-t border-[#24231f]/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
							{service.process.map((step, index) => (
								<article
									key={step.title}
									className="border-b border-[#24231f]/15 pb-8"
								>
									<span className="text-xs tracking-[0.2em] text-[#a58b68]">
										{String(index + 1).padStart(2, "0")}
									</span>

									<h3 className="mt-8 font-serif text-2xl">
										{step.title}
									</h3>

									<p className="mt-4 text-sm leading-7 text-[#77746d]">
										{step.description}
									</p>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* Related portfolio */}
				<section className="bg-[#efede6] px-6 py-24 md:px-10 md:py-32">
					<div className="mx-auto max-w-350">
						<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
							<div>
								<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a58b68]">
									Selected work
								</span>

								<h2 className="mt-6 font-serif text-4xl tracking-[-0.04em] md:text-6xl">
									Stories brought to life.
								</h2>
							</div>

							<Link
								href="/portfolio"
								className="group inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]"
							>
								View all projects
								<ArrowUpRight
									size={17}
									className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
								/>
							</Link>
						</div>

						<Link
							href={`/portfolio/${service.portfolioSlug}`}
							className="group mt-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-16"
						>
							<div className="relative aspect-16/10 overflow-hidden">
								<Image
									src={service.gallery[0].src}
									alt={service.gallery[0].alt}
									fill
									sizes="(max-width: 768px) 100vw, 60vw"
									className="object-cover transition-transform duration-1000 group-hover:scale-105"
								/>
							</div>

							<div>
								<span className="text-xs uppercase tracking-[0.2em] text-[#a58b68]">
									Featured project
								</span>

								<h3 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
									{service.portfolioTitle}
								</h3>

								<p className="mt-5 text-sm leading-7 text-[#77746d]">
									Explore a visual story shaped by light,
									emotion, and an intentional approach to
									photography.
								</p>

								<span className="mt-8 inline-flex items-center gap-3 border-b border-[#24231f]/30 pb-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors group-hover:border-[#a58b68] group-hover:text-[#a58b68]">
									Explore the story
									<ArrowUpRight
										size={16}
										className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
									/>
								</span>
							</div>
						</Link>
					</div>
				</section>

				{/* Inquiry CTA */}
				<section className="bg-[#24231f] px-6 py-24 text-[#f7f5f0] md:px-10 md:py-32">
					<div className="mx-auto max-w-350">
						<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#c0a987]">
							Have something in mind?
						</span>

						<div className="mt-7 flex flex-col justify-between gap-10 md:flex-row md:items-end">
							<div>
								<h2 className="max-w-225 font-serif text-5xl leading-[1.08] tracking-[-0.045em] md:text-8xl">
									Let&apos;s make
									<br />
									it{" "}
									<span className="italic text-[#c0a987]">
										meaningful.
									</span>
								</h2>

								<p className="mt-7 max-w-125 text-base leading-8 text-white/55">
									Tell me a little about your ideas, your
									plans, or the moments you want to preserve.
									We can take it from there.
								</p>
							</div>

							<Link
								href={`/contact?service=${service.slug}`}
								className="group flex size-36 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-500 hover:scale-105 hover:border-[#c0a987] hover:bg-[#c0a987] md:size-44"
							>
								<span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em]">
									Start an inquiry
									<ArrowUpRight
										size={18}
										className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
									/>
								</span>
							</Link>
						</div>
					</div>
				</section>

				{/* Previous / Next service */}
				<section className="px-6 py-10 md:px-10 md:py-14">
					<div className="mx-auto flex max-w-350 items-center justify-between gap-6">
						<Link
							href={`/services/${previousService.slug}`}
							className="group flex min-w-0 items-center gap-3"
						>
							<ArrowLeft
								size={18}
								className="shrink-0 transition-transform group-hover:-translate-x-1"
							/>

							<span>
								<span className="block text-xs uppercase tracking-[0.15em] text-[#77746d]">
									Previous service
								</span>

								<span className="mt-2 block truncate font-serif text-lg md:text-2xl">
									{previousService.category}
								</span>
							</span>
						</Link>

						<Link
							href={`/services/${nextService.slug}`}
							className="group flex min-w-0 items-center gap-3 text-right"
						>
							<span>
								<span className="block text-xs uppercase tracking-[0.15em] text-[#77746d]">
									Next service
								</span>

								<span className="mt-2 block truncate font-serif text-lg md:text-2xl">
									{nextService.category}
								</span>
							</span>

							<ArrowRight
								size={18}
								className="shrink-0 transition-transform group-hover:translate-x-1"
							/>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
