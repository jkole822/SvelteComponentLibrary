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
		ToastContainerStyles,
		ToastInnerContainerStyles,
		TitleStyles
	} from "./styles";

	// Types
	import type { Props, Toast, ToastUpdate } from "./types";

	// Props
	let { toastUpdates }: Props = $props();

	let toasts: Toast[] = $state([]);

	// MeltUI
	const {
		elements: {
			content,
			title: meltTitle,
			description: meltDescription,
			close,
		},
		helpers: { addToast, updateToast },
		states: { toasts: meltToasts },
		actions: { portal }
	} = createToaster<ToastUpdate>();

	// Effects
	$effect(() => {
		const toastUpdatesLength = toastUpdates.length;

		if (toastUpdatesLength > 0 && toastUpdatesLength !== toasts.length) {
			const mostRecentUpdate = toastUpdates[toastUpdatesLength - 1];
			const mostRecentUpdateId = mostRecentUpdate.id;
			const existingToast = toasts.find(
				toast => toast.id === mostRecentUpdateId
			);

			if (existingToast) {
				updateToast(existingToast.value, mostRecentUpdate);
			} else {
				const createdToast = addToast({ data: mostRecentUpdate });
				toasts = [
					...toasts,
					{ id: mostRecentUpdateId, value: createdToast.id }
				];
			}
		}
	});
</script>

<div class={ContainerStyles} use:portal>
	{#each $meltToasts as { id, data } (id)}
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
					</h3>
					<div
						use:melt={$meltDescription(id)}
						class={DescriptionStyles}
					>
						{data.description}
					</div>
				</div>
				<button
					use:melt={$close(id)}
					aria-label="close"
					class={CloseButtonStyles}
				>
					<i class={CloseButtonIconStyles}></i></button
				>
			</div>
		</div>
	{/each}
</div>
