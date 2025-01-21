<script lang="ts">
	// Packages
	import { faker } from "@faker-js/faker";
	import { v4 as uuid } from "uuid";

	// Components
	import Button from "../Button/index.svelte";
	import Input from "../Input/index.svelte";
	import Tabs from "./index.svelte";

	// Styles
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";
	import type { Snippet } from "svelte";

	// Props
	let props: Props = $props();

	// State
	let valueOne = $state("");
	let valueTwo = $state("");
	let valueThree = $state("");
	const defaultTabId = uuid();
</script>

{#snippet content(input: Snippet)}
	<p class="mb-5 text-neutral-200">
		{faker.lorem.sentence()}
	</p>
	<fieldset class="mb-4 flex w-full flex-col justify-start">
		{@render input()}
	</fieldset>
	<div class="mt-5 flex justify-end">
		<Button
			className="before:bg-[linear-gradient(135deg,_rgb(var(--color-neutral-900))_0%,_rgb(var(--color-neutral-900))_50%,_rgb(var(--color-primary-600))_50%,_rgb(var(--color-primary-500))_60%)]"
			>{faker.lorem.word()}</Button
		>
	</div>
{/snippet}

{#snippet tabContentOne()}
	{#snippet inputOne()}
		<Input bind:value={valueOne} name={faker.lorem.words()} />
	{/snippet}
	{@render content(inputOne)}
{/snippet}

{#snippet tabContentTwo()}
	{#snippet inputTwo()}
		<Input bind:value={valueTwo} name={faker.lorem.words()} />
	{/snippet}
	{@render content(inputTwo)}
{/snippet}

{#snippet tabContentThree()}
	{#snippet inputThree()}
		<Input bind:value={valueThree} name={faker.lorem.words()} />
	{/snippet}
	{@render content(inputThree)}
{/snippet}

<Tabs
	{...props}
	defaultValue={defaultTabId}
	items={[
		{
			children: tabContentOne,
			id: defaultTabId,
			label: faker.lorem.word()
		},
		{ children: tabContentTwo, id: uuid(), label: faker.lorem.word() },
		{ children: tabContentThree, id: uuid(), label: faker.lorem.word() }
	]}
/>

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>Value One: {valueOne}</p>
<p class={PararaphStyles}>Value Two: {valueTwo}</p>
<p class={PararaphStyles}>Value Three: {valueThree}</p>
