import {
    createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationsModules = () => Promise.all([
    import('@use-gesture/react'),
    import('@react-spring/web'),
]);

export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const GestureRef = useRef<GestureType>();
    const SpringRef = useRef<SpringType>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        getAsyncAnimationsModules().then(([Gesture, Spring]) => {
            GestureRef.current = Gesture;
            SpringRef.current = Spring;
            setIsLoaded(true);
        });
    }, []);

    const defaultProps = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider value={defaultProps}>
            {children}
        </AnimationContext.Provider>
    );
};
