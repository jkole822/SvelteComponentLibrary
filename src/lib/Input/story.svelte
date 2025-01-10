<script lang="ts">
	// Components
	import Input from "./index.svelte";

	// Types
	import type { Props } from "./types";

	// Props
	let { value, ...rest }: Props = $props();

	// State
	let valueState = $state("");

	// Effects
	$effect(() => {
		valueState = value;
	});
</script>

<Input {...rest} bind:value={valueState} />

<div class="font-bold mb-1 mt-4 text-orange-400 tracking-wide uppercase">
	Binding Check
</div>
<div class="text-stone-200">{valueState}</div>
