<script lang="ts">
	// Components
	import Checkbox from "./index.svelte";

	// Styles
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";

	// Props
	let props: Props = $props();

	// State
	let value = $state("");
</script>

<Checkbox {...props} onValueChange={input => (value = input)} {value} />

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>{value}</p>
