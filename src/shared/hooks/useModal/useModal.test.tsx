import { act, renderHook } from '@testing-library/react-hooks';
import { useModal } from './useModal';

describe('useModal hook', () => {
    test('initial value is false', () => {
        const { result } = renderHook(() => useModal());
        expect(result.current.isOpen).toBe(false);
    });

    test('value must be true after setOpen action', () => {
        const { result } = renderHook(() => useModal());
        act(() => {
            result.current.setOpen();
        });
        expect(result.current.isOpen).toBe(true);
    });

    test('value must be true after setClose action', () => {
        const { result } = renderHook(() => useModal());
        act(() => {
            result.current.setOpen();
            result.current.setClose();
        });
        expect(result.current.isOpen).toBe(false);
    });
});
