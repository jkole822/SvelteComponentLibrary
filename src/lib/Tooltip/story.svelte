<script lang="ts">
	// Packages
	import { faker } from "@faker-js/faker";
	import { v4 as uuid } from "uuid";

	// Components
	import Input from "../Input/index.svelte";
	import Popover from "../Popover/index.svelte";
	import Tooltip from "./index.svelte";

	// Styles
	import { IconStyles, PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import { AutoCompleteEnum } from "../Input/types";
	import type { Props } from "./types";

	// Props
	let { children: _, ...rest }: Props = $props();

	// State
	let openPopover = $state(false);
	let value = $state("");

	// Helpers
	const handlePopoverOpenChange = (value: boolean) => {
		openPopover = value;
	};
</script>

{#snippet buttonContent()}
	<i aria-hidden="true" class={IconStyles}></i>
{/snippet}

{#snippet popoverContent()}
	<h1 class="mb-6 font-bold text-neutral-200 w-[85%]">
		{faker.lorem.words(2)}
	</h1>
	<p class="text-neutral-400 text-sm">{faker.lorem.sentence()}</p>
	<Input
		autoComplete={AutoCompleteEnum.name}
		className="mt-6 text-neutral-200"
		bind:value
		id={uuid()}
		name={faker.lorem.word()}
		required
	/>
{/snippet}

<Tooltip {...rest}>
	<Popover
		ariaLabel={faker.lorem.word()}
		isIconButton
		onOpenChange={handlePopoverOpenChange}
		open={openPopover}
		{buttonContent}
		{popoverContent}
	/>
</Tooltip>

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>{value}</p>
