<script lang="ts">
	// Components
	import Checkbox from "./index.svelte";

	// Styles
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

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

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>{checkedState ? "Checked" : "Not Checked"}</p>
