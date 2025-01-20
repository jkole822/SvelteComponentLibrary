<script lang="ts">
	// Packages
	import { createToaster } from "@melt-ui/svelte";
	import { flip } from "svelte/animate";

	// Components
	import { ToastInstance } from "./components";

	// Styles
	import { ContainerStyles } from "./styles";

	// Types
	import type { Props, Toast, ToastUpdate } from "./types";

	// Props
	let { toastUpdates }: Props = $props();

	let toasts: Toast[] = $state([]);

	// MeltUI
	const {
		elements,
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
	{#each $meltToasts as toast (toast.id)}
		<div animate:flip={{ duration: 500 }}>
			<ToastInstance {elements} {toast} />
		</div>
	{/each}
</div>
