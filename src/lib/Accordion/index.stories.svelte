<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Accordion from "./index.svelte";
	import { HeadingLevelEnum } from "../../types";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Accordion",
		component: Accordion,
		tags: ["autodocs"],
		argTypes: {
			headingLevel: {
				control: { type: "select" },
				options: [
					HeadingLevelEnum.One,
					HeadingLevelEnum.Two,
					HeadingLevelEnum.Three,
					HeadingLevelEnum.Four,
					HeadingLevelEnum.Five,
					HeadingLevelEnum.Six
				]
			}
		}
	});

	const items = [
		{
			id: "item-1",
			title: "Ultricies at molestie",
			description:
				"Lorem ipsum dolor sit amet consectetur adipiscing elit natoque, porta sem massa est diam tristique eu, litora enim semper pharetra facilisi ridiculus dis."
		},
		{
			id: "item-2",
			title: "Torquent phasellus",
			description:
				"Praesent lectus at cum curabitur egestas mollis suscipit rutrum convallis torquent, congue quisque a purus odio erat et elementum hendrerit venenatis, pulvinar cras lacinia nostra gravida porta dictumst libero fames."
		},
		{
			id: "item-3",
			title: "Lacus fringilla dui aenean",
			description:
				"Ultricies at molestie rhoncus imperdiet non mattis senectus malesuada pharetra eleifend."
		}
	];
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Basic"
	args={{ defaultValue: "item-1", headingLevel: HeadingLevelEnum.One, items }}
/>
