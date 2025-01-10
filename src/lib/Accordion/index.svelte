<script lang="ts">
	// Packages
	import { createAccordion, melt } from "@melt-ui/svelte";
	import { slide } from "svelte/transition";

	// Styles
	import {
		ButtonStyles,
		ContainerStyles,
		ContentStyles,
		DescriptionStyles,
		HeadingStyles,
		SectionStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { className = "", defaultValue, headingLevel, items }: Props = $props();

	// MeltUI
	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue
	});
</script>

<div class={`${className} ${ContainerStyles}`} {...$root}>
	{#each items as { id, title, description }, i}
		<div use:melt={$item(id)} class={SectionStyles}>
			<svelte:element this={headingLevel} class={HeadingStyles}>
				<button
					use:melt={$trigger(id)}
					class={ButtonStyles({ isFirstItem: i !== 0 })}
				>
					{title}
				</button>
			</svelte:element>
			{#if $isSelected(id)}
				<div
					class={ContentStyles}
					use:melt={$content(id)}
					transition:slide
				>
					<div class={DescriptionStyles}>
						{description}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
