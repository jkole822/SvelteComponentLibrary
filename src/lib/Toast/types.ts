export enum ToastColorEnum {
	error = "bg-red-500",
	success = "bg-green-500"
}

export type ToastColorType = ToastColorEnum.error | ToastColorEnum.success;

export interface ToastData {
	color: ToastColorType;
	description: string;
	id: number | string;
	title: string;
}

export interface Props {
	className?: string;
	toastData: ToastData[];
	toastToDisplay?: string;
}
