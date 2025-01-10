import { oneLine } from "common-tags";

export const InputStyles = oneLine`
h-0
switch-input
w-0

[&:checked_+_.slider]:border-2
[&:checked_+_.slider]:border-orange-600
[&:checked_+_.slider]:shadow-[0_0_20px_rgba(234,88,12,0.8)]

[&:checked_+_.slider:before]:bg-orange-300
[&:checked_+_.slider:before]:translate-x-6

[&:disabled_~_.label]:!text-stone-600

[&:disabled_~_.label:after]:!w-0

[&:disabled_+_.slider:before]:!bg-stone-600

[&:focus-visible_~_.label]:text-stone-50

[&:focus-visible_~_.label:after]:w-full
`;

export const LabelStyles = ({ disabled }: { disabled?: boolean }) => oneLine`
${disabled ? "cursor-not-allowed" : "cursor-pointer"}

flex
group
items-center
relative
switch-label
`;

export const LabelTextStyles = oneLine`
duration-300
label
ml-3
relative
switch-label-text
text-stone-300
transition-all

after:-bottom-0.5
after:[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
after:absolute
after:bg-orange-600
after:duration-[400ms]
after:h-0.5
after:left-0
after:pointer-events-none
after:transition-all
after:w-0

group-hover:text-stone-50
`;

export const SliderStyles = oneLine`
[transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)]
border-2
border-gray-700
duration-300
h-8
inset-0
relative
rounded-full
slider
switch-slider
transition-all
w-14

before:absolute
before:bg-stone-100
before:bottom-[0.2rem]
before:duration-300
before:ease-in-out
before:h-[1.4rem]
before:left-[0.2rem]
before:rounded-full
before:transition-all
before:w-[1.4rem]
`;
