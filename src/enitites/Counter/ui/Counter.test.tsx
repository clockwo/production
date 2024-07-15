import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter element test', () => {
    test('should render correctly', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value')).toHaveTextContent('10');
    });

    test('should increment value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incrementButton = screen.getByTestId('increment-button');
        fireEvent.click(incrementButton);
        expect(screen.getByTestId('value')).toHaveTextContent('11');
    });

    test('should decrement value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const decrementButton = screen.getByTestId('decrement-button');
        fireEvent.click(decrementButton);
        expect(screen.getByTestId('value')).toHaveTextContent('9');
    });
});
