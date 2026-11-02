"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const testimonials = [
	{
		quote: "Every photograph feels like a little piece of our story. The moments, the emotions, the smallest details — everything was captured so beautifully.",
		name: "Olivia & James",
		role: "Wedding Photography",
		location: "Tuscany, Italy",
	},
	{
		quote: "The entire experience felt effortless and personal. The photographs went beyond what we imagined, capturing something genuinely special.",
		name: "Charlotte Bennett",
		role: "Portrait Photography",
		location: "Paris, France",
	},
	{
		quote: "A wonderful creative eye and an incredible attention to detail. The final images brought our campaign vision to life.",
		name: "Alexander Reed",
		role: "Editorial Photography",
		location: "London, UK",
	},
];

export default function Testimonials() {
	const shouldReduceMotion = useReducedMotion();
	const [activeIndex, setActiveIndex] = useState(0);

	const activeTestimonial = testimonials[activeIndex];

	const next = () => {
		setActiveIndex((current) => (current + 1) % testimonials.length);
	};

	const previous = () => {
		setActiveIndex(
			(current) =>
				(current - 1 + testimonials.length) % testimonials.length,
		);
	};

	return (
		<section className="relative overflow-hidden bg-[#24231f] px-5 py-24 text-[#f7f5f0] sm:px-8 sm:py-32 lg:px-14 lg:py-40">
			<div className="mx-auto max-w-[1600px]">
				{/* Section heading */}
				<motion.div
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="mb-16 flex items-center gap-3"
				>
					<span className="h-px w-8 bg-[#a58b68]" />
					<span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">
						Kind words, lasting memories
					</span>
				</motion.div>

				<div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
					{/* Left side */}
					<motion.div
						initial={{
							opacity: 0,
							x: shouldReduceMotion ? 0 : -25,
						}}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="flex flex-col justify-between"
					>
						<div>
							<Quote
								size={42}
								strokeWidth={1}
								className="mb-8 text-[#a58b68]"
							/>

							<h2 className="font-serif text-[clamp(3rem,5vw,5rem)] leading-[0.98] tracking-[-0.055em]">
								Words from
								<br />
								<span className="italic text-[#a58b68]">
									the heart.
								</span>
							</h2>

							<p className="mt-7 max-w-72.5 leading-loose text-white/50">
								The most meaningful part of this journey is
								knowing that the photographs become a part of
								someone&apos;s life and memories.
							</p>
						</div>

						{/* Navigation controls */}
						<div className="mt-10 flex items-center gap-4 lg:mt-16">
							<button
								type="button"
								onClick={previous}
								aria-label="Previous testimonial"
								className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-[#a58b68] hover:bg-[#a58b68]"
							>
								<ArrowLeft size={18} />
							</button>

							<button
								type="button"
								onClick={next}
								aria-label="Next testimonial"
								className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-[#a58b68] hover:bg-[#a58b68]"
							>
								<ArrowRight size={18} />
							</button>

							<span className="ml-3 text-[10px] tracking-[0.15em] text-white/40">
								<span className="text-[#a58b68]">
									{String(activeIndex + 1).padStart(2, "0")}
								</span>
								{" / "}
								{String(testimonials.length).padStart(2, "0")}
							</span>
						</div>
					</motion.div>

					{/* Right side */}
					<motion.div
						initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.15 }}
						className="relative flex min-h-90 flex-col justify-center border-t border-white/15 pt-10 lg:min-h-110 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"
					>
						<AnimatePresence mode="wait" initial={false}>
							<motion.div
								key={activeIndex}
								initial={{
									opacity: 0,
									y: shouldReduceMotion ? 0 : 15,
								}}
								animate={{ opacity: 1, y: 0 }}
								exit={{
									opacity: 0,
									y: shouldReduceMotion ? 0 : -10,
								}}
								transition={{
									duration: shouldReduceMotion ? 0 : 0.35,
								}}
							>
								<Quote
									size={30}
									strokeWidth={1}
									className="mb-7 text-[#a58b68]/70"
								/>

								<blockquote className="max-w-212.5 font-serif text-[clamp(1.8rem,3.5vw,3.4rem)] leading-[1.3] tracking-tight text-[#f7f5f0]">
									&ldquo;{activeTestimonial.quote}&rdquo;
								</blockquote>

								<div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-7">
									<div>
										<h3 className="font-serif text-xl text-[#f7f5f0]">
											{activeTestimonial.name}
										</h3>

										<p className="mt-2 text-[9px] uppercase tracking-[0.17em] text-[#a58b68]">
											{activeTestimonial.role}
										</p>
									</div>

									<p className="text-[10px] text-white/40">
										{activeTestimonial.location}
									</p>
								</div>
							</motion.div>
						</AnimatePresence>
					</motion.div>
				</div>

				{/* Slide indicators */}
				<div className="mt-16 flex gap-2 lg:ml-[calc(35%+6rem)]">
					{testimonials.map((item, index) => (
						<button
							key={item.name}
							type="button"
							onClick={() => setActiveIndex(index)}
							aria-label={`Show testimonial ${index + 1}`}
							aria-current={
								activeIndex === index ? "true" : undefined
							}
							className={`h-1 transition-all duration-500 ${
								activeIndex === index
									? "w-10 bg-[#a58b68]"
									: "w-5 bg-white/20 hover:bg-white/50"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
