import { oneLine } from "common-tags";

export const ButtonStyles = ({
	isFirstItem
}: {
	isFirstItem: boolean;
}) => oneLine`
${isFirstItem ? "border-t border-t-neutral-300" : ""}

accordion-button
bg-stone-100
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
text-stone-700
transition-colors

focus-visible:text-orange-600

hover:bg-stone-200
`;

export const ContainerStyles = oneLine`
accordion-container
bg-stone-100
mx-auto
rounded-md
shadow-md
`;

export const ContentStyles = oneLine`
accordion-content
bg-orange-100
overflow-hidden
shadow-[inset_0px_1px_0px_rgb(214,211,209)]
text-sm
text-stone-900
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

first:rounded-t-xl

last:rounded-b-xl
`;
