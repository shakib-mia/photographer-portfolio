"use client";

import { motion, useReducedMotion } from "motion/react";

type LetterRevealProps = {
	text: string;
	className?: string;
	delay?: number;
	duration?: number;
	stagger?: number;
};

export default function LetterReveal({
	text,
	className,
	delay = 0,
	duration = 0.65,
	stagger = 0.035,
}: LetterRevealProps) {
	const shouldReduceMotion = useReducedMotion();

	const characters = Array.from(text);

	return (
		<span
			aria-label={text}
			className={`inline-flex flex-wrap ${className ?? ""}`}
		>
			<span aria-hidden="true" className="inline-flex whitespace-pre">
				{characters.map((character, index) => (
					<span
						key={`${character}-${index}`}
						className="inline-block"
					>
						<motion.span
							initial={{
								y: shouldReduceMotion ? 0 : "110%",
								opacity: shouldReduceMotion ? 1 : 0,
							}}
							animate={{ y: "0%", opacity: 1 }}
							transition={{
								duration: shouldReduceMotion ? 0 : duration,
								delay: shouldReduceMotion
									? 0
									: delay + index * stagger,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="inline-block"
						>
							{character === " " ? "\u00A0" : character}
						</motion.span>
					</span>
				))}
			</span>
		</span>
	);
}
