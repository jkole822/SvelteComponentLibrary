<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Switch from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Switch",
		component: Switch,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" }
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" args={{ checked: false, label: "Lorem Ipsum" }} />
