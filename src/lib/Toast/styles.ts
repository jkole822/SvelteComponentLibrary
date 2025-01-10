import { oneLine } from "common-tags";

export const CloseButtonIconStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
absolute
fa-solid
fa-times
left-1/2
toast-close-button-icon
top-1/2
`;

export const CloseButtonStyles = oneLine`
absolute
duration-200
ease-in
h-6
outline-none
p-1
right-5
ring-orange-400
rounded-full
text-center
text-orange-600
toast-close-button
top-5
transition-all
w-6

hover:bg-orange-100

focus:ring-2
`;

export const ContainerStyles = oneLine`
fixed
flex
flex-col
gap-2
items-end
m-4
right-0
toast-container
top-24
z-30
md:bottom-0
md:top-auto
`;

export const DescriptionStyles = oneLine`
text-stone-400
toast-description
`;

export const StatusIndicatorStyles = ({ color }: { color: string }) => oneLine`
${color}
h-1.5
rounded-full
toast-status-indicator
w-1.5
`;

export const ToastContainerStyles = oneLine`
bg-stone-900
rounded-xl
shadow-medium
toast-toast-container
`;

export const ToastInnerContainerStyles = oneLine`
flex
gap-4
items-center
justify-between
max-w-[calc(100vw-2rem)]
p-5
relative
toast-toast-inner-container
w-96
`;

export const TitleStyles = oneLine`
flex
font-semibold
gap-2
items-center
mb-2
text-stone-200
toast-title
`;
