<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { faker } from "@faker-js/faker";
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

	const options = [
		faker.lorem.words(3),
		faker.lorem.word(),
		faker.lorem.words(2),
		faker.lorem.word()
	];
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		ariaLabel: faker.lorem.word(),
		onValueChange: ({ next }) => {
			console.log(next);
			return next;
		},
		options
	}}
/>
