import { quadInOut } from "svelte/easing";

export const flyAndScale = (node, { duration, transform }) => {
	return {
		duration,
		css: time => {
			const easing = quadInOut(time);

			return `
                    transform: scale(${easing}) ${transform};
                    opacity: ${easing};
                `;
		}
	};
};
