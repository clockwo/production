import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { DotsLoader } from './DotsLoader';

export default {
    title: 'shared/DotsLoader',
    component: DotsLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DotsLoader>;

const Template: ComponentStory<typeof DotsLoader> = (args) => <DotsLoader {...args} />;

export const Light = Template.bind({});
Light.args = {
    theme: Theme.DARK,
};

export const Dark = Template.bind({});
Dark.args = {
    theme: Theme.LIGHT,
};
Dark.decorators = [ThemeDecorator({ theme: Theme.DARK })];
