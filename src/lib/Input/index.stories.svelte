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
			max: { control: "number" },
			min: { control: "number" },
			required: { control: "boolean" },
			type: {
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
			}
		}
	});
</script>

<script lang="ts">
	import { faker } from "@faker-js/faker";
	import { v4 as uuid } from "uuid";

	const args = {
		autoComplete: AutoCompleteEnum.off,
		id: uuid(),
		name: faker.lorem.word(),
		required: true,
		type: InputTypeEnum.text
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story name="WithClass" args={{ ...args, className: "sm:w-72" }} />
