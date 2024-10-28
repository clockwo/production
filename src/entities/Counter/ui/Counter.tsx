import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

import { Button, ButtonTheme } from '@/shared/ui/depricated/Button';

export const Counter = () => {
    const value = useCounterValue();
    const { increment, decrement, add } = useCounterActions();
    const addOne = () => {
        add(5);
    };

    const removeOne = () => {
        decrement();
    };

    return (
        <div>
            <h2 data-testid="value">
                {value}
            </h2>
            <Button data-testid="increment-button" theme={ButtonTheme.OUTLINE} onClick={addOne}>
                increment
            </Button>
            <Button data-testid="decrement-button" theme={ButtonTheme.OUTLINE} onClick={removeOne}>
                decrement
            </Button>
        </div>
    );
};
