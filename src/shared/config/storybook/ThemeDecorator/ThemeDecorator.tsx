import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (
    { theme: CustomTheme }: { theme: Theme },
) => (StoryComponent: Story) => (
    <ThemeProvider theme={CustomTheme}>
        <div className={`app ${CustomTheme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
