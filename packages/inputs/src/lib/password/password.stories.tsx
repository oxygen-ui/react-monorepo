import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Password } from './password';

export default {
  component: Password,
  title: 'Password',
} as ComponentMeta<typeof Password>;

const Template: ComponentStory<typeof Password> = (args) => (
  <Password {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
