import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
bg-stone-700
duration-200
ease-in-out
grid
h-8
items-center
outline-none
pagination-button
px-3
ring-2
ring-stone-600
rounded-md
shadow-sm
text-stone-200
text-sm
transition-all

disabled:cursor-not-allowed
disabled:!opacity-25

data-[selected]:bg-orange-500
data-[selected]:ring-orange-100
data-[selected]:text-stone-100

data-[selected]:hover:not(.pagination-ellipsis)]

focus:ring-2
focus:ring-orange-200

[&:hover:not(.pagination-ellipsis)]:bg-stone-600
`;

export const ContainerStyles = oneLine`
flex
items-center
gap-2
pagination-container
`;

export const NavigationStyles = oneLine`
w-fit
pagination-navigation
`;
