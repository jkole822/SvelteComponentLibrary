<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Popover from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Popover",
		component: Popover,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" },
			forceVisible: { control: "boolean" }
		}
	});
</script>

<script lang="ts">
	import { IconStyles } from "../../styles";

	const args = {
		buttonContent
	};
</script>

{#snippet buttonContent()}
	<span>Open Popover</span>
{/snippet}

{#snippet iconButtonContent()}
	<i aria-hidden="true" class={IconStyles}></i>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story
	name="IconButton"
	args={{ ...args, buttonContent: iconButtonContent, isIconButton: true }}
/>

<Story name="WithClass" args={{ ...args, className: "mx-auto" }} />
