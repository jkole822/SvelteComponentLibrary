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

<script lang="ts">
	import { faker } from "@faker-js/faker";
	import { IconStyles } from "../../styles";
</script>

{#snippet children()}
	<span class="mr-2">{faker.lorem.word()}</span>
	<i aria-hidden="true" class={IconStyles}></i>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Fill" args={{ children, variant: ButtonVariantsEnum.fill }} />

<Story
	name="Outline"
	args={{ children, variant: ButtonVariantsEnum.outline }}
/>

<Story
	name="Line One"
	args={{ children, variant: ButtonVariantsEnum.lineOne }}
/>

<Story
	name="LineTwo"
	args={{ children, variant: ButtonVariantsEnum.lineTwo }}
/>

<Story
	name="WithClass"
	args={{ children, variant: ButtonVariantsEnum.lineTwo }}
/>
