import type { CreateSelectProps } from "@melt-ui/svelte";

export interface SelectOption {
	disabled?: boolean;
	label: string;
	value: string;
}

export interface SelectGroupOption {
	label: string;
	values: SelectOption[];
}

export interface Props {
	ariaLabel?: string;
	className?: string;
	defaultSelected?: CreateSelectProps<SelectOption>["defaultSelected"];
	disabled?: boolean;
	groupOptions?: SelectGroupOption[];
	label?: string;
	onSelectedChange?: CreateSelectProps<SelectOption>["onSelectedChange"];
	options: SelectOption[];
	placeholder: string;
	required?: boolean;
}
