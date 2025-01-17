<script lang="ts">
	// Packages
	import { createCombobox, melt } from "@melt-ui/svelte";
	import { fly } from "svelte/transition";

	// Styles
	import {
		CheckContainerStyles,
		ContainerStyles,
		FormControlStyles,
		InputStyles,
		LabelStyles,
		ListStyles,
		ListItemStyles,
		ListItemValueStyles,
		NoResultsStyles,
		ScrollContainerStyles,
		VectorContainerStyles
	} from "./styles";

	// Types
	import type { ComboboxOptionProps } from "@melt-ui/svelte";
	import type { ComboBoxOption, Props } from "./types";

	// Props
	let {
		className = "",
		defaultSelected,
		label,
		onSelectedChange,
		options,
		placeholder
	}: Props = $props();

	// MeltUI
	const {
		elements: { menu, input, option: meltOption, label: meltLabel },
		states: { open, inputValue, touchedInput, selected },
		helpers: { isSelected }
	} = createCombobox<string>({
		forceVisible: true,
		onSelectedChange,
		defaultSelected
	});

	// Effects
	$effect(() => {
		if (!$open) {
			$inputValue = $selected?.label ?? "";
		}
	});

	// Helpers
	const toOption = (
		option: ComboBoxOption
	): ComboboxOptionProps<ComboBoxOption> => ({
		value: option,
		label: option.label ?? option.title ?? "",
		disabled: option.disabled
	});

	// Derived
	let filteredOptions = $derived(
		$touchedInput
			? options.filter(({ id, label, title, value }) => {
					const normalizedInput = $inputValue.toLowerCase();
					return (
						label?.toLowerCase().includes(normalizedInput) ||
						title?.toLowerCase().includes(normalizedInput) ||
						(!!value &&
							String(value)
								.toLowerCase()
								.includes(normalizedInput)) ||
						(!!id &&
							String(id).toLowerCase().includes(normalizedInput))
					);
				})
			: options
	);
</script>

<div class={`${className} ${ContainerStyles}`}>
	<div class={FormControlStyles}>
		<!-- svelte-ignore a11y_label_has_associated_control - $label contains the 'for' attribute -->
		<label use:melt={$meltLabel}>
			<span class={LabelStyles}>{label}</span>
		</label>
		<div class="relative">
			<input use:melt={$input} class={InputStyles} {placeholder} />
			<div class={VectorContainerStyles({ isOpen: $open })}>
				<i class="fa-solid fa-chevron-up"></i>
			</div>
		</div>
	</div>
	{#if $open}
		<ul
			class={ListStyles}
			use:melt={$menu}
			transition:fly={{ duration: 150, y: -5 }}
		>
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<div class={ScrollContainerStyles} tabindex="0">
				{#each filteredOptions as option, index (index)}
					<li
						use:melt={$meltOption(toOption(option))}
						class={ListItemStyles}
					>
						{#if $isSelected(option)}
							<div class={CheckContainerStyles}>
								<i class="fa-solid fa-check"></i>
							</div>
						{/if}
						<div class="pl-4">
							<span class="font-medium"
								>{option.label ?? option.title ?? ""}</span
							>
							<span class={ListItemValueStyles}
								>{option.value ?? option.id ?? ""}</span
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
