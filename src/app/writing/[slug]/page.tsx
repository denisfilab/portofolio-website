import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import type { WritingBlock, WritingImage } from "@/lib/site-data";
import { writingPosts } from "@/lib/site-data";

type WritingPostPageProps = {
	params: {
		slug: string;
	};
};

export function generateStaticParams() {
	return writingPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: WritingPostPageProps) {
	const post = writingPosts.find((item) => item.slug === params.slug);

	if (!post) {
		return {
			title: "Writing | Daanish Rahman",
		};
	}

	return {
		title: `${post.title} | Daanish Rahman`,
		description: post.description,
	};
}

export default function WritingPostPage({ params }: WritingPostPageProps) {
	const post = writingPosts.find((item) => item.slug === params.slug);

	if (!post) {
		notFound();
	}

	const blocks =
		post.blocks ??
		(post.paragraphs ?? []).map<WritingBlock>((paragraph) => ({
			type: "paragraph",
			text: paragraph,
		}));
	const heroGraphic = post.heroGraphic;

	return (
		<>
			<SiteHeader />
			<main className="site-container pt-12">
				<article>
					<div className="text-sm leading-6 text-ink-soft">
						<span className="tabular-nums">{post.date}</span>
						<span className="mx-3 text-line-strong">/</span>
						<span className="text-accent-strong">{post.category}</span>
						<span className="mx-3 text-line-strong">/</span>
						<span>{post.readTime}</span>
					</div>

					<div
						className={
							heroGraphic
								? "mt-8 grid items-center gap-8 md:grid-cols-[14rem_minmax(0,1fr)] lg:grid-cols-[16rem_minmax(0,1fr)]"
								: "mt-5 max-w-[58rem]"
						}
					>
						{heroGraphic ? (
							<ArticleHeroGraphic variant={heroGraphic.variant} />
						) : null}
						<h1 className="text-balance font-sans text-[3.2rem] font-medium leading-[1.03] text-ink md:text-[4rem] lg:text-[4.35rem]">
							{post.title}
						</h1>
					</div>

					<div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-14">
						<p className="text-base leading-7 text-ink-soft tabular-nums">
							Published {post.date}
						</p>
						<p className="max-w-[50rem] text-2xl leading-10 text-ink-soft text-pretty md:text-[2rem]">
							{post.description}
						</p>
					</div>

					<div className="mx-auto mt-20 max-w-[43rem] space-y-7 text-[1.08rem] leading-8 text-ink-soft text-pretty">
						{blocks.map((block, index) => (
							<ArticleBlockRenderer
								block={block}
								index={index}
								key={`${block.type}-${index}`}
							/>
						))}
					</div>
				</article>
				<div className="mx-auto mt-10 max-w-[43rem]">
					<ButtonLink href="/writing" variant="text">
						Back to writing
					</ButtonLink>
				</div>
			</main>
			<SiteFooter />
		</>
	);
}

function ArticleBlockRenderer({
	block,
	index,
}: {
	block: WritingBlock;
	index: number;
}) {
	if (block.type === "image") {
		return <ArticleContentImage image={block.image} priority={index < 2} />;
	}

	return <p>{block.text}</p>;
}

