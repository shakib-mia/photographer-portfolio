"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
	const shouldReduceMotion = useReducedMotion();

	const reveal = {
		hidden: {
			opacity: 0,
			y: shouldReduceMotion ? 0 : 24,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<section className="relative overflow-hidden bg-[#f7f5f0]">
			<div className="mx-auto grid min-h-svh max-w-[1600px] items-center gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:px-14 lg:pb-20 lg:pt-32">
				{/* Left: Editorial introduction */}
				<motion.div
					initial="hidden"
					animate="visible"
					transition={{
						staggerChildren: shouldReduceMotion ? 0 : 0.13,
						delayChildren: 0.15,
					}}
					className="relative z-10 flex flex-col items-start"
				>
					<motion.div
						variants={reveal}
						transition={{ duration: 0.65, ease: "easeOut" }}
						className="mb-7 flex items-center gap-3"
					>
						<span className="h-px w-8 bg-[#a58b68]" />

						<span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#77746d] sm:text-[11px]">
							Independent Photographer · Available Worldwide
						</span>
					</motion.div>

					<motion.h1
						variants={reveal}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="max-w-180 font-serif text-[clamp(3.7rem,8vw,7.8rem)] leading-[0.91] tracking-[-0.065em] text-[#24231f]"
					>
						The art of
						<br />
						seeing
						<br />
						<span className="relative inline-block italic text-[#a58b68]">
							differently.
						</span>
					</motion.h1>

					<motion.p
						variants={reveal}
						transition={{ duration: 0.65, ease: "easeOut" }}
						className="mt-8 max-w-95 text-[13px] leading-[1.9] text-[#77746d] sm:text-sm"
					>
						Thoughtful imagery for the moments, people, and places
						that deserve to be remembered. A study of light,
						emotion, and the beauty in between.
					</motion.p>

					<motion.div
						variants={reveal}
						transition={{ duration: 0.65, ease: "easeOut" }}
						className="mt-9 flex flex-wrap items-center gap-6"
					>
						<Link
							href="/portfolio"
							className="group inline-flex min-h-12 items-center gap-5 bg-[#24231f] px-6 text-[11px] tracking-[0.08em] text-white! transition-colors duration-300 hover:bg-[#a58b68]"
						>
							EXPLORE THE WORK
							<ArrowUpRight
								size={16}
								className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</Link>

						<Link
							href="/about"
							className="group text-[11px] tracking-wider text-[#77746d] transition-colors hover:text-[#24231f]"
						>
							The photographer
							<span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
								→
							</span>
						</Link>
					</motion.div>

					<motion.div
						variants={reveal}
						transition={{ duration: 0.65, ease: "easeOut" }}
						className="mt-12 flex items-center gap-5 border-t border-black/10 pt-5 sm:mt-16 lg:mt-20"
					>
						<div>
							<p className="font-serif text-2xl tracking-tight">
								01—06
							</p>
							<p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
								Selected stories
							</p>
						</div>

						<span className="h-10 w-px bg-black/10" />

						<p className="max-w-30.25 text-[10px] leading-relaxed text-[#77746d]">
							Creating timeless photographs with an editorial eye.
						</p>
					</motion.div>
				</motion.div>

				{/* Right: Featured photograph */}
				<motion.div
					initial={{
						opacity: 0,
						scale: shouldReduceMotion ? 1 : 0.98,
					}}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
					className="relative ml-auto w-full max-w-170"
				>
					<div className="relative aspect-4/5 max-h-190 overflow-hidden bg-[#e8e2d8] sm:aspect-5/4 lg:aspect-4/5">
						<Image
							src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85"
							alt="Golden morning light falling across a peaceful landscape"
							fill
							priority
							sizes="(max-width: 1023px) 100vw, 52vw"
							className="object-cover transition-transform duration-1000 hover:scale-[1.035]"
						/>

						<div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/5" />

						<div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-7">
							<div>
								<p className="text-[9px] uppercase tracking-[0.24em] text-white/75">
									Frame No. 001
								</p>

								<p className="mt-2 font-serif text-2xl italic sm:text-3xl">
									Quiet moments.
								</p>
							</div>

							<span className="flex size-11 items-center justify-center rounded-full border border-white/40 backdrop-blur-sm">
								<ArrowUpRight size={19} />
							</span>
						</div>
					</div>

					{/* Editorial label */}
					<div className="mt-5 flex items-center justify-between gap-4 border-t border-black/10 pt-4 sm:mt-6">
						<div>
							<p className="text-[9px] uppercase tracking-[0.2em] text-[#77746d]">
								Based on Earth
							</p>

							<p className="mt-1 font-serif text-lg italic text-[#24231f] sm:text-xl">
								Available worldwide
							</p>
						</div>

						<span className="shrink-0 text-[10px] uppercase tracking-[0.15em] text-[#77746d]">
							Est. 2020
						</span>
					</div>

					{/* Vertical index */}
					<div className="absolute -right-5.5 top-8 hidden [writing-mode:vertical-rl] lg:block">
						<span className="text-[9px] uppercase tracking-[0.25em] text-[#77746d]">
							Photography · Art · Stories
						</span>
					</div>
				</motion.div>
			</div>

			{/* Bottom scroll cue */}
			<Link
				href="/#selected-work"
				className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-[#77746d] transition-colors hover:text-[#24231f] lg:flex"
			>
				Scroll to explore
				<ArrowDown size={13} />
			</Link>
		</section>
	);
}
