export interface Props {
    ariaLabel: string;
    className?: string;
	disabled?: boolean;
	onValueChange?: (value: boolean) => void;
    solidFaIconClass: string;
	value: boolean;
}
