import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Navbar } from './Navbar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ counter: { value: 2 }, user: {} })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator({ theme: Theme.DARK }),
    StoreDecorator({ counter: { value: 2 }, user: {} }),
];
