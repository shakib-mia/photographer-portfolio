import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import BackToTop from "./BackToTop";

const navigation = [
	{ label: "Home", href: "/" },
	{ label: "Portfolio", href: "/portfolio" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Contact", href: "/contact" },
];

const services = [
	{ label: "Wedding Photography", href: "/services#wedding" },
	{ label: "Portrait Photography", href: "/services#portrait" },
	{ label: "Editorial Photography", href: "/services#editorial" },
	{ label: "Lifestyle Photography", href: "/services#lifestyle" },
];

const socials = [
	{
		label: "Instagram",
		href: "https://instagram.com",
		icon: FaInstagram,
	},
	{
		label: "Facebook",
		href: "https://facebook.com",
		icon: FaFacebookF,
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com",
		icon: FaLinkedinIn,
	},
];

export default function Footer() {
	const currentYear = 2026;
	return (
		<footer className="bg-[#24231f] px-5 text-[#f7f5f0] sm:px-8 lg:px-14">
			<div className="mx-auto max-w-[1600px]">
				{/* Main footer */}
				<div className="grid gap-14 border-b border-white/15 py-20 sm:py-24 lg:grid-cols-[1.3fr_0.7fr_1fr_1fr] lg:gap-12 lg:py-28">
					{/* Brand */}
					<div className="max-w-82.5">
						<Link
							href="/"
							className="group inline-flex items-center gap-3"
						>
							<span className="font-serif text-5xl italic text-[#a58b68]">
								É.
							</span>

							<span className="flex flex-col">
								<span className="font-serif text-2xl tracking-[0.16em]">
									ÉLORE
								</span>
								<span className="mt-1 text-[8px] tracking-[0.3em] text-white/40">
									VISUAL STORIES
								</span>
							</span>
						</Link>

						<p className="mt-7 leading-loose text-white/45">
							Creating timeless visual stories through light,
							emotion, and thoughtful artistic expression.
						</p>

						<div className="mt-8 flex items-center gap-3">
							{socials.map((social) => {
								const Icon = social.icon;

								return (
									<Link
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.label}
										className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-[#a58b68] hover:bg-[#a58b68] hover:text-white"
									>
										<Icon size={16} />
									</Link>
								);
							})}
						</div>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="mb-7 text-[10px] font-medium uppercase tracking-[0.2em] text-[#a58b68]">
							Explore
						</h3>

						<ul className="space-y-4">
							{navigation.map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="group inline-flex items-center gap-2 text-white/55 transition-colors duration-300 hover:text-white"
									>
										{item.label}
										<ArrowUpRight
											size={12}
											className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="mb-7 text-[10px] font-medium uppercase tracking-[0.2em] text-[#a58b68]">
							Photography
						</h3>

						<ul className="space-y-4">
							{services.map((service) => (
								<li key={service.label}>
									<Link
										href={service.href}
										className=" text-white/55 transition-colors duration-300 hover:text-white"
									>
										{service.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="mb-7 text-[10px] font-medium uppercase tracking-[0.2em] text-[#a58b68]">
							Get in touch
						</h3>

						<p className="max-w-58.75 leading-loose text-white/45">
							Have a story in mind? {"Let's"} create something
							meaningful together.
						</p>

						<Link
							href="/contact"
							className="group mt-7 inline-flex items-center gap-3 border-b border-[#a58b68] pb-2 text-[11px] text-white transition-colors duration-300 hover:text-[#a58b68]"
						>
							Start a project
							<ArrowUpRight
								size={15}
								className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
							/>
						</Link>

						<Link
							href="/contact"
							className="mt-7 flex items-center gap-3 text-[11px] text-white/50 transition-colors hover:text-white"
						>
							<Mail size={15} className="text-[#a58b68]" />
							Send an inquiry
						</Link>
					</div>
				</div>

				{/* Bottom footer */}
				<div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-[10px] tracking-wide text-white/40">
						© {currentYear} ÉLORE Photography. All rights reserved.
					</p>

					<div className="flex items-center justify-between gap-6 sm:justify-end">
						<p className="text-[9px] uppercase tracking-[0.17em] text-white/35">
							Made with intention & creativity
						</p>

						<BackToTop />
					</div>
				</div>
			</div>
		</footer>
	);
}
