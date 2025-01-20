import { oneLine } from "common-tags";

export const ButtonContainerStyles = oneLine`
dialog-button-container
flex
flex-col
gap-2.5
justify-end
mt-8
sm:flex-row
sm:gap-4
`;

export const CancelButtonStyles = oneLine`
bg-stone-100
dialog-close-button
font-bold
h-8
inline-flex
items-center
justify-center
leading-none
px-4
rounded-md
text-stone-700
tracking-wide
uppercase
`;

export const CloseButtonStyles = oneLine`
absolute
appearance-none
duration-200
ease-in-out
h-6
inline-flex
items-center
justify-center
outline-none
p-1
right-4
ring-orange-400
rounded-full    
text-orange-600
top-4
transition-all
w-6

focus:ring-2

hover:bg-orange-100 
`;

export const ContentStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
bg-stone-900
dialog-content
fixed
left-1/2
max-h-[85vh]
max-w-[28.125rem]
origin-top-left
p-6
rounded-xl
shadow-lg
top-1/2
w-[90vw]
z-50
`;

export const DescriptionStyles = oneLine`
dialog-description
leading-normal
mb-4
mt-2
text-stone-400
`;

export const HeadingStyles = oneLine`
dialog-heading
font-medium
m-0
text-stone-200
text-lg
`;

export const OverlayStyles = oneLine`
bg-stone-900/50
dialog-overlay
fixed
inset-0
z-50
`;

export const SubmitButtonStyles = oneLine`
bg-orange-500
dialog-submit-button
font-bold
h-8
inline-flex
items-center
justify-center
leading-none
px-4
rounded-md
text-stone-100
tracking-wide
uppercase
`;
