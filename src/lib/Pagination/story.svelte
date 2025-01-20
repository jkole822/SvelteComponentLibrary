<script lang="ts">
	// Components
	import Pagination from "./index.svelte";

	// Styles
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { onPageChange: _, ...rest }: Props = $props();

	// State
	let page = $state(1);
</script>

<Pagination {...rest} onPageChange={({ next }) => (page = next)} />

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>{page}</p>
