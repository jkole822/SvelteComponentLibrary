import type { CreateRadioGroupProps } from "@melt-ui/svelte";

export enum RadioGroupOrientationEnum {
	Vertical = "vertical",
	Horizontal = "horizontal"
}

export type RadioGroupOrientation =
	| RadioGroupOrientationEnum.Horizontal
	| RadioGroupOrientationEnum.Vertical;

export interface Props {
	ariaLabel: string;
	className?: string;
	defaultValue?: string;
	name: string;
	onValueChange?: CreateRadioGroupProps["onValueChange"];
	options: string[];
	orientation?: RadioGroupOrientation;
}
