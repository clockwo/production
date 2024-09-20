import React, { ReactNode, useCallback, useEffect } from 'react';
import classNames, { Mods } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import styles from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const height = window.innerHeight - 100;

export const DrawerContent = (props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;
    const { theme } = useTheme();
    const { Gesture, Spring } = useAnimationLibs();

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    const mods: Mods = {
        [styles.isOpen]: isOpen,
    };

    return (
        <Portal>
            <div
                className={classNames(styles.Drawer, mods, [className, theme, 'app_drawer'])}
            >
                <Overlay onClick={() => close()} />
                <Spring.a.div
                    className={styles.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}
                >
                    <div className={styles.handle} />
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
};

const DrawerAsync = ({ children, ...otherProps }: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...otherProps}>{children}</DrawerContent>;
};

export const Drawer = ({ children, ...otherProps }: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...otherProps}>{children}</DrawerAsync>
    </AnimationProvider>
);
