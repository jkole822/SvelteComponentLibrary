import { oneLine } from "common-tags";

const sharedStylesOne = oneLine`
duration-300
font-bold
outline-none
px-6
py-3
relative
rounded-md
tracking-wider
transition-all
uppercase
`;

const sharedStylesTwo = oneLine`
[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
border-none
duration-[400ms]
font-extrabold
outline-none
relative
text-stone-200
tracking-wide
transition-all
uppercase

disabled:cursor-not-allowed
disabled:!text-gray-500

focus:text-stone-50

hover:text-stone-50

after:-bottom-0.5
after:[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
after:absolute
after:bg-orange-500
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
${sharedStylesOne}
bg-orange-400
border-none
shadow-[0.5rem_0.5rem_0.5rem_rgba(0,0,0,0.4)]
text-stone-900

active:shadow-[0.25rem_0.25rem_0.25rem_rgba(0,0,0,0.4)]
active:translate-x-px
active:translate-y-0.5

disabled:!bg-gray-400
disabled:cursor-not-allowed

before:absolute
before:bg-[linear-gradient(135deg,_rgba(41,37,36,1)_0%,_rgba(41,37,36,1)_50%,_rgba(234,88,12,1)_50%,_rgba(249,115,22,1)_60%)]
before:duration-400
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
${sharedStylesOne}
bg-transparent
border-2
border-orange-400
overflow-hidden
text-orange-400

active:scale-100

disabled:!border-gray-400
disabled:!scale-100
disabled:!shadow-none
disabled:!text-gray-400
disabled:cursor-not-allowed

focus:scale-110
focus:shadow-[0_0px_20px_rgba(251,146,60,0.4)]
focus:text-stone-800

hover:scale-110
hover:shadow-[0_0px_20px_rgba(251,146,60,0.4)]
hover:text-stone-800

before:-translate-x-1/2
before:-translate-y-1/2
before:-z-[1]
before:absolute
before:bg-orange-400
before:duration-500
before:ease-in-out
before:h-12
before:left-1/2
before:rounded-2xl
before:scale-0
before:top-1/2
before:transition-all
before:w-12

disabled:before:!scale-0

focus:before:scale-[5]

hover:before:scale-[5]
`;

export const LineOneButtonStyles = oneLine`
${sharedStylesTwo}

after:left-1/2

focus:after:left-0

hover:after:left-0
`;

export const LineTwoButtonStyles = oneLine`
${sharedStylesTwo}

after:left-0

before:-top-0.5
before:[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
before:absolute
before:bg-orange-500
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
