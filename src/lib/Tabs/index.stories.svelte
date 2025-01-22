<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Tabs from "./story.svelte";
	import { TabsOrientationEnum } from "./types";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Tabs",
		component: Tabs,
		tags: ["autodocs"],
		argTypes: {
			loop: { control: "boolean" },
			orientation: {
				control: "select",
				options: [
					TabsOrientationEnum.Horizontal,
					TabsOrientationEnum.Vertical
				]
			},
			selectWhenFocused: { control: "boolean" }
		}
	});

	const className = "mx-auto overflow-hidden rounded-md sm:w-[500px]";
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Horizontal" />

<Story name="Vertical" args={{ orientation: TabsOrientationEnum.Vertical }} />

<Story name="HorizontalWithClass" args={{ className }} />

<Story
	name="VerticalWithClass"
	args={{
		className,
		orientation: TabsOrientationEnum.Vertical
	}}
/>
