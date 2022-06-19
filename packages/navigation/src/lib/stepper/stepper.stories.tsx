import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stepper } from './stepper';

export default {
  component: Stepper,
  title: 'Stepper',
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
  <Stepper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
