import type { CreateSliderProps } from "@melt-ui/svelte";

export interface Props {
    defaultValue: number[];
	id: number | string;
	label: string;
    max: number;
    min: number;
	onValueChange: CreateSliderProps["onValueChange"];
    step: number;
    useMultiValue?: boolean;
}
