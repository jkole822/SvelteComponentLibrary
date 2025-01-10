<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { fn } from "@storybook/test";
	import Dialog from "./story.svelte";
	import { ButtonVariantsEnum } from "../Button/types";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Dialog",
		component: Dialog,
		tags: ["autodocs"],
		argTypes: {},
		args: {
			onsubmit: fn()
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		buttonText: "Open Dialog",
		buttonVariant: ButtonVariantsEnum.fill,
		cancelButtonText: "Cancel",
		description:
			"Make changes to your profile here. Click save when you're done.",
		id: "dialog",
		submitButtonText: "Save Changes",
		title: "Edit profile"
	}}
/>
