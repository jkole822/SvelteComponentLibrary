/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,svelte}"],
	theme: {
		extend: {
			colors: {
				neutral: {
					50: "rgb(var(--color-neutral-50))",
					100: "rgb(var(--color-neutral-100))",
					200: "rgb(var(--color-neutral-200))",
					300: "rgb(var(--color-neutral-300))",
					400: "rgb(var(--color-neutral-400))",
					500: "rgb(var(--color-neutral-500))",
					600: "rgb(var(--color-neutral-600))",
					700: "rgb(var(--color-neutral-700))",
					800: "rgb(var(--color-neutral-800))",
					900: "rgb(var(--color-neutral-900))",
					950: "rgb(var(--color-neutral-950))",
				},
				primary: {
					50: "rgb(var(--color-primary-50))",
					100: "rgb(var(--color-primary-100))",
					200: "rgb(var(--color-primary-200))",
					300: "rgb(var(--color-primary-300))",
					400: "rgb(var(--color-primary-400))",
					500: "rgb(var(--color-primary-500))",
					600: "rgb(var(--color-primary-600))",
					700: "rgb(var(--color-primary-700))",
					800: "rgb(var(--color-primary-800))",
					900: "rgb(var(--color-primary-900))",
					950: "rgb(var(--color-primary-950))",
				}
			},
			screens: {
				"2xs": "384px",
				xs: "512px"
			}
		}
	},
	plugins: []
};
