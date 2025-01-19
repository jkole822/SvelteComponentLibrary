/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,svelte}"],
	theme: {
		extend: {
			screens: {
				"2xs": "384px",
				xs: "512px"
			}
		}
	},
	plugins: []
};
