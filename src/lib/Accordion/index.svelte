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
	let { className = "", headingLevel, items, ...rest }: Props = $props();

	// MeltUI
	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion(rest);
</script>

<div class={`${className} ${ContainerStyles}`} {...$root}>
	{#each items as { id, title, description, disabled } (id)}
		<div use:melt={$item(id)} class={SectionStyles}>
			<svelte:element this={headingLevel} class={HeadingStyles}>
				<button use:melt={$trigger(id)} class={ButtonStyles} {disabled}>
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
