import type { Toast, ToastsElements } from "@melt-ui/svelte";
import type { ToastUpdate } from "../../types";

export interface Props {
	elements: ToastsElements;
	toast: Toast<ToastUpdate>;
}
