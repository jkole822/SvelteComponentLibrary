<script lang="ts">
	// Packages
	import { createPinInput, melt } from "@melt-ui/svelte";

	// Styles
	import { ContainerStyles, InputStyles } from "./styles";
	import { SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		disabled = false,
		length,
		name,
		onValueChange,
		type
	}: Props = $props();

	// MeltUI
	const {
		elements: { root, input }
	} = createPinInput({
		disabled,
		name,
		onValueChange,
		type
	});
</script>

<p class={SubHeadingStyles}>**BROKEN**</p>

<div use:melt={$root} class={ContainerStyles}>
	{#each { length }}
		<input use:melt={$input()} class={InputStyles} />
	{/each}
</div>
