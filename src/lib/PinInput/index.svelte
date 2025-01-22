<script lang="ts">
	// Packages
	import { PinInput } from "melt/builders";

	// Styles
	import { ContainerStyles, InputStyles } from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { className = "", ...rest }: Props = $props();

	// MeltUI
	const pinInput = new PinInput({ ...rest });
</script>

<div {...pinInput.root} class="{className} {ContainerStyles}">
	{#each pinInput.inputs as input}
		<input {...input} class={InputStyles} />
	{/each}
</div>
