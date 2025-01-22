<script lang="ts">
	// Packages
	import { getters, PinInput } from "melt/builders";

	// Styles
	import { ContainerStyles, InputStyles } from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { className = "", onValueChange, ...rest }: Props = $props();

	// MeltUI
	const pinInput = new PinInput({ ...getters(rest), onValueChange });
</script>

<div {...pinInput.root} class="{className} {ContainerStyles}">
	{#each pinInput.inputs as input}
		<input {...input} class={InputStyles} />
	{/each}
</div>
