<script lang="ts">
	// Packages
	import { faker } from "@faker-js/faker";
	import { v4 as uuid } from "uuid";

	// Components
	import Button from "../Button/index.svelte";
	import Input from "../Input/index.svelte";
	import Tabs from "./index.svelte";

	// Types
	import type { Props } from "./types";

	// Props
	let props: Props = $props();

	// State
	let value = $state("");
	const defaultTabId = uuid();
</script>

{#snippet children()}
	<p class="mb-5 text-neutral-200">
		{faker.lorem.sentence()}
	</p>
	<fieldset class="mb-4 flex w-full flex-col justify-start">
		<Input bind:value name={faker.lorem.words()} />
	</fieldset>
	<div class="mt-5 flex justify-end">
		<Button
			className="before:bg-[linear-gradient(135deg,_rgb(var(--color-neutral-900))_0%,_rgb(var(--color-neutral-900))_50%,_rgb(var(--color-primary-600))_50%,_rgb(var(--color-primary-500))_60%)]"
			>{faker.lorem.word()}</Button
		>
	</div>
{/snippet}

<Tabs
	{...props}
	ariaLabel={faker.lorem.words(2)}
	className="flex flex-col overflow-hidden rounded-md data-[orientation=vertical]:flex-row"
	defaultValue={defaultTabId}
	items={[
		{
			children,
			id: defaultTabId,
			label: faker.lorem.word()
		},
		{ children, id: uuid(), label: faker.lorem.word() },
		{ children, id: uuid(), label: faker.lorem.word() }
	]}
/>
