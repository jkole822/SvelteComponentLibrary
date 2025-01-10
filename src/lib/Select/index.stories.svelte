<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Select from "./index.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Select",
		component: Select,
		tags: ["autodocs"],
		argTypes: {}
	});

	const options = {
		sweet: ["Caramel", "Chocolate", "Strawberry", "Cookies & Cream"],
		savory: ["Basil", "Bacon", "Rosemary"]
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		ariaLabel: "Flavor Selection",
		label: "Favorite Flavor",
		options,
		placeholder: "Select a flavor"
	}}
/>
