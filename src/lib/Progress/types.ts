import type { Writable } from "svelte/store";

export interface Props {
    className?: string;
	value: Writable<number>;
}
