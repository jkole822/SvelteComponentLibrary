import type { Snippet } from "svelte";

export interface Props {
	children: Snippet;
	className?: string;
	text: string;
}
