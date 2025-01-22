<script lang="ts">
	// Packages
	import { onMount } from "svelte";

	// Components
	import Progress from "./index.svelte";

	// Types
	import type { Props } from "./types";

	// Props
	let { value: _, onValueChange: __, ...rest }: Props = $props();

	// State
	let value = $state(50);

	// Life Cycle
	onMount(() => {
		let frame: number;
		const updatePercentage = () => {
			if (value === 100) return;

			value += 1;
			frame = requestAnimationFrame(updatePercentage);
		};

		frame = requestAnimationFrame(updatePercentage);

		return () => cancelAnimationFrame(frame);
	});
</script>

<Progress {...rest} {value} onValueChange={() => console.log(value)} />
