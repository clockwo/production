import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    // eslint-disable-next-line max-len
    children: 'Lorem ipsum dolor sit amet. Aut harum dolor ea totam quia ea voluptas animi ut tenetur rerum a dolorum quas ut magnam quasi id voluptatum deserunt. Sed asperiores natus aut reiciendis eaque  et reiciendis dolorem est inventore cupiditate rem quae enim eum quia quae rem ipsa velit.',
};
