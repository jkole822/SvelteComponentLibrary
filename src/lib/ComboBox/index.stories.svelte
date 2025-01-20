<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import ComboBox from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "ComboBox",
		component: ComboBox,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" },
			required: { control: "boolean" }
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

	const args = {
		label: faker.lorem.word(),
		options: generateOptions(20),
		placeholder: faker.lorem.words(2),
		required: true
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="WithClass" args={{ ...args, className: "sm:w-72" }} />
