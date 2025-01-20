<script lang="ts">
	// Components
	import Input from "./index.svelte";

	// Story
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { value, ...rest }: Props = $props();

	// State
	let valueState: number | string | string[] = $state("");

	// Effects
	$effect(() => {
		valueState = value;
	});
</script>

<Input {...rest} bind:value={valueState} />

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>{valueState}</p>
