import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

export const metadata = {
	title: "CV | Daanish Rahman",
	description: "CV request page for Daanish Rahman.",
};

export default function CvPage() {
	return (
		<>
			<SiteHeader />
			<main className="site-container pt-12">
				<section className="max-w-[45rem]">
					<p className="text-sm uppercase tracking-[0.18em] text-accent-strong">
						CV
					</p>
					<h1 className="mt-5 text-balance font-sans text-[3.2rem] font-medium leading-[1.03] text-ink md:text-[4rem] lg:text-[4.35rem]">
						CV available on request.
					</h1>
					<p className="mt-6 max-w-[34rem] text-base leading-7 text-ink-soft text-pretty md:text-lg">
						I keep the public site focused on work and writing. For a current CV,
						send me a note and I will share the latest version.
					</p>
					<div className="mt-8 flex flex-wrap gap-7">
						<ButtonLink href="mailto:danisrahman3105@gmail.com">
							Email me
						</ButtonLink>
						<ButtonLink href="/" variant="text">
							Back home
						</ButtonLink>
					</div>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
