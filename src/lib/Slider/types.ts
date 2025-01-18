import type { CreateSliderProps } from "@melt-ui/svelte";

export interface Props {
    className?: string;
    defaultValue: number[];
	id: string;
	label: string;
    max: number;
    min: number;
	onValueChange: CreateSliderProps["onValueChange"];
    step: number;
}
