import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
// eslint-disable-next-line max-len
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar element test', () => {
    test('should render correctly', () => {
        componentRender(<Sidebar />, { route: '/' });
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should collapsed', () => {
        componentRender(<Sidebar />, { route: '/' });
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
