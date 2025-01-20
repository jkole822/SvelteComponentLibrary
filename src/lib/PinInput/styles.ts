import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
flex
items-center
gap-2
pin-container
`;

export const InputStyles = oneLine`
bg-text-100
outline-none
pin-input
ring-primary-400
rounded-md
shadow-sm
size-12
text-center
text-lg
text-primary-800

disabled:cursor-not-allowed
disabled:opacity-80

focus:ring-2
`;
