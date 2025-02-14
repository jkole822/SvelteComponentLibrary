import { oneLine } from "common-tags";

const SharedStyles = oneLine`
block
duration-300
font-bold
outline-hidden
px-6
py-3
relative
rounded-md
text-center
tracking-wider
transition-all
uppercase
w-full
2xs:w-fit
`;

const SharedLineStyles = oneLine`
[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
border-none
duration-[400ms]
font-extrabold
outline-hidden
relative
text-neutral-200
tracking-wide
transition-all
uppercase

disabled:cursor-not-allowed
disabled:!text-neutral-500

focus:text-neutral-50

hover:text-neutral-50

after:-bottom-0.5
after:[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
after:absolute
after:bg-primary-500
after:duration-[400ms]
after:h-0.5
after:pointer-events-none
after:transition-all
after:w-0

disabled:after:!w-0

focus:after:w-full

hover:after:w-full
`;

export const FillButtonStyles = oneLine`
${SharedStyles}
bg-primary-400
border-none
shadow-[0.5rem_0.5rem_0.5rem_rgba(0,0,0,0.4)]
text-neutral-900

active:shadow-[0.25rem_0.25rem_0.25rem_rgba(0,0,0,0.4)]
active:translate-x-px
active:translate-y-0.5

disabled:!bg-neutral-400
disabled:cursor-not-allowed

before:absolute
before:bg-[linear-gradient(135deg,_var(--color-neutral-800)_0%,_var(--color-neutral-800)_50%,_var(--color-primary-600)_50%,_var(--color-primary-500)_60%)]
before:duration-250
before:ease-in
before:h-0
before:left-0
before:m-auto
before:rounded-br-lg
before:shadow-[0.25rem_0.25rem_0.25rem_rgba(0,0,0,0.4)]
before:top-0
before:transition-all
before:w-0

disabled:before:!h-0
disabled:before:!w-0

focus:before:h-7
focus:before:w-7

hover:before:h-7
hover:before:w-7
`;

export const OutlineButtonStyles = oneLine`
${SharedStyles}
bg-transparent
ring-2
ring-primary-400
overflow-hidden
text-primary-400

active:scale-100

disabled:!ring-neutral-400
disabled:!scale-100
disabled:!shadow-none
disabled:!text-neutral-400
disabled:cursor-not-allowed

focus:scale-110
focus:shadow-[0_0px_20px_--alpha(var(--color-primary-400)_/_0.4)]
focus:text-neutral-800

hover:scale-110
hover:shadow-[0_0px_20px_--alpha(var(--color-primary-400)_/_0.4)]
hover:text-neutral-800

before:-translate-x-1/2
before:-translate-y-1/2
before:-z-1
before:absolute
before:bg-primary-400
before:duration-300
before:ease-in-out
before:h-full
before:left-1/2
before:rounded-2xl
before:scale-0
before:top-1/2
before:transition-all
before:w-full

disabled:before:!scale-0

focus:before:scale-110

hover:before:scale-110
`;

export const LineOneButtonStyles = oneLine`
${SharedLineStyles}

after:left-1/2

focus:after:left-0

hover:after:left-0
`;

export const LineTwoButtonStyles = oneLine`
${SharedLineStyles}

after:left-0

before:-top-0.5
before:[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
before:absolute
before:bg-primary-500
before:duration-[400ms]
before:h-0.5
before:pointer-events-none
before:right-0
before:transition-all
before:w-0

disabled:before:!w-0

focus:before:w-full

hover:before:w-full
`;
