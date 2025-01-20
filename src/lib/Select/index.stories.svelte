<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Select from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Select",
		component: Select,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" }
		}
	});
</script>

<script lang="ts">
	import { faker } from "@faker-js/faker";

	const generateOptions = (numOptions: number) => {
		let options = [];

		for (let i = 0; i < numOptions; i++) {
			options.push({
				label: faker.lorem.word(),
				value: faker.lorem.words(5),
				disabled: Math.floor(Math.random() * 2) === 0
			});
		}

		return options;
	};

	const generateGroupOptions = (
		numGroups: number,
		optionsPerGroup: number
	) => {
		let options = [];

		for (let i = 0; i < numGroups; i++) {
			options.push({
				label: faker.lorem.word(),
				values: generateOptions(optionsPerGroup)
			});
		}

		return options;
	};

	const args = {
		ariaLabel: faker.lorem.word(),
		label: faker.lorem.words(2),
		options: generateOptions(20),
		placeholder: faker.lorem.words(3),
		required: true
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story
	name="GroupOptions"
	args={{ ...args, groupOptions: generateGroupOptions(3, 10) }}
/>

<Story name="WithClass" args={{ ...args, className: "sm:w-72" }} />
