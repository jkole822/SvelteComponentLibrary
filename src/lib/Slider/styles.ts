import { oneLine } from "common-tags";

export const InputStyles = oneLine`
h-0
slider-input
w-0
`

export const LabelStyles = oneLine`
inline-block
font-bold
mb-3
slider-label
text-primary-400
text-sm
tracking-wide
uppercase
`;

export const RangeContainerStyles = oneLine`
bg-neutral-600
h-[3px]
slider-range-container
w-full
`;

export const RangeStyles = oneLine`
bg-primary-500
h-[3px]
slider-range
`;

export const SliderContainerStyles = oneLine`
flex
h-5
items-center
relative
slider-slider-container
w-full
`;

export const ThumbStyles = oneLine`
bg-neutral-100
h-5
outline-hidden
rounded-full
slider-thumb
w-5

hover:shadow-[0_0_0_4px_--alpha(var(--color-primary-400)_/_0.4)]

focus:shadow-[0_0_0_4px_--alpha(var(--color-primary-400)_/_0.7)]
`;
