<script lang="ts">
	// Packages
	import {
		createPopover,
		createSync,
		createTableOfContents,
		melt
	} from "@melt-ui/svelte";
	import { fade, fly } from "svelte/transition";

	// Components
	import { Tree } from "./components";

	// Styles
	import {
		ContainerStyles,
		ContentStyles,
		OverlayStyles,
		PopoverStyles,
		PopoverTriggerStyles,
		TreeStyles
	} from "./styles";
	import { CloseButtonStyles } from "../Popover/styles";

	// Types
	import { ActiveTypeEnum } from "./types";
	import type { Props } from "./types";

	// Props
	let {
		activeType = ActiveTypeEnum.Highest,
		children,
		className = "",
		containerId,
		contentClass = "",
		exclude = [],
		popoverTriggerId,
		pushStateFn,
		treeClass = ""
	}: Props = $props();

	// State
	let open = $state(false);
	let windowWidth = $state(0);

	// MeltUI
	const {
		elements: { item },
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents({
		selector: `#${containerId}`,
		exclude,
		activeType,
		/**
		 * Here we can optionally provide SvelteKit's `pushState` function.
		 * This function preserve navigation state within the framework.
		 */
		pushStateFn,
		headingFilterFn: heading => !heading.hasAttribute("data-toc-ignore"),
		scrollFn: id => {
			/**
			 * Here we're overwriting the default scroll function
			 * so that we only scroll within the ToC preview
			 * container, instead of the entire page.
			 */
			const container = document.getElementById(containerId);
			const element = document.getElementById(id);
			const popoverTrigger = document.getElementById(popoverTriggerId);
			const popoverTriggerHeight = popoverTrigger?.offsetHeight ?? 0;

			if (container && element) {
				container.scrollTo({
					top:
						element.offsetTop -
						container.offsetTop +
						popoverTriggerHeight,
					behavior: "smooth"
				});
			}

			open = false;
		}
	});

	const {
		elements: { trigger, content, close },
		states
	} = createPopover({
		forceVisible: true
	});

	// Effects
	const sync = createSync(states);

	$effect(() => {
		sync.open(open, v => (open = v));
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#snippet nav()}
	<nav>
		{#key $headingsTree}
			<Tree
				activeHeadingIdxs={$activeHeadingIdxs}
				tree={$headingsTree}
				{item}
			/>
		{/key}
	</nav>
{/snippet}

<div class="{className} {ContainerStyles}">
	<div class={PopoverTriggerStyles} id={popoverTriggerId}>
		<button
			use:melt={$trigger}
			aria-label="Open Table of Contents"
			aria-expanded={open ? "true" : "false"}
		>
			<i aria-hidden="true" class="fa-solid fa-bars"></i>
		</button>
	</div>

	{#if open}
		<div
			transition:fade={{ duration: 200 }}
			aria-hidden="true"
			class={OverlayStyles}
		></div>
	{/if}

	{#if open}
		<div
			use:melt={$content}
			transition:fly={{ duration: 200, x: `-${windowWidth * 0.75}px` }}
			class="{treeClass} {PopoverStyles}"
		>
			{@render nav()}
			<button
				use:melt={$close}
				aria-label="close"
				class={CloseButtonStyles}
			>
				<i aria-hidden="true" class="fa-solid fa-xmark"></i>
			</button>
		</div>
	{/if}

	<div class={`${treeClass} ${TreeStyles}`}>
		{@render nav()}
	</div>

	<div class="{contentClass} {ContentStyles}" id={containerId}>
		{@render children()}
	</div>
</div>
