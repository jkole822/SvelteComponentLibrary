import { oneLine } from "common-tags";

export const CheckContainerStyles = oneLine`
absolute
check
combo-box-check-container
left-2
text-orange-600
translate-y-[calc(-50%+1px)]
top-1/2
z-10

group-data-[highlighted]:text-orange-800
`;

export const ContainerStyles = oneLine`
combo-box-container
`;

export const FormControlStyles = oneLine`
combo-box-form-control
flex
flex-col
gap-1
`;

export const InputStyles = oneLine`
bg-transparent
combo-box-input
duration-200
ease-in-out
flex
h-10
items-center
justify-between
outline-none
pr-4
px-3
ring-2
ring-stone-200
rounded-md
text-stone-200
text-sm
transition-all
w-full

focus:ring-orange-400
`;

export const LabelStyles = oneLine`
combo-box-label
font-bold
text-orange-400
text-sm
tracking-wide
uppercase
`;

export const ListStyles = oneLine`
combo-box-list
flex
flex-col
max-h-72
overflow-hidden
rounded-md
z-10
`;

export const ListItemStyles = oneLine`
combo-box-list-item
cursor-pointer
duration-100
ease-in
group
pl-4
pr-4
py-2
relative
rounded-md
scroll-my-2
text-sm
transition-all

hover:bg-orange-100

data-[disabled]:cursor-not-allowed
data-[disabled]:opacity-50

data-[highlighted]:bg-orange-200
data-[highlighted]:text-orange-800
`;

export const ListItemValueStyles = oneLine`
block
combo-box-list-item-value
opacity-75
text-sm
`;

export const NoResultsStyles = oneLine`
combo-box-no-results
opacity-75
pl-4
text-sm
`;

export const ScrollContainerStyles = oneLine`
bg-stone-900
combo-box-scroll-container
flex
flex-col
gap-0
max-h-full
overflow-y-auto
px-2
py-2
shadow-md
text-stone-300
`;

export const VectorContainerStyles = ({
	isOpen
}: {
	isOpen: boolean;
}) => oneLine`
${isOpen ? `
rotate-0
text-orange-500
` : `
rotate-180
text-stone-200
`}

-translate-y-1/2
absolute
combo-box-vector-container
right-2
top-1/2
z-10
transition-all
`;
