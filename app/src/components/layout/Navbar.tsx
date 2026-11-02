"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "Portfolio", href: "/portfolio" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrolled(latest > 24);
	});

	return (
		<motion.header
			initial={{ y: -24, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.65, ease: "easeOut" }}
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
				scrolled
					? "border-b border-black/10 bg-[#f7f5f0]/95 shadow-[0_4px_24px_rgba(0,0,0,0.03)] backdrop-blur-xl"
					: "border-b border-transparent bg-[#f7f5f0]/85 backdrop-blur-sm"
			}`}
		>
			<nav className="mx-auto flex h-19 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-14">
				<Link
					href="/"
					aria-label="ÉLORE homepage"
					className="group flex shrink-0 items-center gap-2"
					onClick={() => setMenuOpen(false)}
				>
					<span className="font-serif text-[30px] font-medium tracking-[-0.08em]">
						É.
					</span>

					<span className="flex flex-col leading-none">
						<span className="text-[13px] font-semibold tracking-[0.22em]">
							ÉLORE
						</span>
						<span className="mt-1 text-[8px] tracking-[0.24em] text-[#77746d]">
							VISUAL STORIES
						</span>
					</span>
				</Link>

				<div className="hidden items-center gap-8 lg:flex xl:gap-10">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="group relative py-2 tracking-[0.04em] text-[#68655f] transition-colors duration-300 hover:text-[#24231f]"
						>
							{link.label}

							<span className="absolute bottom-0 left-0 h-px w-0 bg-[#a58b68] transition-all duration-300 group-hover:w-full" />
						</Link>
					))}
				</div>

				<Link
					href="/contact"
					className="group hidden items-center gap-3 border border-[#24231f]/25 px-5 py-3 text-[11px] tracking-[0.08em] transition-all duration-300 hover:border-[#24231f] hover:bg-[#24231f] hover:text-white! lg:inline-flex"
				>
					<span>LET&apos;S TALK</span>
					<ArrowUpRight
						size={14}
						className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
					/>
				</Link>

				<button
					type="button"
					aria-label={
						menuOpen ? "Close navigation" : "Open navigation"
					}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((open) => !open)}
					className="flex size-11 items-center justify-center border border-black/10 transition-colors hover:bg-black/5 lg:hidden"
				>
					{menuOpen ? <X size={19} /> : <Menu size={19} />}
				</button>
			</nav>

			<div
				className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
					menuOpen
						? "grid-rows-[1fr] opacity-100"
						: "grid-rows-[0fr] opacity-0"
				}`}
				aria-hidden={!menuOpen}
			>
				<div className="min-h-0">
					<div className="border-t border-black/10 px-5 pb-6 pt-3 sm:px-8">
						{navLinks.map((link, index) => (
							<Link
								key={link.href}
								href={link.href}
								tabIndex={menuOpen ? 0 : -1}
								onClick={() => setMenuOpen(false)}
								className="flex items-center justify-between border-b border-black/[0.07] py-4 font-serif text-xl"
							>
								<span>{link.label}</span>
								<span className="text-xs text-[#a58b68]">
									0{index + 1}
								</span>
							</Link>
						))}

						<Link
							href="/contact"
							tabIndex={menuOpen ? 0 : -1}
							onClick={() => setMenuOpen(false)}
							className="mt-5 flex items-center justify-between bg-[#24231f] px-5 py-4 text-xs tracking-[0.12em] text-white"
						>
							<span>BOOK A SESSION</span>
							<ArrowUpRight size={16} />
						</Link>
					</div>
				</div>
			</div>
		</motion.header>
	);
}
