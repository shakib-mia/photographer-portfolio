"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from "motion/react";
import LetterReveal from "../ui/LetterReveal";

const heroImages = [
	{
		src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85",
		alt: "Golden morning light falling across a peaceful landscape",
		title: "Quiet moments.",
	},
	{
		src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
		alt: "A peaceful mountain lake surrounded by nature",
		title: "Beyond horizons.",
	},
	{
		src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
		alt: "Dreamlike misty mountains at sunrise",
		title: "Chasing light.",
	},
	{
		src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85",
		alt: "Sunlight filtering through a forest",
		title: "Into the wild.",
	},
	{
		src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=85",
		alt: "Wildlife in a beautiful natural landscape",
		title: "Nature unfolds.",
	},
	{
		src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
		alt: "A beautiful scenic landscape under an open sky",
		title: "Endless stories.",
	},
];

export default function Hero() {
	const shouldReduceMotion = useReducedMotion();
	const [activeSlide, setActiveSlide] = useState(0);
	const sectionRef = useRef<HTMLElement>(null);

	// Scroll progress of the hero: 0 when its top hits the viewport top,
	// 1 when its bottom has scrolled past the viewport top.
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	// Parallax layers (all disabled when the user prefers reduced motion)
	const textY = useTransform(
		scrollYProgress,
		[0, 1],
		shouldReduceMotion ? [0, 0] : [0, -140],
	);
	const frameY = useTransform(
		scrollYProgress,
		[0, 1],
		shouldReduceMotion ? [0, 0] : [0, -60],
	);
	const imageY = useTransform(
		scrollYProgress,
		[0, 1],
		shouldReduceMotion ? ["0%", "0%"] : ["-8%", "8%"],
	);
	const verticalLabelY = useTransform(
		scrollYProgress,
		[0, 1],
		shouldReduceMotion ? [0, 0] : [0, -100],
	);
	const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

	// Automatic image slider
	useEffect(() => {
		if (shouldReduceMotion) return;

		const interval = setInterval(() => {
			setActiveSlide((current) => (current + 1) % heroImages.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [shouldReduceMotion]);

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
		<section
			ref={sectionRef}
			className="relative overflow-hidden bg-[#f7f5f0]"
		>
			<div className="mx-auto grid min-h-svh max-w-[1600px] items-center gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:px-14 lg:pb-20 lg:pt-32">
				{/* Left: Editorial introduction */}
				<motion.div
					initial="hidden"
					animate="visible"
					style={{ y: textY }}
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

					<h1 className="max-w-180 font-serif text-[clamp(3.7rem,8vw,7.8rem)] leading-[0.91] tracking-[-0.065em] text-[#24231f]">
						<LetterReveal text="The art of" delay={0.2} />
						<br />
						<LetterReveal text="seeing" delay={0.55} />
						<br />
						<span className="italic text-[#a58b68]">
							<LetterReveal text="differently." delay={0.8} />
						</span>
					</h1>

					<motion.p
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {},
							visible: {
								transition: {
									staggerChildren: shouldReduceMotion
										? 0
										: 0.07,
									delayChildren: 1.2,
								},
							},
						}}
						className="mt-8 max-w-95 text-[13px] leading-[1.9] text-[#77746d] sm:text-sm"
					>
						{[
							"Thoughtful imagery for the moments,",
							"people, and places that deserve to be",
							"remembered. A study of light,",
							"emotion, and the beauty in between.",
						].map((line, index) => (
							<span key={index} className="overflow-hidden">
								<motion.span
									variants={{
										hidden: { y: 20, opacity: 0 },
										visible: { y: 0, opacity: 1 },
									}}
									transition={{
										duration: 0.6,
										ease: "easeOut",
									}}
								>
									{line}
								</motion.span>
							</span>
						))}
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

				{/* Right: Featured photograph slider */}
				<motion.div
					initial={{
						opacity: 0,
						scale: shouldReduceMotion ? 1 : 0.98,
					}}
					animate={{ opacity: 1, scale: 1 }}
					style={{ y: frameY }}
					transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
					className="relative ml-auto w-full max-w-170"
				>
					<div className="relative aspect-4/5 max-h-190 overflow-hidden bg-[#e8e2d8] sm:aspect-5/4 lg:aspect-4/5">
						{/* Parallax layer: taller than the frame so edges never show */}
						<motion.div
							style={{ y: imageY }}
							className="absolute inset-x-0 -inset-y-[12%]"
						>
							{/* Slider images */}
							{heroImages.map((image, index) => (
								<motion.div
									key={image.src}
									initial={false}
									animate={{
										opacity: activeSlide === index ? 1 : 0,
										scale:
											activeSlide === index &&
											!shouldReduceMotion
												? 1
												: 1.03,
									}}
									transition={{
										opacity: {
											duration: shouldReduceMotion
												? 0
												: 1.2,
											ease: "easeInOut",
										},
										scale: {
											duration: 5,
											ease: "linear",
										},
									}}
									className={`absolute inset-0 ${
										activeSlide === index ? "z-10" : "z-0"
									}`}
									aria-hidden={activeSlide !== index}
								>
									<Image
										src={image.src}
										alt={image.alt}
										fill
										priority={index === 0}
										sizes="(max-width: 1023px) 100vw, 52vw"
										className="object-cover"
									/>
								</motion.div>
							))}
						</motion.div>

						<div className="pointer-events-none absolute inset-0 z-20 bg-linear-to-t from-black/35 via-transparent to-black/5" />

						<div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between p-5 text-white sm:p-7">
							<div>
								<p className="text-[9px] uppercase tracking-[0.24em] text-white/75">
									Frame No.{" "}
									{String(activeSlide + 1).padStart(3, "0")}
								</p>

								<motion.p
									key={activeSlide}
									initial={{
										opacity: 0,
										y: shouldReduceMotion ? 0 : 12,
									}}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									className="mt-2 font-serif text-2xl italic sm:text-3xl"
								>
									{heroImages[activeSlide].title}
								</motion.p>
							</div>

							<span className="flex size-11 items-center justify-center rounded-full border border-white/40 backdrop-blur-sm">
								<ArrowUpRight size={19} />
							</span>
						</div>

						{/* Slider indicators */}
						<div className="absolute bottom-8 right-20 z-30 flex items-center gap-1.5 sm:right-24">
							{heroImages.map((image, index) => (
								<button
									key={image.src}
									type="button"
									onClick={() => setActiveSlide(index)}
									aria-label={`Go to slide ${index + 1}`}
									aria-current={activeSlide === index}
									className={`h-1 transition-all duration-500 ${
										activeSlide === index
											? "w-7 bg-white"
											: "w-3 bg-white/45 hover:bg-white/80"
									}`}
								/>
							))}
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
					<motion.div
						style={{ y: verticalLabelY }}
						className="absolute -right-5.5 top-8 hidden [writing-mode:vertical-rl] lg:block"
					>
						<span className="text-[9px] uppercase tracking-[0.25em] text-[#77746d]">
							Photography · Art · Stories
						</span>
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom scroll cue (fades out as you scroll) */}
			<motion.div
				style={{ opacity: cueOpacity }}
				className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block"
			>
				<Link
					href="/#selected-work"
					className="flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-[#77746d] transition-colors hover:text-[#24231f]"
				>
					Scroll to explore
					<ArrowDown size={13} />
				</Link>
			</motion.div>
		</section>
	);
}
