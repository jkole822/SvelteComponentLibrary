<script lang="ts">
	// Components
	import Dialog from "./index.svelte";
	import Input from "../Input/index.svelte";

	// Types
	import type { Props } from "./types";
	import { AutoCompleteEnum } from "../Input/types";

	// Props
	let props: Props = $props();

	// State
	let name = $state("");
	let username = $state("");

	// Helpers
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

<Dialog {...props} {dialogContent} onsubmit={handleSubmit} />

<div class="font-bold mb-1 mt-4 text-orange-400 tracking-wide uppercase">
	Binding Check
</div>
<div class="text-stone-200">Name</div>
<div class="text-stone-400 mb-1">{name}</div>
<div class="text-stone-200">Username</div>
<div class="text-stone-400">{username}</div>
