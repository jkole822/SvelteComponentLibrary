import type { Snippet } from "svelte";

export interface Props {
	ariaLabel: string;
	buttonContent: Snippet;
	className?: string;
	id: number | string;
	popoverContent: Snippet;
}
