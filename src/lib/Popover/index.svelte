<script lang="ts">
	// Packages
	import { createPopover, createSync, melt } from "@melt-ui/svelte";
	import { fade } from "svelte/transition";

	// Styles
	import { ButtonStyles, CloseButtonStyles, ContentStyles } from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		ariaLabel,
		buttonContent,
		className = "",
		disabled = false,
		isIconButton,
		popoverContent
	}: Props = $props();

	// State
	let open = $state(false);

	// Derived
	let buttonProps = $derived({
		"aria-label": ariaLabel,
		class: `${className} ${ButtonStyles({ isIconButton })}`,
		disabled
	});

	// MeltUI
	const {
		elements: { trigger, content, arrow, close },
		states
	} = createPopover({
		forceVisible: true
	});

	const sync = createSync(states);

	$effect(() => {
		sync.open(open, v => (open = v));
	});
</script>

<button
	use:melt={$trigger}
	{...buttonProps}
	aria-expanded={open ? "true" : "false"}
>
	{@render buttonContent()}
</button>

{#if open}
	<div
		use:melt={$content}
		transition:fade={{ duration: 100 }}
		class={ContentStyles}
	>
		<div use:melt={$arrow}></div>
		{@render popoverContent()}
		<button use:melt={$close} aria-label="close" class={CloseButtonStyles}>
			<i aria-hidden="true" class="fa-solid fa-xmark"></i>
		</button>
	</div>
{/if}
