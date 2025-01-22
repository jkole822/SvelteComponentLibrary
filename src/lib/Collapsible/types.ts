import type { Snippet } from "svelte";

export interface Props {
	buttonContent: Snippet;
	children: Snippet;
	className?: string;
	disabled?: boolean;
	onOpenChange?: (value: boolean) => void;
	open?: boolean;
}
