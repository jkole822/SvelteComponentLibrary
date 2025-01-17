<script lang="ts">
	// Packages
	import { createToaster, melt } from "@melt-ui/svelte";
	import { flip } from "svelte/animate";
	import { fly } from "svelte/transition";

	// Styles
	import {
		CloseButtonIconStyles,
		CloseButtonStyles,
		ContainerStyles,
		DescriptionStyles,
		StatusIndicatorStyles,
		ToastContainerStyles,
		ToastInnerContainerStyles,
		TitleStyles
	} from "./styles";

	// Types
	import type { Props, ToastData } from "./types";

	// Props
	let { className = "", toastData, toastToDisplay }: Props = $props();

	// MeltUI
	const {
		elements: {
			content,
			title: meltTitle,
			description: meltDescription,
			close
		},
		helpers: { addToast },
		states: { toasts },
		actions: { portal }
	} = createToaster<ToastData>();

	// Effects
	$effect(() => {
		if (!!toastToDisplay) {
			const matchingToast = toastData.find(
				toast => toast.id === toastToDisplay
			);

			if (!!matchingToast) {
				addToast({
					data: matchingToast
				});
			}
		}
	});
</script>

<div class={`${className} ${ContainerStyles}`} use:portal>
	{#each $toasts as { id, data } (id)}
		<div
			use:melt={$content(id)}
			animate:flip={{ duration: 500 }}
			in:fly={{ duration: 150, x: "100%" }}
			out:fly={{ duration: 150, x: "100%" }}
			class={ToastContainerStyles}
		>
			<div class={ToastInnerContainerStyles}>
				<div>
					<h3 use:melt={$meltTitle(id)} class={TitleStyles}>
						{data.title}
						<span
							class={StatusIndicatorStyles({ color: data.color })}
						></span>
					</h3>
					<div
						use:melt={$meltDescription(id)}
						class={DescriptionStyles}
					>
						{data.description}
					</div>
				</div>
				<button use:melt={$close(id)} aria-label="close" class={CloseButtonStyles}>
					<i class={CloseButtonIconStyles}></i></button
				>
			</div>
		</div>
	{/each}
</div>
