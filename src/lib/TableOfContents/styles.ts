import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
flex
flex-col
h-screen
relative
overflow-hidden
toc-container

md:flex-row
`;

export const ContentStyles = oneLine`
left-0
overflow-y-auto
px-4
relative
text-neutral-400
toc-content
top-16
w-full

md:left-72
md:p-4
md:top-0
md:w-[calc(100%-288px)]
`;

export const OverlayStyles = oneLine`
backdrop-blur-sm
bg-neutral-900/50
fixed
inset-0
toc-overlay
z-20
`;

export const PopoverStyles = oneLine`
!left-0
!max-h-[unset]
!top-0
!h-screen
bg-neutral-900
capitalize
h-60
overflow-y-auto
pb-4
pt-2
px-4
shadow-lg
text-neutral-400
toc-popover
w-3/4
z-30

md:hidden
`;

export const PopoverTriggerStyles = oneLine`
absolute
bg-neutral-900
flex
p-4
toc-popover-trigger
w-full
z-10

[&_>_button]:duration-200
[&_>_button]:ease-in-out
[&_>_button]:outline-none
[&_>_button]:ring-primary-500
[&_>_button]:rounded
[&_>_button]:transition-colors

[&_>_button:focus-visible]:ring-2

[&_>_button:hover]:text-primary-500

md:hidden
`;

export const TreeStyles = oneLine`
absolute
bg-neutral-900
capitalize
fixed
h-full
hidden
max-h-screen
overflow-y-auto
pb-4
pt-2
px-4
text-neutral-400
toc-tree
w-72

md:block
`;
