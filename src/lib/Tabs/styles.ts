import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
flex 
flex-col
tabs-container

[&:has([data-orientation=vertical])]:flex-row
`

export const ContentStyles = oneLine`
bg-neutral-900
grow
p-5
`;

export const ListStyles = oneLine`
flex
overflow-x-auto
shrink-0
tabs-list

data-[orientation=vertical]:border-r
data-[orientation=vertical]:flex-col
`;

export const TriggerIndicatorStyles = oneLine`
-translate-x-1/2
absolute
bg-primary-400
bottom-1
h-1
left-1/2
origin-center
rounded-full
w-6

group-data-[orientation=vertical]:bottom-1/2
group-data-[orientation=vertical]:h-6
group-data-[orientation=vertical]:left-auto
group-data-[orientation=vertical]:right-0
group-data-[orientation=vertical]:translate-y-1/2
group-data-[orientation=vertical]:w-1
`;

export const TriggerStyles = oneLine`
[padding-inline:--spacing(2)]
bg-neutral-950
flex
font-medium
group
grow
h-12
items-center
justify-center
leading-4
outline-hidden
relative
ring-primary-500
rounded-none
select-none
tabs-trigger
text-neutral-300

focus:relative

focus-visible:z-10
focus-visible:ring-2

data-[orientation=vertical]:[padding-inline:--spacing(3)]

data-active:bg-neutral-900
data-active:ring-primary-500
data-active:text-neutral-100

data-active:focus:relative
`;
