import { useCallback, useState } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const setOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const setClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return { isOpen, setOpen, setClose };
};
