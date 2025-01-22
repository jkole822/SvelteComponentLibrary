<script lang="ts">
	// Packages
	import { getters, RadioGroup } from "melt/builders";

	// Styles
	import {
		CircleCoverStyles,
		CircleStyles,
		ContainerStyles,
		GroupLabelStyles,
		LabelStyles,
		OptionContainerStyles,
		OptionStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		className = "",
		name,
		onValueChange,
		options,
		...rest
	}: Props = $props();

	// MeltUI
	const radioGroup = new RadioGroup({ ...getters(rest), onValueChange });
</script>

<div class="{className} {ContainerStyles}">
	<div {...radioGroup.root}>
		<!-- svelte-ignore a11y_label_has_associated_control -->
		<label {...radioGroup.label} class={GroupLabelStyles}>{name}</label>
		<div class={OptionContainerStyles}>
			{#each options as i}
				{@const option = radioGroup.getItem(i)}
				<div {...option.attrs} class={OptionStyles}>
					<div class={CircleStyles}>
						<div
							class={CircleCoverStyles}
							style:transform={option.checked
								? "scale(0)"
								: "scale(1)"}
						></div>
					</div>
					<div class={LabelStyles({ isChecked: option.checked })}>
						{option.value}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<input {...radioGroup.hiddenInput} />
</div>
