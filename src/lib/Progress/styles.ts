import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
bg-stone-100/10
h-6
overflow-hidden
progress-container
relative
rounded-full
`;

export const FillStyles = oneLine`
bg-orange-500
duration-[660ms]
ease-[cubic-bezier(0.65,0,0.35,1)]
h-full
progress-fill
transition-transform
w-full
`;
