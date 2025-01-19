<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { faker } from "@faker-js/faker";
	import Accordion from "./index.svelte";
	import { HeadingLevelEnum } from "../../types";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Accordion",
		component: Accordion,
		tags: ["autodocs"],
		argTypes: {
			headingLevel: {
				control: { type: "select" },
				options: [
					HeadingLevelEnum.One,
					HeadingLevelEnum.Two,
					HeadingLevelEnum.Three,
					HeadingLevelEnum.Four,
					HeadingLevelEnum.Five,
					HeadingLevelEnum.Six
				]
			}
		}
	});

	const items = [
		{
			id: "item-1",
			title: faker.lorem.words(3),
			description: faker.lorem.sentence()
		},
		{
			id: "item-2",
			title: faker.lorem.words(2),
			description: faker.lorem.sentence()
		},
		{
			id: "item-3",
			title: faker.lorem.words(4),
			description: faker.lorem.sentence()
		}
	];

	const args = {
		defaultValue: "item-1",
		headingLevel: HeadingLevelEnum.One,
		items
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="WithClass" args={{ ...args, className: "sm:w-72" }} />
