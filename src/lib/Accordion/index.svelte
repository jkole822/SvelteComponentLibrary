<script lang="ts">
	// Packages
	import { Accordion, getters } from "melt/builders";
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
	let {
		className = "",
		headingLevel,
		items,
		onValueChange,
		...rest
	}: Props = $props();

	// MeltUI
	const accordion = new Accordion({ ...getters(rest), onValueChange });
</script>

<div {...accordion.root} class={`${className} ${ContainerStyles}`}>
	{#each items as accordionItem}
		{@const item = accordion.getItem(accordionItem)}
		<div class={SectionStyles}>
			<svelte:element
				this={headingLevel}
				{...item.heading}
				class={HeadingStyles}
			>
				<button {...item.trigger} class={ButtonStyles}>
					{item.item.title}
				</button>
			</svelte:element>
			{#if item.isExpanded}
				<div {...item.content} class={ContentStyles} transition:slide>
					{#if item.item.description}
						<div class={DescriptionStyles}>
							{item.item.description}
						</div>
					{/if}
					{#if accordionItem.mobileAccordionNavigationContent}
						{@render accordionItem.mobileAccordionNavigationContent(
							accordionItem.mobileAccordionNavigationItems,
							accordionItem.isFirstItem,
							accordionItem.isLastItem
						)}
					{/if}
				</div>
			{/if}
		</div>
	{/each}
</div>
