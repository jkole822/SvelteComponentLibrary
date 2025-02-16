<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Select from "./story.svelte";
	import { SelectValidationStateEnum } from "./types.js";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Select",
		component: Select,
		tags: ["autodocs"],
		argTypes: {
			className: { control: "text" },
			triggerClass: { control: "text" },
			validationState: {
				control: "select",
				options: [
					SelectValidationStateEnum.Valid,
					SelectValidationStateEnum.Invalid
				]
			}
		}
	});
</script>

<script lang="ts">
	import { faker } from "@faker-js/faker";
	import { v4 as uuid } from "uuid";

	const generateItems = (length: number) =>
		Array.from({ length }).map((_, index) => ({
			id: uuid(),
			label: faker.lorem.words(2),
			description: faker.lorem.sentence(),
			disabled: index === 2
		}));

	const args = {
		ariaLabel: faker.lorem.word(),
		description: faker.lorem.sentence(),
		disabled: false,
		errorMessage: faker.lorem.sentence(),
		multiple: false,
		name: faker.lorem.word(),
		options: generateItems(10),
		placeholder: faker.lorem.words(2),
		required: true,
		typeaheadTimeout: 500
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="Multiple" args={{ ...args, multiple: true }} />
