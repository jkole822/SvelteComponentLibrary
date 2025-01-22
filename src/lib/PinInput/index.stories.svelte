<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import PinInput from "./story.svelte";
	import { PinInputEnum } from "./types.js";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "PIN Input",
		component: PinInput,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" },
			mask: { control: "boolean" },
			placeholder: { control: "text" },
			type: {
				control: "select",
				options: [
					PinInputEnum.AlphaNum,
					PinInputEnum.Num,
					PinInputEnum.Text
				]
			}
		}
	});
</script>

<script lang="ts">
	const args = {
		maxLength: 5,
		type: PinInputEnum.AlphaNum
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story
	name="Masked"
	args={{
		...args,
		mask: true
	}}
/>

<Story name="WithClass" args={{ ...args, className: "justify-center" }} />
