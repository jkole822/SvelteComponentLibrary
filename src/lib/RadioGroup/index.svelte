<script lang="ts">
	// Packages
	import { createRadioGroup, melt } from "@melt-ui/svelte";
	import { v4 as uuid } from "uuid";

	// Styles
	import {
		ButtonStyles,
		ButtonCoverStyles,
		ContainerStyles,
		GroupLabelStyles,
		LabelStyles,
		OptionContainerStyles,
		OptionStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";
	import { RadioGroupOrientationEnum } from "./types";

	// Props
	let {
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

	const labelId = uuid();
</script>

<div class={`${className} ${ContainerStyles}`}>
	<div class={GroupLabelStyles} id={labelId}>{name}</div>
	<div
		use:melt={$root}
		aria-labelledby={labelId}
		class={OptionContainerStyles}
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
					></div>
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
	</div>
	<input {name} use:melt={$hiddenInput} />
</div>
