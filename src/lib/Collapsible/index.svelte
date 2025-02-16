<script lang="ts">
	// Packages
	import { Collapsible, getters } from "melt/builders";
	import { slide } from "svelte/transition";

	// Styles
	import { ContentStyles, TriggerStyles } from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		buttonContent,
		children,
		className = "",
		onOpenChange,
		...rest
	}: Props = $props();

	// MeltUI
	const collapsible = new Collapsible({ ...getters(rest), onOpenChange });
</script>

<div class={className}>
	<button {...collapsible.trigger} class={TriggerStyles}>
		{@render buttonContent()}
		<i
			aria-hidden="true"
			class="fa-solid {collapsible.open ? 'fa-close' : 'fa-sort'}"
		></i>
	</button>

	{#if collapsible.open}
		<div
			{...collapsible.content}
			transition:slide={{ duration: 200 }}
			class={ContentStyles}
		>
			{@render children()}
		</div>
	{/if}
</div>
