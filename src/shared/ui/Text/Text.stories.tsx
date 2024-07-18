import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextColor, TextVariation } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur'
            + ' adipiscing elit, sed do eiusmod tempor incididunt '
            + 'ut labore et dolore magna aliqua. ',
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: TextColor.PRIMARY,
};

export const Red = Template.bind({});
Red.args = {
    color: TextColor.RED,
};

export const Inverted = Template.bind({});
Inverted.args = {
    color: TextColor.INVERTED,
};

export const Normal = Template.bind({});
Normal.args = {
    variation: TextVariation.NORMAL,
};

export const Title = Template.bind({});
Title.args = {
    variation: TextVariation.TITLE,
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator({ theme: Theme.DARK })];
