<script lang="ts">
	// Packages
	import { fade } from "svelte/transition";
	import { getters, Popover } from "melt/builders";

	// Styles
	import { ButtonStyles, CloseButtonStyles, ContentStyles } from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		ariaLabel,
		buttonContent,
		children,
		className = "",
		contentClass = "",
		contentStyles = "",
		disabled,
		isIconButton,
		onOpenChange,
		...rest
	}: Props = $props();

	// MeltUI
	const popover = new Popover({ ...getters(rest), onOpenChange });
</script>

<button
	{...popover.trigger}
	aria-label={ariaLabel}
	class="{className} {ButtonStyles({ isIconButton })}"
	{disabled}
>
	{@render buttonContent()}
</button>

{#if popover.open}
	<div
		{...popover.content}
		transition:fade={{ duration: 100 }}
		class="{contentClass} {ContentStyles}"
		style={contentStyles}
	>
		{@render children()}
		<button
			aria-label="Close Popover"
			class={CloseButtonStyles}
			onclick={() => onOpenChange(false)}
		>
			<i aria-hidden="true" class="fa-solid fa-xmark"></i>
		</button>
	</div>
{/if}
