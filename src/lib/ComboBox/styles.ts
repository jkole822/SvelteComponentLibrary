import { oneLine } from "common-tags";

export const CheckContainerStyles = oneLine`
absolute
check
combo-box-check-container
left-2
text-primary-600
translate-y-[calc(-50%+1px)]
top-1/2
z-10

group-data-[highlighted]:text-primary-800
`;

export const ContainerStyles = oneLine`
input-container
relative
w-full
`;

export const InputStyles = ({
	hasValue,
	receivedFocus
}: {
	hasValue: boolean;
	receivedFocus: boolean;
}) => oneLine`
bg-transparent
duration-150
ease-[cubic-bezier(0.4,0,0.2,1)]
input-input
outline-none
p-4
ring-[1.5px]
ring-neutral-200
rounded-md
text-neutral-200
transition-all
w-full

disabled:ring-neutral-600
disabled:cursor-not-allowed

[&:disabled_~_label]:text-neutral-600

focus:ring-primary-500

[&:focus_~_label]:bg-neutral-800
[&:focus_~_label]:px-0.5
[&:focus_~_label]:scale-[0.8]
[&:focus_~_label]:text-primary-500
[&:focus_~_label]:-translate-y-[55%]

[&:focus_~_.combo-box-trigger]:bg-primary-500
[&:focus_~_.combo-box-trigger]:text-neutral-100

focus:placeholder:text-neutral-500

placeholder:text-transparent

${
	hasValue
		? `
[&_~_label]:bg-neutral-800
[&_~_label]:px-0.5
[&_~_label]:ring-primary-500
[&_~_label]:scale-[0.8]
[&_~_label]:text-primary-500
[&_~_label]:-translate-y-[55%]

valid:ring-primary-500

[&:valid_~_.combo-box-trigger]:bg-primary-500
[&:valid_~_.combo-box-trigger]:text-neutral-50
`
		: ``
}

${
	receivedFocus
		? `
invalid:!ring-red-400

[&:invalid_~_label]:text-red-400

[&:invalid_~_.combo-box-trigger]:bg-red-400
[&:invalid_~_.combo-box-trigger]:text-neutral-50

[&:focus:invalid_~_label]:text-red-400
`
		: ``
}
`;

export const LabelStyles = oneLine`
absolute
duration-150
ease-[cubic-bezier(0.4,0,0.2,1)]
input-label
left-4
pointer-events-none
text-neutral-500
translate-y-4
transition-all
`;

export const ListItemStyles = oneLine`
combo-box-list-item
cursor-pointer
duration-100
ease-in
group
pl-7
pr-4
py-2
relative
rounded-md
scroll-my-2
text-sm
transition-all

hover:bg-primary-100

data-[disabled]:cursor-not-allowed
data-[disabled]:opacity-50

data-[highlighted]:bg-primary-200
data-[highlighted]:text-primary-800
`;

export const ListItemValueStyles = oneLine`
block
combo-box-list-item-value
opacity-75
text-sm
`;

export const ListStyles = oneLine`
combo-box-list
flex
flex-col
max-h-72
overflow-hidden
z-10
`;

export const NoResultsStyles = oneLine`
combo-box-no-results
opacity-75
pl-4
text-sm
`

export const ScrollContainerStyles = oneLine`
bg-neutral-900
combo-box-scroll-container
flex
flex-col
gap-0
max-h-full
overflow-y-auto
p-2
rounded-md
shadow-lg
text-neutral-300
`;

export const TriggerStyles = oneLine`
absolute
bg-neutral-200
combo-box-trigger
duration-150
ease-in-out
right-0
rounded-br-md
rounded-tr-md
size-14
text-neutral-800
top-0
transition-all

disabled:hidden

hover:bg-primary-500
hover:text-neutral-100
`;

export const VectorContainerStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
absolute
combo-box-vector-container
left-1/2
text-xl
top-1/2
transition-all
`;
