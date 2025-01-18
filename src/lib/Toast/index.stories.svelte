<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Toast from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Toast",
		component: Toast,
		tags: ["autodocs"],
		argTypes: {}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" args={{}} />
