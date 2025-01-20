<script lang="ts">
	// Packages
	import { createSelect, melt } from "@melt-ui/svelte";
	import { fly } from "svelte/transition";

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

	// Utils
	import { toComboBoxOption } from "../../utils";

	// Types
	import type { Props, SelectOption } from "./types";

	// Props
	let {
		ariaLabel,
		className = "",
		defaultSelected,
		disabled = false,
		groupOptions,
		label,
		onSelectedChange,
		options,
		placeholder,
		required
	}: Props = $props();

	// MeltUI
	const {
		elements: {
			trigger,
			menu,
			option: meltOption,
			group,
			groupLabel: meltGroupLabel,
			label: meltLabel
		},
		states: { selectedLabel, open },
		helpers: { isSelected }
	} = createSelect<SelectOption>({
		defaultSelected,
		disabled,
		forceVisible: true,
		onSelectedChange,
		positioning: {
			placement: "bottom",
			fitViewport: true,
			sameWidth: true
		},
		required
	});
</script>

{#snippet listItem(option: SelectOption)}
	<div class={ItemStyles}>
		<div
			class={CheckContainerStyles({
				isSelected: $isSelected(option)
			})}
		>
			<i aria-hidden="true" class="fa-solid fa-check"></i>
		</div>
		{option.label}
	</div>
{/snippet}

<div class={`${className} ${ContainerStyles}`}>
	<!-- svelte-ignore a11y_label_has_associated_control - $label contains the 'for' attribute -->
	{#if label}
		<label class={LabelStyles} use:melt={$meltLabel}>{label}</label>
	{/if}
	<button class={TriggerStyles} use:melt={$trigger} aria-label={ariaLabel}>
		{$selectedLabel || placeholder}
		<div class={VectorContainerStyles({ isOpen: $open })}>
			<i aria-hidden="true" class="fa-solid fa-chevron-up"></i>
		</div>
	</button>
	{#if $open}
		<div use:melt={$menu} transition:fly={{ duration: 300, y: 10 }}>
			<ul class={MenuStyles}>
				{#if groupOptions}
					{#each groupOptions as { label: groupLabel, values }}
						<li use:melt={$group(groupLabel)}>
							<div
								class={GroupLabelStyles}
								use:melt={$meltGroupLabel(groupLabel)}
							>
								{groupLabel}
							</div>
							{#each values as option}
								<div
									use:melt={$meltOption(
										toComboBoxOption(option)
									)}
									class="group"
								>
									{@render listItem(option)}
								</div>
							{/each}
						</li>
					{/each}
				{:else}
					{#each options as option}
						<li
							use:melt={$meltOption(toComboBoxOption(option))}
							class="group"
						>
							{@render listItem(option)}
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	{/if}
</div>
