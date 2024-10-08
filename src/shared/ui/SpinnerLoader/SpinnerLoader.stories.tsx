import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SpinnerLoader } from './SpinnerLoader';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/SpinnerLoader',
    component: SpinnerLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SpinnerLoader>;

const Template: ComponentStory<typeof SpinnerLoader> = (args) => <SpinnerLoader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator({ theme: Theme.DARK })];
