import { oneLine } from "common-tags";
import { SelectValidationStateEnum } from "./types";

export const CheckContainerStyles = oneLine`
absolute
check
select-check-container
left-2
text-primary-600
translate-y-[calc(-50%+1px)]
top-1/2
z-10

group-data-[highlighted=true]:text-primary-800
`;

export const ContainerStyles = oneLine`
flex
flex-col
gap-1
select-container
`;

export const ContentStyles = oneLine`
bg-neutral-900
outline-none
rounded-lg
select-content
shadow-lg
z-10
`;

export const LabelStyles = oneLine`
font-bold
select-label
text-primary-400
text-sm
tracking-wide
uppercase
`;

export const MenuStyles = oneLine`
bg-neutral-900
flex
flex-col
max-h-72
overflow-y-auto
p-1
select-menu
`;

export const TriggerStyles = ({
  receivedFocus,
  validationState,
}: {
  receivedFocus?: boolean;
  validationState?: string;
}) => oneLine`
bg-transparent
cursor-pointer
flex
items-center
justify-between
outline-hidden
p-4
relative
ring-2
ring-neutral-200
rounded-lg
select-trigger
text-neutral-200
transition-shadow
w-full

data-[disabled=true]:cursor-not-allowed
data-[disabled=true]:ring-neutral-600
data-[disabled=true]:text-neutral-600

[&[data-disabled=true]_.select-vector-container]:text-neutral-600

focus:ring-primary-500

hover:ring-primary-500

${
  receivedFocus && validationState === SelectValidationStateEnum.Invalid
    ? `
      !ring-red-400      
    `
    : ``
}
`;

export const VectorContainerStyles = ({
  isOpen,
  receivedFocus,
  validationState,
}: {
  isOpen: boolean;
  receivedFocus?: boolean;
  validationState?: string;
}) => oneLine`
${
  isOpen
    ? `
rotate-0

${
  receivedFocus && validationState === SelectValidationStateEnum.Invalid
    ? `
text-red-500
`
    : `
text-primary-500
`
}
`
    : `
rotate-180
text-neutral-200
`
}

-translate-y-1/2
absolute
select-vector-container
right-4
top-1/2
transition-all
`;
