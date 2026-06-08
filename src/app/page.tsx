import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { WorkRow } from "@/components/ui/WorkRow";
import { WritingRow } from "@/components/ui/WritingRow";
import { SystemDiagram } from "@/components/home/SystemDiagram";
import { workItems, writingPosts } from "@/lib/site-data";

export default function Home() {
	return (
		<>
			<SiteHeader />
			<main>
				<section className="site-container pt-4 md:pt-7">
					<div className="max-w-[58rem]">
						<h1 className="max-w-[58rem] text-balance font-sans text-[3.2rem] font-medium leading-[1.03] text-ink md:text-[4rem] lg:text-[4.35rem]">
							I build product systems, data workflows, and applied AI tools.
						</h1>
						<p className="mt-4 max-w-[33rem] text-base leading-7 text-ink-soft text-pretty md:text-[1.05rem]">
							Computer Science student at Universitas Indonesia working across
							product engineering, machine learning, and deployment
							infrastructure.
						</p>
						<div className="mt-5 flex flex-wrap items-center gap-7">
							<ButtonLink href="#work">View work</ButtonLink>
							<ButtonLink href="/writing" variant="text">
								Read writing
							</ButtonLink>
						</div>
					</div>
				</section>

				<section className="site-container mt-8 md:mt-9">
					<SystemDiagram />
				</section>

				<section className="site-container mt-9 grid gap-11 lg:grid-cols-2 lg:gap-16">
					<div>
						<SectionTitle id="work" title="Selected work" />
						<div>
							{workItems.slice(0, 3).map((item) => (
								<WorkRow key={item.id} item={item} compact />
							))}
						</div>
						<div className="mt-6">
							<ButtonLink href="/work" variant="text">
								View all projects
							</ButtonLink>
						</div>
					</div>

					<div>
						<SectionTitle title="Latest writing" />
						<div>
							{writingPosts.map((post) => (
								<WritingRow key={post.slug} post={post} />
							))}
						</div>
						<div className="mt-6">
							<ButtonLink href="/writing" variant="text">
								View all writing
							</ButtonLink>
						</div>
					</div>
				</section>

				<section
					id="about"
					className="site-container mt-16 grid gap-8 border-t border-line pt-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16"
				>
					<div>
						<p className="text-sm uppercase tracking-[0.18em] text-accent-strong">
							About
						</p>
						<h2 className="mt-4 max-w-[38rem] text-balance font-sans text-[2.6rem] font-medium leading-[1.03] text-ink md:text-[3.6rem]">
							A public notebook for work that is becoming real.
						</h2>
					</div>
					<div className="max-w-[42rem] text-base leading-8 text-ink-soft text-pretty">
						<p>
							I am interested in the shape of useful software: the product
							decisions, data flows, model behavior, and infrastructure details
							that make a system reliable enough for people to use.
						</p>
						<p className="mt-5">
							This site collects selected work, project notes, and writing from
							that process. Some pieces are polished systems; others are field
							notes from learning in public.
						</p>
					</div>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
