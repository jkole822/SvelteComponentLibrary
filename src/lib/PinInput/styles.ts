import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
flex
items-center
gap-2
pin-container
`;

export const InputStyles = oneLine`
bg-neutral-700
outline-none
pin-input
ring-neutral-600
rounded-md
shadow-sm
size-12
text-center
text-lg
text-neutral-200

disabled:cursor-not-allowed
disabled:!opacity-25

focus:ring-2
focus:ring-primary-500
`;
