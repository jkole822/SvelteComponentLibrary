<script lang="ts">
	// Packages
	import { getters, Select } from "melt/builders";
	import { slide } from "svelte/transition";
	import { size } from "@floating-ui/dom";

	// Styles
	import {
		CheckContainerStyles,
		ContainerStyles,
		ContentStyles,
		LabelStyles,
		MenuStyles,
		TriggerStyles,
		VectorContainerStyles
	} from "./styles";
	import {
		ListItemDescriptionStyles,
		ListItemLabelStyles,
		ListItemStyles,
		MultiSelectionCloseButtonStyles,
		SelectionItemCloseButtonStyles,
		SelectionItemStyles
	} from "../ComboBox/styles";
	import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

	// Types
	import type { Props } from "./types";
	import { SelectValidationStateEnum } from "./types";

	// Props
	let {
		ariaLabel,
		className = "",
		description,
		disabled,
		errorMessage,
		name,
		options,
		onValueChange,
		placeholder,
		required,
		triggerClass = "",
		validationState = SelectValidationStateEnum.Valid,
		value,
		...rest
	}: Props = $props();

	// MeltUI
	const select = new Select({
		...getters(rest),
		computePositionOptions: {
			middleware: [
				size({
					apply({ availableWidth, availableHeight, elements }) {
						Object.assign(elements.floating.style, {
							maxWidth: `${Math.max(0, availableWidth)}px`,
							maxHeight: `${Math.max(0, availableHeight)}px`,
							width: `${elements.reference.getBoundingClientRect().width}px`
						});
					}
				})
			],
			placement: "bottom"
		},
		onValueChange,
		value
	});

	// State
	let receivedFocus = $state(false);
	let validation = $state(SelectValidationStateEnum.Valid);

	// Derived
	const derivedValue = $derived(
		select.multiple
			? null
			: options.find(option => option.id === select.value)?.label
	);

	const derivedValues = $derived(
		select.multiple && select.value && Array.from(select.value).length > 0
			? options.filter(option => select.value?.has(option.id))
			: null
	);

	const derivedValidationState = $derived(
		validation === SelectValidationStateEnum.Valid &&
			validationState === SelectValidationStateEnum.Valid
			? SelectValidationStateEnum.Valid
			: SelectValidationStateEnum.Invalid
	);

	// Effects
	$effect(() => {
		if (select.multiple) {
			if (
				receivedFocus &&
				required &&
				(!derivedValues || derivedValues.length === 0)
			) {
				validation = SelectValidationStateEnum.Invalid;
			} else {
				validation = SelectValidationStateEnum.Valid;
			}
		} else {
			if (receivedFocus && required && !derivedValue) {
				validation = SelectValidationStateEnum.Invalid;
			} else {
				validation = SelectValidationStateEnum.Valid;
			}
		}
	});
</script>

<div class={className}>
	<div class={`${triggerClass} ${ContainerStyles}`}>
		<label class={LabelStyles} for={select.trigger.id}>
			{name}
		</label>

		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<div
			{...select.trigger}
			{...disabled
				? {
						onclick: e => e.preventDefault()
					}
				: {}}
			aria-label={ariaLabel}
			class={TriggerStyles({
				receivedFocus: receivedFocus,
				validationState: derivedValidationState
			})}
			data-disabled={disabled}
			tabindex="0"
		>
			{#if derivedValues}
				<div class="flex gap-2.5 flex-wrap w-[calc(100%-5.5rem)]">
					{#each derivedValues as option}
						<span
							class={SelectionItemStyles}
							onpointerdown={e => e.stopPropagation()}
						>
							<span>{option.label}</span>
							<button
								aria-label="Remove Selection"
								class={SelectionItemCloseButtonStyles}
								onclick={() => select.value?.delete(option.id)}
							>
								<i aria-hidden="true" class="fa-solid fa-xmark"
								></i>
							</button>
						</span>
					{/each}
				</div>

				{#if derivedValues.length > 0}
					<button
						aria-label="Clear All Selections"
						class={MultiSelectionCloseButtonStyles}
						onclick={() => select.value?.clear()}
						onpointerdown={e => e.stopPropagation()}
					>
						<i aria-hidden="true" class="fa-solid fa-xmark"></i>
					</button>
				{/if}
			{:else if derivedValue}
				{derivedValue}
			{:else}
				<span class="text-neutral-500">{placeholder}</span>
			{/if}

			<div
				class={VectorContainerStyles({
					isOpen: select.open,
					receivedFocus: receivedFocus,
					validationState: derivedValidationState
				})}
				role="presentation"
			>
				<i aria-hidden="true" class="fa-solid fa-chevron-up"></i>
			</div>
		</div>
	</div>

	{#if description || errorMessage}
		<div class="mt-2">
			{#if description}
				<div class={DescriptionStyles}>
					{description}
				</div>
			{/if}
			{#if errorMessage && derivedValidationState === SelectValidationStateEnum.Invalid}
				<div class={ErrorMessageStyles}>
					{errorMessage}
				</div>
			{/if}
		</div>
	{/if}

	{#if select.open}
		<div
			{...select.content}
			class={ContentStyles}
			onblur={() => (receivedFocus = true)}
			transition:slide={{ duration: 150 }}
		>
			<ul class={MenuStyles}>
				{#each options as { description, disabled, id, label }}
					{@const selectOption = select.getOption(id)}
					<li
						{...selectOption}
						class={ListItemStyles}
						data-disabled={disabled}
						{...disabled
							? {
									onclick: e => e.preventDefault()
								}
							: {}}
					>
						<div class={ListItemLabelStyles}>
							{label}
						</div>
						{#if description}
							<div class={ListItemDescriptionStyles}>
								{description}
							</div>
						{/if}
						{#if selectOption["aria-selected"]}
							<div class={CheckContainerStyles}>
								<i aria-hidden="true" class="fa-solid fa-check"
								></i>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
