<script lang="ts">
	// Packages
	import { writable } from "svelte/store";

	// Components
	import Progress from "./index.svelte";

	// Types
	import type { Props } from "./types";

	// Props
	let { value: _, ...rest }: Props = $props();

	// State
	const value = writable(25);

	// Helpers
	const sleep = (ms: number) =>
		new Promise(resolve => setTimeout(resolve, ms));
	sleep(1000).then(() => {
		value.set(100);
	});
</script>

<Progress {...rest} {value} />
