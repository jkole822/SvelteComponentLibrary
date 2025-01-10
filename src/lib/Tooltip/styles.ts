import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
[&_.trigger-content]:z-10

bg-stone-100
duration-300
ease-in-out
flex
h-12
items-center
justify-center
outline-none
overflow-hidden
relative
rounded-full
text-3xl
text-stone-700
tooltip-button
transition-all
w-12

disabled:!bg-stone-400
disabled:cursor-not-allowed
disabled:text-stone-100

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

disabled:before:!h-0

focus-visible:before:h-full

hover:before:h-full
`;

export const NonInteractiveTriggerStyles = oneLine`
inline-block
outline-none
ring-orange-400
rounded-full
trigger-content

focus:ring-2
`;

export const TextStyles = oneLine`
px-4
py-1.5
tooltip-text
`;

export const TooltipStyles = oneLine`
bg-orange-500
max-w-40
rounded-md
text-stone-50
tooltip-tooltip
z-10
md:max-w-60
`;
