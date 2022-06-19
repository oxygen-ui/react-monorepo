import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from './drawer';

export default {
  component: Drawer,
  title: 'Drawer',
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
