import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TransferList } from './transfer-list';

export default {
  component: TransferList,
  title: 'TransferList',
} as ComponentMeta<typeof TransferList>;

const Template: ComponentStory<typeof TransferList> = (args) => (
  <TransferList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
