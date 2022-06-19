import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Timeline } from './timeline';

export default {
  component: Timeline,
  title: 'Timeline',
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
