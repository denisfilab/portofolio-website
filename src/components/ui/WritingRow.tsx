import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { WritingPost } from "@/lib/site-data";

type WritingRowProps = {
	post: WritingPost;
};

export function WritingRow({ post }: WritingRowProps) {
	return (
		<Link
			href={`/writing/${post.slug}`}
			className="group grid gap-4 border-b border-line py-5 transition-colors duration-200 hover:bg-surface-muted/50 md:grid-cols-[8rem_minmax(0,1fr)_1.5rem] md:gap-7"
		>
			<div className="text-sm leading-6 text-ink-soft">
				<p className="tabular-nums">{post.date}</p>
				<p className="text-accent-strong">{post.category}</p>
			</div>
			<div>
				<div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
					<h3 className="font-sans text-[1.18rem] font-medium leading-tight text-ink md:text-[1.25rem]">
						{post.title}
					</h3>
					<span className="text-sm text-ink-muted">{post.readTime}</span>
				</div>
				<p className="mt-3 max-w-[35rem] text-sm leading-6 text-ink-soft text-pretty">
					{post.description}
				</p>
			</div>
			<FiArrowRight
				aria-hidden="true"
				className="mt-1 h-4 w-4 text-ink-soft transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-accent-strong"
			/>
		</Link>
	);
}
