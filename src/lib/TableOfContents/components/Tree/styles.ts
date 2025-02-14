import { oneLine } from "common-tags";

export const LinkStyles = oneLine`
inline-flex
items-center
justify-center
gap-1
no-underline
outline-hidden
ring-primary-500
rounded
transition-colors

data-active:text-primary-500

hover:!text-primary-300

focus-visible:ring-2
`;

export const ListItemStyles = oneLine`
mt-0
pt-2
`;

export const ListStyles = oneLine`
list-none
m-0
`;
