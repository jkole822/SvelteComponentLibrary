<script lang="ts">
	// Packages
	import { createTooltip, melt } from "@melt-ui/svelte";
	import { fly } from "svelte/transition";

	// Styles
	import { TextStyles, TooltipStyles } from "./styles";

	// Types
	import type { Props } from "./types";

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

	// Props
	let { children, className = "", text }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
	use:melt={$trigger}
	class="inline-block outline-none"
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
