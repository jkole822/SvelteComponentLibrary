import type { Writable } from "svelte/store";

export interface Props {
    ariaLabel: string;
    className?: string;
	value: Writable<number>;
}
