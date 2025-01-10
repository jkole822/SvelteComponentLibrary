<script lang="ts">
	// Packages
	import { createTooltip, melt } from "@melt-ui/svelte";
	import { fly } from "svelte/transition";

	// Styles
	import {
		ButtonStyles,
		NonInteractiveTriggerStyles,
		TextStyles,
		TooltipStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		action,
		ariaControls,
		ariaExpanded,
		ariaHasPopup,
		ariaHidden,
		ariaLabel,
		children,
		className = "",
		disabled = false,
		href,
		nonInteractive = false,
		target = "_self",
		text,
		triggerClass,
		type = "button",
		...rest
	}: Props = $props();

	// Derived
	let buttonProps = $derived({
		"aria-controls": ariaControls,
		"aria-expanded": ariaExpanded,
		"aria-haspopup": ariaHasPopup,
		type
	});

	let linkProps = $derived({
		href,
		rel: target === "_blank" ? "noreferrer" : undefined,
		target
	});

	let derivedProps = $derived({
		...rest,
		...(!!href ? linkProps : buttonProps),
		"aria-hidden": ariaHidden,
		"aria-label": ariaLabel,
		class: `${triggerClass} ${nonInteractive ? NonInteractiveTriggerStyles : ButtonStyles}`,
		disabled
	});

	// MeltUI
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
</script>

{#if nonInteractive}
	<div use:melt={$trigger} {...derivedProps}>
		{@render children()}
	</div>
{:else if !!href}
	<a use:melt={$trigger} {...derivedProps}>
		<div class="trigger-content">
			{@render children()}
		</div>
	</a>
{:else if !!action}
	<button use:action use:melt={$trigger} {...derivedProps}>
		<div class="trigger-content">
			{@render children()}
		</div>
	</button>
{:else}
	<button use:melt={$trigger} {...derivedProps}>
		<div class="trigger-content">
			{@render children()}
		</div>
	</button>
{/if}

{#if $open && !disabled}
	<div
		use:melt={$content}
		transition:fly={{ duration: 500, y: 10 }}
		class={`${className} ${TooltipStyles}`}
	>
		<div use:melt={$arrow}></div>
		<p class={TextStyles}>{text}</p>
	</div>
{/if}
