import type { Snippet } from "svelte";

export enum TabsOrientationEnum {
	Vertical = "vertical",
	Horizontal = "horizontal"
}

export type TabsOrientation =
	| TabsOrientationEnum.Horizontal
	| TabsOrientationEnum.Vertical;

export interface TabItem {
	children: Snippet;
	id: string;
	label: string;
}

export interface Props {
	className?: string;
	loop?: boolean;
	items: TabItem[];
	onValueChange?: (value: string) => void;
	orientation?: TabsOrientation;
	selectWhenFocused?: boolean;
	value?: string;
}
