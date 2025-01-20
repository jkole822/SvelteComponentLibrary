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
		className = "",
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

<nav
	class={`${className} ${NavigationStyles}`}
	aria-label={ariaLabel}
	use:melt={$root}
>
	<div class={ContainerStyles}>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button use:melt={$prevButton} class={ButtonStyles}>
			<i class="fa-solid fa-chevron-left"></i>
		</button>
		{#each $pages as page (page.key)}
			{#if page.type !== "ellipsis" && ellipsis}
				<button class={ButtonStyles} use:melt={$pageTrigger(page)}>
					{page.value}
				</button>
			{:else if page.type === "ellipsis" && ellipsis}
				<button class={`pagination-ellipsis ${ButtonStyles}`}>
					{@render ellipsis()}
				</button>
			{/if}
		{/each}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button use:melt={$nextButton} class={ButtonStyles}
			><i class="fa-solid fa-chevron-right"></i></button
		>
	</div>
</nav>
