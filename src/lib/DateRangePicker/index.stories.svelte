<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import DateRangePicker from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "DateRangePicker",
		component: DateRangePicker,
		tags: ["autodocs"],
		argTypes: {}
	});

	const args = {
		localeClassName: "mb-6 sm:w-72"
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="WithClass" args={{ ...args, className: "sm:w-96" }} />
