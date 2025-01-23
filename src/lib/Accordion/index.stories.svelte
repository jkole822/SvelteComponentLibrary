<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
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
</script>

<script lang="ts">
	import { faker } from "@faker-js/faker";

	const generateItems = (length: number) =>
		Array.from({ length }).map((_, index) => ({
			id: `item-${index + 1}`,
			title: faker.lorem.words(3),
			description: faker.lorem.sentence(),
			disabled: index === 2
		}));

	const args = {
		defaultValue: "item-1",
        disabled: false,
        forceVisible: false,
		headingLevel: HeadingLevelEnum.One,
		items: generateItems(5),
        multiple: false,
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="WithClass" args={{ ...args, className: "sm:w-72" }} />
