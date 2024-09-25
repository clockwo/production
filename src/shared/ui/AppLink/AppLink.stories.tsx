import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'App Link',
    theme: AppLinkTheme.SECONDARY,
};
