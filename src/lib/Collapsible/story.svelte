<script lang="ts">
	// Packages
    import {faker} from "@faker-js/faker";

    // Components
	import Collapsible from "./index.svelte";

	// Types
	import type { Props } from "./types";

	// Props
	let { children, onOpenChange: _, open: __, ...rest }: Props = $props();

	// State
	let open = $state(false);
</script>

<Collapsible {...rest} onOpenChange={value => (open = value)} {open}>
    <span>{faker.lorem.words(3)}</span>
    <hr class="border-b-px border-neutral-700" />
    <span>{faker.lorem.words(2)}</span>
    <hr class="border-b-px border-neutral-700" />
    <span>{faker.lorem.words(4)}</span>
</Collapsible>
