import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.scss';
import { ModalProps } from './ModalProps';
import { useControlledProp } from '../../hooks/useControlledProp';
import { Icon } from '@material-ui/core';

function Portal(props): ReactElement {
    let modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        document.body.appendChild(modalRoot);
    }

    return createPortal(props.children, modalRoot);
}

export const Modal = ({ open, onClose, className, children }: ModalProps): ReactElement<ModalProps> => {
    const [isOpen, setIsOpen] = useControlledProp<boolean>(open);
    const [hidden, setHidden] = useState<boolean>(!open);

    const hideModal = useCallback((): void => {
        setIsOpen(false);
        onClose(false);
    }, [setIsOpen, onClose]);

    const handleTransition = useCallback((): void => {
        setTimeout(() => {
            setHidden(true);
        }, 300);
    }, []);

    useEffect(() => {
        isOpen && hidden && setHidden(false);
    }, [hidden, isOpen]);

    // const handle

    return (
        <Portal>
            <div
                className={`${className} ${classes.modalContainer} ${isOpen ? classes.open : ''}`}
                onTransitionEnd={(): void => !isOpen && handleTransition()}
                onClick={hideModal}
            >
                <div className={classes.modalWrapper} onClick={(e): void => e.stopPropagation()}>
                    <div className={classes.innerWrapper}>
                        <div className={classes.content}>
                            {isOpen && (
                                <div className={classes.closeButton} onClick={hideModal}>
                                    <Icon>close</Icon>
                                </div>
                            )}
                            {!hidden && children}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};
