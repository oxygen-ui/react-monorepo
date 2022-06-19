import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGroup } from './button-group';

export default {
  component: ButtonGroup,
  title: 'ButtonGroup',
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
