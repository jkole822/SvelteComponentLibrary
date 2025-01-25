import type { ComputePositionConfig } from "@floating-ui/dom";
import type { Snippet } from "svelte";

export interface Props {
	ariaLabel?: string;
	buttonContent: Snippet;
	className?: string;
	computePositionOptions?: Partial<ComputePositionConfig | undefined>;
	disabled?: boolean;
	forceVisible?: boolean;
	isIconButton?: boolean;
	onOpenChange: (value: boolean) => void;
	open: boolean;
	popoverContent: Snippet;
}
