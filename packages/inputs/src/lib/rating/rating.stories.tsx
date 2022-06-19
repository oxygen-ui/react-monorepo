import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rating } from './rating';

export default {
  component: Rating,
  title: 'Rating',
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
