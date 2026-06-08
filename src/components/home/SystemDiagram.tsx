import Image from "next/image";

export function SystemDiagram() {
	return (
		<div className="h-[10.25rem] overflow-hidden rounded-[var(--radius-panel)] bg-dark shadow-[0_24px_90px_rgba(20,22,21,0.18)] image-outline md:h-[12rem]">
			<Image
				src="/images/systems-diagram-banner.png"
				alt="Abstract systems diagram connecting data pipelines, product systems, and applied AI."
				width={1600}
				height={360}
				priority
				className="h-full w-full object-cover object-center"
			/>
		</div>
	);
}
