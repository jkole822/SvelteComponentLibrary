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

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" />

<Story name="WithClass" args={{ className: "sm:w-72" }} />
