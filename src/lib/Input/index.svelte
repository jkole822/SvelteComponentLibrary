<script lang="ts">
	// Styles
	import {
		CharStyles,
		FormControlStyles,
		InputStyles,
		LabelStyles
	} from "./styles";

	// Types
	import { InputTypeEnum } from "./types";
	import type { Props } from "./types";

	// Props
	let {
		className = "",
		id,
		name,
		type = InputTypeEnum.text,
		value = $bindable(),
		...props
	}: Props = $props();

	// State
	let receivedFocus = $state(false);

	// Derived
	let characters = $derived(
		name.split("").map((char, i) => ({ char, delay: (i + 1) * 50 }))
	);

	let hasValue = $derived(!!value || value === 0);
</script>

{#snippet splitCharacters(char: string, delay: number)}
	{#if char === " "}
		<span style:transition-delay={`${delay}ms`}>&nbsp;</span>
	{:else}
		<span class={CharStyles} style:transition-delay={`${delay}ms`}
			>{char}</span
		>
	{/if}
{/snippet}

<div class={`${className} ${FormControlStyles}`}>
	<input
		bind:value
		class={InputStyles({ hasValue, receivedFocus })}
		onfocus={() => (receivedFocus = true)}
		{id}
		{type}
		{...props}
	/>
	<label class={LabelStyles} for={id}>
		{#each characters as char}
			{@render splitCharacters(char.char, char.delay)}
		{/each}
	</label>
</div>
