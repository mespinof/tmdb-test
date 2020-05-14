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

export const Modal = (props: ModalProps): ReactElement<ModalProps> => {
    const [isOpen, setIsOpen] = useControlledProp<boolean>(props.open);
    const [hidden, setHidden] = useState<boolean>(!props.open);

    const hideModal = useCallback((): void => {
        setIsOpen(false);
        props.onClose(false);
    }, [props.onClose, isOpen]);

    const handleTransition = useCallback((): void => {
        setTimeout(() => {
            setHidden(true);
        }, 300);
    }, [hidden]);

    useEffect(() => {
        isOpen && hidden && setHidden(false);
    }, [hidden, isOpen]);

    // const handle

    return (
        <Portal>
            <div
                className={`${props.className} ${classes.modalContainer} ${isOpen ? classes.open : ''}`}
                onTransitionEnd={(): void => !isOpen && handleTransition()}
                onClick={hideModal}
            >
                <div className={classes.modalWrapper} onClick={e => e.stopPropagation()}>
                    <div className={classes.innerWrapper}>
                        <div className={classes.content}>
                            {isOpen && (
                                <div className={classes.closeButton} onClick={hideModal}>
                                    <Icon>close</Icon>
                                </div>
                            )}
                            {!hidden && props.children}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};
