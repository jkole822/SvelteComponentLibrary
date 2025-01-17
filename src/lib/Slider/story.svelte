<script lang="ts">
	// Components
	import Slider from "./index.svelte";

	// Types
	import type { Props } from "./types";

	// Props
	let { onValueChange, ...rest }: Props = $props();

	// State
	let value = $state([0]);

	// Helpers
	const handleValueState = (next: number[]) => {
		value = next;
		return next;
	};
</script>

<Slider
	{...rest}
	id="lorem"
	onValueChange={({ next }) => handleValueState(next)}
/>

<div class="font-bold mb-1 mt-4 text-orange-400 tracking-wide uppercase">
	Binding Check
</div>
<div class="text-stone-200">{value}</div>
