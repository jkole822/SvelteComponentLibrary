<script lang="ts">
	// Components
	import Dialog from "./index.svelte";
	import Input from "../Input/index.svelte";

	// Types
	import type { Props } from "./types";
	import { AutoCompleteEnum } from "../Input/types";
	import Button from "../Button/index.svelte";
	import { ButtonVariantsEnum } from "../Button/types";

	// Props
	let { id, open, ...rest }: Props = $props();

	// State
	let openState = $state(false);
	let name = $state("");
	let username = $state("");

	// Effects
	$effect(() => {
		openState = open;
	});

	// Helpers
	const handleOpen = () => {
		openState = !openState;
	};

	const handleSubmit = () => {
		console.log("Name:", name);
		console.log("Username:", username);
	};
</script>

{#snippet dialogContent()}
	<Input autoComplete={AutoCompleteEnum.name} bind:value={name} name="Name" />
	<Input
		autoComplete={AutoCompleteEnum.username}
		bind:value={username}
		className="mt-4"
		name="Username"
	/>
{/snippet}

{#snippet trigger()}
	<Button
		ariaControls={id}
		ariaExpanded={open}
		onclick={handleOpen}
		variant={ButtonVariantsEnum.fill}
		>Open Dialog
	</Button>
{/snippet}

<Dialog
	{...rest}
	{dialogContent}
	{id}
	onsubmit={handleSubmit}
	open={openState}
	{trigger}
/>

<div class="font-bold mb-1 mt-4 text-orange-400 tracking-wide uppercase">
	Binding Check
</div>
<div class="text-stone-200">Name</div>
<div class="text-stone-400 mb-1">{name}</div>
<div class="text-stone-200">Username</div>
<div class="text-stone-400">{username}</div>
