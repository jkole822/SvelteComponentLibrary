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
			value = next?.value;
			return curr?.value.id !== next?.value.id ? next : undefined;
		};
</script>

<ComboBox {...rest} onSelectedChange={handleChange} />

<div class={SubHeadingStyles}>Binding Check</div>
<div class={PararaphStyles}>ID: {value?.id}</div>
<div class={PararaphStyles}>Title: {value?.title}</div>
