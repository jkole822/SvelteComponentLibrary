<script lang="ts">
	// Packages
	import { createSelect, melt } from "@melt-ui/svelte";
	import { fade } from "svelte/transition";

	// Styles
	import {
		CheckContainerStyles,
		ContainerStyles,
		GroupLabelStyles,
		ItemStyles,
		LabelStyles,
		MenuStyles,
		TriggerStyles,
		VectorContainerStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		ariaLabel,
		className,
		defaultSelected,
		label,
		onSelectedChange,
		options,
		placeholder
	}: Props = $props();

	// MeltUI
	const {
		elements: {
			trigger,
			menu,
			option,
			group,
			groupLabel,
			label: meltLabel
		},
		states: { selectedLabel, open },
		helpers: { isSelected }
	} = createSelect<string>({
		defaultSelected,
		forceVisible: true,
		onSelectedChange,
		positioning: {
			placement: "bottom",
			fitViewport: true,
			sameWidth: true
		}
	});
</script>

<div class={`${className} ${ContainerStyles}`}>
	<!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
	<label class={LabelStyles} use:melt={$meltLabel}>{label}</label>
	<button class={TriggerStyles} use:melt={$trigger} aria-label={ariaLabel}>
		{$selectedLabel || placeholder}
		<div class={VectorContainerStyles({ isOpen: $open })}>
			<i class="fa-solid fa-chevron-up"></i>
		</div>
	</button>
	{#if $open}
		<ul
			class={MenuStyles}
			use:melt={$menu}
			transition:fade={{ duration: 150 }}
		>
			{#each Object.entries(options) as [key, arr]}
				<li use:melt={$group(key)}>
					<div class={GroupLabelStyles} use:melt={$groupLabel(key)}>
						{key}
					</div>
					{#each arr as item}
						<div
							class={ItemStyles}
							use:melt={$option({ value: item, label: item })}
						>
							<div
								class={CheckContainerStyles({
									isSelected: $isSelected(item)
								})}
							>
								<i class="fa-solid fa-check"></i>
							</div>
							{item}
						</div>
					{/each}
				</li>
			{/each}
		</ul>
	{/if}
</div>
