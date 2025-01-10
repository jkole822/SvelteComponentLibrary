<script lang="ts">
	// Styles
	import {
		InputStyles,
		LabelStyles,
		LabelTextStyles,
		SliderStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		className = "",
		checked = $bindable(),
		disabled,
		label
	}: Props = $props();
</script>

<label class={`${className} ${LabelStyles({ disabled })}`}>
	<input
		aria-hidden="true"
		bind:checked
		class={InputStyles}
		{disabled}
		type="checkbox"
	/>
	<span class={SliderStyles}></span>
	<span class={LabelTextStyles}>{label}</span>
</label>
