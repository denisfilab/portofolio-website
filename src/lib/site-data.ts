import type { IconType } from "react-icons";
import { FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export type WorkItem = {
	id: string;
	title: string;
	period: string;
	role: string;
	description: string;
	stack: string[];
	href?: string;
};

export type WritingPost = {
	slug: string;
	title: string;
	date: string;
	category: string;
	readTime: string;
	description: string;
	heroGraphic?: {
		variant: "auth" | "wall";
	};
	blocks?: WritingBlock[];
	paragraphs?: string[];
};

export type WritingImage = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	display?: "standard" | "wide";
};

export type WritingBlock =
	| {
			type: "paragraph";
			text: string;
	  }
	| {
			type: "image";
			image: WritingImage;
	  };

export type SocialLink = {
	label: string;
	href: string;
	icon: IconType;
};

export const navigationLinks = [
	{ label: "Work", href: "/#work" },
	{ label: "Writing", href: "/writing" },
	{ label: "About", href: "/#about" },
	{ label: "Contact", href: "/#contact" },
];

export const workItems: WorkItem[] = [
	{
		id: "01",
		title: "Pikira.id Product Engineering",
		period: "2026",
		role: "Product Engineer",
		description:
			"I am very excited to be working on this school-focused assessment platform, now ongoing with three schools in private beta. I build features for assessment generation, quiz workflows, grading support, Google Classroom integration, and submission data.",
		stack: ["React", "TypeScript", "Cloudflare Workers", "Google Classroom API"],
	},
	{
		id: "02",
		title: "LogoBolt.io",
		period: "2025",
		role: "Full-Stack Engineer",
		description:
			"Full-stack logo generation and editing platform with authentication, payments, credit usage, generated asset storage, and image processing workflows.",
		stack: ["Next.js", "Tailwind CSS", "Stripe", "OpenAI API"],
		href: "https://logobolt.io",
	},
	{
		id: "03",
		title: "Startup Data Science Internship",
		period: "2025",
		role: "Data Scientist Intern",
		description:
			"NDA-limited startup work across medical imaging, computer vision, and LLM automation. I helped explore model workflows and practical automation patterns under real product constraints.",
		stack: ["Python", "Computer Vision", "Medical Imaging", "LLM Automation"],
	},
	{
		id: "04",
		title: "Survey ETL Workflow",
		period: "2025",
		role: "Software Engineer",
		description:
			"Export workflow for LimeSurvey responses, question-response mapping, construct grouping, and Excel-ready datasets for research collaborators.",
		stack: ["Python", "SQL", "Excel", "ETL"],
	},
];

