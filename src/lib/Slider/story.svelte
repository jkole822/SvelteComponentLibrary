<script lang="ts">
	// Packages
	import { v4 as uuid } from "uuid";

	// Components
	import Slider from "./index.svelte";

	// Styles
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { defaultValue, onValueChange, ...rest }: Props = $props();

	// State
	let value = $state([0]);

	// Helpers
	const handleValueState = (next: number[]) => {
		value = next;
		return next;
	};

	// Effects
	$effect(() => {
		value = defaultValue;
	});
</script>

<Slider
	{...rest}
	{defaultValue}
	id={uuid()}
	onValueChange={({ next }) => handleValueState(next)}
/>

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>{value}</p>
