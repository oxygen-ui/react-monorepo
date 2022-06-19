import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from './badge';

export default {
  component: Badge,
  title: 'Badge',
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
