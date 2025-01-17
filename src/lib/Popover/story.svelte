<script lang="ts">
	// Components
	import Popover from "./index.svelte";
	import Input from "../Input/index.svelte";

	// Types
	import type { Props } from "./types";
	import { AutoCompleteEnum } from "../Input/types";

	// Props
	let { isIconButton, ...rest }: Props = $props();

	// State
	let name = $state("");
	let username = $state("");
</script>

{#snippet buttonContent()}
	{#if isIconButton}
		<i aria-hidden="true" class="fa-solid fa-ghost"></i>
	{:else}
		<span>Open Popover</span>
	{/if}
{/snippet}

{#snippet popoverContent()}
	<Input autoComplete={AutoCompleteEnum.name} bind:value={name} id="name" name="Name" />
	<Input
		autoComplete={AutoCompleteEnum.username}
		bind:value={username}
		className="mt-4"
		id="username"
		name="Username"
	/>
{/snippet}

<Popover {...rest} {buttonContent} {isIconButton} {popoverContent} />

<div class="font-bold mb-1 mt-4 text-orange-400 tracking-wide uppercase">
	Binding Check
</div>
<div class="text-stone-200">Name</div>
<div class="text-stone-400 mb-1">{name}</div>
<div class="text-stone-200">Username</div>
<div class="text-stone-400">{username}</div>
