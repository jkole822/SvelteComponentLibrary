import type { HTMLAttributes } from "svelte/elements";

export enum AutoCompleteEnum {
	name = "name",
	email = "email",
	currentPassword = "current-password",
	newPassword = "new-password",
	off = "off",
	username = "username"
}

export type AutoCompleteType =
	| AutoCompleteEnum.name
	| AutoCompleteEnum.email
	| AutoCompleteEnum.currentPassword
	| AutoCompleteEnum.newPassword
	| AutoCompleteEnum.off
	| AutoCompleteEnum.username;

export enum InputTypeEnum {
	date = "date",
	email = "email",
	number = "number",
	password = "password",
	text = "text"
}

export type InputType =
	| InputTypeEnum.date
	| InputTypeEnum.email
	| InputTypeEnum.number
	| InputTypeEnum.password
	| InputTypeEnum.text;

export interface Props extends HTMLAttributes<HTMLInputElement> {
	autoComplete?: AutoCompleteType;
	className?: string;
	disabled?: boolean;
	inputType?: InputType;
	name: string;
	max?: number;
	min?: number;
	required?: boolean;
	value: Date | number | string;
}
