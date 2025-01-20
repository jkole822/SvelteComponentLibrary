import type { ComboBoxOption } from "../lib/ComboBox/types";
import type { ComboboxOptionProps } from "@melt-ui/svelte";

export const toComboBoxOption = (
	option: ComboBoxOption
): ComboboxOptionProps<ComboBoxOption> => ({
	value: option,
	label: option.label,
	disabled: option.disabled
});
