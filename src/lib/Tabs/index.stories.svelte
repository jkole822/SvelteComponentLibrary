<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
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
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" />

<Story name="Vertical" args={{ orientation: TabsOrientationEnum.Vertical }} />
