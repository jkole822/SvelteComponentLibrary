<script lang="ts">
	// Components
	import Accordion from "./index.svelte";

	// Styles
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";
	import type { SvelteSet } from "svelte/reactivity";

	// Props
	let { onValueChange: _, value: __, ...rest }: Props = $props();

	// State
	let value = $state<string | SvelteSet<string> | undefined>("item-1");

	// Helpers
	const handleChange = (
		valueUpdate: string | SvelteSet<string> | undefined
	) => {
		value = valueUpdate;
	};
</script>

<Accordion {...rest} onValueChange={handleChange} {value} />

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>Active Item: {value}</p>
