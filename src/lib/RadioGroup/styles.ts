import { oneLine } from "common-tags";

export const CircleCoverStyles = oneLine`
bg-neutral-100
duration-300
inline-block
origin-center
radio-group-circle-cover
relative
rounded-full
size-5
`;

export const CircleStyles = oneLine`
bg-[linear-gradient(to_right_bottom,_var(--color-primary-300),_var(--color-primary-600))]
outline-hidden
radio-group-circle
rounded-full
size-5
`;

export const ContainerStyles = oneLine`
radio-group-container
w-fit

[&:focus-within_.radio-group-group-label]:text-primary-300
`;

export const GroupLabelStyles = oneLine`
duration-300
ease-in-out
font-extrabold
radio-group-group-label
tracking-wider
uppercase
text-xl
text-primary-500
transition-all
`;

export const LabelStyles = ({ isChecked }: { isChecked: boolean }) => oneLine`
${isChecked ? "text-neutral-400" : "text-neutral-300"}

duration-300
cursor-pointer
font-extrabold
label
radio-group-label
relative
tracking-wider
transition-all
uppercase
`;

export const OptionContainerStyles = oneLine`
flex
flex-col
gap-0.5
radio-group-option-container

in-data-[orientation=horizontal]:flex-row
`;

export const OptionStyles = oneLine`
cursor-pointer
duration-300
flex
gap-2
items-center
outline-hidden
px-4
py-3.5
radio-option
ring-primary-500
rounded-md
w-fit

focus:bg-neutral-700

focus-visible:ring-2

hover:bg-neutral-600
`;
