import type { SvelteSet } from "svelte/reactivity";

export enum SelectValidationStateEnum {
	Valid = "valid",
	Invalid = "invalid"
}

export type SelectValidationState =
	| SelectValidationStateEnum.Valid
	| SelectValidationStateEnum.Invalid;

export interface SelectItem {
	id: string;
	description?: string;
	disabled?: boolean;
	label: string;
}

export interface Props {
	ariaLabel?: string;
	className?: string;
	defaultValue?: string | SvelteSet<string>;
	description?: string;
	disabled?: boolean;
	errorMessage?: string;
	multiple?: boolean;
	name: string;
	onValueChange: (value: string | SvelteSet<string> | undefined) => void;
	options: SelectItem[];
	placeholder?: string;
	required?: boolean;
	triggerClass?: string;
	typeaheadTimeout?: number;
	validationState?: SelectValidationState;
	value?: string | SvelteSet<string>;
}
