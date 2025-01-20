<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Pagination from "./story.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Pagination",
		component: Pagination,
		tags: ["autodocs"],
		argTypes: {}
	});
</script>

<script lang="ts">
	import { faker } from "@faker-js/faker";

	const args = {
		ariaLabel: faker.lorem.word(),
		count: 100,
		defaultPage: 1,
		ellipsis,
		perPage: 10,
		siblingCount: 1
	};
</script>

{#snippet ellipsis()}
	<span class="text-stone-100">...</span>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="WithClass" args={{ ...args, className: "mx-auto" }} />
