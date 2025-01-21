<script lang="ts">
	// Packages
	import { melt } from "@melt-ui/svelte";

	// Components
	import Tree from "./index.svelte";

	// Styles
	import { LinkStyles, ListItemStyles, ListStyles } from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let { activeHeadingIdxs, item, level = 1, tree = [] }: Props = $props();
</script>

<ul class="{ListStyles} {level !== 1 ? 'pl-4' : ''}">
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
			<li class={ListItemStyles}>
				<a
					use:melt={$item(heading.id)}
					class={LinkStyles}
					href="#{heading.id}"
				>
					<!--
                      Along with the heading title, the original heading node
                      is also passed down, so you can display headings
                      however you want.
                    -->
					{@html heading.node.innerHTML}
				</a>
				{#if heading.children && heading.children.length}
					<Tree
						level={level + 1}
						tree={heading.children}
						{activeHeadingIdxs}
						{item}
					/>
				{/if}
			</li>
		{/each}
	{/if}
</ul>
