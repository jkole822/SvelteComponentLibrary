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

bg-transparent
duration-300
ease-in-out
flex
items-center
justify-center
outline-none
overflow-hidden
popover-button
relative
ring-2
ring-primary-500
text-primary-500
tooltip-button
transition-all

disabled:!ring-neutral-400
disabled:!text-neutral-400
disabled:cursor-not-allowed

[&:disabled:hover:before]:h-0

focus-visible:text-neutral-50

hover:text-neutral-800

before:absolute
before:bg-primary-500
before:bottom-0
before:duration-300
before:ease-in-out
before:h-0
before:left-0
before:transition-all
before:w-full
before:-z-10

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
ring-primary-400
rounded-full
text-primary-600
top-4
transition-all
w-6

focus:ring-2

hover:bg-primary-100 
`;

export const ContentStyles = oneLine`
bg-neutral-900
p-5
popover-content
relative
rounded-md
shadow-lg
w-60
z-10
`;
