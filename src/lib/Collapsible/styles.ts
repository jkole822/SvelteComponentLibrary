import { oneLine } from "common-tags";

export const ContentStyles = oneLine`
bg-neutral-900
collapsible-content
flex
flex-col
gap-2
mx-auto
p-4
rounded-b-md
text-neutral-400
w-[calc(100%-32px)]
`;

export const TriggerStyles = oneLine`
bg-transparent
collapsible-trigger
duration-300
ease-out
flex
items-center
justify-between
mx-auto
outline-none
p-4
relative
border-2
border-neutral-400
rounded-md
text-neutral-200
transition-all
w-full
z-10

data-[state=open]:border-primary-500
data-[state=open]:shadow-[0_0_20px_rgba(var(--color-primary-600)_/_0.8)]

disabled:cursor-not-allowed
disabled:opacity-50

focus-visible:border-primary-500

hover:cursor-pointer
hover:border-neutral-200
`;
