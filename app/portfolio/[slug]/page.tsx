import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

const projects = [
	{
		slug: "the-art-of-together",
		title: "The Art of Together",
		category: "Wedding",
		location: "Tuscany, Italy",
		year: "2025",
		cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
		description:
			"An intimate celebration of love, connection, and the beautiful moments that make two people one.",
		introduction:
			"Some stories deserve to be remembered exactly as they happened. The Art of Together captures a celebration filled with genuine emotions, quiet gestures, and unforgettable moments.",
		story: "Set against the timeless beauty of Tuscany, this wedding was a reminder that the most meaningful photographs often happen between the planned moments. From the anticipation before the ceremony to the spontaneous laughter shared throughout the evening, every frame reflects the warmth of a day worth remembering.",
		approach:
			"My approach was to document the celebration naturally, allowing the couple and their guests to enjoy every moment. Soft natural light, thoughtful compositions, and an eye for genuine emotion helped shape this visual story.",
		images: [
			"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1400&q=85",
		],
	},
	{
		slug: "in-her-own-light",
		title: "In Her Own Light",
		category: "Portrait",
		location: "Paris, France",
		year: "2025",
		cover: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=85",
		description:
			"A portrait study exploring individuality, confidence, and the quiet beauty of being yourself.",
		introduction:
			"Every person carries a story that deserves to be seen. In Her Own Light is a portrait collection celebrating individuality through simplicity and natural expression.",
		story: "Photographed in Paris, this session focused on capturing personality rather than creating a perfect pose. The intention was to create portraits that feel personal, honest, and effortlessly timeless.",
		approach:
			"Working with available light and minimal direction, I focused on subtle expressions, natural movement, and the relationship between the subject and her surroundings.",
		images: [
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1400&q=85",
		],
	},
	{
		slug: "between-earth-and-sky",
		title: "Between Earth & Sky",
		category: "Landscape",
		location: "Dolomites, Italy",
		year: "2024",
		cover: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=85",
		description:
			"A visual journey through the stillness, scale, and extraordinary beauty of the natural world.",
		introduction:
			"Nature has a remarkable way of making us pause. Between Earth & Sky explores the relationship between vast landscapes, changing light, and the quiet moments in between.",
		story: "The mountains of the Dolomites offered a landscape full of contrasts. Gentle morning light, dramatic peaks, and peaceful reflections came together to create a collection inspired by the feeling of being somewhere far beyond the everyday.",
		approach:
			"I focused on composition, natural light, and the relationship between foreground and distant scenery to communicate the atmosphere of each location.",
		images: [
			"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
		],
	},
	{
		slug: "the-quiet-elegance",
		title: "The Quiet Elegance",
		category: "Editorial",
		location: "London, UK",
		year: "2025",
		cover: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2000&q=85",
		description:
			"A refined editorial exploring timeless style, understated details, and modern expression.",
		introduction:
			"Elegance does not always need to announce itself. The Quiet Elegance is an editorial study of form, texture, movement, and understated confidence.",
		story: "Built around a minimal visual direction, this collection explores how fashion and personality can come together through thoughtful styling and carefully considered compositions.",
		approach:
			"With an emphasis on clean framing, controlled natural light, and subtle movement, I wanted every image to feel like a frame from a larger visual narrative.",
		images: [
			"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
		],
	},
	{
		slug: "moments-in-between",
		title: "Moments in Between",
		category: "Wedding",
		location: "Lake Como, Italy",
		year: "2024",
		cover: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=2000&q=85",
		description:
			"A celebration of the unscripted moments that make a wedding day unforgettable.",
		introduction:
			"The most beautiful memories are not always planned. Moments in Between is a wedding collection dedicated to the candid interactions that happen naturally throughout a celebration.",
		story: "From quiet conversations to spontaneous laughter, this project captures the atmosphere surrounding a couple's special day. The focus was on preserving the feeling of the occasion rather than simply documenting its schedule.",
		approach:
			"I worked discreetly, observing the people and interactions around me while looking for natural compositions and authentic expressions.",
		images: [
			"https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
		],
	},
	{
		slug: "a-study-of-light",
		title: "A Study of Light",
		category: "Portrait",
		location: "Copenhagen, Denmark",
		year: "2024",
		cover: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=2000&q=85",
		description:
			"A minimal portrait series exploring natural light, expression, and human character.",
		introduction:
			"Light can completely change the way we see a face, a mood, or a moment. A Study of Light explores this relationship through a series of simple and expressive portraits.",
		story: "This collection was created around the idea that a portrait does not need an elaborate setting to communicate something meaningful. A thoughtful moment and the right light can be enough.",
		approach:
			"Using minimal setups and natural light, I focused on facial expression, subtle shadows, and the small details that give each portrait its own character.",
		images: [
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1400&q=85",
		],
	},
	{
		slug: "the-art-of-simplicity",
		title: "The Art of Simplicity",
		category: "Editorial",
		location: "Milan, Italy",
		year: "2024",
		cover: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=85",
		description:
			"A fashion editorial finding beauty in minimal styling and considered visual details.",
		introduction:
			"Sometimes the strongest visual statements come from doing less. The Art of Simplicity explores the relationship between minimal styling, confident expression, and clean composition.",
		story: "Set in Milan, this editorial takes inspiration from understated fashion and modern visual culture. Every frame was designed to feel intentional without becoming overly complicated.",
		approach:
			"I kept the visual direction minimal, using simple backgrounds, natural movement, and carefully balanced compositions to give each image room to breathe.",
		images: [
			"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
		],
	},
	{
		slug: "where-the-wild-things-are",
		title: "Where the Wild Things Are",
		category: "Landscape",
		location: "Iceland",
		year: "2023",
		cover: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85",
		description:
			"An exploration of dramatic landscapes and the powerful beauty of untouched nature.",
		introduction:
			"Some places make you feel wonderfully small. Where the Wild Things Are is a landscape collection inspired by the raw beauty and scale of the natural world.",
		story: "Iceland's dramatic scenery provided the perfect setting for this visual journey. From towering mountains to open landscapes, each photograph reflects a different perspective on the relationship between people and nature.",
		approach:
			"Patience and observation shaped this project. I focused on changing weather, natural textures, and the way light interacts with the landscape.",
		images: [
			"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
		],
	},
];

