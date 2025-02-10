import type { ComputePositionConfig } from "@floating-ui/dom";
import type { Snippet } from "svelte";

export interface Props {
	ariaLabel?: string;
	buttonContent: Snippet;
	children: Snippet;
	className?: string;
	contentClass?: string;
	contentStyles?: string;
	computePositionOptions?: Partial<ComputePositionConfig | undefined>;
	disabled?: boolean;
	forceVisible?: boolean;
	isIconButton?: boolean;
	onOpenChange: (value: boolean) => void;
	open: boolean;
}
