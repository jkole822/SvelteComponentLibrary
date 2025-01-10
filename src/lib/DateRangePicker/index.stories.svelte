<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import DateRangePicker from "./index.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "DateRangePicker",
		component: DateRangePicker,
		tags: ["autodocs"],
		argTypes: {}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		localeClassName: "max-w-40 mb-6",
		onValueChange: ({ next }) => {
			console.log(next);
			return next;
		}
	}}
/>
