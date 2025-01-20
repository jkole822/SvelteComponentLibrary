<script lang="ts">
	// Packages
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	// Components
	import Progress from "./index.svelte";

	// Types
	import type { Props } from "./types";

	// Props
	let { value: _, ...rest }: Props = $props();

	// State
	const value = writable(25);

	// Life Cycle
	onMount(() => {
		let frame: number;
		const updatePercentage = () => {
			if ($value === 100) return;
			value.set($value + 1);
			frame = requestAnimationFrame(updatePercentage);
		};

		frame = requestAnimationFrame(updatePercentage);

		return () => cancelAnimationFrame(frame);
	});
</script>

<Progress {...rest} {value} />
