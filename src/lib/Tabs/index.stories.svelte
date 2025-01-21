<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { faker } from "@faker-js/faker";
	import Tabs from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Tabs",
		component: Tabs,
		tags: ["autodocs"],
		argTypes: {}
	});
</script>

<script>
	import { TabsOrientationEnum } from "./types";

	const args = {
		ariaLabel: faker.lorem.words(2)
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Horizontal" {args} />

<Story name="Vertical" args={{ orientation: TabsOrientationEnum.Vertical }} />

<Story
	name="HorizontalWithClass"
	args={{
		...args,
		className: "mx-auto overflow-hidden rounded-md sm:w-[500px]"
	}}
/>

<Story
	name="VerticalWithClass"
	args={{
		...args,
		className: "mx-auto overflow-hidden rounded-md sm:w-[500px]",
		orientation: TabsOrientationEnum.Vertical
	}}
/>
