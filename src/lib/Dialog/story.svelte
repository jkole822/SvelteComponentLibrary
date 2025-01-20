<script lang="ts">
	// Components
	import Button from "../Button/index.svelte";
	import Dialog from "./index.svelte";
	import Input from "../Input/index.svelte";

	// Styles
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import { AutoCompleteEnum } from "../Input/types";
	import { ButtonVariantsEnum } from "../Button/types";
	import type { Props } from "./types";

	// Props
	let { children: _, id, open, ...rest }: Props = $props();

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
</script>

{#snippet children()}
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

{#snippet trigger()}
	<Button
		ariaControls={id}
		ariaExpanded={open}
		onclick={handleOpen}
		variant={ButtonVariantsEnum.fill}
		>Open Dialog
	</Button>
{/snippet}

<Dialog {...rest} {id} open={openState} {trigger}>
	{@render children()}
</Dialog>

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>Name</p>
<p class={PararaphStyles}>{name}</p>
<p class={PararaphStyles}>Username</p>
<p class={PararaphStyles}>{username}</p>
