<script lang="ts">
	// Packages
	import { createRadioGroup, melt } from "@melt-ui/svelte";

	// Styles
	import {
		ButtonStyles,
		ButtonCoverStyles,
		ContainerStyles,
		LabelStyles,
		OptionStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";
	import { RadioGroupOrientationEnum } from "./types";

	// Props
	let {
		ariaLabel,
		className = "",
		defaultValue,
		name,
		onValueChange,
		options,
		orientation = RadioGroupOrientationEnum.Vertical
	}: Props = $props();

	// MeltUI
	const {
		elements: { root, item, hiddenInput },
		helpers: { isChecked }
	} = createRadioGroup({
		defaultValue,
		orientation,
		onValueChange
	});
</script>

<div
	use:melt={$root}
	class={`${className} ${ContainerStyles}`}
	aria-label={ariaLabel}
>
	{#each options as option}
		<div class={OptionStyles({ isChecked: $isChecked(option) })}>
			<button
				use:melt={$item(option)}
				class={ButtonStyles}
				id={option}
				aria-labelledby="{option}-label"
			>
				<div
					class={ButtonCoverStyles}
					style:transform={$isChecked(option)
						? "scale(0)"
						: "scale(1)"}
				/>
			</button>
			<label
				class={LabelStyles({ isChecked: $isChecked(option) })}
				for={option}
				id="{option}-label"
			>
				{option}
			</label>
		</div>
	{/each}
	<input {name} use:melt={$hiddenInput} />
</div>
