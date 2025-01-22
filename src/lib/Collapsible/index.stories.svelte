<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Collapsible from "./story.svelte";
	import { faker } from "@faker-js/faker";
	import { IconStyles } from "../../styles.js";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Collapsible",
		component: Collapsible,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" }
		}
	});
</script>

<script lang="ts">
	const args = {
		buttonContent,
		disabled: false
	};
</script>

{#snippet buttonContent()}
	<div>
		<span class="mr-2">{faker.lorem.word()}</span>
		<i aria-hidden="true" class={IconStyles}></i>
	</div>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story
	name="WithClass"
	args={{ ...args, className: "mx-auto w-[18rem] max-w-full sm:w-[25rem]" }}
/>
