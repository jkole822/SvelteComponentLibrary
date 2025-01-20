<script lang="ts">
	// Components
	import ComboBox from "./index.svelte";

	// Story
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { ComboBoxOption, Props } from "./types";
	import type { CreateComboboxProps } from "@melt-ui/svelte";

	// Props
	let { onSelectedChange: _, ...rest }: Props = $props();

	// State
	let value: ComboBoxOption | undefined = $state();

	const handleChange: CreateComboboxProps<ComboBoxOption>["onSelectedChange"] =
		({ curr, next }) => {
			const isDeselectedValue = curr?.value.value === next?.value.value;
			value = isDeselectedValue ? undefined : next?.value;
			return isDeselectedValue ? undefined : next;
		};
</script>

<ComboBox {...rest} onSelectedChange={handleChange} />

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>Label: {value?.label}</p>
<p class={PararaphStyles}>Value: {value?.value}</p>
