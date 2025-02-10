<script lang="ts">
	// Packages
	import { getters, Toggle } from "melt/builders";
	import { backOut, cubicOut } from "svelte/easing";

	// Styles
	import { ButtonStyles, IconBottomLayer, IconTopLayer } from "./styles";

	// Utils
	import { scaleAndTransform } from "../../utils";

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
			in:scaleAndTransform={{
				duration: 300,
				easingFn: backOut,
				transform: "translate(-50%, -50%)"
			}}
			out:scaleAndTransform={{
				duration: 300,
				easingFn: cubicOut,
				transform: "translate(-50%, -50%)"
			}}
		></i>
	{/if}
</button>
