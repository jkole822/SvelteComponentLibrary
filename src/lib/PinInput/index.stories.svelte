<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import PinInput from "./index.svelte";
	import { PinInputTypeEnum } from "./types";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "PIN Input",
		component: PinInput,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" },
			type: {
				control: {
					type: "select"
				},
				options: [PinInputTypeEnum.Text, PinInputTypeEnum.Password]
			}
		}
	});
</script>

<script>
	import { faker } from "@faker-js/faker";
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		length: 5,
		name: faker.lorem.word(),
		onValueChange: ({ next }) => {
			console.log(next);
			return next;
		},
		type: PinInputTypeEnum.Text
	}}
/>
