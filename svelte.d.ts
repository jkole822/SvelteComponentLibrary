declare module "*.svelte" {
	export { SvelteComponentDev as default } from "svelte/internal";
}

declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		"on:clickoutside"?: (event: MouseEvent) => any;
		"on:focusoutside"?: (event: FocusEvent) => any;
		"on:focusinside"?: (event: FocusEvent) => any;
	}
}
