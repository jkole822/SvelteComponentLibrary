import { oneLine } from "common-tags";

export const CheckContainerStyles = ({
	isSelected
}: {
	isSelected: boolean;
}) => oneLine`
${isSelected ? "block" : "hidden"}

absolute
check
select-check-container
left-2
text-orange-600
translate-y-[calc(-50%+1px)]
top-1/2
z-10

group-data-[highlighted]:text-orange-800
`;

export const ContainerStyles = oneLine`
flex
flex-col
gap-1
select-container
`;

export const GroupLabelStyles = oneLine`
py-1
pl-3
pr-4
font-extrabold
select-group-label
text-orange-300
tracking-wide
uppercase
`;

export const ItemStyles = oneLine`
cursor-pointer
group
pl-8
pr-4
py-1
relative
rounded-md
select-item
text-stone-300
              
focus:text-orange-700
focus:z-10

hover:bg-orange-100

data-[disabled]:opacity-50

data-[highlighted]:bg-orange-200
data-[highlighted]:text-orange-800
`;

export const LabelStyles = oneLine`
font-bold
select-label
text-orange-400
text-sm
tracking-wide
uppercase
`;

export const MenuStyles = oneLine`
bg-stone-900
flex
flex-col
max-h-72
overflow-y-auto
p-1
rounded-md
select-menu
shadow-md
z-10

focus:!ring-0
`;

export const TriggerStyles = oneLine`
bg-transparent
flex
h-10
items-center
justify-between
min-w-56
outline-none
px-3
py-2
relative
ring-2
ring-stone-200
rounded-md
select-trigger
text-stone-200
transition-opacity

disabled:cursor-not-allowed
disabled:ring-stone-600
disabled:text-stone-600

[&:disabled_.select-vector-container]:text-stone-600


focus:ring-orange-400

hover:opacity-90
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
select-vector-container
right-2
top-1/2
z-10
transition-all
`;
