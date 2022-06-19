import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleButton } from './toggle-button';

export default {
  component: ToggleButton,
  title: 'ToggleButton',
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
