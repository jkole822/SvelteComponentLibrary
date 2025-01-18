<script lang="ts">
	// Packages
	import { createTooltip, melt } from "@melt-ui/svelte";
	import { fly } from "svelte/transition";

	// Styles
	import { TextStyles, TooltipStyles, TriggerStyles } from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { children, className = "", text, triggerClass }: Props = $props();

	// MeltUI
	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createTooltip({
		positioning: {
			placement: "top"
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: false
	});
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
	use:melt={$trigger}
	class={`${triggerClass} ${TriggerStyles}`}
	role="tooltip"
	tabindex="0"
>
	{@render children()}
</div>

{#if $open}
	<div
		use:melt={$content}
		transition:fly={{ duration: 500, y: 10 }}
		class={`${className} ${TooltipStyles}`}
	>
		<div use:melt={$arrow}></div>
		<p class={TextStyles}>{text}</p>
	</div>
{/if}
