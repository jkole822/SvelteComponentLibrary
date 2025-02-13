import type { Action } from "svelte/action";
import type { Booleanish } from "svelte/elements";
import type { Snippet } from "svelte";

export enum ButtonVariantsEnum {
	fill = "fill",
	lineOne = "lineOne",
	lineTwo = "lineTwo",
	outline = "outline"
}

export type ButtonVariants =
	| ButtonVariantsEnum.fill
	| ButtonVariantsEnum.lineOne
	| ButtonVariantsEnum.lineTwo
	| ButtonVariantsEnum.outline;

export interface Props {
	action?: Action;
	ariaControls?: string;
	ariaExpanded?: boolean;
	ariaHasPopup?:
		| "dialog"
		| "menu"
		| Booleanish
		| "grid"
		| "listbox"
		| "tree"
		| null;
	ariaHidden?: boolean;
	ariaLabel?: string;
	children: Snippet;
	className?: string;
	disabled?: boolean;
	href?: string;
	id?: string;
	onclick?: () => void;
	tabIndex?: number;
	target?: "_blank" | "_self" | "_parent" | "_top" | "_unfencedTop";
	type?: "button" | "submit" | "reset";
	variant?: ButtonVariants;
}
