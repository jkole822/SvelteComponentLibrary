import type { HeadingLevels } from "../../types";

export interface AccordionItem {
	id: string;
	description: string;
	disabled?: boolean;
	title: string;
}

export interface Props {
	className?: string;
	defaultValue: string;
	disabled?: boolean;
	forceVisible?: boolean;
	headingLevel: HeadingLevels;
	items: AccordionItem[];
	multiple?: boolean;
}
