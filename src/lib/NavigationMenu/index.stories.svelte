<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import NavigationMenu from "./index.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "NavigationMenu",
		component: NavigationMenu,
		tags: ["autodocs"],
		argTypes: {},
		parameters: {
			layout: "fullscreen"
		}
	});
</script>

<script lang="ts">
	import { faker } from "@faker-js/faker";

	const generateItems = (length: number, addImage?: boolean) =>
		Array.from({ length }).map((_, index) => ({
			description: faker.lorem.sentence(),
			disabled: index === 1,
			href: "#",
			image:
				addImage && index === 0
					? {
							alt: faker.lorem.words(3),
							src: faker.image.url({ height: 48, width: 48 }),
							title: faker.lorem.sentence()
						}
					: undefined,
			title: faker.lorem.words(2)
		}));

	const generateMenuItems = (length: number) =>
		Array.from({ length }).map((_, index) => ({
			disabled: false,
			href: index === length - 1 ? "https://www.svelte.dev/" : undefined,
			items:
				index === length - 1
					? []
					: index === 0
						? generateItems(4, true)
						: generateItems(6),
			target: index === length - 1 ? ("_blank" as const) : undefined,
			title: faker.lorem.word()
		}));

	const args = {
		className:
			"bg-neutral-950 flex items-center justify-between p-4 sticky w-screen",
		homeHref: "#",
		icon: {
			alt: faker.lorem.words(3),
			src: faker.image.url({ height: 80, width: 80 })
		},
		items: generateMenuItems(5),
		title: faker.lorem.word()
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Horizontal" {args} />

<Story
	name="Vertical"
	args={{
		...args,
		className:
			"bg-neutral-950 inline-flex items-center justify-between p-4 sticky w-screen sm:[&_nav]:w-full sm:[&_.navigation-menu-root]:items-stretch sm:[&_.navigation-menu-root]:w-full sm:[&_.navigation-menu-trigger]:w-full sm:flex-col sm:gap-4 sm:h-screen sm:items-start sm:justify-stretch sm:w-auto"
	}}
/>
