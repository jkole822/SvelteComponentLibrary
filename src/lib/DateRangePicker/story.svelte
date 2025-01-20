<script lang="ts">
	// Components
	import DateRangePicker from "./index.svelte";

	// Story
	import { PararaphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type {
		CreateDateRangePickerProps,
		DateRange
	} from "@melt-ui/svelte";
	import type { Props } from "./types";

	// Props
	let { onValueChange: _, ...rest }: Props = $props();

	// State
	let value: DateRange | undefined = $state();

	const handleChange: CreateDateRangePickerProps["onValueChange"] = ({
		next
	}) => {
		value = next;
		return next;
	};
</script>

<DateRangePicker {...rest} onValueChange={handleChange} />

<p class={SubHeadingStyles}>Binding Check</p>
<p class={PararaphStyles}>Start: {value?.start}</p>
<p class={PararaphStyles}>End: {value?.end}</p>
