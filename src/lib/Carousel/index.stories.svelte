<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Carousel from "./index.svelte";

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: "Carousel",
		component: Carousel,
		tags: ["autodocs"],
		argTypes: {}
	});
</script>

<script lang="ts">
	import { faker } from "@faker-js/faker";
	import { v4 as uuid } from "uuid";

	const generateItems = (length: number) =>
		Array.from({ length }).map(_ => ({
			cta: {
				href: "#",
				target: "_self" as const,
				title: faker.lorem.word()
			},
			description: faker.lorem.sentence(),
			id: uuid(),
			image: {
				alt: faker.lorem.words(2),
				src: faker.image.url({ height: 900, width: 1200 })
			},
			title: faker.lorem.words(3)
		}));

	const args = {
		items: generateItems(10)
	};
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="MinHeight" {args} />

<Story name="FullScreenHeight" args={{ ...args, className: "h-screen" }} />