function ArticleHeroGraphic({ variant }: { variant: "auth" | "wall" }) {
	if (variant === "auth") {
		return (
			<figure
				aria-label="auth article graphic"
				className="aspect-square w-full max-w-[16rem] rounded-[var(--radius-panel)] bg-[#eef2ef] p-2 image-outline"
			>
				<div className="grid h-full grid-cols-3 grid-rows-3 gap-2">
					<div className="relative col-span-2 row-span-2 rounded-[6px] bg-ink p-3">
						<span className="absolute left-4 top-4 h-9 w-9 rounded-full border-[7px] border-page" />
						<span className="absolute bottom-5 left-5 h-10 w-16 rounded-[6px] border-[7px] border-page" />
						<span className="absolute bottom-[3.1rem] left-1/2 h-7 w-11 -translate-x-1/2 rounded-t-full border-[7px] border-b-0 border-page" />
						<span className="absolute right-4 top-5 h-3 w-12 rounded-full bg-[#d66a45]" />
						<span className="absolute right-4 top-10 h-3 w-8 rounded-full bg-page" />
					</div>
					<div className="rounded-[6px] bg-[#d9a846] p-3">
						<div className="grid h-full grid-cols-2 gap-1">
							<span className="rounded-sm bg-page" />
							<span className="rounded-sm bg-page" />
							<span className="rounded-sm bg-page" />
							<span className="rounded-sm bg-page" />
						</div>
					</div>
					<div className="relative rounded-[6px] bg-ink">
						<span className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-page" />
						<span className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#78895f]" />
						<span className="absolute left-5 right-5 top-1/2 h-[7px] -translate-y-1/2 bg-page" />
					</div>
					<div className="rounded-[6px] bg-ink p-2">
						<div className="grid h-full grid-cols-3 gap-1">
							{Array.from({ length: 9 }).map((_, dotIndex) => (
								<span key={dotIndex} className="rounded-full bg-page" />
							))}
						</div>
					</div>
					<div className="relative rounded-[6px] bg-[#78895f]">
						<span className="absolute inset-x-5 top-1/2 border-t-[7px] border-dashed border-page" />
						<span className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-45 border-r-[7px] border-t-[7px] border-page" />
					</div>
					<div className="rounded-[6px] bg-ink p-2">
						<div className="grid h-full grid-cols-2 gap-1">
							<span className="rounded-sm bg-page" />
							<span className="rounded-sm bg-page" />
							<span className="rounded-sm bg-page" />
							<span className="rounded-sm bg-page" />
						</div>
					</div>
					<div className="rounded-[6px] bg-ink" />
				</div>
			</figure>
		);
	}

	return (
		<figure
			aria-label={`${variant} article graphic`}
			className="aspect-square w-full max-w-[16rem] rounded-[var(--radius-panel)] bg-[#eef2ef] p-2 image-outline"
		>
			<div className="grid h-full grid-cols-3 grid-rows-3 gap-2">
				<div className="relative row-span-2 overflow-hidden rounded-[6px] bg-ink">
					<div className="h-full w-full bg-[repeating-linear-gradient(135deg,#171717_0,#171717_8px,#eef2ef_8px,#eef2ef_15px)]" />
				</div>
				<div className="rounded-[6px] bg-ink p-2">
					<div className="grid h-full grid-cols-2 gap-1">
						<span className="bg-page" />
						<span className="bg-page" />
						<span className="bg-page" />
						<span className="bg-page" />
					</div>
				</div>
				<div className="relative rounded-[6px] bg-ink">
					<span className="absolute left-1/2 top-2 h-[70%] w-[70%] -translate-x-1/2 rounded-t-full border-[7px] border-b-0 border-page" />
					<span className="absolute bottom-2 left-1/2 h-[55%] w-[7px] -translate-x-1/2 bg-page" />
				</div>
				<div className="relative rounded-[6px] bg-ink">
					<span className="absolute left-2 top-2 h-4 w-4 rounded-full bg-page" />
					<span className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-page" />
					<span className="absolute left-[30%] top-1/2 h-[7px] w-[58%] -translate-y-1/2 -rotate-[24deg] bg-page" />
				</div>
				<div className="rounded-[6px] bg-[#78895f]" />
				<div className="rounded-[6px] bg-ink p-2">
					<div className="grid h-full grid-cols-3 gap-1">
						{Array.from({ length: 9 }).map((_, dotIndex) => (
							<span key={dotIndex} className="rounded-full bg-page" />
						))}
					</div>
				</div>
				<div className="relative rounded-[6px] bg-ink">
					<span className="absolute inset-3 rounded-[6px] border-[7px] border-page" />
				</div>
				<div className="relative rounded-[6px] bg-ink">
					<span className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-page" />
					<span className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#78895f]" />
					<span className="absolute left-5 right-5 top-1/2 h-[7px] -translate-y-1/2 bg-page" />
				</div>
			</div>
		</figure>
	);
}

function ArticleContentImage({
	image,
	priority = false,
}: {
	image: WritingImage;
	priority?: boolean;
}) {
	const shouldRenderImage = imageExists(image);

	if (!shouldRenderImage) {
		return null;
	}

	const isWide = image.display === "wide";

	return (
		<figure
			className={`mx-auto w-full py-4 ${isWide ? "max-w-[43rem]" : "max-w-[32rem]"}`}
		>
			<Image
				src={image.src}
				alt={image.alt}
				width={image.width ?? 900}
				height={image.height ?? 900}
				className="h-auto w-full rounded-[var(--radius-panel)] object-cover image-outline"
				priority={priority}
				sizes={
					isWide
						? "(min-width: 768px) 43rem, calc(100vw - 32px)"
						: "(min-width: 768px) 32rem, calc(100vw - 32px)"
				}
			/>
		</figure>
	);
}

function imageExists(image?: WritingImage) {
	if (!image) {
		return false;
	}

	if (!image.src.startsWith("/")) {
		return true;
	}

	return existsSync(
		path.join(process.cwd(), "public", image.src.replace(/^\//, "")),
	);
}
