<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Slider from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Slider",
		component: Slider,
		tags: ["autodocs"],
		argTypes: {}
	});
</script>

<script lang="ts">
	import { faker } from "@faker-js/faker";
	import { v4 as uuid } from "uuid";

	const args = {
		defaultValue: [30],
		id: uuid(),
		label: faker.lorem.words(2),
		max: 100,
		min: 0,
		step: 1
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story
	name="Multi Value"
	args={{
		...args,
		defaultValue: [25, 75]
	}}
/>

<Story name="WithClass" args={{ ...args, className: "mx-auto sm:w-72" }} />
