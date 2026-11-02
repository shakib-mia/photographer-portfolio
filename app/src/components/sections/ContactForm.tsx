"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Mail } from "lucide-react";

type ContactService = {
	slug: string;
	title: string;
};

type ContactFormProps = {
	services: ContactService[];
	initialService: string;
};

const CONTACT_EMAIL = "replace-with-your-email@example.com";

const budgetOptions = [
	"Not decided yet",
	"Under $250",
	"$250 – $500",
	"$500 – $1,000",
	"$1,000 – $2,500",
	"$2,500+",
];

const inputClassName =
	"mt-3 w-full rounded-none border-0 border-b border-[#24231f]/20 bg-transparent px-0 py-4 text-sm text-[#24231f] outline-none transition-colors placeholder:text-[#77746d]/70 focus:border-[#a58b68]";

const labelClassName =
	"text-xs font-semibold uppercase tracking-[0.16em] text-[#24231f]";

export default function ContactForm({
	services,
	initialService,
}: ContactFormProps) {
	const [selectedService, setSelectedService] = useState(initialService);

	const [formError, setFormError] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setFormError("");

		if (
			!CONTACT_EMAIL ||
			CONTACT_EMAIL === "replace-with-your-email@example.com"
		) {
			setFormError(
				"The recipient email has not been configured yet. Update CONTACT_EMAIL in ContactForm.tsx before sending inquiries.",
			);
			return;
		}

		const form = event.currentTarget;
		const formData = new FormData(form);

		const name = String(formData.get("name") || "").trim();
		const email = String(formData.get("email") || "").trim();
		const date = String(formData.get("date") || "").trim();
		const location = String(formData.get("location") || "").trim();
		const budget = String(formData.get("budget") || "").trim();
		const message = String(formData.get("message") || "").trim();

		const serviceTitle =
			services.find((service) => service.slug === selectedService)
				?.title || "Other / Custom Project";

		const subject = `Photography Inquiry — ${serviceTitle}`;

		const body = [
			"NEW PHOTOGRAPHY INQUIRY",
			"",
			`Name: ${name}`,
			`Email: ${email}`,
			`Service: ${serviceTitle}`,
			`Preferred date: ${date || "Not specified"}`,
			`Location: ${location || "Not specified"}`,
			`Budget: ${budget || "Not specified"}`,
			"",
			"PROJECT DETAILS",
			message,
		].join("\n");

		const mailtoUrl =
			`mailto:${CONTACT_EMAIL}` +
			`?subject=${encodeURIComponent(subject)}` +
			`&body=${encodeURIComponent(body)}`;

		window.location.href = mailtoUrl;
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="border-t border-[#24231f]/20 pt-8 md:pt-10"
		>
			<div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
				{/* Name */}
				<div>
					<label htmlFor="name" className={labelClassName}>
						Your name <span className="text-[#a58b68]">*</span>
					</label>

					<input
						id="name"
						name="name"
						type="text"
						autoComplete="name"
						placeholder="How should I address you?"
						required
						maxLength={100}
						className={inputClassName}
					/>
				</div>

				{/* Email */}
				<div>
					<label htmlFor="email" className={labelClassName}>
						Email address <span className="text-[#a58b68]">*</span>
					</label>

					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						placeholder="you@example.com"
						required
						maxLength={254}
						className={inputClassName}
					/>
				</div>

				{/* Service */}
				<div>
					<label htmlFor="service" className={labelClassName}>
						Photography service{" "}
						<span className="text-[#a58b68]">*</span>
					</label>

					<select
						id="service"
						name="service"
						value={selectedService}
						onChange={(event) =>
							setSelectedService(event.target.value)
						}
						required
						className={`${inputClassName} cursor-pointer`}
					>
						<option value="" disabled>
							Choose a service
						</option>

						{services.map((service) => (
							<option key={service.slug} value={service.slug}>
								{service.title}
							</option>
						))}

						<option value="other">Other / Custom Project</option>
					</select>
				</div>

				{/* Date */}
				<div>
					<label htmlFor="date" className={labelClassName}>
						Preferred date
					</label>

					<input
						id="date"
						name="date"
						type="date"
						min={new Date().toLocaleDateString("en-CA")}
						className={inputClassName}
					/>
				</div>

				{/* Location */}
				<div>
					<label htmlFor="location" className={labelClassName}>
						Location
					</label>

					<input
						id="location"
						name="location"
						type="text"
						autoComplete="address-level2"
						placeholder="City, country, or venue"
						maxLength={150}
						className={inputClassName}
					/>
				</div>

				{/* Budget */}
				<div>
					<label htmlFor="budget" className={labelClassName}>
						Estimated budget
					</label>

					<select
						id="budget"
						name="budget"
						defaultValue=""
						className={`${inputClassName} cursor-pointer`}
					>
						<option value="" disabled>
							Select your budget
						</option>

						{budgetOptions.map((budget) => (
							<option key={budget} value={budget}>
								{budget}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Message */}
			<div className="mt-10">
				<label htmlFor="message" className={labelClassName}>
					Tell me about your plans{" "}
					<span className="text-[#a58b68]">*</span>
				</label>

				<textarea
					id="message"
					name="message"
					rows={5}
					required
					minLength={10}
					maxLength={5000}
					placeholder="The occasion, the feeling, the ideas you have in mind..."
					className={`${inputClassName} resize-y leading-7`}
				/>
			</div>

			{/* Privacy note */}
			<p className="mt-6 text-xs leading-6 text-[#77746d]">
				Your details will be included in an email draft so you can
				review the inquiry before sending it.
			</p>

			{/* Error */}
			{formError && (
				<div
					role="alert"
					className="mt-6 border border-[#a58b68]/40 bg-[#a58b68]/10 p-5 text-sm leading-7 text-[#24231f]"
				>
					{formError}
				</div>
			)}

			{/* Submit */}
			<button
				type="submit"
				className="group mt-8 inline-flex min-h-14 w-full items-center justify-between gap-4 bg-[#24231f] px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-[#f7f5f0] transition-colors duration-300 hover:bg-[#a58b68] sm:w-auto sm:min-w-64"
			>
				<span className="flex items-center gap-3">
					<Mail size={17} strokeWidth={1.5} />
					Prepare inquiry
				</span>

				<ArrowUpRight
					size={18}
					className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
				/>
			</button>

			<div className="mt-6 flex items-start gap-3 text-xs leading-6 text-[#77746d]">
				<Check size={15} className="mt-1 shrink-0 text-[#a58b68]" />

				<p>
					You will be able to review the email before sending it.
					Preparing the inquiry does not send it automatically.
				</p>
			</div>
		</form>
	);
}
