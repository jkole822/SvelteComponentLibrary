<script lang="ts">
	// Components
	import Select from "./index.svelte";

	// Styles
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props, SelectItem } from "./types";

	// Props
	let { defaultValue, multiple, options, ...rest }: Props = $props();

	// State
	let value = $state(defaultValue);

	// Derived
	const derivedValue = $derived(
		multiple ? null : options.find(option => option.id === value)
	);

	const derivedValues = $derived(
		multiple && value && Array.from(value).length > 0
			? options.filter(option => value?.has(option.id))
			: null
	);
</script>

{#snippet bindingCheck(item: SelectItem | undefined)}
	<p class={PararaphStyles}>
		Label: {item?.label ?? derivedValue?.label ?? ""}
	</p>
	<p class={PararaphStyles}>
		Description: {item?.description ?? derivedValue?.description ?? ""}
	</p>
{/snippet}

<Select
	{...rest}
	onValueChange={selected => (value = selected)}
	{multiple}
	{options}
	{value}
/>
<p class={SubHeadingStyles}>Binding Check</p>
{#if multiple && derivedValues}
	{#each derivedValues as item}
		{@render bindingCheck(item)}
	{/each}
{:else}
	{@render bindingCheck(undefined)}
{/if}
