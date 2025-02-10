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
					950: "rgb(var(--color-neutral-950))"
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
					950: "rgb(var(--color-primary-950))"
				}
			},
			screens: {
				"2xs": "384px",
				xs: "512px"
			}
		},
		keyframes: {
			navigationMenuEnterFromRight: {
				from: {
					opacity: 0,
					transform: "translateX(200px)"
				},
				to: {
					opacity: 1,
					transform: "translateX(0)"
				}
			},
			navigationMenuEnterFromLeft: {
				from: {
					opacity: 0,
					transform: "translateX(-200px)"
				},
				to: {
					opacity: 1,
					transform: "translateX(0)"
				}
			},
			navigationMenuExitToRight: {
				from: {
					opacity: 1,
					transform: "translateX(0)"
				},
				to: {
					opacity: 0,
					transform: "translateX(200px)"
				}
			},
			navigationMenuExitToLeft: {
				from: {
					opacity: 1,
					transform: "translateX(0)"
				},
				to: {
					opacity: 0,
					transform: "translateX(-200px)"
				}
			},
			navigationMenuEnterFromBottom: {
				from: {
					opacity: 0,
					transform: "translateY(200px)"
				},
				to: {
					opacity: 1,
					transform: "translateY(0)"
				}
			},
			navigationMenuEnterFromTop: {
				from: {
					opacity: 0,
					transform: "translateY(-200px)"
				},
				to: {
					opacity: 1,
					transform: "translateY(0)"
				}
			},
			navigationMenuExitToBottom: {
				from: {
					opacity: 1,
					transform: "translateY(0)"
				},
				to: {
					opacity: 0,
					transform: "translateY(200px)"
				}
			},
			navigationMenuExitToTop: {
				from: {
					opacity: 1,
					transform: "translateY(0)"
				},
				to: {
					opacity: 0,
					transform: "translateY(-200px)"
				}
			}
		},
		animation: {
			navigationMenuEnterFromRight:
				"navigationMenuEnterFromRight 300ms ease forwards",
			navigationMenuEnterFromLeft:
				"navigationMenuEnterFromLeft 300ms ease forwards",
			navigationMenuExitToRight:
				"navigationMenuExitToRight 300ms ease forwards",
			navigationMenuExitToLeft:
				"navigationMenuExitToLeft 300ms ease forwards",
			navigationMenuEnterFromBottom:
				"navigationMenuEnterFromBottom 300ms ease forwards",
			navigationMenuEnterFromTop:
				"navigationMenuEnterFromTop 300ms ease forwards",
			navigationMenuExitToBottom:
				"navigationMenuExitToBottom 300ms ease forwards",
			navigationMenuExitToTop:
				"navigationMenuExitToTop 300ms ease forwards"
		}
	},
	plugins: []
};
