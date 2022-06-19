import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './avatar';

export default {
  component: Avatar,
  title: 'Avatar',
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
