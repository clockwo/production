import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from '../Sidebar/Sidebar';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
// eslint-disable-next-line max-len

describe('Sidebar element test', () => {
    test('should render correctly', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should collapsed', () => {
        componentRender(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
