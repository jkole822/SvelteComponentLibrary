import { writable } from "svelte/store";

export function useMediaQuery(query: string) {
	const matches = writable(false);

	// Function to check the media query
	const updateMediaQuery = () => {
		const mediaQuery = window.matchMedia(query);
		matches.set(mediaQuery.matches);

		// Listen to changes in the media query
		mediaQuery.addEventListener("change", event => {
			matches.set(event.matches);
		});
	};

	// Initialize the listener when the hook is used
	updateMediaQuery();

	// Return the store to be used in components
	return matches;
}
