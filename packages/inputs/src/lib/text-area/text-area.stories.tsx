import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from './text-area';

export default {
  component: TextArea,
  title: 'TextArea',
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
