import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
bg-neutral-700
duration-200
ease-in-out
grid
h-8
items-center
outline-hidden
pagination-button
px-3
ring-2
ring-neutral-600
rounded-md
shadow-sm
text-neutral-200
text-sm
transition-all

disabled:cursor-not-allowed
disabled:!opacity-25

data-selected:bg-primary-500
data-selected:ring-primary-100
data-selected:text-neutral-100

data-[selected]:hover:not(.pagination-ellipsis)]

focus:ring-2
focus:ring-primary-200

[&:hover:not(.pagination-ellipsis)]:bg-neutral-600
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
