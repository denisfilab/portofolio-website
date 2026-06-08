import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { WorkRow } from "@/components/ui/WorkRow";
import { workItems } from "@/lib/site-data";

export const metadata = {
	title: "Work | Daanish Rahman",
	description: "Selected product engineering, data systems, and applied AI work.",
};

export default function WorkPage() {
	return (
		<>
			<SiteHeader />
			<main className="site-container pt-12">
				<div className="max-w-[48rem]">
					<p className="text-sm uppercase tracking-[0.18em] text-accent-strong">
						Selected work
					</p>
					<h1 className="mt-5 max-w-[58rem] text-balance font-sans text-[3.2rem] font-medium leading-[1.03] text-ink md:text-[4rem] lg:text-[4.35rem]">
						Systems, projects, and the path between them.
					</h1>
					<p className="mt-6 max-w-[36rem] text-base leading-7 text-ink-soft text-pretty md:text-lg">
						A compact archive of product engineering, machine learning, and data
						workflow projects.
					</p>
				</div>
				<div className="mt-12">
					{workItems.map((item) => (
						<WorkRow key={item.id} item={item} />
					))}
				</div>
				<div className="mt-8">
					<ButtonLink href="/" variant="text">
						Back home
					</ButtonLink>
				</div>
			</main>
			<SiteFooter />
		</>
	);
}
