<script lang="ts">
	// Packages
	import { createProgress, melt } from "@melt-ui/svelte";

	// Styles
	import { ContainerStyles, FillStyles } from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { className = "", value }: Props = $props();

	// MeltUI
	const {
		elements: { root },
		options: { max }
	} = createProgress({
		value,
		max: 100
	});
</script>

<div use:melt={$root} class={`${className} ${ContainerStyles}`}>
	<div
		class={FillStyles}
		style:transform={`translateX(-${
			100 - (100 * ($value ?? 0)) / ($max ?? 1)
		}%)`}
	></div>
</div>
