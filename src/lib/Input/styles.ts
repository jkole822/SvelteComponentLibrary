import { oneLine } from "common-tags";

export const CharStyles = oneLine`
[transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55)]
duration-300
inline-block
input-char
`;

export const FormControlStyles = oneLine`
input-form-control
relative
`;

export const InputStyles = ({
	hasValue,
	receivedFocus
}: {
	hasValue: boolean;
	receivedFocus: boolean;
}) => oneLine`
bg-transparent
block
border-0
border-b-2
border-stone-200
duration-200
input-input
outline-none
px-0
py-4
text-stone-200
transition-all
w-full

disabled:border-stone-600
disabled:cursor-not-allowed

focus:border-orange-500

[&:disabled+label_span]:!text-stone-600

[&:focus+label_span]:-translate-y-8
[&:focus+label_span]:!text-orange-500

${
	hasValue
		? `
[&+label_span]:!-translate-y-8
[&+label_span]:!text-orange-500
`
		: ``
}

${receivedFocus ? `
invalid:!border-red-500

[&:invalid+label_span]:font-medium
[&:invalid+label_span]:!text-red-500
` : ``}
`;

export const LabelStyles = oneLine`
absolute
left-0
input-label
pointer-events-none
top-4
`;
