<script lang="ts">
	// Packages
	import { createCombobox, melt } from "@melt-ui/svelte";
	import { fly } from "svelte/transition";

	// Styles
	import {
		CheckContainerStyles,
		ContainerStyles,
		InputStyles,
		LabelStyles,
		ListItemStyles,
		ListItemValueStyles,
		ListStyles,
		NoResultsStyles,
		ScrollContainerStyles,
		TriggerStyles,
		VectorContainerStyles
	} from "./styles";

	// Utils
	import { toComboBoxOption } from "../../utils";

	// Types
	import type { ComboBoxOption, Props } from "./types";

	// Props
	let {
		className = "",
		defaultSelected,
		disabled,
		label,
		onSelectedChange,
		options,
		placeholder,
		required
	}: Props = $props();

	// MeltUI
	const {
		elements: { menu, input, option: meltOption, label: meltLabel },
		states: { open, inputValue, touchedInput, selected },
		helpers: { isSelected }
	} = createCombobox<ComboBoxOption>({
		defaultSelected,
		disabled,
		forceVisible: true,
		onSelectedChange,
		required
	});

	// Refs
	let InputRef = $state<HTMLInputElement | null>(null);

	// State
	let receivedFocus = $state(false);

	// Effects
	$effect(() => {
		if (!$open) {
			$inputValue = $selected?.label ?? "";
		}
	});

	$effect(() => {
		if (!$inputValue) {
			$selected = undefined;
		}
	});

	// Derived
	let filteredOptions = $derived(
		$touchedInput
			? options.filter(({ label, value }) => {
					const normalizedInput = $inputValue.toLowerCase();
					return (
						label?.toLowerCase().includes(normalizedInput) ||
						value.toLowerCase().includes(normalizedInput)
					);
				})
			: options
	);
</script>

<div class={className}>
	<div class={ContainerStyles}>
		<input
			use:melt={$input}
			bind:this={InputRef}
			class={InputStyles({ hasValue: !!$inputValue, receivedFocus })}
			onfocus={() => (receivedFocus = true)}
			name={label}
			{placeholder}
			{required}
		/>
		<!-- svelte-ignore a11y_label_has_associated_control - $label contains the 'for' attribute -->
		<label use:melt={$meltLabel} class={LabelStyles}>
			{label}
		</label>
		<button
			aria-label="Show Suggestions"
			class={TriggerStyles}
			{disabled}
			onclick={() => {
				InputRef?.focus();
				$open = !$open;
			}}
			tabindex="-1"
		>
			<div class={VectorContainerStyles}>
				<i aria-hidden="true" class="fa-solid fa-sort"></i>
			</div>
		</button>
	</div>
	{#if $open}
		<ul
			class={ListStyles}
			use:melt={$menu}
			transition:fly={{ duration: 300, y: 10 }}
		>
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<div class={ScrollContainerStyles} tabindex="0">
				{#each filteredOptions as option, index (index)}
					<li
						use:melt={$meltOption(toComboBoxOption(option))}
						class={ListItemStyles}
					>
						{#if $isSelected(option)}
							<div class={CheckContainerStyles}>
								<i aria-hidden="true" class="fa-solid fa-check"
								></i>
							</div>
						{/if}
						<div class="pl-4">
							<span class="font-medium">{option.label}</span>
							<span class={ListItemValueStyles}
								>{option.value}</span
							>
						</div>
					</li>
				{:else}
					<li class={NoResultsStyles}>No results found</li>
				{/each}
			</div>
		</ul>
	{/if}
</div>
