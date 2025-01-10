<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Pagination from "./index.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Pagination",
		component: Pagination,
		tags: ["autodocs"],
		argTypes: {}
	});
</script>

{#snippet template()}
    <span class="text-stone-100">...</span>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		ariaLabel: "pagination",
		count: 100,
		defaultPage: 1,
		ellipsis: template,
		onPageChange: ({ next }) => {
			console.log(next);
			return next;
		},
		perPage: 10,
		siblingCount: 1
	}}
/>
