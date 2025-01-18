<script lang="ts">
	// Styles
	import {
		FillButtonStyles,
		LineOneButtonStyles,
		LineTwoButtonStyles,
		OutlineButtonStyles
	} from "./styles";

	// Types
	import { ButtonVariantsEnum } from "./types";
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
		target = "_self",
		type = "button",
		variant = ButtonVariantsEnum.fill,
		...rest
	}: Props = $props();

	// Derived
	let buttonClass = $derived(
		[
			className,
			variant === ButtonVariantsEnum.fill
				? FillButtonStyles
				: variant === ButtonVariantsEnum.outline
					? OutlineButtonStyles
					: variant === ButtonVariantsEnum.lineOne
						? LineOneButtonStyles
						: variant === ButtonVariantsEnum.lineTwo
							? LineTwoButtonStyles
							: ""
		].join(" ")
	);

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
		class: buttonClass,
		disabled
	});
</script>

{#if !!action}
	<button {...derivedProps} use:action>{@render children()}</button>
{:else}
	<svelte:element this={!!href ? "a" : "button"} {...derivedProps}>
		{@render children()}
	</svelte:element>
{/if}
