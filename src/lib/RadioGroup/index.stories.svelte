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

	const args = {
		name: faker.lorem.word(),
		options
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="WithClass" args={{ ...args, className: "mx-auto" }} />
