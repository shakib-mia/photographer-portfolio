"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const services = [
	{
		number: "01",
		title: "Wedding",
		subtitle: "Love, beautifully remembered.",
		description:
			"Honest emotions, meaningful details, and timeless photographs that tell the story of your day.",
		image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
		alt: "Elegant wedding photography",
		slug: "wedding",
	},
	{
		number: "02",
		title: "Portrait",
		subtitle: "Your story, your identity.",
		description:
			"Thoughtful portraits that celebrate individuality, personality, and the beauty of being yourself.",
		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
		alt: "Fine art portrait photography",
		slug: "portrait",
	},
	{
		number: "03",
		title: "Editorial",
		subtitle: "Art meets imagination.",
		description:
			"Creative visual storytelling for fashion, brands, campaigns, and artistic collaborations.",
		image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
		alt: "Fashion editorial photography",
		slug: "editorial",
	},
	{
		number: "04",
		title: "Lifestyle",
		subtitle: "The beauty of everyday life.",
		description:
			"Natural, relaxed imagery capturing genuine connections and the moments in between.",
		image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85",
		alt: "Atmospheric lifestyle photography",
		slug: "lifestyle",
	},
];

export default function ServicesPreview() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="bg-[#f7f5f0] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
			<div className="mx-auto max-w-[1600px]">
				{/* Heading */}
				<div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
					<motion.div
						initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
					>
						<div className="mb-6 flex items-center gap-3">
							<span className="h-px w-8 bg-[#a58b68]" />
							<span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#77746d]">
								What I do
							</span>
						</div>

						<h2 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.95] tracking-[-0.055em] text-[#24231f]">
							Crafted for
							<br />
							<span className="italic text-[#a58b68]">
								every story.
							</span>
						</h2>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.15 }}
						className="max-w-82.5"
					>
						<p className="text-[13px] leading-[1.9] text-[#77746d]">
							Every story deserves its own perspective. From
							intimate celebrations to creative campaigns, each
							project receives a thoughtful artistic approach.
						</p>

						<Link
							href="/services"
							className="group mt-6 inline-flex items-center gap-3 border-b border-[#a58b68] pb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#24231f]"
						>
							Explore all services
							<ArrowUpRight
								size={15}
								className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
							/>
						</Link>
					</motion.div>
				</div>

				{/* Service cards */}
				<div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
					{services.map((service, index) => (
						<motion.article
							key={service.slug}
							initial={{
								opacity: 0,
								y: shouldReduceMotion ? 0 : 30,
							}}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{
								duration: 0.7,
								delay: shouldReduceMotion
									? 0
									: (index % 2) * 0.12,
							}}
							className="group"
						>
							<Link
								href={`/services#${service.slug}`}
								className="block"
							>
								<div className="relative aspect-5/4 overflow-hidden bg-[#e8e2d8]">
									<Image
										src={service.image}
										alt={service.alt}
										fill
										sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 45vw"
										className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
									/>

									<div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

									<span className="absolute left-5 top-5 flex size-10 items-center justify-center rounded-full border border-white/60 text-[10px] text-white backdrop-blur-sm">
										{service.number}
									</span>

									<div className="absolute bottom-5 right-5 flex size-11 translate-y-2 items-center justify-center rounded-full bg-[#f7f5f0] text-[#24231f] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
										<ArrowUpRight size={18} />
									</div>
								</div>

								<div className="mt-6 border-b border-black/10 pb-6">
									<div className="flex items-start justify-between gap-4">
										<div>
											<h3 className="font-serif text-3xl tracking-tight text-[#24231f] transition-colors duration-300 group-hover:text-[#a58b68] sm:text-4xl">
												{service.title}
											</h3>

											<p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#a58b68]">
												{service.subtitle}
											</p>
										</div>

										<ArrowUpRight
											size={19}
											className="mt-2 shrink-0 text-[#77746d] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a58b68]"
										/>
									</div>

									<p className="mt-4 max-w-107.5 leading-[1.9] text-[#77746d]">
										{service.description}
									</p>
								</div>
							</Link>
						</motion.article>
					))}
				</div>

				{/* Bottom note */}
				<div className="mt-16 flex flex-col items-center gap-4 text-center sm:mt-24">
					<p className="font-serif text-2xl italic text-[#24231f] sm:text-3xl">
						Have something different in mind?
					</p>

					<Link
						href="/contact"
						className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.17em] text-[#a58b68]"
					>
						Let&apos;s create something together
						<ArrowUpRight
							size={15}
							className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}
