export interface Toast {
	id: string;
	value: string;
}

export interface ToastUpdate {
	description: string;
	id: string;
	title: string;
}

export interface Props {
	toastUpdates: ToastUpdate[];
}
