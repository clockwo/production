// eslint-disable-next-line zerg314-plugin/layer-imports
import '@/app/styles/index.scss';

import { Story } from '@storybook/react';

import { ThemeProvider } from '@/app/providers/ThemeProvider/testing';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (
    { theme: CustomTheme }: { theme: Theme },
) => (StoryComponent: Story) => (
    <ThemeProvider theme={CustomTheme}>
        <div
            className={CustomTheme}
            style={{
                backgroundColor: 'var(--background-color)',
                color: 'var(--primary-color)',
                width: '100%',
                height: '100vh',
            }}
        >
            <StoryComponent />
        </div>
    </ThemeProvider>
);
