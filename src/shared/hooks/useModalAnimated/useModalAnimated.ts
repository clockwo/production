import {
    useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalAnimatedProps {
    onClose: () => void;
    isOpen: boolean;
    animationDelay?: number;
}

export const useModalAnimated = ({ onClose, isOpen, animationDelay }: UseModalAnimatedProps) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const onCloseHandler = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, animationDelay ?? 0);
    }, [animationDelay, onClose]);

    const onEscapeDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onEscapeDown);
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            window.removeEventListener('keydown', onEscapeDown);
        };
    }, [isOpen, onEscapeDown]);

    return { isClosing, onCloseHandler };
};
