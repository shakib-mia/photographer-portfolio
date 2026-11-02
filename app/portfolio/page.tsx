"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const categories = [
	"All",
	"Wedding",
	"Portrait",
	"Editorial",
	"Landscape",
] as const;

type Category = (typeof categories)[number];

const projects: {
	slug: string;
	title: string;
	category: Exclude<Category, "All">;
	location: string;
	year: string;
	image: string;
	alt: string;
	layout: "large" | "small";
}[] = [
	{
		slug: "the-art-of-together",
		title: "The Art of Together",
		category: "Wedding",
		location: "Tuscany, Italy",
		year: "2025",
		image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
		alt: "An intimate wedding celebration",
		layout: "large",
	},
	{
		slug: "in-her-own-light",
		title: "In Her Own Light",
		category: "Portrait",
		location: "Paris, France",
		year: "2025",
		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
		alt: "An artistic female portrait",
		layout: "small",
	},
	{
		slug: "between-earth-and-sky",
		title: "Between Earth & Sky",
		category: "Landscape",
		location: "Dolomites, Italy",
		year: "2024",
		image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
		alt: "A peaceful mountain landscape",
		layout: "small",
	},
	{
		slug: "the-quiet-elegance",
		title: "The Quiet Elegance",
		category: "Editorial",
		location: "London, UK",
		year: "2025",
		image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85",
		alt: "An elegant fashion editorial",
		layout: "large",
	},
	{
		slug: "moments-in-between",
		title: "Moments in Between",
		category: "Wedding",
		location: "Lake Como, Italy",
		year: "2024",
		image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85",
		alt: "A couple sharing a wedding moment",
		layout: "small",
	},
	{
		slug: "a-study-of-light",
		title: "A Study of Light",
		category: "Portrait",
		location: "Copenhagen, Denmark",
		year: "2024",
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=85",
		alt: "A natural light portrait",
		layout: "large",
	},
	{
		slug: "the-art-of-simplicity",
		title: "The Art of Simplicity",
		category: "Editorial",
		location: "Milan, Italy",
		year: "2024",
		image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
		alt: "A minimalist fashion editorial",
		layout: "small",
	},
	{
		slug: "where-the-wild-things-are",
		title: "Where the Wild Things Are",
		category: "Landscape",
		location: "Iceland",
		year: "2023",
		image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
		alt: "A dramatic mountain landscape",
		layout: "large",
	},
];

