type SectionTitleProps = {
	id?: string;
	title: string;
};

export function SectionTitle({ id, title }: SectionTitleProps) {
	return (
		<h2
			id={id}
			className="border-b border-line pb-2 font-sans text-[1.65rem] font-medium leading-none text-ink md:text-[1.9rem]"
		>
			{title}
		</h2>
	);
}
