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

<div class={SubHeadingStyles}>Binding Check</div>
<div class={PararaphStyles}>{checkedState ? "Checked" : "Not Checked"}</div>
