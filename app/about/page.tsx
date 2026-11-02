"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Eye, Heart } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const philosophy = [
	{
		number: "01",
		title: "Observe",
		description:
			"Every meaningful photograph begins with observation. I take time to understand the atmosphere, the people, and the little details that make every story unique.",
		icon: Eye,
	},
	{
		number: "02",
		title: "Connect",
		description:
			"Authentic photographs come from genuine connections. Creating a comfortable environment allows real emotions and personalities to shine through.",
		icon: Heart,
	},
	{
		number: "03",
		title: "Create",
		description:
			"With thoughtful composition, natural light, and an artistic perspective, I turn fleeting moments into timeless visual stories.",
		icon: Camera,
	},
];

export default function AboutPage() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<>
			<main className="overflow-hidden bg-[#f7f5f0]">
				{/* Hero */}
				<section className="px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-40 lg:px-14 lg:pb-36">
					<div className="mx-auto max-w-[1600px]">
						<motion.div
							initial={{
								opacity: 0,
								y: shouldReduceMotion ? 0 : 25,
							}}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="mb-12"
						>
							<div className="mb-7 flex items-center gap-3">
								<span className="h-px w-8 bg-[#a58b68]" />
								<span className="text-[10px] uppercase tracking-[0.24em] text-[#77746d]">
									The person behind the lens
								</span>
							</div>

							<div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
								<h1 className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.85] tracking-[-0.065em] text-[#24231f]">
									Beyond the
									<br />
									<span className="italic text-[#a58b68]">
										frame.
									</span>
								</h1>

								<p className="max-w-[320px] text-[12px] leading-loose text-[#77746d] lg:pb-3">
									A little about the perspective, passion, and
									creative philosophy behind every photograph.
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{
								opacity: 0,
								y: shouldReduceMotion ? 0 : 30,
							}}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.9, delay: 0.2 }}
							className="relative"
						>
							<div className="relative aspect-video max-h-187.5 overflow-hidden bg-[#e8e2d8]">
								<Image
									src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=85"
									alt="Creative photography and visual storytelling"
									fill
									priority
									sizes="100vw"
									className="object-cover"
								/>

								<div className="absolute inset-0 bg-black/20" />

								<div className="absolute bottom-6 left-6 text-white sm:bottom-10 sm:left-10">
									<p className="text-[9px] uppercase tracking-[0.25em] text-white/75">
										A perspective beyond the ordinary
									</p>
									<p className="mt-2 font-serif text-2xl italic sm:text-4xl">
										Stories worth remembering.
									</p>
								</div>
							</div>

							<div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
								<span className="text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
									About the photographer
								</span>
								<span className="text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
									ÉLORE — Visual Stories
								</span>
							</div>
						</motion.div>
					</div>
				</section>

				{/* The story */}
				<section className="bg-[#efede6] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
					<div className="mx-auto grid max-w-350 items-center gap-14 lg:grid-cols-2 lg:gap-24">
						<motion.div
							initial={{
								opacity: 0,
								x: shouldReduceMotion ? 0 : -25,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="relative mx-auto w-full max-w-125"
						>
							<div className="relative aspect-4/5 overflow-hidden bg-[#ded8cc]">
								<Image
									src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85"
									alt="Portrait of the photographer"
									fill
									sizes="(max-width: 1023px) 100vw, 40vw"
									className="object-cover"
								/>
							</div>

							<span className="absolute -bottom-8 -left-3 font-serif text-7xl italic text-[#a58b68]/30 sm:-left-8 sm:text-8xl">
								É.
							</span>
						</motion.div>

						<motion.div
							initial={{
								opacity: 0,
								x: shouldReduceMotion ? 0 : 25,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.15 }}
						>
							<div className="mb-7 flex items-center gap-3">
								<span className="h-px w-8 bg-[#a58b68]" />
								<span className="text-[10px] uppercase tracking-[0.24em] text-[#77746d]">
									My journey
								</span>
							</div>

							<h2 className="font-serif text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.98] tracking-[-0.055em] text-[#24231f]">
								Every story
								<br />
								has a{" "}
								<span className="italic text-[#a58b68]">
									beginning.
								</span>
							</h2>

							<div className="mt-9 max-w-125 space-y-5 text-[13px] leading-loose text-[#77746d]">
								<p>
									My journey into photography began with a
									fascination for the way light transforms
									ordinary moments into something
									extraordinary.
								</p>

								<p>
									Over time, that curiosity grew into a
									creative pursuit — learning to see beyond
									what is visible and discovering the
									emotions, stories, and details hidden within
									every frame.
								</p>

								<p>
									Today, my approach is rooted in
									authenticity, artistic expression, and a
									belief that the most meaningful images are
									the ones that make you feel something.
								</p>
							</div>

							<div className="mt-10 border-t border-black/10 pt-6">
								<p className="font-serif text-2xl italic text-[#24231f]">
									{`"Photography is how I remember what words
									cannot express."`}
								</p>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Philosophy */}
				<section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
					<div className="mx-auto max-w-[1600px]">
						<motion.div
							initial={{
								opacity: 0,
								y: shouldReduceMotion ? 0 : 25,
							}}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="mx-auto mb-16 max-w-187.5 text-center"
						>
							<div className="mb-6 flex items-center justify-center gap-3">
								<span className="h-px w-8 bg-[#a58b68]" />
								<span className="text-[10px] uppercase tracking-[0.24em] text-[#77746d]">
									The way I see it
								</span>
								<span className="h-px w-8 bg-[#a58b68]" />
							</div>

							<h2 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.95] tracking-[-0.055em] text-[#24231f]">
								My artistic
								<br />
								<span className="italic text-[#a58b68]">
									philosophy.
								</span>
							</h2>

							<p className="mx-auto mt-7 max-w-112.5 text-[12px] leading-loose text-[#77746d]">
								Great photography is not just about the perfect
								frame. It is about the intention, connection,
								and emotion behind it.
							</p>
						</motion.div>

						<div className="grid gap-10 border-t border-black/10 pt-10 md:grid-cols-3 md:gap-8">
							{philosophy.map((item, index) => {
								const Icon = item.icon;

								return (
									<motion.div
										key={item.number}
										initial={{
											opacity: 0,
											y: shouldReduceMotion ? 0 : 25,
										}}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.7,
											delay: shouldReduceMotion
												? 0
												: index * 0.12,
										}}
										className="border-b border-black/10 pb-9 md:border-b-0 md:border-r md:pr-8 last:md:border-r-0"
									>
										<div className="flex items-center justify-between">
											<span className="font-serif text-4xl italic text-[#a58b68]/60">
												{item.number}
											</span>

											<Icon
												size={21}
												strokeWidth={1.2}
												className="text-[#a58b68]"
											/>
										</div>

										<h3 className="mt-8 font-serif text-3xl text-[#24231f]">
											{item.title}
										</h3>

										<p className="mt-4 max-w-87.5 text-[12px] leading-loose text-[#77746d]">
											{item.description}
										</p>
									</motion.div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Behind the lens */}
				<section className="bg-[#24231f] px-5 py-24 text-[#f7f5f0] sm:px-8 sm:py-32 lg:px-14 lg:py-40">
					<div className="mx-auto grid max-w-376 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
						<motion.div
							initial={{
								opacity: 0,
								y: shouldReduceMotion ? 0 : 25,
							}}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="relative aspect-5/4 overflow-hidden"
						>
							<Image
								src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1400&q=85"
								alt="Camera and photography equipment"
								fill
								sizes="(max-width: 1023px) 100vw, 55vw"
								className="object-cover"
							/>
						</motion.div>

						<motion.div
							initial={{
								opacity: 0,
								x: shouldReduceMotion ? 0 : 25,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.15 }}
						>
							<div className="mb-7 flex items-center gap-3">
								<span className="h-px w-8 bg-[#a58b68]" />
								<span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
									Behind the lens
								</span>
							</div>

							<h2 className="font-serif text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.98] tracking-[-0.055em]">
								A thoughtful
								<br />
								<span className="italic text-[#a58b68]">
									approach.
								</span>
							</h2>

							<p className="mt-9 max-w-115 text-[12px] leading-loose text-white/50">
								From the first conversation to the final
								photograph, every step is guided by care and
								creative intention. I value collaboration,
								thoughtful preparation, and allowing genuine
								moments to unfold naturally.
							</p>

							<div className="mt-10 border-t border-white/15 pt-7">
								<p className="font-serif text-2xl italic text-[#a58b68]">
									Less posing. More feeling.
								</p>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Closing CTA */}
				<section className="px-5 py-28 sm:px-8 sm:py-36 lg:px-14 lg:py-44">
					<motion.div
						initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="mx-auto max-w-237.5 text-center"
					>
						<div className="mb-8 flex items-center justify-center gap-3">
							<span className="h-px w-8 bg-[#a58b68]" />
							<span className="text-[10px] uppercase tracking-[0.24em] text-[#77746d]">
								{"Let's"} create together
							</span>
							<span className="h-px w-8 bg-[#a58b68]" />
						</div>

						<h2 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-[-0.06em] text-[#24231f]">
							Your story is
							<br />
							<span className="italic text-[#a58b68]">
								worth telling.
							</span>
						</h2>

						<p className="mx-auto mt-8 max-w-100 text-[12px] leading-loose text-[#77746d]">
							Have an idea, a special occasion, or simply want to
							create something beautiful? {"Let's"} talk.
						</p>

						<Link
							href="/contact"
							className="group mt-10 inline-flex min-h-14 items-center gap-6 bg-[#24231f] px-8 text-[10px] font-medium uppercase tracking-[0.15em] text-white! transition-colors duration-300 hover:bg-[#a58b68]"
						>
							Get in touch
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
