<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Tooltip from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Tooltip",
		component: Tooltip,
		tags: ["autodocs"],
		argTypes: {}
	});
</script>

<script lang="ts">
	import { faker } from "@faker-js/faker";

	const args = {
		children,
		text: faker.lorem.sentence()
	};
</script>

{#snippet children()}
	<div></div>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="WithTriggerClass" args={{ ...args, triggerClass: "mx-auto" }} />
