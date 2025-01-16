import type { Snippet } from "svelte";

export interface Props {
	ariaLabel: string;
	buttonContent: Snippet;
	className?: string;
	disabled?: boolean;
	isIconButton?: boolean;
	popoverContent: Snippet;
}
