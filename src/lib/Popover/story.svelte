<script lang="ts">
	// Packages
	import { faker } from "@faker-js/faker";
	import { v4 as uuid } from "uuid";

	// Components
	import Popover from "./index.svelte";
	import Input from "../Input/index.svelte";

	// Styles
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";
	import { AutoCompleteEnum } from "../Input/types";

	// Props
	let { isIconButton, ...rest }: Props = $props();

	// State
	let value = $state("");
</script>

{#snippet popoverContent()}
	<h1 class="mb-6 font-bold text-stone-200 w-[85%]">
		{faker.lorem.words(2)}
	</h1>
	<p class="text-stone-400 text-sm">{faker.lorem.sentence()}</p>
	<Input
		autoComplete={AutoCompleteEnum.name}
		className="mt-6"
		bind:value
		id={uuid()}
		name={faker.lorem.word()}
		required
	/>
{/snippet}

<Popover {...rest} {isIconButton} {popoverContent} />

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>{value}</p>
