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

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		defaultValue: [30],
		id: "lorem",
		label: "Lorem Ipsum",
		max: 100,
		min: 0,
		step: 1
	}}
/>

<Story
	name="Multi Value"
	args={{
		defaultValue: [30, 50],
		id: "lorem",
		label: "Lorem Ipsum",
		max: 100,
		min: 0,

		step: 1,
		useMultiValue: true
	}}
/>
