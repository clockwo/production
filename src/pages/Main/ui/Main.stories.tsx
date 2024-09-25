import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Main from './Main';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/Main',
    component: Main,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ counter: { value: 2 }, user: {} })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator({ theme: Theme.DARK }),
    StoreDecorator({ counter: { value: 2 }, user: {} }),
];
