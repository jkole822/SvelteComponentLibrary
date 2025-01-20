import type { CreateComboboxProps } from "@melt-ui/svelte";

export interface ComboBoxOption {
	disabled?: boolean;
	label: string;
	value: string;
}

export interface Props {
	className?: string;
	defaultSelected?: CreateComboboxProps<ComboBoxOption>["defaultSelected"];
	disabled?: boolean;
	label: string;
	onSelectedChange?: CreateComboboxProps<ComboBoxOption>["onSelectedChange"];
	options: ComboBoxOption[];
	placeholder: string;
	required?: boolean;
}
