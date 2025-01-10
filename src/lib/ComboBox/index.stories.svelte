<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import ComboBox from "./index.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "ComboBox",
		component: ComboBox,
		tags: ["autodocs"],
		argTypes: {}
	});

	const options = [
		{
			id: "Kentaro Miura",
			title: "Berserk",
			disabled: false
		},
		{
			id: "ONE",
			title: "Mob Psycho 100",
			disabled: false
		},
		{
			id: "Hajime Isayama",
			title: "Attack on Titan",
			disabled: false
		},
		{
			id: "Junji Ito",
			title: "Uzumaki",
			disabled: false
		},
		{
			id: "Yomi Sarachi",
			title: "Steins Gate",
			disabled: false
		},
		{
			id: "Tite Kubo",
			title: "Bleach",
			disabled: false
		},
		{
			id: "Masashi Kishimoto",
			title: "Naruto",
			disabled: true
		},
		{
			id: "Katsura Hoshino",
			title: "D.Gray Man",
			disabled: false
		},
		{
			id: "Tsugumi Ohba",
			title: "Death Note",
			disabled: false
		},
		{
			id: "Hiromu Arakawa",
			title: "Fullmetal Alchemist",
			disabled: false
		}
	];
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{
		label: "Manga",
		onSelectedChange: ({ next }) => {
			console.log(next);
			return next;
		},
		options,
		placeholder: "Select Your Favorite Manga"
	}}
/>
