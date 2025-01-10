<script lang="ts">
	// Packages
	import { createDialog, melt } from "@melt-ui/svelte";
	import { fade } from "svelte/transition";

	// Components
	import Button from "../Button/index.svelte";

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
	import { flyAndScale } from "../../utils/animations";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		buttonClass,
		buttonText,
		buttonVariant,
		cancelButtonText,
		className = "",
		description,
		dialogContent,
		id,
		onsubmit,
		submitButtonText,
		title
	}: Props = $props();

	// MeltUI
	const {
		elements: {
			trigger,
			overlay,
			content,
			title: meltTitle,
			description: meltDescription,
			close,
			portalled
		},
		states: { open }
	} = createDialog({
		forceVisible: true
	});
</script>

<Button
	{...$trigger}
	ariaControls={id}
	ariaExpanded={$open}
	className={buttonClass}
	variant={buttonVariant}
	>{buttonText}
</Button>

{#if $open}
	<div use:melt={$portalled} {className}>
		<div
			use:melt={$overlay}
			class={OverlayStyles}
			transition:fade={{ duration: 200 }}
		/>
		<div
			class={ContentStyles}
			transition:flyAndScale={{
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
			{@render dialogContent()}
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
				<i class="fa-solid fa-xmark" />
			</button>
		</div>
	</div>
{/if}
