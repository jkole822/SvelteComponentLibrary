<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Checkbox from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Checkbox",
		component: Checkbox,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" }
		}
	});
</script>

<script>
	import { faker } from "@faker-js/faker";

	const args = {
		checked: false,
		label: faker.lorem.words(2)
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="WithClass" args={{ ...args, className: "mx-auto " }} />
