import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { SpinnerLoader } from './SpinnerLoader';

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
