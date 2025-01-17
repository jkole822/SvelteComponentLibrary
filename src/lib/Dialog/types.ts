import type { Snippet } from "svelte";

export interface Props {
	cancelButtonText?: string;
	className?: string;
	description?: string;
	dialogContent: Snippet;
	id: string;
	onsubmit?: () => void;
	open: boolean;
	submitButtonText?: string;
	title?: string;
	trigger?: Snippet;
}
