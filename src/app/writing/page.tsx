import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { WritingRow } from "@/components/ui/WritingRow";
import { writingPosts } from "@/lib/site-data";

export const metadata = {
	title: "Writing | Daanish Rahman",
	description: "Engineering notes, learning logs, and project writing.",
};

export default function WritingPage() {
	return (
		<>
			<SiteHeader />
			<main className="site-container pt-12">
				<div className="max-w-[50rem]">
					<p className="text-sm uppercase tracking-[0.18em] text-accent-strong">
						Writing
					</p>
					<h1 className="mt-5 max-w-[58rem] text-balance font-sans text-[3.2rem] font-medium leading-[1.03] text-ink md:text-[4rem] lg:text-[4.35rem]">
						Notes on the systems I build and the things I am learning.
					</h1>
					<p className="mt-6 max-w-[36rem] text-base leading-7 text-ink-soft text-pretty md:text-lg">
						Short essays about product engineering, data workflows, applied AI,
						and the decisions that make software useful.
					</p>
				</div>
				<div className="mt-12 max-w-[54rem]">
					{writingPosts.map((post) => (
						<WritingRow key={post.slug} post={post} />
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
