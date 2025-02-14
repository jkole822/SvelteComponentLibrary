import { oneLine } from "common-tags";

export const CalendarStyles = oneLine`
bg-neutral-900
date-range-picker-calendar
p-3
rounded-lg
shadow-lg
text-primary-300
w-full

**:data-melt-calendar-prevbutton:p-1
**:data-melt-calendar-prevbutton:rounded-lg
**:data-melt-calendar-prevbutton:transition-all

[&_[data-melt-calendar-prevbutton]:hover]:bg-primary-500/20

**:data-melt-calendar-nextbutton:p-1
**:data-melt-calendar-nextbutton:rounded-lg
**:data-melt-calendar-nextbutton:transition-all

[&_[data-melt-calendar-nextbutton]:hover]:bg-primary-500/20

[&_[data-melt-calendar-prevbutton][data-disabled]]:opacity-40
[&_[data-melt-calendar-prevbutton][data-disabled]]:p-1
[&_[data-melt-calendar-prevbutton][data-disabled]]:pointer-events-none
[&_[data-melt-calendar-prevbutton][data-disabled]]:rounded-lg

[&_[data-melt-calendar-nextbutton][data-disabled]]:opacity-40
[&_[data-melt-calendar-nextbutton][data-disabled]]:p-1
[&_[data-melt-calendar-nextbutton][data-disabled]]:pointer-events-none
[&_[data-melt-calendar-nextbutton][data-disabled]]:rounded-lg

**:data-melt-calendar-heading:font-semibold

**:data-melt-calendar-grid:w-full

**:data-melt-calendar-cell:cursor-pointer
**:data-melt-calendar-cell:flex
**:data-melt-calendar-cell:h-6
**:data-melt-calendar-cell:items-center
**:data-melt-calendar-cell:justify-center
**:data-melt-calendar-cell:p-4
**:data-melt-calendar-cell:ring-primary-400
**:data-melt-calendar-cell:rounded-lg
**:data-melt-calendar-cell:select-none
**:data-melt-calendar-cell:w-6

[&_[data-melt-calendar-cell]:hover]:bg-primary-200 
[&_[data-melt-calendar-cell]:hover]:text-primary-700 

[&_[data-melt-calendar-cell]:focus]:ring-2

[&_[data-melt-calendar-cell][data-highlighted]]:bg-primary-200
[&_[data-melt-calendar-cell][data-highlighted]]:text-primary-700

[&_[data-melt-calendar-cell][data-range-highlighted]]:bg-primary-200
[&_[data-melt-calendar-cell][data-range-highlighted]]:text-primary-700

[&_[data-melt-calendar-cell][data-disabled]]:opacity-40
[&_[data-melt-calendar-cell][data-disabled]]:pointer-events-none

[&_data-melt-calendar-cell][data-unavailable]]:line-through
[&_data-melt-calendar-cell][data-unavailable]]:pointer-events-none
[&_data-melt-calendar-cell][data-unavailable]]:text-red-400

[&_[data-melt-calendar-cell][data-selected]]:bg-primary-300
[&_[data-melt-calendar-cell][data-selected]]:text-primary-800

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

**:data-melt-popover-content:bg-neutral-100
**:data-melt-popover-content:min-w-80
**:data-melt-popover-content:rounded-md
**:data-melt-popover-content:shadow-xs
**:data-melt-popover-content:z-10

**:data-melt-popover-trigger:bg-primary-500
**:data-melt-popover-trigger:duration-200
**:data-melt-popover-trigger:ease-in-out
**:data-melt-popover-trigger:outline-hidden
**:data-melt-popover-trigger:py-0.5
**:data-melt-popover-trigger:px-1.5
**:data-melt-popover-trigger:ring-primary-300
**:data-melt-popover-trigger:rounded-md
**:data-melt-popover-trigger:text-sm
**:data-melt-popover-trigger:text-neutral-100
**:data-melt-popover-trigger:transition-all

[&_[data-melt-popover-trigger]:focus-visible]:ring-2

[&_[data-melt-popover-trigger]:hover]:bg-primary-700/90

**:data-melt-datefield-label:font-bold
**:data-melt-datefield-label:select-none
**:data-melt-datefield-label:text-primary-500
**:data-melt-datefield-label:text-sm
**:data-melt-datefield-label:tracking-wide
**:data-melt-datefield-label:uppercase

**:data-melt-datefield-field:bg-transparent
**:data-melt-datefield-field:flex
**:data-melt-datefield-field:items-center
**:data-melt-datefield-field:min-w-40
**:data-melt-datefield-field:mt-1
**:data-melt-datefield-field:p-4
**:data-melt-datefield-field:ring-2
**:data-melt-datefield-field:ring-neutral-200
**:data-melt-datefield-field:rounded-md
**:data-melt-datefield-field:text-neutral-200
**:data-melt-datefield-field:w-full

[&_[data-melt-datefield-field]:focus-within]:ring-primary-500

[&_[data-melt-datefield-field]_.separator]:px-2d
[&_[data-melt-datefield-field][data-invalid]]:ring-red-400

[&_[data-melt-datefield-label][data-invalid]]:text-red-400

**:data-melt-datefield-segment:outline-hidden
**:data-melt-datefield-segment:ring-primary-300
**:data-melt-datefield-segment:rounded-sm

[&_[data-melt-datefield-segment]:focus]:ring-2

[&_[data-melt-datefield-segment][data-invalid]]:text-red-400

[&_[data-melt-datefield-segment]:not([data-segment="literal"])]:px-0.5

**:data-melt-datefield-validation:self-start
**:data-melt-datefield-validation:text-red-400
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
