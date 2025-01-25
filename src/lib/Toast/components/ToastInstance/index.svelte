<script lang="ts">
	// Packages
	import { fly } from "svelte/transition";
	import { melt } from "@melt-ui/svelte";
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	// Components
	import Progress from "../../../Progress/index.svelte";

	// Styles
	import {
		CloseButtonIconStyles,
		CloseButtonStyles,
		DescriptionStyles,
		ProgressStyles,
		TitleStyles,
		ToastContainerStyles,
		ToastInnerContainerStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { elements, toast }: Props = $props();

	// Derived
	let {
		close,
		content,
		description: meltDescription,
		title: meltTitle
	} = $derived(elements);

	let { id, data, getPercentage } = $derived(toast);

	// State
	let percentage = $state(0);

	// Life Cycle
	onMount(() => {
		let frame: number;
		const updatePercentage = () => {
			percentage = getPercentage();
			frame = requestAnimationFrame(updatePercentage);
		};

		frame = requestAnimationFrame(updatePercentage);

		return () => cancelAnimationFrame(frame);
	});
</script>

<div
	use:melt={$content(id)}
	in:fly={{ duration: 150, x: "100%" }}
	out:fly={{ duration: 150, x: "100%" }}
	class={ToastContainerStyles}
>
	<Progress className={ProgressStyles} value={percentage} />
	<div class={ToastInnerContainerStyles}>
		<div>
			<h3 use:melt={$meltTitle(id)} class={TitleStyles}>
				{data.title}
			</h3>
			<div use:melt={$meltDescription(id)} class={DescriptionStyles}>
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
