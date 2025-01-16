import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
bg-stone-700
grid
h-8
items-center
outline-none
pagination-button
px-3
ring-orange-400
rounded-md
shadow-sm
text-stone-200
text-sm

disabled:cursor-not-allowed
disabled:opacity-50

data-[selected]:bg-orange-400
data-[selected]:ring-orange-100
data-[selected]:text-stone-700

focus:ring-2

hover:opacity-75
`;

export const ContainerStyles = oneLine`
flex
items-center
gap-2
pagination-container
`;

export const NavigationStyles = oneLine`
flex
flex-col
gap-4
items-center
pagination-navigation
`;
