import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './modal';

export default {
  component: Modal,
  title: 'Modal',
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
