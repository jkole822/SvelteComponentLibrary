import type { Props as ButtonProps } from "../Button/types";

export interface Props extends ButtonProps {
	nonInteractive?: boolean;
	text: string;
	triggerClass?: string;
}
