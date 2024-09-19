import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h2 data-testid="value">
                {value}
            </h2>
            <Button data-testid="increment-button" theme={ButtonTheme.OUTLINE} onClick={increment}>
                increment
            </Button>
            <Button data-testid="decrement-button" theme={ButtonTheme.OUTLINE} onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};
