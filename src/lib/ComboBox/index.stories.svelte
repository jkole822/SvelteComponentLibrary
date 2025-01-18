<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { v4 as uuid } from "uuid";
	import ComboBox from "./index.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "ComboBox",
		component: ComboBox,
		tags: ["autodocs"],
		argTypes: {}
	});

	const options = [
		{
			id: uuid(),
			title: faker.lorem.word(),
			disabled: false
		},
		{
			id: uuid(),
			title: faker.lorem.words(2),
			disabled: false
		},
		{
			id: uuid(),
			title: faker.lorem.words(3),
			disabled: false
		},
		{
			id: uuid(),
			title: faker.lorem.words(2),
			disabled: false
		},
		{
			id: uuid(),
			title: faker.lorem.word(),
			disabled: false
		},
		{
			id: uuid(),
			title: faker.lorem.words(2),
			disabled: false
		},
		{
			id: uuid(),
			title: faker.lorem.word(),
			disabled: true
		},
		{
			id: uuid(),
			title: faker.lorem.words(3),
			disabled: false
		},
		{
			id: uuid(),
			title: faker.lorem.words(1),
			disabled: false
		},
		{
			id: uuid(),
			title: faker.lorem.words(2),
			disabled: false
		}
	];
</script>

<script>
	import { faker } from "@faker-js/faker";
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		label: faker.lorem.words(2),
		onSelectedChange: ({ next }) => {
			console.log(next);
			return next;
		},
		options,
		placeholder: faker.lorem.words(2)
	}}
/>
