import {
    memo, MutableRefObject, ReactNode, UIEvent, useEffect, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from '@/shared/lib/classNames/classNames';
import { useInfinityScroll } from '@/shared/hooks/useInfinityScroll/useInfinityScroll';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { getScrollByPath, ScrollSaveActions } from '@/features/ScrollSave';
import { useThrottle } from '@/shared/hooks/useThrottle/useThrottle';
import { StateSchema } from '@/app/providers/StoreProvider';
import styles from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, location.pathname));

    useEffect(() => {
        wrapperRef.current.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    }, []);

    useInfinityScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
        dispatch(ScrollSaveActions.setScrollPosition({
            path: location.pathname,
            position: event.currentTarget.scrollTop,
        }));
    }, 200);

    return (
        <section id={PAGE_ID} onScroll={onScroll} ref={wrapperRef} className={classNames(styles.Page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