type Project = (typeof projects)[number];

export async function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find((item) => item.slug === slug);

	if (!project) {
		return {
			title: "Project Not Found",
		};
	}

	return {
		title: project.title,
		description: project.description,
	};
}

export default async function ProjectDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const projectIndex = projects.findIndex((item) => item.slug === slug);

	if (projectIndex === -1) {
		notFound();
	}

	const project: Project = projects[projectIndex];
	const previousProject =
		projects[(projectIndex - 1 + projects.length) % projects.length];
	const nextProject = projects[(projectIndex + 1) % projects.length];

	return (
		<>
			<main className="overflow-hidden bg-[#f7f5f0]">
				{/* Project Hero */}
				<section className="px-5 pb-12 pt-36 sm:px-8 sm:pb-16 sm:pt-40 lg:px-14">
					<div className="mx-auto max-w-400">
						<Link
							href="/portfolio"
							className="group mb-12 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] text-[#77746d] transition-colors hover:text-[#a58b68]"
						>
							<ArrowLeft
								size={15}
								className="transition-transform group-hover:-translate-x-1"
							/>
							Back to portfolio
						</Link>

						<div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
							<div>
								<div className="mb-6 flex items-center gap-3">
									<span className="h-px w-8 bg-[#a58b68]" />
									<span className="text-[10px] uppercase tracking-[0.24em] text-[#77746d]">
										{project.category} photography
									</span>
								</div>

								<h1 className="max-w-250 font-serif text-[clamp(3.5rem,9vw,9rem)] leading-[0.9] tracking-[-0.06em] text-[#24231f]">
									{project.title}
									<span className="text-[#a58b68]">.</span>
								</h1>
							</div>

							<p className="max-w-87.5 text-[12px] leading-loose text-[#77746d] lg:pb-2">
								{project.description}
							</p>
						</div>

						<div className="relative mt-12 aspect-video max-h-187.5 overflow-hidden bg-[#e8e2d8] sm:mt-16">
							<Image
								src={project.cover}
								alt={project.title}
								fill
								priority
								sizes="100vw"
								className="object-cover"
							/>
						</div>
					</div>
				</section>

				{/* Project Information */}
				<section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
					<div className="mx-auto grid max-w-350 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
						<div>
							<p className="text-[10px] uppercase tracking-[0.22em] text-[#a58b68]">
								Project information
							</p>

							<div className="mt-8 grid grid-cols-2 gap-8 border-t border-black/10 pt-6 lg:grid-cols-1">
								<div>
									<p className="text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
										Category
									</p>
									<p className="mt-3 font-serif text-xl text-[#24231f]">
										{project.category}
									</p>
								</div>

								<div>
									<p className="text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
										Year
									</p>
									<p className="mt-3 font-serif text-xl text-[#24231f]">
										{project.year}
									</p>
								</div>

								<div className="col-span-2 lg:col-span-1">
									<p className="text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
										Location
									</p>
									<p className="mt-3 flex items-center gap-2 font-serif text-xl text-[#24231f]">
										<MapPin
											size={16}
											strokeWidth={1.3}
											className="text-[#a58b68]"
										/>
										{project.location}
									</p>
								</div>
							</div>
						</div>

						<div>
							<p className="mb-6 text-[10px] uppercase tracking-[0.22em] text-[#a58b68]">
								The story behind the frames
							</p>

							<h2 className="max-w-200 font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-tighter text-[#24231f]">
								{project.introduction}
							</h2>

							<p className="mt-8 max-w-175 text-[12px] leading-[2.2] text-[#77746d]">
								{project.story}
							</p>

							<div className="mt-12 border-t border-black/10 pt-8">
								<p className="text-[9px] uppercase tracking-[0.2em] text-[#a58b68]">
									The creative approach
								</p>

								<p className="mt-5 max-w-175 text-[12px] leading-[2.2] text-[#77746d]">
									{project.approach}
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Image Gallery */}
				<section className="bg-[#efede6] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-36">
					<div className="mx-auto max-w-400">
						<div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
							<div>
								<p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#a58b68]">
									The visual collection
								</p>

								<h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-tighter text-[#24231f]">
									Through the lens
									<span className="italic text-[#a58b68]">
										.
									</span>
								</h2>
							</div>

							<p className="max-w-75 text-[11px] leading-loose text-[#77746d]">
								A closer look at the moments, details, and
								feelings that make this story unique.
							</p>
						</div>

						<div className="grid gap-5 md:grid-cols-2 md:gap-8">
							{project.images.map((image, index) => (
								<div
									key={image}
									className={`relative overflow-hidden bg-[#ded8cc] ${
										index === 1
											? "aspect-4/5 md:mt-20"
											: "aspect-4/5"
									}`}
								>
									<Image
										src={image}
										alt={`${project.title} - photograph ${index + 1}`}
										fill
										sizes="(max-width: 767px) 100vw, 50vw"
										className="object-cover transition-transform duration-700 hover:scale-105"
									/>
								</div>
							))}
						</div>

						<p className="mt-8 text-right text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
							{project.images.length} selected photographs
						</p>
					</div>
				</section>

				{/* Previous / Next Project */}
				<section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-36">
					<div className="mx-auto max-w-400">
						<div className="mb-10 border-b border-black/10 pb-6">
							<p className="text-[10px] uppercase tracking-[0.22em] text-[#a58b68]">
								Continue exploring
							</p>
						</div>

						<div className="grid gap-12 sm:grid-cols-2">
							<Link
								href={`/portfolio/${previousProject.slug}`}
								className="group"
							>
								<div className="relative aspect-video overflow-hidden bg-[#e8e2d8]">
									<Image
										src={previousProject.cover}
										alt={previousProject.title}
										fill
										sizes="(max-width: 639px) 100vw, 50vw"
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>

								<div className="mt-6 flex items-center justify-between">
									<div>
										<p className="mb-2 text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
											Previous project
										</p>
										<h3 className="font-serif text-2xl text-[#24231f] transition-colors group-hover:text-[#a58b68]">
											{previousProject.title}
										</h3>
									</div>

									<ArrowLeft
										size={20}
										className="text-[#a58b68] transition-transform group-hover:-translate-x-2"
									/>
								</div>
							</Link>

							<Link
								href={`/portfolio/${nextProject.slug}`}
								className="group"
							>
								<div className="relative aspect-video overflow-hidden bg-[#e8e2d8]">
									<Image
										src={nextProject.cover}
										alt={nextProject.title}
										fill
										sizes="(max-width: 639px) 100vw, 50vw"
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>

								<div className="mt-6 flex items-center justify-between">
									<div>
										<p className="mb-2 text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
											Next project
										</p>
										<h3 className="font-serif text-2xl text-[#24231f] transition-colors group-hover:text-[#a58b68]">
											{nextProject.title}
										</h3>
									</div>

									<ArrowRight
										size={20}
										className="text-[#a58b68] transition-transform group-hover:translate-x-2"
									/>
								</div>
							</Link>
						</div>
					</div>
				</section>

				{/* Contact CTA */}
				<section className="bg-[#24231f] px-5 py-24 text-center text-[#f7f5f0] sm:px-8 sm:py-32 lg:px-14 lg:py-40">
					<div className="mx-auto max-w-200">
						<p className="mb-8 text-[10px] uppercase tracking-[0.24em] text-[#a58b68]">
							Have a story in mind?
						</p>

						<h2 className="font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.06em]">
							Let’s make it
							<br />
							<span className="italic text-[#a58b68]">
								meaningful.
							</span>
						</h2>

						<p className="mx-auto mt-8 max-w-100 text-[12px] leading-loose text-white/50">
							Every great photograph begins with a conversation.
							Tell me what you have in mind.
						</p>

						<Link
							href={`/contact?service=${project.category.toLowerCase()}`}
							className="group mt-10 inline-flex min-h-14 items-center gap-6 bg-[#f7f5f0] px-8 text-[10px] font-medium uppercase tracking-[0.15em] text-[#24231f]! transition-colors duration-300 hover:bg-[#a58b68] hover:text-white!"
						>
							Let’s talk
							<ArrowUpRight
								size={17}
								className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
							/>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
