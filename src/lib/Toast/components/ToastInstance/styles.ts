import { oneLine } from "common-tags";

export const CloseButtonIconStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
absolute
fa-solid
fa-xmark
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
right-2
ring-primary-400
rounded-full
text-center
text-primary-600
toast-close-button
top-2
transition-all
w-6

focus:ring-2

hover:bg-primary-100
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
top-0
z-30
md:bottom-0
md:top-auto
`;

export const DescriptionStyles = oneLine`
text-neutral-400
text-sm
toast-description
`;

export const ProgressStyles = oneLine`
!h-1
!w-12
absolute
left-3
top-2.5
`;

export const ToastContainerStyles = oneLine`
bg-neutral-900
border-[1px]
border-neutral-600
relative
rounded-md
shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)]
toast-toast-container
`;

export const ToastInnerContainerStyles = oneLine`
flex
gap-4
items-center
justify-between
max-w-[calc(100vw-2rem)]
p-3
relative
toast-toast-inner-container
w-96
`;

export const TitleStyles = oneLine`
font-medium
text-neutral-50
toast-title
`;
