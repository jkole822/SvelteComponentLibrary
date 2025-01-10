<script lang="ts">
	// Components
	import Checkbox from "./index.svelte";

	// Types
	import type { Props } from "./types";

	// Props
	let { checked, ...rest }: Props = $props();

	// State
	let checkedState = $state(false);

	// Effects
	$effect(() => {
        checkedState = checked;
    });
</script>

<Checkbox {...rest} bind:checked={checkedState} />

<div class="font-bold mb-1 mt-4 text-orange-400 tracking-wide uppercase">
	Binding Check
</div>
<div class="text-stone-200">{checkedState ? "Checked" : "Not Checked"}</div>
