<script lang="ts">
	// Packages
	import { getters, Progress } from "melt/builders";

	// Styles
	import { ContainerStyles, FillStyles } from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { className = "", ...rest }: Props = $props();

	// MeltUI
	const progress = new Progress({ ...getters(rest) });
</script>

<div {...progress.root} class="{className} {ContainerStyles}">
	<div
		{...progress.progress}
		class={FillStyles}
		style:transform={`translateX(-${
			100 - (100 * (progress.value ?? 0)) / (progress.max ?? 1)
		}%)`}
	></div>
</div>
