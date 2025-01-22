<script lang="ts">
	// Packages
	import { createDialog, createSync, melt } from "@melt-ui/svelte";
	import { fade } from "svelte/transition";

	// Styles
	import {
		ButtonContainerStyles,
		CancelButtonStyles,
		CloseButtonStyles,
		ContentStyles,
		DescriptionStyles,
		HeadingStyles,
		OverlayStyles,
		SubmitButtonStyles
	} from "./styles";

	// Utils
	import { scaleAndTransform } from "../../utils/animations";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		cancelButtonText,
		children,
		className = "",
		description,
		id,
		onsubmit,
		open,
		submitButtonText,
		title,
		trigger
	}: Props = $props();

	// MeltUI
	const {
		elements: {
			overlay,
			content,
			title: meltTitle,
			description: meltDescription,
			close,
			portalled
		},
		states
	} = createDialog({
		forceVisible: true
	});

	const sync = createSync(states);

	$effect(() => {
		sync.open(open, v => (open = v));
	});
</script>

{#if trigger}
	{@render trigger()}
{/if}

{#if open}
	<div use:melt={$portalled} class={className} id={String(id)}>
		<div
			use:melt={$overlay}
			class={OverlayStyles}
			transition:fade={{ duration: 200 }}
		></div>
		<div
			class={ContentStyles}
			transition:scaleAndTransform={{
				duration: 200,
				transform: "translate(-50%, -50%)"
			}}
			use:melt={$content}
		>
			{#if title}
				<h1 use:melt={$meltTitle} class={HeadingStyles}>{title}</h1>
			{/if}
			{#if description}
				<p use:melt={$meltDescription} class={DescriptionStyles}>
					{description}
				</p>
			{/if}
			{@render children()}
			<div class={ButtonContainerStyles}>
				{#if cancelButtonText}
					<button use:melt={$close} class={CancelButtonStyles}>
						{cancelButtonText}
					</button>
				{/if}
				{#if submitButtonText && onsubmit}
					<button
						use:melt={$close}
						class={SubmitButtonStyles}
						onclick={onsubmit}
					>
						{submitButtonText}
					</button>
				{/if}
			</div>
			<button
				use:melt={$close}
				aria-label="close"
				class={CloseButtonStyles}
			>
				<i aria-hidden="true" class="fa-solid fa-xmark"></i>
			</button>
		</div>
	</div>
{/if}
