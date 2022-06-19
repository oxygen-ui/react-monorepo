import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skeleton } from './skeleton';

export default {
  component: Skeleton,
  title: 'Skeleton',
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
