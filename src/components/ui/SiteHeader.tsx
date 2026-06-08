"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import { navigationLinks } from "@/lib/site-data";

export function SiteHeader() {
	const pathname = usePathname();
	const router = useRouter();
	const [activeHash, setActiveHash] = useState("");

	useEffect(() => {
		setActiveHash(window.location.hash);

		if (pathname !== "/") {
			return;
		}

		const pendingHash = sessionStorage.getItem("pending-scroll-hash");

		if (!pendingHash) {
			return;
		}

		sessionStorage.removeItem("pending-scroll-hash");
		window.requestAnimationFrame(() => scrollToHash(pendingHash));
	}, [pathname]);

	const scrollToHash = (hash: string) => {
		const target = document.querySelector(hash);

		if (!target) {
			return;
		}

		target.scrollIntoView({ behavior: "smooth", block: "start" });
		window.history.replaceState(null, "", hash);
		setActiveHash(hash);
	};

	const handleNavClick = (
		event: MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		if (href.startsWith("/#")) {
			const hash = href.slice(1);
			event.preventDefault();

			if (pathname === "/") {
				scrollToHash(hash);
				return;
			}

			sessionStorage.setItem("pending-scroll-hash", hash);
			router.push("/");
			return;
		}

		if (href === pathname) {
			event.preventDefault();
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	const isActive = (href: string) => {
		if (href === "/writing") {
			return pathname.startsWith("/writing");
		}

		if (href === "/#work") {
			return pathname === "/" && (activeHash === "" || activeHash === "#work");
		}

		if (href.startsWith("/#")) {
			return pathname === "/" && activeHash === href.slice(1);
		}

		return pathname === href;
	};

	return (
		<header className="site-container flex items-start justify-between py-7 md:py-8">
			<Link
				href="/"
				className="font-sans text-xl font-semibold leading-none text-ink transition-colors duration-200 hover:text-accent-strong"
			>
				denisrahman lab
			</Link>
			<nav aria-label="Main navigation" className="hidden items-start gap-16 md:flex">
				{navigationLinks.map((link, index) => (
					<Link
						key={link.href}
						href={link.href}
						onClick={(event) => handleNavClick(event, link.href)}
						className="group flex min-h-10 flex-col items-center gap-3 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-ink"
					>
						<span>{link.label}</span>
						<span
							className={`h-1 w-1 rounded-full bg-accent transition-opacity duration-200 ${
								isActive(link.href)
									? "opacity-100"
									: "opacity-0 group-hover:opacity-100"
							}`}
						/>
					</Link>
				))}
			</nav>
			<nav
				aria-label="Mobile navigation"
				className="grid grid-cols-2 gap-x-5 gap-y-2 text-right text-sm font-medium text-ink-soft md:hidden"
			>
				{navigationLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						onClick={(event) => handleNavClick(event, link.href)}
						className="min-h-10 transition-colors duration-200 hover:text-ink"
					>
						{link.label}
					</Link>
				))}
			</nav>
		</header>
	);
}
