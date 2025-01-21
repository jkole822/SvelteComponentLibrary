import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
bg-[linear-gradient(to_right_bottom,_rgb(var(--color-primary-300)),_rgb(var(--color-primary-600)))]
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
bg-neutral-100
duration-300
`;

export const ContainerStyles = oneLine`
flex
flex-col
gap-2
radio-group-container
w-fit

[&:focus-within_.radio-group-group-label]:text-primary-400
`;

export const GroupLabelStyles = oneLine`
duration-300
ease-in-out
font-extrabold
radio-group-group-label
tracking-wider
uppercase
transition-all
`;

export const LabelStyles = ({isChecked}: {isChecked: boolean}) => oneLine`
${isChecked ? 'text-neutral-500' : 'text-neutral-300'}

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

data-[orientation=horizontal]:flex-row
`

export const OptionStyles = ({isChecked}: {isChecked: boolean}) => oneLine`
${isChecked ? '[&:focus-within_label]:text-neutral-400 [&:hover_label]:text-neutral-400' : ''}

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

active:bg-neutral-700

focus-within:bg-neutral-700

hover:bg-neutral-700
`;