export const writingPosts: WritingPost[] = [
	{
		slug: "small-sso-flow-college-microservices-project",
		title: "Building a Small SSO Flow for a College Microservices Project",
		date: "Jun 08, 2026",
		category: "Engineering",
		readTime: "5 min read",
		description:
			"How we centralized authentication across separate college project modules and made the handoff safer for the team.",
		heroGraphic: {
			variant: "auth",
		},
		blocks: [
			{
				type: "paragraph",
				text: "For one of my college projects, my team built a travel-related application split across five separate modules: flight, hotel, payment, travel, and a few supporting features. Each person owned one module, and I led the team while owning the flight module.",
			},
			{
				type: "paragraph",
				text: "At first, the architecture looked simple. Everyone could just build their own pages, their own flows, and their own module-specific logic. But authentication quickly became the part that forced us to think more seriously about system boundaries.",
			},
			{
				type: "paragraph",
				text: "The question was: if our app is split into multiple independently developed modules, where should login live?",
			},
			{
				type: "paragraph",
				text: "One option was to let every module implement its own login flow. That would make each module easier to develop in isolation, but it would also duplicate logic across the team. Every module would need to understand users, tokens, sessions, and auth state. For a project meant to simulate microservices, that felt wrong.",
			},
			{
				type: "paragraph",
				text: "So we chose a different approach: one module would own authentication.",
			},
			{
				type: "paragraph",
				text: "In our case, the flight module became the identity provider. The user table lived there. Login happened there. Other modules did not need to know how authentication worked internally. They only needed a way to request and receive a valid token.",
			},
			{
				type: "paragraph",
				text: "That decision made the system cleaner, but it introduced a new problem: how do we transfer authentication state from one frontend to another?",
			},
			{
				type: "paragraph",
				text: "Because each module was served from its own frontend, we could not simply share localStorage directly. Browser storage is scoped by origin, which is good for security, but it also means one module cannot casually read another module's token. We needed a controlled handoff.",
			},
			{
				type: "paragraph",
				text: "The flow we built was inspired by how SSO-like systems work.",
			},
			{
				type: "paragraph",
				text: "When a user clicks \"Login\" from another module, that module opens a small popup window pointing to the flight module's SSO page. The popup checks whether the user is already logged in on the flight side. If the user is authenticated, the flight module sends back a payload containing the token and username to the original window.",
			},
			{
				type: "paragraph",
				text: "The receiving module listens for that message, validates where it came from, and then stores the token in its own local storage.",
			},
			{
				type: "paragraph",
				text: "The important detail here is origin validation.",
			},
			{
				type: "paragraph",
				text: "Without checking the sender's origin, any random website could try to send a fake authentication payload. So the receiving module compares event.origin against the expected provider origin before accepting the message. If the message does not come from the trusted flight module, we ignore it.",
			},
			{
				type: "paragraph",
				text: "That small check changes the flow from \"just send a token between windows\" into a more intentional trust boundary.",
			},
			{
				type: "image",
				image: {
					src: "/images/centralized-authentication.png",
					alt: "A centralized authentication diagram showing the flight module as the identity provider for hotel, payment, travel, and other modules.",
					width: 1448,
					height: 1086,
					display: "wide",
				},
			},
			{
				type: "paragraph",
				text: "The implementation looked roughly like this: each teammate added a login button to their module, called a shared openSSOPopup() helper, and waited for the SSO response. I pushed the helper file to the team branch so everyone could integrate auth without needing to understand the entire flight module.",
			},
			{
				type: "paragraph",
				text: "This was one of the parts I enjoyed most as a team lead. The technical problem was not only building the auth flow for myself. It was designing an integration path that my teammates could actually use.",
			},
			{
				type: "paragraph",
				text: "The helper had to hide enough complexity to be convenient, but still expose the important behavior: open the popup, listen for the response, validate the origin, handle popup blocking, detect if the user manually closes the window, and clean up event listeners afterward.",
			},
			{
				type: "paragraph",
				text: "In other words, the hard part was not the login button. The hard part was making centralized authentication feel simple from the outside.",
			},
			{
				type: "paragraph",
				text: "There were also tradeoffs.",
			},
			{
				type: "paragraph",
				text: "For this project, we stored the received token in localStorage because it was easy to integrate across modules and good enough for the scope of the assignment. But this is not something I would blindly treat as production-grade security. If a frontend has an XSS vulnerability, tokens in localStorage can still be exposed.",
			},
			{
				type: "paragraph",
				text: "A stronger production version would likely use short-lived tokens, stricter trusted-origin allowlists, state or nonce validation, HTTPS-only deployment, and possibly HttpOnly cookies or a more formal OAuth-style authorization flow.",
			},
			{
				type: "paragraph",
				text: "But as a college project, this was a valuable engineering exercise because it forced us to think beyond \"does the page work?\" and into \"where does trust live?\"",
			},
			{
				type: "paragraph",
				text: "We started with five people building five separate modules. We ended up needing a shared identity boundary, a token handoff mechanism, and a safer integration pattern for the whole team.",
			},
			{
				type: "paragraph",
				text: "That is what made the project interesting to me.",
			},
		],
	},
	{
		slug: "spring-2026-learning-log",
		title: "What I'm Learning: Spring 2026",
		date: "Apr 18, 2026",
		category: "Learning Log",
		readTime: "4 min read",
		description:
			"Notes from classes, papers, and side projects this semester.",
		paragraphs: [
			"This semester has been a useful reminder that learning is easier to keep when it has somewhere to go. Projects give the theory edges. Writing gives the project a memory.",
			"I have been paying more attention to product constraints: who actually uses the system, which data they trust, and where a clean abstraction becomes a way to hide important details.",
			"The through line is still the same: build useful things, learn in public, and ship enough real work to make the next question sharper.",
		],
	},
	{
		slug: "the-other-side-of-a-wall",
		title:
			"Everything I want in life is probably sitting on the other side of a wall.",
		date: "Apr 01, 2026",
		category: "Reflection",
		readTime: "1 min read",
		description:
			"A short note on the spotlight effect, embarrassment, and doing the thing anyway.",
		heroGraphic: {
			variant: "wall",
		},
		blocks: [
			{
				type: "paragraph",
				text: "Everything I want in life is probably sitting on the other side of a wall.",
			},
			{
				type: "image",
				image: {
					src: "/images/one-day-worried.jpeg",
					alt: "A person walking across a field with the words one day, you'll look back and wonder why you ever worried.",
					width: 1017,
					height: 1126,
					display: "standard",
				},
			},
			{
				type: "paragraph",
				text: "Not a giant wall. Not some impossible, dramatic obstacle. Just a wall made of humility, embarrassment, and fear.",
			},
			{
				type: "paragraph",
				text: "I used to be scared of doing simple things alone. Going to a cafe alone felt weird. Watching a movie alone felt sad for some reason. Even asking a question in a public setting could feel like a whole mental battle. Before doing anything, I would think too much about how people might see me.",
			},
			{ type: "paragraph", text: "\"What if I look awkward?\"" },
			{ type: "paragraph", text: "\"What if people think I'm weird?\"" },
			{ type: "paragraph", text: "\"What if I embarrass myself?\"" },
			{
				type: "paragraph",
				text: "And because of that, I would stop myself from doing things I actually wanted to do.",
			},
			{
				type: "paragraph",
				text: "But the more I grow, the more I realize: it's really not that deep.",
			},
			{
				type: "paragraph",
				text: "Most people are not paying attention to me as much as I think they are. There is this psychological phenomenon called the spotlight effect. It basically says that we tend to overestimate how much other people notice us. We think we are under a spotlight, like everyone is watching every small mistake, every awkward move, every sentence we say wrong.",
			},
			{
				type: "paragraph",
				text: "But in reality, everyone is busy thinking about themselves.",
			},
			{
				type: "paragraph",
				text: "They are thinking about how they look. What they said earlier. What they need to do next. Whether they are being judged too. Everyone is carrying their own little world in their head.",
			},
			{ type: "paragraph", text: "And honestly, that thought is freeing." },
			{
				type: "paragraph",
				text: "It means I can go to that cafe alone. I can watch a movie by myself. I can ask the \"stupid\" question in a meeting. I can introduce myself to someone I admire. I can post something before it feels perfect. I can try something new, be bad at it, and still survive.",
			},
			{
				type: "paragraph",
				text: "A lot of life opens up when I stop treating embarrassment like it is the end of the world.",
			},
			{ type: "paragraph", text: "Because it is not." },
			{
				type: "paragraph",
				text: "Being seen trying is not shameful. Starting small is not embarrassing. Not knowing everything is not a weakness. Sometimes, humility is the price I have to pay to grow. Sometimes, the only way to get better is to accept that I might look a little awkward in the beginning.",
			},
			{ type: "paragraph", text: "And that is fine." },
			{
				type: "paragraph",
				text: "I do not want to keep living like every small decision is a courtroom and every stranger is part of the jury. I do not want fear to make my life smaller than it needs to be.",
			},
			{ type: "paragraph", text: "So I am trying to remind myself:" },
			{ type: "paragraph", text: "Do the thing." },
			{ type: "paragraph", text: "Go alone." },
			{ type: "paragraph", text: "Ask the question." },
			{ type: "paragraph", text: "Start before it is perfect." },
		],
	},
];

export const socialLinks: SocialLink[] = [
	{
		label: "GitHub",
		href: "https://github.com/denisfilab",
		icon: FiGithub,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/denisrahman",
		icon: FiLinkedin,
	},
	{
		label: "Email",
		href: "mailto:danisrahman3105@gmail.com",
		icon: FiMail,
	},
	{
		label: "CV",
		href: "/Daanish-Rahman-CV.pdf",
		icon: FiFileText,
	},
];
