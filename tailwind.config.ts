import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/app/**/*.{ts,tsx}",
		"./src/components/**/*.{ts,tsx}",
		"./src/lib/**/*.{ts,tsx}",
		"./src/modules/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				page: "var(--color-page)",
				"page-soft": "var(--color-page-soft)",
				surface: "var(--color-surface)",
				"surface-muted": "var(--color-surface-muted)",
				ink: "var(--color-ink)",
				"ink-soft": "var(--color-ink-soft)",
				"ink-muted": "var(--color-ink-muted)",
				line: "var(--color-line)",
				"line-strong": "var(--color-line-strong)",
				accent: "var(--color-accent)",
				"accent-strong": "var(--color-accent-strong)",
				dark: "var(--color-dark)",
				"dark-soft": "var(--color-dark-soft)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			screens: {
				xxs: "376px",
				xs: "475px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
		},
	},
	plugins: [],
};
export default config;
