import { oneLine } from "common-tags";

const CenterStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
absolute
left-1/2
top-1/2
`;

export const ButtonStyles = oneLine`
block
bg-transparent
duration-300
ease-out
outline-hidden
relative
rounded-md
size-16
text-3xl
toggle-button
transition-all

active:bg-neutral-600

disabled:bg-neutral-900
disabled:cursor-not-allowed

focus-visible:ring-3
focus-visible:ring-primary-500

hover:cursor-pointer
hover:bg-neutral-700
`;

export const IconBottomLayer = oneLine`
${CenterStyles}
[-webkit-text-stroke:2px_var(--color-neutral-500)]
in-data-checked:[-webkit-text-stroke:0]
in-data-checked:delay-300
text-transparent
toggle-icon
toggle-icon-bottom-layer
`;

export const IconTopLayer = oneLine`
${CenterStyles}
origin-center
text-primary-500
toggle-icon
toggle-icon-top-layer
transition-all
`;
