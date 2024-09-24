import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox, ListBoxOption } from './ListBox';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        options: [
            {
                value: 'Option 1',
                label: 'Option 1',
            },
            {
                value: 'Option 2',
                label: 'Option 2',
            },
            {
                value: 'Option 3',
                label: 'Option 3',
            },
            {
                value: 'Option 4',
                label: 'Option 4',
            },
            {
                value: 'Option 5',
                label: 'Option 5',
            },

        ] as ListBoxOption<string>[],
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => {
    const [value, setValue] = useState<string>('Option 1');

    const setOption = (newValue: string) => {
        setValue(newValue);
    };

    return (<ListBox {...args} value={value} onChange={setOption} />);
};

export const Light = Template.bind({});
Light.args = {
    value: 'Option 1',
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Select option',
    value: 'Option 1',
};
Dark.decorators = [ThemeDecorator({ theme: Theme.DARK })];
