import { quadInOut } from "svelte/easing";

export const flyAndScale = (
	node: any,
	{ duration, transform }: { duration: number; transform: string }
) => {
	return {
		duration,
		css: (time: number) => {
			const easing = quadInOut(time);

			return `
                    transform: scale(${easing}) ${transform};
                    opacity: ${easing};
                `;
		}
	};
};
