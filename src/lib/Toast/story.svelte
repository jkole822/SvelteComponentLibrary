<script lang="ts">
	// Components
	import Button from "../Button/index.svelte";
	import Toast from "./index.svelte";

	// Types
	import { ButtonVariantsEnum } from "../Button/types";
	import type { Props } from "./types";

	// Props
	let { toastToDisplay: unusedToastToDisplay, ...rest }: Props = $props();

	// State
	const toastIds = ["error", "success"];
	let toastToDisplay = $state("");

	// Derived
	let allProps = $derived({
		...rest,
		toastToDisplay
	});

	// Helpers
	const handleOpen = () => {
		const randomId = toastIds[Math.floor(Math.random() * toastIds.length)];
		toastToDisplay = randomId;
	};
</script>

<Toast {...allProps} />
<Button variant={ButtonVariantsEnum.outline} onclick={handleOpen}>Display Toast</Button>
