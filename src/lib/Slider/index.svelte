<script lang="ts">
	// Packages
	import { createLabel, createSlider, melt } from "@melt-ui/svelte";

	// Styles
	import {
		InputStyles,
		LabelStyles,
		RangeContainerStyles,
		RangeStyles,
		SliderContainerStyles,
		ThumbStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		className = "",
		defaultValue,
		id,
		label,
		max,
		min,
		onValueChange,
		step
	}: Props = $props();

	// MeltUI
	const {
		elements: { root, range, thumbs },
		states: { value }
	} = createSlider({
		defaultValue,
		onValueChange,
		min,
		max,
		step
	});

	const {
		elements: { root: labelRoot }
	} = createLabel();

	// Derived
	let isMultiValue = $derived(value.get().length);
</script>

<div class={className}>
	<label
		use:melt={$labelRoot}
		for={id}
		class={LabelStyles}
		data-melt-part="root"
	>
		<span>{label}</span>
	</label>
	<span use:melt={$root} class={SliderContainerStyles}>
		<input
			aria-hidden="true"
			class={InputStyles}
			{id}
			tabindex="-1"
			type="number"
			value={$value[0]}
		/>
		<span class={RangeContainerStyles}>
			<span use:melt={$range} class={RangeStyles}></span>
		</span>
		{#if isMultiValue}
			{#each $thumbs as thumb}
				<span
					use:melt={thumb}
					aria-label="slider-control"
					class={ThumbStyles}
				></span>
			{/each}
		{:else}
			<span
				use:melt={$thumbs[0]}
				aria-label="slider-control"
				class={ThumbStyles}
			></span>
		{/if}
	</span>
</div>