export default function PortfolioPage() {
	const [activeCategory, setActiveCategory] = useState<Category>("All");
	const shouldReduceMotion = useReducedMotion();

	const filteredProjects =
		activeCategory === "All"
			? projects
			: projects.filter((project) => project.category === activeCategory);

	return (
		<>
			<main className="overflow-hidden bg-[#f7f5f0]">
				{/* Hero */}
				<section className="px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:px-14 lg:pb-24">
					<div className="mx-auto max-w-[1600px]">
						<motion.div
							initial={{
								opacity: 0,
								y: shouldReduceMotion ? 0 : 25,
							}}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<div className="mb-7 flex items-center gap-3">
								<span className="h-px w-8 bg-[#a58b68]" />
								<span className="text-[10px] uppercase tracking-[0.24em] text-[#77746d]">
									A collection of visual stories
								</span>
							</div>

							<div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
								<h1 className="font-serif text-[clamp(4rem,11vw,10rem)] leading-[0.85] tracking-[-0.065em] text-[#24231f]">
									The
									<br />
									<span className="italic text-[#a58b68]">
										portfolio.
									</span>
								</h1>

								<div className="max-w-[320px] lg:pb-3">
									<p className="text-[12px] leading-loose text-[#77746d]">
										A curated collection of moments,
										emotions, and stories captured through
										my lens. Each frame holds a memory worth
										keeping.
									</p>

									<div className="mt-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#a58b68]">
										<ArrowDown size={15} />
										Explore selected works
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Portfolio Gallery */}
				<section
					id="gallery"
					className="px-5 pb-28 sm:px-8 sm:pb-32 lg:px-14 lg:pb-40"
				>
					<div className="mx-auto max-w-[1600px]">
						{/* Category Filter */}
						<div className="mb-12 flex flex-col gap-6 border-y border-black/10 py-5 sm:flex-row sm:items-center sm:justify-between">
							<p className="text-[9px] uppercase tracking-[0.2em] text-[#77746d]">
								Browse by category
							</p>

							<div className="flex flex-wrap gap-2">
								{categories.map((category) => (
									<button
										key={category}
										type="button"
										onClick={() =>
											setActiveCategory(category)
										}
										className={`border px-5 py-3 text-[9px] uppercase tracking-[0.15em] transition-colors duration-300 ${
											activeCategory === category
												? "border-[#24231f] bg-[#24231f] text-white"
												: "border-black/10 text-[#77746d] hover:border-[#a58b68] hover:text-[#24231f]"
										}`}
									>
										{category}
									</button>
								))}
							</div>
						</div>

						{/* Gallery Grid */}
						<motion.div
							layout
							className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-20"
						>
							{filteredProjects.map((project, index) => (
								<motion.article
									key={project.slug}
									layout
									initial={{
										opacity: 0,
										y: shouldReduceMotion ? 0 : 25,
									}}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0 }}
									transition={{
										duration: 0.6,
										delay: shouldReduceMotion
											? 0
											: index * 0.06,
									}}
									className={
										project.layout === "large"
											? "md:col-span-2 lg:col-span-7"
											: "md:col-span-1 lg:col-span-5"
									}
								>
									<Link
										href={`/portfolio/${project.slug}`}
										className="group block"
									>
										<div
											className={`relative overflow-hidden bg-[#e8e2d8] ${
												project.layout === "large"
													? "aspect-4/5 md:aspect-16/10"
													: "aspect-4/5"
											}`}
										>
											<Image
												src={project.image}
												alt={project.alt}
												fill
												sizes={
													project.layout === "large"
														? "(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 58vw"
														: "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 42vw"
												}
												className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
											/>

											<div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

											<div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-[#f7f5f0] text-[#24231f] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
												<ArrowUpRight size={19} />
											</div>
										</div>

										<div className="mt-5 flex items-start justify-between gap-4 border-b border-black/10 pb-5">
											<div>
												<p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#a58b68]">
													{project.category}
												</p>

												<h2 className="font-serif text-2xl tracking-tight text-[#24231f] transition-colors duration-300 group-hover:text-[#a58b68] sm:text-3xl">
													{project.title}
												</h2>

												<p className="mt-2 text-[10px] tracking-wide text-[#77746d]">
													{project.location}
												</p>
											</div>

											<span className="pt-1 text-[10px] text-[#77746d]">
												{project.year}
											</span>
										</div>
									</Link>
								</motion.article>
							))}
						</motion.div>

						{filteredProjects.length === 0 && (
							<p className="py-20 text-center font-serif text-2xl italic text-[#77746d]">
								No projects found in this category.
							</p>
						)}

						{/* Gallery Footer */}
						<div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-black/10 pt-8 sm:flex-row">
							<p className="text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
								Showing {filteredProjects.length} selected
								{filteredProjects.length === 1
									? " story"
									: " stories"}
							</p>

							<p className="font-serif text-lg italic text-[#a58b68]">
								Every frame tells a story.
							</p>
						</div>
					</div>
				</section>

				{/* Closing CTA */}
				<section className="bg-[#efede6] px-5 py-28 sm:px-8 sm:py-36 lg:px-14 lg:py-40">
					<motion.div
						initial={{
							opacity: 0,
							y: shouldReduceMotion ? 0 : 25,
						}}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="mx-auto max-w-237.5 text-center"
					>
						<div className="mb-8 flex items-center justify-center gap-3">
							<span className="h-px w-8 bg-[#a58b68]" />
							<span className="text-[10px] uppercase tracking-[0.24em] text-[#77746d]">
								Your story, next
							</span>
							<span className="h-px w-8 bg-[#a58b68]" />
						</div>

						<h2 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-[-0.06em] text-[#24231f]">
							Let’s create
							<br />
							<span className="italic text-[#a58b68]">
								something timeless.
							</span>
						</h2>

						<p className="mx-auto mt-8 max-w-100 text-[12px] leading-loose text-[#77746d]">
							Have a story worth capturing? I would love to hear
							about it and bring your vision to life.
						</p>

						<Link
							href="/contact"
							className="group mt-10 inline-flex min-h-14 items-center gap-6 bg-[#24231f] px-8 text-[10px] font-medium uppercase tracking-[0.15em] text-white! transition-colors duration-300 hover:bg-[#a58b68]"
						>
							Start a conversation
							<ArrowUpRight
								size={17}
								className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
							/>
						</Link>
					</motion.div>
				</section>
			</main>
		</>
	);
}
