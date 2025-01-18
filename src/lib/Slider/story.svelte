<script lang="ts">
	// Components
	import Slider from "./index.svelte";

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
	id="lorem"
	onValueChange={({ next }) => handleValueState(next)}
/>

<div class="font-bold mb-1 mt-4 text-orange-400 tracking-wide uppercase">
	Binding Check
</div>
<div class="text-stone-200">{value}</div>
