<script lang="ts">
	// Packages
	import { getters, Toggle } from "melt/builders";
	import { backOut, cubicOut } from "svelte/easing";
	import { scale } from "svelte/transition";

	// Styles
	import { ButtonStyles, IconBottomLayer, IconTopLayer } from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		ariaLabel,
		className,
		onValueChange,
		solidFaIconClass,
		...rest
	}: Props = $props();

	// MeltUI
	const toggle = new Toggle({ ...getters(rest), onValueChange });
</script>

<button
	{...toggle.trigger}
	aria-label={ariaLabel}
	class="{className} {ButtonStyles}"
>
	<i aria-hidden="true" class="fa-solid {solidFaIconClass} {IconBottomLayer}"
	></i>
	{#if toggle.value}
		<i
			aria-hidden="true"
			class="fa-solid {solidFaIconClass} {IconTopLayer}"
			in:scale={{
				duration: 300,
				easing: backOut
			}}
			out:scale={{
				duration: 300,
				easing: cubicOut
			}}
		></i>
	{/if}
</button>
