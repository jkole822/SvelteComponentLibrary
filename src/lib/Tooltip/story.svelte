<script lang="ts">
	// Packages
	import { faker } from "@faker-js/faker";

	// Components
	import Input from "../Input/index.svelte";
	import Popover from "../Popover/index.svelte";
	import Tooltip from "./index.svelte";

	// Types
	import type { Props } from "./types";
	import { AutoCompleteEnum } from "../Input/types";

	// Props
	let { children: _, ...rest }: Props = $props();

	// State
	let name = $state("");
	let username = $state("");
</script>

{#snippet buttonContent()}
	<i aria-hidden class="fa-solid fa-ghost"></i>
{/snippet}

{#snippet popoverContent()}
	<Input
		autoComplete={AutoCompleteEnum.name}
		bind:value={name}
		id="name"
		name="Name"
	/>
	<Input
		autoComplete={AutoCompleteEnum.username}
		bind:value={username}
		className="mt-4"
		id="username"
		name="Username"
	/>
{/snippet}

<Tooltip {...rest}>
	<Popover
		ariaLabel={faker.lorem.word()}
		{buttonContent}
		{popoverContent}
		isIconButton
	/>
</Tooltip>
