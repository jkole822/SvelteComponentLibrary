import type { CreateComboboxProps } from "@melt-ui/svelte";

export interface ComboBoxOption {
	disabled?: boolean
	id?: number | string;
	label?: string;
	title?: string;
	value?: string | number;
}

export interface Props {
	className?: string;
	defaultSelected?: CreateComboboxProps<string>["defaultSelected"];
	label: string;
	onSelectedChange?: CreateComboboxProps<string>["onSelectedChange"];
	options: ComboBoxOption[];
	placeholder: string;
}
