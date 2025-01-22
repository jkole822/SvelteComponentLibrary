export enum PinInputEnum {
	AlphaNum = "alphanumeric",
	Num = "numeric",
	Text = "text"
}

export type PinInputType =
	| PinInputEnum.AlphaNum
	| PinInputEnum.Num
	| PinInputEnum.Text;

export interface Props {
	className?: string;
	disabled?: boolean;
	mask?: boolean;
	maxLength: number;
	onValueChange?: (value: string) => void;
	placeholder?: string;
	value?: string;
	type?: PinInputType;
}
