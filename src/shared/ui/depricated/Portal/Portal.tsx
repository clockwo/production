import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode,
    elementNode?: HTMLElement,
}

export const Portal = (props: PortalProps) => {
    const { children, elementNode = document.body } = props;

    return createPortal(children, elementNode);
};
