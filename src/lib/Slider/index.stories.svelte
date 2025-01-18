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

<script>
	import { faker } from "@faker-js/faker";
	import { v4 as uuid } from "uuid";
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		defaultValue: [30],
		id: uuid(),
		label: faker.lorem.words(2),
		max: 100,
		min: 0,
		step: 1
	}}
/>

<Story
	name="Multi Value"
	args={{
		defaultValue: [30, 50],
		id: uuid(),
		label: faker.lorem.words(2),
		max: 100,
		min: 0,
		step: 1
	}}
/>
