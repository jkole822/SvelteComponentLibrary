<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { faker } from "@faker-js/faker";
	import RadioGroup from "./story.svelte";
	import { RadioGroupOrientationEnum } from "./types";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "RadioGroup",
		component: RadioGroup,
		tags: ["autodocs"],
		argTypes: {
			loop: { control: "boolean" },
			orientation: {
				control: {
					type: "select"
				},
				options: [
					RadioGroupOrientationEnum.Horizontal,
					RadioGroupOrientationEnum.Vertical
				]
			},
			required: { control: "boolean" },
			selectWhenFocused: { control: "boolean" }
		}
	});

	const args = {
		name: faker.lorem.word(),
		options: Array.from({ length: 5 }).map(_ => faker.lorem.words(3))
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="WithClass" args={{ ...args, className: "mx-auto" }} />
