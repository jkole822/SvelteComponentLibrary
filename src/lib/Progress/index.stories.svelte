<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Progress from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Progress",
		component: Progress,
		tags: ["autodocs"],
		argTypes: {}
	});
</script>

<script lang="ts">
	import { faker } from "@faker-js/faker";
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" args={{ ariaLabel: faker.lorem.word() }} />

<Story
	name="WithClass"
	args={{ ariaLabel: faker.lorem.word(), className: "sm:w-72" }}
/>
