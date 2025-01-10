import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
bg-[linear-gradient(to_right_bottom,_rgb(253,186,116),_rgb(234,88,12))]
h-5
outline-none
radio-group-button
rounded-full
w-5
`;

export const ButtonCoverStyles = oneLine`
inline-block
relative
h-full
w-full
origin-center
radio-group-button-cover
rounded-full
bg-stone-100
duration-300
`;

export const ContainerStyles = oneLine`
flex
flex-col
gap-0.5
data-[orientation=horizontal]:flex-row
radio-group-container
`;

export const LabelStyles = ({isChecked}: {isChecked: boolean}) => oneLine`
${isChecked ? 'text-stone-500' : 'text-stone-300'}

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

export const OptionStyles = ({isChecked}: {isChecked: boolean}) => oneLine`
${isChecked ? '[&:focus-within_label]:text-stone-400 [&:hover_label]:text-stone-400' : ''}

cursor-pointer
duration-300
flex
gap-2
items-center
px-4
py-3.5
radio-option
rounded-full
w-fit

active:bg-stone-700

focus-within:bg-stone-700

hover:bg-stone-700
`;
