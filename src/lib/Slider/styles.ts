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
text-orange-400
text-sm
tracking-wide
uppercase
`;

export const RangeContainerStyles = oneLine`
bg-stone-900
h-[3px]
w-full
`;

export const RangeStyles = oneLine`
bg-orange-500
h-[3px]
slider-range
`;

export const SliderContainerStyles = oneLine`
flex
h-5
items-center
relative
slider-slider-container
w-52
`;

export const ThumbStyles = oneLine`
bg-stone-100
h-5
outline-none
ring-orange-400
rounded-full
slider-thumb
w-5

focus:ring-2
`;
