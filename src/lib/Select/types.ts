import type { CreateSelectProps } from "@melt-ui/svelte";

// Example Options
// const options = {
//     sweet: ["Caramel", "Chocolate", "Strawberry", "Cookies & Cream"],
//     savory: ["Basil", "Bacon", "Rosemary"]
// };

export interface Props {
    ariaLabel: string;
	className?: string;
	defaultSelected?: CreateSelectProps<string>["defaultSelected"];
	disabled?: boolean;
	label: string;
	onSelectedChange?: CreateSelectProps<string>["onSelectedChange"];
	options: any;
	placeholder: string;
}
