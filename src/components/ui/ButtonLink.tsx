import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type ButtonLinkProps = {
	href: string;
	children: React.ReactNode;
	variant?: "primary" | "text";
};

export function ButtonLink({
	href,
	children,
	variant = "primary",
}: ButtonLinkProps) {
	const isExternal = href.startsWith("http");

	if (variant === "text") {
		return (
			<Link
				href={href}
				target={isExternal ? "_blank" : undefined}
				rel={isExternal ? "noopener noreferrer" : undefined}
				className="group inline-flex min-h-10 w-fit items-center gap-4 border-b border-accent pb-1 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent-strong"
			>
				<span>{children}</span>
				<FiArrowRight
					aria-hidden="true"
					className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
				/>
			</Link>
		);
	}

	return (
		<Link
			href={href}
			target={isExternal ? "_blank" : undefined}
			rel={isExternal ? "noopener noreferrer" : undefined}
			className="inline-flex min-h-11 w-fit items-center justify-center rounded-[var(--radius-control)] bg-dark px-7 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(20,22,21,0.16)] transition-[background-color,transform] duration-200 ease-out hover:bg-dark-soft active:scale-[0.96]"
		>
			{children}
		</Link>
	);
}
