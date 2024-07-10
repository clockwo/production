import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button element test', () => {
    test('should render correctly', () => {
        render(<Button data-testid="button">Click on me</Button>);
        expect(screen.getByTestId('button')).toBeInTheDocument();
    });

    test('should has class clear', () => {
        render(<Button data-testid="button" theme={ThemeButton.CLEAR}>Click on me</Button>);
        expect(screen.getByTestId('button')).toHaveClass('clear');
    });

    test('should has "Click on me" text value', () => {
        render(<Button data-testid="button">Click on me</Button>);
        expect(screen.getByTestId('button')).toHaveTextContent('Click on me');
    });
});
