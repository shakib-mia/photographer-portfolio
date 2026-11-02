"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const projects = [
	{
		number: "01",
		title: "The Art of Together",
		category: "Wedding Photography",
		location: "Tuscany, Italy",
		slug: "the-art-of-together",
		image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
		alt: "Romantic wedding photography in an elegant setting",
		layout: "md:col-span-7 md:row-span-2",
		ratio: "aspect-[4/5] md:aspect-[4/5]",
	},
	{
		number: "02",
		title: "In Her Own Light",
		category: "Portrait Photography",
		location: "Paris, France",
		slug: "in-her-own-light",
		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
		alt: "Expressive fine art female portrait",
		layout: "md:col-span-5",
		ratio: "aspect-[4/3] md:aspect-[5/4]",
	},
	{
		number: "03",
		title: "Between Earth & Sky",
		category: "Landscape Photography",
		location: "Dolomites, Italy",
		slug: "between-earth-and-sky",
		image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85",
		alt: "Dreamlike golden landscape at sunrise",
		layout: "md:col-span-5",
		ratio: "aspect-[4/3] md:aspect-[5/4]",
	},
	{
		number: "04",
		title: "The Quiet Elegance",
		category: "Fashion & Editorial",
		location: "London, UK",
		slug: "the-quiet-elegance",
		image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85",
		alt: "Minimal editorial fashion portrait",
		layout: "md:col-span-7",
		ratio: "aspect-[4/3] md:aspect-[5/4]",
	},
];

export default function FeaturedWorks() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="selected-work"
			className="relative bg-[#f7f5f0] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40"
		>
			<div className="mx-auto max-w-[1600px]">
				{/* Section heading */}
				<div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
					<motion.div
						initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.7 }}
					>
						<div className="mb-6 flex items-center gap-3">
							<span className="h-px w-8 bg-[#a58b68]" />
							<span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#77746d]">
								A curated collection
							</span>
						</div>

						<h2 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.95] tracking-[-0.055em] text-[#24231f]">
							Selected
							<br />
							<span className="italic text-[#a58b68]">
								works.
							</span>
						</h2>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.15 }}
						className="flex max-w-77.5 flex-col gap-5"
					>
						<p className="text-[13px] leading-[1.9] text-[#77746d]">
							Every photograph holds a story. Explore a collection
							of moments shaped by light, emotion, and a love for
							the extraordinary.
						</p>

						<Link
							href="/portfolio"
							className="group inline-flex w-fit items-center gap-3 border-b border-[#a58b68] pb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#24231f]"
						>
							Explore all projects
							<ArrowUpRight
								size={15}
								className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
							/>
						</Link>
					</motion.div>
				</div>

				{/* Editorial project grid */}
				<div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12 md:gap-y-16">
					{projects.map((project, index) => (
						<motion.div
							key={project.slug}
							initial={{
								opacity: 0,
								y: shouldReduceMotion ? 0 : 35,
							}}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{
								duration: 0.7,
								delay: shouldReduceMotion
									? 0
									: (index % 2) * 0.12,
							}}
							className={project.layout}
						>
							<Link
								href={`/portfolio/${project.slug}`}
								className="group block"
							>
								{/* Image */}
								<div
									className={`relative overflow-hidden bg-[#e8e2d8] ${project.ratio}`}
								>
									<Image
										src={project.image}
										alt={project.alt}
										fill
										sizes="(max-width: 767px) 100vw, 60vw"
										className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
									/>

									<div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

									{/* Image number */}
									<div className="absolute left-5 top-5 flex size-10 items-center justify-center rounded-full border border-white/60 text-[10px] text-white backdrop-blur-sm">
										{project.number}
									</div>

									{/* Hover icon */}
									<div className="absolute bottom-5 right-5 flex size-11 translate-y-3 items-center justify-center rounded-full bg-[#f7f5f0] text-[#24231f] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
										<ArrowUpRight size={18} />
									</div>
								</div>

								{/* Project information */}
								<div className="mt-5 flex items-start justify-between gap-4">
									<div>
										<h3 className="font-serif text-2xl tracking-tight text-[#24231f] transition-colors duration-300 group-hover:text-[#a58b68] sm:text-[28px]">
											{project.title}
										</h3>

										<p className="mt-2 text-[9px] uppercase tracking-[0.17em] text-[#77746d]">
											{project.category}
										</p>
									</div>

									<span className="mt-2 shrink-0 text-[10px] text-[#77746d]">
										{project.location}
									</span>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="mt-20 flex flex-col items-center border-t border-black/10 pt-12 text-center sm:mt-28">
					<p className="font-serif text-2xl italic text-[#24231f] sm:text-3xl">
						There&apos;s more to the story.
					</p>

					<Link
						href="/portfolio"
						className="group mt-7 inline-flex min-h-12 items-center gap-5 bg-[#24231f] px-7 text-[10px] font-medium uppercase tracking-[0.15em] text-white! hover:text-black! transition-colors duration-300 hover:bg-[#a58b68]"
					>
						View full portfolio
						<ArrowUpRight
							size={16}
							className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}
