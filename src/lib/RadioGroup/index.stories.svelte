<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import RadioGroup from "./index.svelte";
	import { RadioGroupOrientationEnum } from "./types";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "RadioGroup",
		component: RadioGroup,
		tags: ["autodocs"],
		argTypes: {
			ariaLabel: { control: "text" },
			name: { control: "text" },
			orientation: {
				control: {
					type: "select"
				},
				options: [
					RadioGroupOrientationEnum.Horizontal,
					RadioGroupOrientationEnum.Vertical
				]
			}
		}
	});

	const options = ["Lorem", "Ipsum", "Adipiscing", "Elit"];
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		ariaLabel: "Consectetur",
		defaultValue: "Lorem",
		onValueChange: ({ next }) => {
			console.log(next);
			return next;
		},
		options
	}}
/>
