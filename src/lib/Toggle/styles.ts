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
outline-none
relative
rounded-md
size-16
text-3xl
transition-all

active:bg-neutral-600

disabled:bg-neutral-900
disabled:cursor-not-allowed

focus-visible:ring
focus-visible:ring-primary-500

hover:cursor-pointer
hover:bg-neutral-700
`;

export const IconBottomLayer = oneLine`
${CenterStyles}
[-webkit-text-stroke:2px_rgb(var(--color-neutral-500))]
[[data-checked]_&]:[-webkit-text-stroke:0]
[[data-checked]_&]:delay-300
text-transparent
`;

export const IconTopLayer = oneLine`
${CenterStyles}
origin-[0%_0%]
text-primary-500
transition-all
`;
