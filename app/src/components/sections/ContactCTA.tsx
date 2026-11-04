"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function ContactCTA() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="relative overflow-hidden bg-[#f7f5f0] px-5 py-28 sm:px-8 sm:py-36 lg:px-14 lg:py-44">
			<div className="mx-auto max-w-[1600px]">
				<motion.div
					initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.8 }}
					className="mx-auto max-w-275 text-center"
				>
					<div className="mb-9 flex items-center justify-center gap-3">
						<span className="h-px w-8 bg-[#a58b68]" />
						<span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#77746d]">
							{"Let's"} make something meaningful
						</span>
						<span className="h-px w-8 bg-[#a58b68]" />
					</div>

					<h2 className="font-serif text-[clamp(3.2rem,8vw,8rem)] leading-[0.95] tracking-[-0.06em] text-[#24231f]">
						Your story
						<br />
						deserves to be
						<br />
						<span className="italic text-[#a58b68]">
							remembered.
						</span>
					</h2>

					<p className="mx-auto mt-9 max-w-107.5 leading-loose text-[#77746d] sm:text-[13px]">
						Whether you are planning a celebration, dreaming of a
						portrait session, or have a creative project in mind, I
						would love to hear about it.
					</p>

					<Link
						href="/contact"
						className="group mx-auto mt-10 inline-flex min-h-14 items-center gap-7 bg-[#24231f] px-8 text-[10px] font-medium uppercase tracking-[0.16em] text-white! transition-colors duration-300 hover:bg-[#a58b68]"
					>
						Start a conversation
						<ArrowUpRight
							size={17}
							className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
						/>
					</Link>
				</motion.div>

				{/* Contact information */}
				<div className="mt-24 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-2 sm:items-center lg:mt-32">
					<div className="flex items-center justify-center gap-4 sm:justify-start">
						<div className="flex size-11 items-center justify-center rounded-full border border-[#a58b68]/40 text-[#a58b68]">
							<Mail size={17} />
						</div>

						<div>
							<p className="text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
								Get in touch
							</p>
							<Link
								href="/contact"
								className="mt-1 inline-block font-serif text-lg text-[#24231f] transition-colors hover:text-[#a58b68]"
							>
								Send an inquiry
							</Link>
						</div>
					</div>

					<div className="flex items-center justify-center gap-4 sm:justify-end">
						<div className="flex size-11 items-center justify-center rounded-full border border-[#a58b68]/40 text-[#a58b68]">
							<MapPin size={17} />
						</div>

						<div>
							<p className="text-[9px] uppercase tracking-[0.18em] text-[#77746d]">
								Based in
							</p>
							<p className="mt-1 font-serif text-lg text-[#24231f]">
								Available worldwide
							</p>
						</div>
					</div>
				</div>

				{/* Decorative footer note */}
				<div className="mt-16 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#a58b68]">
					<ArrowDownRight size={13} />
					Every great story starts somewhere
				</div>
			</div>
		</section>
	);
}
