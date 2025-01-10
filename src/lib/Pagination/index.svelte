<script lang="ts">
	// Packages
	import { createPagination, melt } from "@melt-ui/svelte";

	// Styles
	import { ButtonStyles, ContainerStyles, NavigationStyles } from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		ariaLabel,
		className,
		count,
		defaultPage,
        ellipsis,
		onPageChange,
		perPage,
		siblingCount
	}: Props = $props();

	// MeltUI
	const {
		elements: { root, pageTrigger, prevButton, nextButton },
		states: { pages }
	} = createPagination({
		count,
		perPage,
		defaultPage,
        onPageChange,
		siblingCount
	});
</script>

<nav class={NavigationStyles} aria-label={ariaLabel} use:melt={$root}>
	<div class={ContainerStyles}>
		<button class={ButtonStyles} use:melt={$prevButton}
			><i class="fa-solid fa-chevron-left" /></button
		>
		{#each $pages as page (page.key)}
			{#if page.type === "ellipsis" && ellipsis}
				{@render ellipsis()}
			{:else}
				<button class={ButtonStyles} use:melt={$pageTrigger(page)}
					>{page.value}</button
				>
			{/if}
		{/each}
		<button class={ButtonStyles} use:melt={$nextButton}
			><i class="fa-solid fa-chevron-right" /></button
		>
	</div>
</nav>
