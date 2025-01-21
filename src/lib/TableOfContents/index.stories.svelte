<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import TableOfContents from "./story.svelte";
	import { ActiveTypeEnum } from "./types.js";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "TableOfContents",
		component: TableOfContents,
		tags: ["autodocs"],
		argTypes: {
			activeType: {
				control: "select",
				options: [
					ActiveTypeEnum.All,
					ActiveTypeEnum.AllParents,
					ActiveTypeEnum.Lowest,
					ActiveTypeEnum.Highest,
					ActiveTypeEnum.LowestParents,
					ActiveTypeEnum.HighestParents,
					ActiveTypeEnum.None
				]
			}
		},
		parameters: {
			layout: "fullscreen"
		}
	});
</script>

<script lang="ts">
	const args = {
		activeType: ActiveTypeEnum.Highest,
		containerId: "toc-builder-preview",
		popoverTriggerId: "popover-trigger"
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Basic" {args} />

<Story
	name="ExcludedHeadings"
	args={{ ...args, exclude: ["h4", "h5", "h6"] }}
/>
