import type { CreatePaginationProps } from "@melt-ui/svelte";
import type { Snippet } from "svelte";

export interface Props {
	ariaLabel: string;
	className?: string;
	count: number;
	defaultPage: number;
	ellipsis?: Snippet;
	onPageChange?: CreatePaginationProps["onPageChange"];
	perPage: number;
	siblingCount: number;
}
