<script lang="ts">
	// Components
	import Select from "./index.svelte";

	// Story
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { SelectOption, Props } from "./types";
	import type { CreateSelectProps } from "@melt-ui/svelte";

	// Props
	let { onSelectedChange: _, ...rest }: Props = $props();

	// State
	let value: SelectOption | undefined = $state();

	const handleChange: CreateSelectProps<SelectOption>["onSelectedChange"] = ({
		curr,
		next
	}) => {
		const isDeselectedValue = curr?.value.value === next?.value.value;
		value = isDeselectedValue ? undefined : next?.value;
		return isDeselectedValue ? undefined : next;
	};
</script>

<Select {...rest} onSelectedChange={handleChange} />

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>Label: {value?.label}</p>
<p class={PararaphStyles}>Value: {value?.value}</p>
