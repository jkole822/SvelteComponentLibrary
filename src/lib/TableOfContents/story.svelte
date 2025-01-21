<script lang="ts">
	// Packages
	import { faker } from "@faker-js/faker";

	// Components
	import TableOfContents from "./index.svelte";

	// Types
	import type { Props } from "./types";

	// Props
	let { children: _, ...rest }: Props = $props();
</script>

<TableOfContents {...rest}>
	<div class="space-y-2" id="container">
		<h1>{faker.lorem.word()}</h1>
		<h2>{faker.lorem.words(3)}</h2>
		<p>{faker.lorem.paragraph()}</p>
		<h3>{faker.lorem.words(2)}</h3>
		<p>{faker.lorem.sentence()}</p>
		<h3>{faker.lorem.words(2)}</h3>
		<p>{faker.lorem.sentence()}</p>
		<h3>{faker.lorem.words(6)}</h3>
		<p>{faker.lorem.sentence()}</p>
		<h4>{faker.lorem.words(2)}</h4>
		<p>{faker.lorem.paragraph()}</p>
		<h2 class="inline-flex items-center justify-center gap-2">
			<i aria-hidden="true" class="fa-solid fa-ghost"></i>
			{faker.lorem.words(3)}
		</h2>
		<p>{faker.lorem.sentence()}</p>
		<h2 data-toc-ignore>
			Ignored in Table of Contents due to the presence of the
			"data-toc-ignore" attribute on this element.
		</h2>
		<p>{faker.lorem.sentence()}</p>
		<h2>{faker.lorem.words(2)}</h2>
		<p>{faker.lorem.paragraph()}</p>
		<h3>{faker.lorem.words(2)}</h3>
		<p>{faker.lorem.sentence()}</p>
		<h4>{faker.lorem.words(2)}</h4>
		<p>{faker.lorem.paragraph()}</p>
		<h4>{faker.lorem.words(2)}</h4>
		<p>{faker.lorem.paragraph()}</p>
		<h4>{faker.lorem.words(2)}</h4>
		<p>{faker.lorem.paragraph()}</p>
		<h2>{faker.lorem.words(2)}</h2>
		<p>{faker.lorem.paragraph()}</p>
		<h2>{faker.lorem.words(2)}</h2>
		<p>{faker.lorem.paragraph()}</p>
		<h3>{faker.lorem.words(2)}</h3>
		<p>{faker.lorem.sentence()}</p>
		<h4>{faker.lorem.words(2)}</h4>
		<p>{faker.lorem.paragraph()}</p>
		<h5>{faker.lorem.words(2)}</h5>
		<p>{faker.lorem.paragraph()}</p>
		<h5>{faker.lorem.words(2)}</h5>
		<p>{faker.lorem.sentence()}</p>
		<h4>{faker.lorem.words(2)}</h4>
		<p>{faker.lorem.sentence()}</p>
	</div>
</TableOfContents>

<style lang="postcss">
	#container > h1 {
		@apply capitalize font-black text-primary-500 text-3xl tracking-wide;
	}

	#container > h2 {
		@apply capitalize font-extrabold text-neutral-100 text-3xl;
	}

	#container > h3 {
		@apply font-bold text-primary-300 text-xl tracking-wider uppercase;
	}

	#container > h4 {
		@apply capitalize font-semibold text-neutral-100 text-lg;
	}

	#container > h5 {
		@apply font-medium text-primary-300 tracking-wider uppercase;
	}
</style>
