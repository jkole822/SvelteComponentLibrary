import type { CreatePinInputProps } from "@melt-ui/svelte";

export enum PinInputTypeEnum {
	Text = "text",
	Password = "password"
}

export type PinInputType = PinInputTypeEnum.Text | PinInputTypeEnum.Password;

export interface Props {
	disabled?: boolean;
    length: number;
	name?: string;
	onValueChange?: CreatePinInputProps["onValueChange"];
	type?: PinInputType;
}
