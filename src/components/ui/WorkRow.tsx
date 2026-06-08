import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { WorkItem } from "@/lib/site-data";

type WorkRowProps = {
	item: WorkItem;
	compact?: boolean;
};

export function WorkRow({ item, compact = false }: WorkRowProps) {
	if (compact) {
		const compactRow = (
			<div className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 border-b border-line py-4 transition-colors duration-200 md:grid-cols-[2.75rem_minmax(0,1fr)_minmax(8rem,0.62fr)]">
				<span className="text-sm text-accent tabular-nums">{item.id}</span>
				<div>
					<div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
						<h3 className="font-sans text-[1.18rem] font-medium leading-tight text-ink md:text-[1.25rem]">
							{item.title}
						</h3>
						<span className="text-sm text-ink-soft tabular-nums">{item.period}</span>
						<span className="text-sm text-ink-soft">{item.role}</span>
					</div>
					<p className="mt-3 max-w-[34rem] text-sm leading-6 text-ink-soft text-pretty">
						{item.description.split(". ")[0]}.
					</p>
				</div>
				<div className="col-start-2 flex items-start justify-between gap-4 text-sm leading-6 text-ink-soft md:col-start-auto">
					<span>{item.stack.slice(0, 3).join(" / ")}</span>
					{item.href ? (
						<FiArrowRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
					) : null}
				</div>
			</div>
		);

		if (!item.href) {
			return compactRow;
		}

		return (
			<Link
				href={item.href}
				target="_blank"
				rel="noopener noreferrer"
				className="group block hover:bg-surface-muted/50"
			>
				{compactRow}
			</Link>
		);
	}

	const row = (
		<div className="grid gap-4 border-b border-line py-5 transition-colors duration-200 md:grid-cols-[3rem_minmax(0,1.8fr)_5rem_minmax(8rem,0.75fr)_minmax(10rem,0.9fr)] md:gap-7">
			<span className="text-sm text-accent tabular-nums">{item.id}</span>
			<div>
				<h3 className="font-sans text-[1.18rem] font-medium leading-tight text-ink md:text-[1.25rem]">
					{item.title}
				</h3>
				<p className="mt-3 max-w-[35rem] text-sm leading-6 text-ink-soft text-pretty">
					{item.description}
				</p>
			</div>
			<span className="text-sm text-ink-soft tabular-nums">{item.period}</span>
			<span className="text-sm text-ink-soft">{item.role}</span>
			<div className="flex items-start justify-between gap-4 text-sm leading-6 text-ink-soft md:justify-start">
				<span>{item.stack.join(" / ")}</span>
				{item.href ? <FiArrowRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" /> : null}
			</div>
		</div>
	);

	if (!item.href) {
		return row;
	}

	return (
		<Link
			href={item.href}
			target="_blank"
			rel="noopener noreferrer"
			className="group block hover:bg-surface-muted/50"
		>
			{row}
		</Link>
	);
}
