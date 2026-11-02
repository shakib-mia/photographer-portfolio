"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
	return (
		<button
			type="button"
			onClick={() =>
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				})
			}
			aria-label="Back to top"
			className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-[#a58b68] hover:bg-[#a58b68] hover:text-white"
		>
			<ArrowUp size={16} />
		</button>
	);
}
