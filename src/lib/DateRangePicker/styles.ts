import { oneLine } from "common-tags";

export const CalendarStyles = oneLine`
bg-stone-900
date-range-picker-calendar
p-3
rounded-lg
shadow-sm
text-orange-300
w-full

[&_[data-melt-calendar-prevbutton]]:p-1
[&_[data-melt-calendar-prevbutton]]:rounded-lg
[&_[data-melt-calendar-prevbutton]]:transition-all

[&_[data-melt-calendar-prevbutton]:hover]:bg-orange-500/20

[&_[data-melt-calendar-nextbutton]]:p-1
[&_[data-melt-calendar-nextbutton]]:rounded-lg
[&_[data-melt-calendar-nextbutton]]:transition-all

[&_[data-melt-calendar-nextbutton]:hover]:bg-orange-500/20

[&_[data-melt-calendar-prevbutton][data-disabled]]:opacity-40
[&_[data-melt-calendar-prevbutton][data-disabled]]:p-1
[&_[data-melt-calendar-prevbutton][data-disabled]]:pointer-events-none
[&_[data-melt-calendar-prevbutton][data-disabled]]:rounded-lg

[&_[data-melt-calendar-nextbutton][data-disabled]]:opacity-40
[&_[data-melt-calendar-nextbutton][data-disabled]]:p-1
[&_[data-melt-calendar-nextbutton][data-disabled]]:pointer-events-none
[&_[data-melt-calendar-nextbutton][data-disabled]]:rounded-lg

[&_[data-melt-calendar-heading]]:font-semibold

[&_[data-melt-calendar-grid]]:w-full

[&_[data-melt-calendar-cell]]:cursor-pointer
[&_[data-melt-calendar-cell]]:flex
[&_[data-melt-calendar-cell]]:h-6
[&_[data-melt-calendar-cell]]:items-center
[&_[data-melt-calendar-cell]]:justify-center
[&_[data-melt-calendar-cell]]:p-4
[&_[data-melt-calendar-cell]]:ring-orange-400
[&_[data-melt-calendar-cell]]:rounded-lg
[&_[data-melt-calendar-cell]]:select-none
[&_[data-melt-calendar-cell]]:w-6

[&_[data-melt-calendar-cell]:hover]:bg-orange-200 
[&_[data-melt-calendar-cell]:hover]:text-orange-700 

[&_[data-melt-calendar-cell]:focus]:ring-2

[&_[data-melt-calendar-cell][data-highlighted]]:bg-orange-200
[&_[data-melt-calendar-cell][data-highlighted]]:text-orange-700

[&_[data-melt-calendar-cell][data-range-highlighted]]:bg-orange-200
[&_[data-melt-calendar-cell][data-range-highlighted]]:text-orange-700

[&_[data-melt-calendar-cell][data-disabled]]:opacity-40
[&_[data-melt-calendar-cell][data-disabled]]:pointer-events-none

[&_data-melt-calendar-cell][data-unavailable]]:line-through
[&_data-melt-calendar-cell][data-unavailable]]:pointer-events-none
[&_data-melt-calendar-cell][data-unavailable]]:text-red-400

[&_[data-melt-calendar-cell][data-selected]]:bg-orange-300
[&_[data-melt-calendar-cell][data-selected]]:text-orange-800

[&_[data-melt-calendar-cell][data-outside-visible-months]]:cursor-default
[&_[data-melt-calendar-cell][data-outside-visible-months]]:opacity-40
[&_[data-melt-calendar-cell][data-outside-visible-months]]:pointer-events-none

[&_[data-melt-calendar-cell][data-outside-visible-months]:hover]:bg-transparent

[&_[data-melt-calendar-cell][data-outside-month]]:pointer-events-none
[&_[data-melt-calendar-cell][data-outside-month]]:cursor-default
[&_[data-melt-calendar-cell][data-outside-month]]:opacity-0

[&_[data-melt-calendar-cell][data-outside-month]:hover]:bg-transparent
`

export const ContainerStyles = oneLine`
date-range-picker-container

[&_[data-melt-datefield-field]_div:last-of-type]:flex
[&_[data-melt-datefield-field]_div:last-of-type]:items-center
[&_[data-melt-datefield-field]_div:last-of-type]:justify-end
[&_[data-melt-datefield-field]_div:last-of-type]:ml-4
[&_[data-melt-datefield-field]_div:last-of-type]:w-full

[&_[data-melt-popover-content]]:bg-stone-100
[&_[data-melt-popover-content]]:min-w-80
[&_[data-melt-popover-content]]:rounded-md
[&_[data-melt-popover-content]]:shadow-sm
[&_[data-melt-popover-content]]:z-10

[&_[data-melt-popover-trigger]]:bg-orange-500
[&_[data-melt-popover-trigger]]:duration-200
[&_[data-melt-popover-trigger]]:ease-in-out
[&_[data-melt-popover-trigger]]:outline-none
[&_[data-melt-popover-trigger]]:py-0.5
[&_[data-melt-popover-trigger]]:px-1.5
[&_[data-melt-popover-trigger]]:ring-orange-300
[&_[data-melt-popover-trigger]]:rounded-md
[&_[data-melt-popover-trigger]]:text-sm
[&_[data-melt-popover-trigger]]:text-stone-100
[&_[data-melt-popover-trigger]]:transition-all

[&_[data-melt-popover-trigger]:focus-visible]:ring-2

[&_[data-melt-popover-trigger]:hover]:bg-orange-700/90

[&_[data-melt-datefield-label]]:font-bold
[&_[data-melt-datefield-label]]:select-none
[&_[data-melt-datefield-label]]:text-orange-400
[&_[data-melt-datefield-label]]:text-sm
[&_[data-melt-datefield-label]]:tracking-wide
[&_[data-melt-datefield-label]]:uppercase

[&_[data-melt-datefield-field]]:bg-transparent
[&_[data-melt-datefield-field]]:flex
[&_[data-melt-datefield-field]]:h-10
[&_[data-melt-datefield-field]]:items-center
[&_[data-melt-datefield-field]]:min-w-40
[&_[data-melt-datefield-field]]:mt-1
[&_[data-melt-datefield-field]]:px-3
[&_[data-melt-datefield-field]]:ring-2
[&_[data-melt-datefield-field]]:ring-stone-200
[&_[data-melt-datefield-field]]:rounded-md
[&_[data-melt-datefield-field]]:text-stone-200
[&_[data-melt-datefield-field]]:w-full

[&_[data-melt-datefield-field]:focus-within]:ring-orange-400

[&_[data-melt-datefield-field]_.separator]:px-2

[&_[data-melt-datefield-label][data-invalid]]:border-red-400
[&_[data-melt-datefield-label][data-invalid]]:text-red-500

[&_[data-melt-datefield-segment]]:outline-none
[&_[data-melt-datefield-segment]]:ring-orange-300
[&_[data-melt-datefield-segment]]:rounded

[&_[data-melt-datefield-segment]:focus]:ring-2

[&_[data-melt-datefield-segment][data-invalid]]:text-red-500

[&_[data-melt-datefield-segment]:not([data-segment="literal"])]:px-0.5

[&_[data-melt-datefield-validation]]:self-start
[&_[data-melt-datefield-validation]]:text-red-500
`;

export const HeaderStyles = oneLine`
flex
items-center
justify-between
pb-2
`;

export const HeaderTextStyles = oneLine`
flex
gap-6
items-center
`;

export const TableHeaderCellStyles = oneLine`
font-semibold
text-sm
`;

export const TableHeaderCellTextStyles = oneLine`
flex
h-6
items-center
justify-center
p-4
w-6
`;
