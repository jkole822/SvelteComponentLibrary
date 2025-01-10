<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Tooltip from "./index.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Tooltip",
		component: Tooltip,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" },
			nonInteractive: { control: "boolean" }
		}
	});
</script>

{#snippet template()}
	<i class="fa-solid fa-ghost" />
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		ariaLabel: "Consectetur",
		children: template,
		text: "Consectetur adipisicing elit."
	}}
/>
