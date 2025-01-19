import { oneLine } from "common-tags";

export const ButtonStyles = oneLine`
accordion-button
bg-stone-700
cursor-pointer
flex
flex-grow
font-medium
items-center
justify-between
leading-none
outline-none
px-5
py-5
text-left
text-stone-200
transition-colors

focus-visible:text-orange-400

hover:bg-stone-600
`;

export const ContainerStyles = oneLine`
accordion-container
bg-stone-700
rounded-md
`;

export const ContentStyles = oneLine`
accordion-content
bg-orange-200
overflow-hidden
shadow-[inset_0px_1px_0px_rgb(214,211,209)]
text-sm
text-stone-700
`;

export const DescriptionStyles = oneLine`
accordion-description
px-5
py-4
`;

export const HeadingStyles = oneLine`
accordion-heading
flex
`;

export const SectionStyles = oneLine`
accordion-section
overflow-hidden
transition-colors

first:rounded-t-md

last:rounded-b-md
`;
