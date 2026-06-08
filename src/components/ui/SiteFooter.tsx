import Link from "next/link";
import { socialLinks } from "@/lib/site-data";

export function SiteFooter() {
	return (
		<footer
			id="contact"
			className="site-container mt-12 flex flex-col gap-8 border-t border-line py-7 text-sm text-ink-muted md:flex-row md:items-center md:justify-between"
		>
			<div className="flex flex-wrap gap-x-8 gap-y-2">
				<span>© 2026 Daanish Rahman</span>
			</div>
			<div className="flex flex-wrap gap-7">
				{socialLinks.map((link) => {
					const Icon = link.icon;
					const isExternal = link.href.startsWith("http");

					return (
						<Link
							key={link.label}
							href={link.href}
							target={isExternal ? "_blank" : undefined}
							rel={isExternal ? "noopener noreferrer" : undefined}
							className="inline-flex min-h-10 items-center gap-2 text-ink-soft transition-colors duration-200 hover:text-accent-strong"
						>
							<Icon aria-hidden="true" className="h-4 w-4" />
							<span>{link.label}</span>
						</Link>
					);
				})}
			</div>
		</footer>
	);
}
