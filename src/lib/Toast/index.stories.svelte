<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Toast from "./story.svelte";
	import { ToastColorEnum } from "./types";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Toast",
		component: Toast,
		tags: ["autodocs"],
		argTypes: {}
	});

	const toastData = [
		{
			id: "success",
			color: ToastColorEnum.success,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			title: "Success"
		},
		{
			id: "error",
			color: ToastColorEnum.error,
			description: "In non purus porta, sodales odio id, iaculis felis.",
			title: "Error"
		}
	];
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" args={{ toastData }} />
