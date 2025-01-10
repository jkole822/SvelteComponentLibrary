import type { CreateDateRangePickerProps } from "@melt-ui/svelte";

export interface Props {
	className?: string;
	datePickerClassName?: string;
	localeClassName?: string;
	onValueChange?: CreateDateRangePickerProps["onValueChange"];
}
