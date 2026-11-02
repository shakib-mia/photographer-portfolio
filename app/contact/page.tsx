import type { Metadata } from "next";

import { services } from "../src/data/services.json";
import ContactForm from "../src/components/sections/ContactForm";

export const metadata: Metadata = {
	title: "Get in Touch",
	description:
		"Tell ÉLORE about your photography plans, creative ideas, and the moments you want to preserve.",
};

type ContactPageProps = {
	searchParams: Promise<{
		service?: string;
	}>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
	const { service } = await searchParams;

	const initialService = services.some((item) => item.slug === service)
		? service!
		: "";

	return (
		<>
			<main className="overflow-hidden">
				{/* Hero */}
				<section className="px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
					<div className="mx-auto max-w-350">
						<span className="text-xs font-medium uppercase tracking-[0.3em] text-[#a58b68]">
							The beginning of something meaningful
						</span>

						<div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-20">
							<h1 className="font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.98] tracking-[-0.055em]">
								Every story
								<br />
								starts with
								<br />
								<span className="italic text-[#a58b68]">
									a conversation.
								</span>
							</h1>

							<div className="border-t border-[#24231f]/15 pt-6 md:pb-2">
								<p className="text-base leading-8 text-[#77746d] md:text-lg">
									Whether you are planning a wedding, dreaming
									of a portrait session, or bringing a
									creative project to life, I would love to
									hear what you have in mind.
								</p>

								<p className="mt-5 text-sm leading-7 text-[#77746d]">
									Share a few details below. We can start with
									an idea and see where the conversation takes
									us.
								</p>
							</div>
						</div>

						<div className="relative mt-14 aspect-16/7 overflow-hidden md:mt-20">
							<div
								className="absolute inset-0 bg-cover bg-center"
								style={{
									backgroundImage:
										"url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=2000&q=90')",
								}}
							/>

							<div className="absolute inset-0 bg-black/15" />

							<span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-white md:bottom-10 md:left-10">
								ÉLORE — Visual stories
							</span>
						</div>
					</div>
				</section>

				{/* Inquiry form */}
				<section
					id="inquiry"
					className="scroll-mt-24 bg-[#efede6] px-6 py-20 md:px-10 md:py-28"
				>
					<div className="mx-auto grid max-w-350 gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
						<aside>
							<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a58b68]">
								Your inquiry
							</span>

							<h2 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.045em] md:text-6xl">
								Tell me
								<br />
								about your
								<br />
								<span className="italic text-[#a58b68]">
									vision.
								</span>
							</h2>

							<p className="mt-7 max-w-100 text-base leading-8 text-[#77746d]">
								The more I understand about your plans, the
								better I can understand what you need. You do
								not have to have every detail figured out yet.
							</p>

							<div className="mt-12 border-t border-[#24231f]/15 pt-7">
								<span className="text-xs font-semibold uppercase tracking-[0.2em]">
									A few things to know
								</span>

								<ul className="mt-6 space-y-5 text-sm leading-7 text-[#77746d]">
									<li className="flex gap-3">
										<span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#a58b68]" />
										Tell me what you are planning, even if
										it is just an early idea.
									</li>

									<li className="flex gap-3">
										<span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#a58b68]" />
										Your preferred date and location help
										with planning.
									</li>

									<li className="flex gap-3">
										<span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#a58b68]" />
										If you are unsure which service fits,
										describe your idea instead.
									</li>
								</ul>
							</div>

							<div className="mt-12 border-t border-[#24231f]/15 pt-7">
								<span className="text-xs font-semibold uppercase tracking-[0.2em]">
									The next step
								</span>

								<p className="mt-4 text-sm leading-7 text-[#77746d]">
									Once your email draft is ready, you can
									review it in your email application before
									sending it.
								</p>
							</div>
						</aside>

						<ContactForm
							services={services.map(
								(item: { slug: string; title: string }) => ({
									slug: item.slug,
									title: item.title,
								}),
							)}
							initialService={initialService}
						/>
					</div>
				</section>

				{/* FAQ */}
				<section className="px-6 py-24 md:px-10 md:py-32">
					<div className="mx-auto grid max-w-350 gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
						<div>
							<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a58b68]">
								Before you reach out
							</span>

							<h2 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.045em] md:text-6xl">
								A few things
								<br />
								you might
								<br />
								<span className="italic text-[#a58b68]">
									be wondering.
								</span>
							</h2>
						</div>

						<div className="border-t border-[#24231f]/15">
							{[
								{
									question:
										"Do I need to know all the details?",
									answer: "Not at all. An initial idea is enough. We can discuss your preferences, explore possibilities, and work out the details together.",
								},
								{
									question:
										"Can I ask about a custom photography project?",
									answer: "Absolutely. If your project does not fit neatly into one of the listed services, choose Other in the inquiry form and explain what you have in mind.",
								},
								{
									question:
										"How does the booking process work?",
									answer: "We start by discussing your project, requirements, and availability. The booking details, timeline, and any applicable fees can then be agreed upon before confirming the session.",
								},
								{
									question:
										"Do you have fixed photography packages?",
									answer: "The right arrangement depends on the type of session, coverage, location, and deliverables. Share your requirements in the form to begin discussing a suitable option.",
								},
							].map((item, index) => (
								<details
									key={item.question}
									className="group border-b border-[#24231f]/15"
								>
									<summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
										<span className="flex items-start gap-5">
											<span className="mt-1 text-xs tracking-[0.15em] text-[#a58b68]">
												{String(index + 1).padStart(
													2,
													"0",
												)}
											</span>

											<span className="font-serif text-xl md:text-2xl">
												{item.question}
											</span>
										</span>

										<span className="text-2xl text-[#a58b68] transition-transform duration-300 group-open:rotate-45">
											+
										</span>
									</summary>

									<p className="max-w-150 pb-7 pl-10 text-sm leading-7 text-[#77746d] md:pl-11">
										{item.answer}
									</p>
								</details>
							))}
						</div>
					</div>
				</section>

				{/* Closing section */}
				<section className="bg-[#24231f] px-6 py-20 text-center text-[#f7f5f0] md:px-10 md:py-28">
					<div className="mx-auto max-w-200">
						<span className="text-xs font-medium uppercase tracking-[0.25em] text-[#c0a987]">
							No perfect words needed
						</span>

						<h2 className="mt-7 font-serif text-5xl leading-tight tracking-[-0.045em] md:text-7xl">
							Every meaningful story
							<br />
							<span className="italic text-[#c0a987]">
								begins somewhere.
							</span>
						</h2>

						<p className="mx-auto mt-7 max-w-125 text-base leading-8 text-white/55">
							Start with what matters to you. We can figure out
							the rest together.
						</p>
					</div>
				</section>
			</main>
		</>
	);
}
