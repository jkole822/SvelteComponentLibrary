export enum RadioGroupOrientationEnum {
	Vertical = "vertical",
	Horizontal = "horizontal"
}

export type RadioGroupOrientation =
	| RadioGroupOrientationEnum.Horizontal
	| RadioGroupOrientationEnum.Vertical;

export interface Props {
	className?: string;
	loop?: boolean;
	name?: string;
	onValueChange?: (active: string) => void;
	options: string[];
	orientation?: RadioGroupOrientation;
	required?: boolean;
	selectWhenFocused?: boolean;
	value?: string;
}
