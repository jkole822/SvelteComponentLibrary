import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
flex
items-center
gap-2.5
pin-container
`;

export const InputStyles = oneLine`
bg-neutral-900
duration-300
ease-in-out
outline-none
pin-input
ring-2
ring-neutral-600
rounded-md
shadow-sm
size-12
text-center
text-lg
text-neutral-200
transition-shadow

disabled:cursor-not-allowed
disabled:!opacity-25

focus:ring-primary-500

hover:ring-neutral-400
`;
