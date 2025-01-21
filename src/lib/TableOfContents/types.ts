import type { Heading, PushStateFn } from "@melt-ui/svelte";
import type { Snippet } from "svelte";

export enum ActiveTypeEnum {
	All = "all",
	AllParents = "all-parents",
	Lowest = "lowest",
	Highest = "highest",
	LowestParents = "lowest-parents",
	HighestParents = "highest-parents",
	None = "none"
}

export type ActiveType =
	| ActiveTypeEnum.All
	| ActiveTypeEnum.AllParents
	| ActiveTypeEnum.Lowest
	| ActiveTypeEnum.Highest
	| ActiveTypeEnum.LowestParents
	| ActiveTypeEnum.HighestParents
	| ActiveTypeEnum.None;

export interface Props {
	activeType?: ActiveType;
	children: Snippet;
	className?: string;
	containerId: string;
	contentClass?: string;
	exclude?: Heading[];
	popoverTriggerId: string;
	pushStateFn?: PushStateFn;
	treeClass?: string;
}
