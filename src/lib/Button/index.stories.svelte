<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { fn } from "@storybook/test";
	import Button from "./index.svelte";
	import { ButtonVariantsEnum } from "./types";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Button",
		component: Button,
		tags: ["autodocs"],
		argTypes: {
			disabled: { control: "boolean" },
			variant: {
				control: { type: "select" },
				options: [
					ButtonVariantsEnum.fill,
					ButtonVariantsEnum.lineOne,
					ButtonVariantsEnum.lineTwo,
					ButtonVariantsEnum.outline
				]
			}
		},
		args: {
			onclick: fn()
		}
	});
</script>

{#snippet templateOne()}
	<div class="flex gap-2 items-center">
		<span>Button</span>
		<i class="fa-solid fa-arrow-right"></i>
	</div>
{/snippet}

{#snippet templateTwo()}
	<span>Button</span>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Fill"
	args={{ children: templateOne, variant: ButtonVariantsEnum.fill }}
/>

<Story
	name="Outline"
	args={{ children: templateOne, variant: ButtonVariantsEnum.outline }}
/>

<Story
	name="Line One"
	args={{ children: templateTwo, variant: ButtonVariantsEnum.lineOne }}
/>

<Story
	name="Line Two"
	args={{ children: templateTwo, variant: ButtonVariantsEnum.lineTwo }}
/>
