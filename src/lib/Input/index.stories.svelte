<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Input from "./story.svelte";
	import { AutoCompleteEnum, InputTypeEnum } from "./types";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Input",
		component: Input,
		tags: ["autodocs"],
		argTypes: {
			autoComplete: {
				control: { type: "select" },
				options: [
					AutoCompleteEnum.currentPassword,
					AutoCompleteEnum.email,
					AutoCompleteEnum.name,
					AutoCompleteEnum.newPassword,
					AutoCompleteEnum.off,
					AutoCompleteEnum.username
				]
			},
			disabled: { control: "boolean" },
			inputType: {
				control: {
					type: "select"
				},
				options: [
					InputTypeEnum.date,
					InputTypeEnum.email,
					InputTypeEnum.number,
					InputTypeEnum.password,
					InputTypeEnum.text
				]
			},
			max: { control: "number" },
			min: { control: "number" },
			required: { control: "boolean" },
			step: { control: "number" }
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		autoComplete: AutoCompleteEnum.off,
		name: "Lorem Ipsum",
		inputType: InputTypeEnum.text,
		required: false,
		value: ""
	}}
/>
