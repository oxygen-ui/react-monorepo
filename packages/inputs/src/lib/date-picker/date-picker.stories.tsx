import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePicker } from './date-picker';

export default {
  component: DatePicker,
  title: 'DatePicker',
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
