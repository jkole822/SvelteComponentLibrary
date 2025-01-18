<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Popover from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Popover",
		component: Popover,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" },
			isIconButton: { control: "boolean" }
		}
	});
</script>

<script>
	import { faker } from "@faker-js/faker";
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" args={{ ariaLabel: faker.lorem.word() }} />
