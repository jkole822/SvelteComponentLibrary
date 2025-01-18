<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Select from "./index.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Select",
		component: Select,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" }
		}
	});

	const options = {
		[faker.lorem.word()]: [
			faker.lorem.words(2),
			faker.lorem.word(),
			faker.lorem.word(),
			faker.lorem.words(3)
		],
		[faker.lorem.word()]: [
			faker.lorem.word(),
			faker.lorem.words(3),
			faker.lorem.word()
		]
	};
</script>

<script>
	import { faker } from "@faker-js/faker";
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		ariaLabel: faker.lorem.word(),
		label: faker.lorem.words(2),
		options,
		onSelectedChange: ({ next }) => {
			console.log(next);
			return next;
		},
		placeholder: faker.lorem.words(3)
	}}
/>
