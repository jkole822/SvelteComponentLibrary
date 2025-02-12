import type { AccordionItem } from "melt/builders";
import type { HeadingLevels } from "../../types";
import type { NavigationMenuItem } from "../NavigationMenu/types";
import type { Snippet } from "svelte";
import type { SvelteSet } from "svelte/reactivity";

type Item = AccordionItem<{
	description: string;
	disabled?: boolean;
	id: string;
	isFirstItem: boolean;
	isLastItem: boolean;
	mobileAccordionNavigationContent?: (
		items: NavigationMenuItem[],
		isFirstItem: boolean,
		isLastItem: boolean
	) => ReturnType<Snippet>;
	mobileAccordionNavigationItems: NavigationMenuItem[];
	title: string;
}>;

export interface Props {
	className?: string;
	disabled?: boolean;
	headingLevel: HeadingLevels;
	items: Item[];
	multiple?: boolean;
	onValueChange?: (value: string | SvelteSet<string> | undefined) => void;
	value?: string | SvelteSet<string>;
}
