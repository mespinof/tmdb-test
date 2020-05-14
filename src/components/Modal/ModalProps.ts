export interface ModalProps {
    className: string;
    open: boolean;
    onClose?: (result: boolean) => void;
    children: JSX.Element | JSX.Element[];
}
