"use client";

import Image from "next/image";
import Link from "next/link";
import {
	ArrowDown,
	ArrowUpRight,
	Camera,
	Heart,
	Sparkles,
	Sun,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { services, processOverview } from "./../src/data/services.json";

const serviceIcons = {
	Heart,
	Camera,
	Sparkles,
	Sun,
};

export default function ServicesPage() {
	const shouldReduceMotion = useReducedMotion();

	const reveal = {
		initial: shouldReduceMotion
			? { opacity: 1, y: 0 }
			: { opacity: 0, y: 28 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true, amount: 0.15 },
		transition: { duration: 0.7, ease: "easeOut" as const },
	};

	return (
		<>
			<main className="overflow-hidden">
				{/* Hero */}
				<section className="px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
					<div className="mx-auto max-w-350">
						<motion.div
							initial="initial"
							animate="whileInView"
							variants={{
								initial: reveal.initial,
								whileInView: { opacity: 1, y: 0 },
							}}
							transition={reveal.transition}
						>
							<span className="mb-7 block text-xs font-medium uppercase tracking-[0.3em] text-[#a58b68]">
								What I create
							</span>

							<h1 className="max-w-250 font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.98] tracking-[-0.055em]">
								Every story
								<br />
								deserves{" "}
								<span className="italic text-[#a58b68]">
									to be seen.
								</span>
							</h1>

							<div className="mt-10 flex flex-col justify-between gap-8 border-t border-[#24231f]/15 pt-8 md:flex-row md:items-end">
								<p className="max-w-125 text-base leading-8 text-[#77746d] md:text-lg">
									Photography is more than preserving an
									image. It is about capturing the feeling,
									the atmosphere, and the stories that stay
									with us.
								</p>

								<Link
									href="#all-services"
									className="group flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]"
								>
									Explore services
									<span className="flex size-10 items-center justify-center rounded-full border border-[#24231f]/20 transition-all duration-300 group-hover:border-[#a58b68] group-hover:bg-[#a58b68] group-hover:text-white">
										<ArrowDown size={16} />
									</span>
								</Link>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 35 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.9, delay: 0.2 }}
							className="relative mt-16 aspect-16/7 overflow-hidden md:mt-24"
						>
							<Image
								src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=2000&q=90"
								alt="A cinematic landscape illuminated by warm golden sunlight"
								fill
								priority
								sizes="100vw"
								className="object-cover"
							/>

							<div className="absolute inset-0 bg-black/10" />

							<div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-white md:bottom-10 md:left-10">
								Art in every frame
							</div>
						</motion.div>
					</div>
				</section>

				{/* Introduction */}
				<section className="px-6 py-20 md:px-10 md:py-28">
					<motion.div
						{...reveal}
						className="mx-auto grid max-w-350 gap-10 md:grid-cols-[1fr_1.2fr] md:gap-24"
					>
						<div>
							<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a58b68]">
								The approach
							</span>

							<h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
								Crafted with intention.
								<br />
								<span className="italic text-[#a58b68]">
									Captured with feeling.
								</span>
							</h2>
						</div>

						<div className="flex flex-col justify-end">
							<p className="text-base leading-8 text-[#77746d] md:text-lg">
								Every photography experience is different,
								because every story is different. My approach
								combines artistic vision with a relaxed,
								personal experience — allowing authentic moments
								to unfold naturally while paying attention to
								every little detail.
							</p>
						</div>
					</motion.div>
				</section>

				{/* All Services */}
				<section
					id="all-services"
					className="scroll-mt-24 bg-[#efede6] px-6 py-24 md:px-10 md:py-32"
				>
					<div className="mx-auto max-w-350">
						<motion.div {...reveal} className="mb-20 md:mb-28">
							<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a58b68]">
								The services
							</span>

							<h2 className="mt-6 max-w-200 font-serif text-5xl leading-[1.08] tracking-[-0.045em] md:text-7xl">
								A collection of
								<br />
								<span className="italic text-[#a58b68]">
									possibilities.
								</span>
							</h2>
						</motion.div>

						<div className="space-y-24 md:space-y-36">
							{services.map((service, index) => {
								const Icon =
									serviceIcons[
										service.icon as keyof typeof serviceIcons
									];
								const reversed = index % 2 !== 0;

								return (
									<motion.article
										key={service.slug}
										{...reveal}
										id={service.slug}
										className="scroll-mt-28 grid items-center gap-10 md:grid-cols-2 md:gap-20"
									>
										<div
											className={
												reversed ? "md:order-2" : ""
											}
										>
											<Link
												href={`/services/${service.slug}`}
												className="group relative block aspect-4/5 overflow-hidden"
											>
												<Image
													src={service.gallery[0].src}
													alt={service.gallery[0].alt}
													fill
													sizes="(max-width: 768px) 100vw, 50vw"
													className="object-cover transition-transform duration-1000 group-hover:scale-105"
												/>

												<div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/15" />

												<span className="absolute left-6 top-6 text-xs uppercase tracking-[0.2em] text-white">
													{service.number} / 04
												</span>

												<span className="absolute bottom-6 right-6 flex size-12 items-center justify-center rounded-full bg-[#f7f5f0] text-[#24231f] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#a58b68] group-hover:text-white">
													<ArrowUpRight size={20} />
												</span>
											</Link>
										</div>

										<div
											className={
												reversed ? "md:order-1" : ""
											}
										>
											<div className="mb-8 flex items-center gap-3">
												<span className="flex size-11 items-center justify-center rounded-full border border-[#a58b68]/40 text-[#a58b68]">
													<Icon
														size={19}
														strokeWidth={1.5}
													/>
												</span>

												<span className="text-xs font-medium uppercase tracking-[0.2em] text-[#a58b68]">
													{service.subtitle}
												</span>
											</div>

											<h3 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
												{service.title}
											</h3>

											<p className="mt-7 text-base leading-8 text-[#77746d]">
												{service.description}
											</p>

											<div className="mt-8 border-t border-[#24231f]/15 pt-7">
												<span className="text-xs font-semibold uppercase tracking-[0.2em]">
													What&apos;s included
												</span>

												<ul className="mt-5 space-y-4">
													{service.features.map(
														(feature) => (
															<li
																key={feature}
																className="flex items-center gap-3 text-sm text-[#77746d]"
															>
																<span className="size-1.5 shrink-0 rounded-full bg-[#a58b68]" />
																{feature}
															</li>
														),
													)}
												</ul>
											</div>

											<p className="mt-7 text-sm leading-7 text-[#77746d]">
												<span className="font-semibold text-[#24231f]">
													Perfect for:
												</span>{" "}
												{service.idealFor}
											</p>

											<Link
												href={`/services/${service.slug}`}
												className="group mt-9 inline-flex items-center gap-3 border-b border-[#24231f]/30 pb-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:border-[#a58b68] hover:text-[#a58b68]"
											>
												Explore this service
												<ArrowUpRight
													size={16}
													className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
												/>
											</Link>
										</div>
									</motion.article>
								);
							})}
						</div>
					</div>
				</section>

				{/* Process */}
				<section className="px-6 py-24 md:px-10 md:py-32">
					<div className="mx-auto max-w-350">
						<motion.div {...reveal} className="mb-16 md:mb-24">
							<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a58b68]">
								How it works
							</span>

							<h2 className="mt-6 max-w-200 font-serif text-5xl leading-[1.08] tracking-[-0.045em] md:text-7xl">
								From first hello
								<br />
								<span className="italic text-[#a58b68]">
									to forever.
								</span>
							</h2>

							<p className="mt-7 max-w-125 text-base leading-8 text-[#77746d]">
								A thoughtful process makes room for a better
								experience. Here is how we bring your vision to
								life.
							</p>
						</motion.div>

						<div className="grid gap-10 border-t border-[#24231f]/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
							{processOverview.map((step, index) => (
								<motion.div
									key={step.number}
									{...reveal}
									transition={{
										...reveal.transition,
										delay: index * 0.1,
									}}
									className="border-b border-[#24231f]/15 pb-8"
								>
									<span className="text-xs tracking-[0.2em] text-[#a58b68]">
										{step.number}
									</span>

									<h3 className="mt-8 font-serif text-2xl">
										{step.title}
									</h3>

									<p className="mt-4 text-sm leading-7 text-[#77746d]">
										{step.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Contact CTA */}
				<section className="bg-[#24231f] px-6 py-24 text-[#f7f5f0] md:px-10 md:py-32">
					<motion.div
						{...reveal}
						className="mx-auto flex max-w-350 flex-col items-start justify-between gap-10 md:flex-row md:items-end"
					>
						<div>
							<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#c0a987]">
								Let&apos;s create something meaningful
							</span>

							<h2 className="mt-7 max-w-225 font-serif text-5xl leading-[1.08] tracking-[-0.045em] md:text-8xl">
								Your story
								<br />
								starts{" "}
								<span className="italic text-[#c0a987]">
									here.
								</span>
							</h2>

							<p className="mt-7 max-w-125 text-base leading-8 text-white/55">
								Have something special in mind? I would love to
								hear about it and explore how we can bring your
								vision to life.
							</p>
						</div>

						<Link
							href="/contact"
							className="group flex size-36 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-500 hover:scale-105 hover:border-[#c0a987] hover:bg-[#c0a987] md:size-44"
						>
							<span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em]">
								Get in touch
								<ArrowUpRight
									size={18}
									className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
								/>
							</span>
						</Link>
					</motion.div>
				</section>
			</main>
		</>
	);
}
