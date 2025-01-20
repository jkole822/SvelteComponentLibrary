<script lang="ts">
	// Packages
	import { createTabs, melt } from "@melt-ui/svelte";
	import { cubicInOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";

	// Styles
	import {
		ContentStyles,
		ListStyles,
		TriggerIndicatorStyles,
		TriggerStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		ariaLabel,
		className = "",
		defaultValue,
		items,
		orientation
	}: Props = $props();

	// MeltUI
	const {
		elements: { root, list, content, trigger },
		states: { value }
	} = createTabs({
		defaultValue,
		orientation
	});

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});
</script>

<div use:melt={$root} class={className}>
	<div use:melt={$list} aria-label={ariaLabel} class={ListStyles}>
		{#each items as triggerItem}
			<button use:melt={$trigger(triggerItem.id)} class={TriggerStyles}>
				{triggerItem.label}
				{#if $value === triggerItem.id}
					<div
						in:send={{ key: "trigger" }}
						out:receive={{ key: "trigger" }}
						class={TriggerIndicatorStyles}
					></div>
				{/if}
			</button>
		{/each}
	</div>
	{#each items as item}
		<div use:melt={$content(item.id)} class={ContentStyles}>
			{@render item.children()}
		</div>
	{/each}
</div>
