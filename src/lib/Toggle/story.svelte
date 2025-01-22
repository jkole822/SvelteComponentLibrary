<script lang="ts">
	// Components
	import Toggle from "./index.svelte";

	// Styles
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { onValueChange: _, value: __, ...rest }: Props = $props();

	// State
	let value = $state(false);
</script>

<Toggle {...rest} onValueChange={open => (value = open)} {value} />

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>{value ? "On" : "Off"}</p>
