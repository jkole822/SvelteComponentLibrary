import { oneLine } from "common-tags";

export const ButtonStyles = ({
	isIconButton
}: {
	isIconButton?: boolean;
}) => oneLine`
${
	isIconButton
		? `
rounded-full
size-12
text-3xl
`
		: `
rounded-md
font-bold
px-6
py-3
tracking-wider
uppercase
`
}

[&_.trigger-content]:z-10

bg-stone-100
duration-300
ease-in-out
flex
items-center
justify-center
outline-none
overflow-hidden
popover-button
relative
text-stone-700
tooltip-button
transition-all

disabled:!bg-stone-400
disabled:cursor-not-allowed
disabled:text-stone-100

[&:disabled:hover:before]:h-0

focus-visible:text-stone-50

hover:text-stone-50

before:absolute
before:bg-orange-500
before:bottom-0
before:duration-300
before:ease-in-out
before:h-0
before:left-0
before:transition-all
before:w-full

focus-visible:before:h-full

hover:before:h-full
`;

export const CloseButtonStyles = oneLine`
absolute
appearance-none
duration-200
ease-in-out
h-6
inline-flex
items-center
justify-center
outline-none
p-1
popover-close-button
right-4
ring-orange-400
rounded-full
text-orange-600
top-4
transition-all
w-6

focus:ring-2

hover:bg-orange-100 
`;

export const ContentStyles = oneLine`
bg-stone-900
p-5
popover-content
relative
rounded-md
shadow-lg
w-60
z-10
`;
