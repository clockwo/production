import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { TabItem, Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {},
    args: {
        tabs: [
            {
                value: 'Tab 1',
                content: 'Tab 1',
            },
            {
                value: 'Tab 2',
                content: 'Tab 2',
            },
            {
                value: 'Tab 3',
                content: 'Tab 3',
            },
        ] as TabItem<string>[],
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
    const [selectedTab, setSelectedTab] = useState<string>('Tab 1');

    const handleClick = (tab: TabItem<string>) => {
        setSelectedTab(tab.value);
    };

    return <Tabs {...args} value={selectedTab} onClick={handleClick} />;
};

export const Light = Template.bind({});
Light.args = {
    value: 'Tab 2',
};

export const Dark = Template.bind({});
Dark.args = {
    value: 'Tab 2',
};
Dark.decorators = [ThemeDecorator({ theme: Theme.DARK })];
