import type {
	TableOfContentsElements,
	TableOfContentsItem
} from "@melt-ui/svelte";

export interface Props {
	activeHeadingIdxs: number[];
	item: TableOfContentsElements["item"];
	level?: number;
	tree?: TableOfContentsItem[];
}
