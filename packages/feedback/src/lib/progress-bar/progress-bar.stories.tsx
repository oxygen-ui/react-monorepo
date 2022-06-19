import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from './progress-bar';

export default {
  component: ProgressBar,
  title: 'ProgressBar',
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
