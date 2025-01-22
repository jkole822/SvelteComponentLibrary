<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Toggle from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Toggle",
		component: Toggle,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" }
		}
	});
</script>

<script lang="ts">
	import {faker} from "@faker-js/faker";

    const args = {
        ariaLabel: faker.lorem.word(),
		disabled: false,
        solidFaIconClass: "fa-ghost"
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="WithClass" args={{ ...args, className: "mx-auto " }} />
