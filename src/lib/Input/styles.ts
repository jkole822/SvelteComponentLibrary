import { oneLine } from "common-tags";

export const CharStyles = oneLine`
[transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55)]
duration-300
inline-block
input-char
text-stone-300
`;

export const FormControlStyles = oneLine`
input-form-control
relative
`;

export const InputStyles = ({ hasValue }: { hasValue: boolean }) => oneLine`
bg-transparent
block
border-0
border-b-2
border-stone-300
duration-300
input-input
outline-none
px-0
py-4
text-stone-300
transition-all
w-full

disabled:border-stone-600
disabled:cursor-not-allowed

focus:border-orange-500

hover:border-stone-50

[&:disabled+label_span]:!text-stone-600

[&:focus+label_span]:-translate-y-8
[&:focus+label_span]:!text-orange-400

${hasValue ? `
[&+label_span]:!-translate-y-8
[&+label_span]:!text-orange-400
` : ``}

[&:hover+label_span]:text-stone-50
`;

export const LabelStyles = oneLine`
absolute
left-0
input-label
pointer-events-none
top-4
`;
