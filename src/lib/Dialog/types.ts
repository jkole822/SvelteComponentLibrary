import type { ButtonVariants } from "../Button/types";
import type { Snippet } from "svelte";

export interface Props {
	buttonClass?: string;
	buttonText: string;
	buttonVariant: ButtonVariants;
	cancelButtonText?: string
	className?: string;
	description?: string;
	dialogContent: Snippet;
	id: number | string;
	onsubmit?: () => void;
	submitButtonText?: string;
	title?: string;
}
