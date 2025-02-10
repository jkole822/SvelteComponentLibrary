export function clickOutside(node: Node, action: () => void) {
	window.addEventListener("click", handleClick);

	function handleClick(e: Event) {
		if (!node.contains(e.target as Node)) {
			action();
		}
	}

	return {
		destroy() {
			// the node has been removed from the DOM
			window.removeEventListener("click", handleClick);
		}
	};
}
