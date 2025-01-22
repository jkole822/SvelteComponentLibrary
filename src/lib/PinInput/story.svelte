<script lang="ts">
	// Components
	import PinInput from "./index.svelte";

	// Styles
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { value: _, onValueChange: __, ...rest }: Props = $props();

	// State
	let value = $state("");

	// Helpers
	const handleChange = (input: string) => {
		value = input;
	};
</script>

<PinInput {...rest} onValueChange={handleChange} {value} />

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>{value}</p>
