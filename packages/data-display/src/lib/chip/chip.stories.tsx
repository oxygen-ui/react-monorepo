import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from './chip';

export default {
  component: Chip,
  title: 'Chip',
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
