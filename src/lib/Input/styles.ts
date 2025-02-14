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
border-t-0
border-x-0
border-b-2
border-neutral-200
rounded-none
duration-200
input-input
outline-hidden
px-0
py-4
text-neutral-200
transition-all
w-full

disabled:border-neutral-600
disabled:cursor-not-allowed

focus:border-primary-500

[&:disabled+label_span]:!text-neutral-600

[&:focus+label_span]:-translate-y-8
[&:focus+label_span]:!text-primary-500

${
	hasValue
		? `
[&+label_span]:!-translate-y-8
[&+label_span]:!text-primary-500
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
