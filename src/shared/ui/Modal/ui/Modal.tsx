import {
    FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean,
    onClose: () => void;
    children: ReactNode;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props: ModalProps) => {
    const { isOpen, onClose, children } = props;
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const mods: Record<string, boolean> = {
        [cls.visible]: isOpen,
        [cls.close]: isClosing,
    };
    const [mounted, setMounted] = useState<boolean>(false);

    const onCloseHandler = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [onClose]);

    const onEscapeDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    const onContentClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onEscapeDown);
            setMounted(true);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onEscapeDown);
            setMounted(false);
        };
    }, [isOpen, onEscapeDown]);

    return (
        mounted && (
            <Portal elementNode={document.body}>
                <div className={classNames(cls.Modal, mods)}>
                    <div className={cls.overlay} onClick={onCloseHandler}>
                        <div className={cls.content} onClick={onContentClick}>
                            {children}
                        </div>
                    </div>
                </div>
            </Portal>
        )
    );
};
