import { MouseEvent, ReactNode } from 'react';

import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

import { useModalAnimated } from '@/shared/hooks/useModalAnimated/useModalAnimated';
import classNames, { Mods } from '@/shared/lib/classNames/classNames';

interface ModalProps {
    isOpen: boolean,
    onClose: () => void;
    children: ReactNode;
}

export const Modal = (props: ModalProps) => {
    const { isOpen, onClose, children } = props;
    const { isClosing, onCloseHandler } = useModalAnimated({ onClose, animationDelay: 300, isOpen });

    const mods: Mods = {
        [cls.visible]: isOpen,
        [cls.close]: isClosing,
    };

    const onContentClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    return (
        (
            <Portal elementNode={document.body}>
                {isOpen && (
                    <div className={classNames(cls.Modal, mods)}>
                        <div className={cls.overlay} onClick={onCloseHandler}>
                            <div className={cls.content} onClick={onContentClick}>
                                {children}
                            </div>
                        </div>
                    </div>
                )}
            </Portal>
        )
    );
};
