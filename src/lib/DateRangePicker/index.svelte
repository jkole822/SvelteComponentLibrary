<script lang="ts">
	// Packages
	import { createDateRangePicker } from "@melt-ui/svelte";
	import { melt } from "@melt-ui/svelte";
	import { fade } from "svelte/transition";

	// Components
	import Combobox from "../ComboBox/index.svelte";
	import { localeOptions } from "./locales";

	// Styles
	import {
		CalendarStyles,
		ContainerStyles,
		HeaderStyles,
		HeaderTextStyles,
		TableHeaderCellStyles,
		TableHeaderCellTextStyles
	} from "./styles";

	// Utils
	import { toComboBoxOption } from "../../utils";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		className = "",
		datePickerClassName = "",
		localeClassName = "",
		onValueChange
	}: Props = $props();

	// MeltUI
	const {
		elements: {
			calendar,
			heading,
			grid,
			cell,
			field,
			prevButton,
			nextButton,
			endSegment,
			startSegment,
			trigger,
			content,
			label
		},
		states: { months, headingValue, weekdays, segmentContents, open },
		options: { locale },
		helpers: { isDateDisabled, isDateUnavailable }
	} = createDateRangePicker({
		forceVisible: true,
		onValueChange
	});
</script>

<section class={className}>
	<Combobox
		className={localeClassName}
		defaultSelected={toComboBoxOption({
			label: "English (US)",
			value: "en-US"
		})}
		label="Locale"
		onSelectedChange={({ next }) => {
			if (next && typeof next.value.value === "string") {
				locale.set(next.value.value);
			}

			return next;
		}}
		options={localeOptions}
		placeholder="Choose a locale"
	/>
	<div class={`${datePickerClassName} ${ContainerStyles}`}>
		<span use:melt={$label}>Date</span>
		<div use:melt={$field}>
			{#key $locale}
				{#each $segmentContents.start as seg}
					<div use:melt={$startSegment(seg.part)}>
						{seg.value}
					</div>
				{/each}
			{/key}
			<div aria-hidden="true" class="separator">-</div>
			{#key $locale}
				{#each $segmentContents.end as seg}
					<div use:melt={$endSegment(seg.part)}>
						{seg.value}
					</div>
				{/each}
			{/key}
			<div>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button use:melt={$trigger}>
					<i class="fa-solid fa-calendar"></i>
				</button>
			</div>
		</div>
	</div>
	{#if $open}
		<div transition:fade={{ duration: 100 }} use:melt={$content}>
			<div use:melt={$calendar} class={CalendarStyles}>
				<header class={HeaderStyles}>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button use:melt={$prevButton}>
						<i class="fa-solid fa-chevron-left"></i>
					</button>
					<div use:melt={$heading} class={HeaderTextStyles}>
						{$headingValue}
					</div>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button use:melt={$nextButton}>
						<i class="fa-solid fa-chevron-right"></i>
					</button>
				</header>
				<div>
					{#each $months as month}
						<table use:melt={$grid}>
							<thead aria-hidden="true">
								<tr>
									{#each $weekdays as day}
										<th class={TableHeaderCellStyles}>
											<div
												class={TableHeaderCellTextStyles}
											>
												{day}
											</div>
										</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each month.weeks as weekDates}
									<tr>
										{#each weekDates as date}
											<td
												role="gridcell"
												aria-disabled={$isDateDisabled(
													date
												) || $isDateUnavailable(date)}
											>
												<div
													use:melt={$cell(
														date,
														month.value
													)}
												>
													{date.day}
												</div>
											</td>
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</section>
