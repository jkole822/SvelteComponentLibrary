<script lang="ts">
	// Packages
	import { cubicInOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";
	import { getters, Tabs } from "melt/builders";

	// Styles
	import {
		ContainerStyles,
		ContentStyles,
		ListStyles,
		TriggerIndicatorStyles,
		TriggerStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { className = "", items, onValueChange, ...rest }: Props = $props();

	// MeltUI
	const tabs = new Tabs({ ...getters(rest), onValueChange });

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});
</script>

<div class="{className} {ContainerStyles}">
	<div {...tabs.triggerList} class={ListStyles}>
		{#each items as item}
			<button {...tabs.getTrigger(item.id)} class={TriggerStyles}>
				{item.label}
				{#if tabs.value === item.id}
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
		<div {...tabs.getContent(item.id)} class={ContentStyles}>
			{@render item.children()}
		</div>
	{/each}
</div>
