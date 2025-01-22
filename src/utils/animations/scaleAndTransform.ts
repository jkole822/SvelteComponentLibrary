import { quadInOut } from "svelte/easing";

export const scaleAndTransform = (
	node: any,
	{
		duration,
		easingFn,
		transform
	}: {
		duration: number;
		easingFn?: (value: number) => number;
		transform: string;
	}
) => {
	return {
		duration,
		css: (time: number) => {
			const easing = easingFn ? easingFn(time) : quadInOut(time);

			return `
                    transform: scale(${easing}) ${transform};
                    opacity: ${easing};
                `;
		}
	};
};
