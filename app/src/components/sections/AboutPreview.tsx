"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function AboutPreview() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="relative overflow-hidden bg-[#efede6] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
			<div className="mx-auto grid max-w-[1600px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
				{/* Portrait */}
				<motion.div
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.8 }}
					className="relative mx-auto w-full max-w-130"
				>
					<div className="relative aspect-4/5 overflow-hidden bg-[#ded8cc]">
						<Image
							src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85"
							alt="Photographer portrait"
							fill
							sizes="(max-width: 1023px) 100vw, 45vw"
							className="object-cover"
						/>
					</div>

					{/* Image label */}
					<div className="absolute -bottom-5 -right-2 bg-[#f7f5f0] px-5 py-4 sm:-right-6 sm:px-7 sm:py-5">
						<p className="font-serif text-xl italic text-[#24231f]">
							Behind the lens.
						</p>
						<p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
							The person behind the stories
						</p>
					</div>

					{/* Decorative index */}
					<span className="absolute -left-3 top-8 font-serif text-7xl italic text-[#a58b68]/30 sm:-left-8 sm:text-8xl">
						01
					</span>
				</motion.div>

				{/* Content */}
				<motion.div
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.8, delay: 0.15 }}
					className="relative"
				>
					<div className="mb-7 flex items-center gap-3">
						<span className="h-px w-8 bg-[#a58b68]" />
						<span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#77746d]">
							A little about me
						</span>
					</div>

					<h2 className="max-w-162.5 font-serif text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.98] tracking-[-0.055em] text-[#24231f]">
						More than a
						<br />
						<span className="italic text-[#a58b68]">
							photograph.
						</span>
						<br />A feeling.
					</h2>

					<div className="mt-9 max-w-132.5 space-y-5 text-[13px] leading-loose text-[#77746d] sm:mt-11">
						<p>
							I believe the most beautiful photographs are not
							simply taken — they are felt. The quiet glances,
							unexpected laughter, and little details often hold
							the stories worth remembering.
						</p>

						<p>
							Through a thoughtful blend of natural light,
							artistic composition, and genuine human connection,
							I create imagery that feels timeless, personal, and
							full of life.
						</p>
					</div>

					{/* Philosophy highlight */}
					<div className="mt-10 flex max-w-132.5 items-start gap-5 border-y border-black/10 py-6">
						<div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#a58b68]/50 text-[#a58b68]">
							<ArrowDownRight size={19} />
						</div>

						<div>
							<h3 className="font-serif text-xl text-[#24231f]">
								My creative philosophy
							</h3>
							<p className="mt-2 text-[11px] leading-[1.8] text-[#77746d]">
								Observe with patience. Capture with intention.
								Create with emotion.
							</p>
						</div>
					</div>

					{/* CTA */}
					<Link
						href="/about"
						className="group mt-9 inline-flex min-h-12 items-center gap-5 bg-[#24231f] px-7 text-[10px] font-medium uppercase tracking-[0.15em] text-white! transition-colors duration-300 hover:bg-[#a58b68]"
					>
						Discover my story
						<ArrowUpRight
							size={16}
							className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
