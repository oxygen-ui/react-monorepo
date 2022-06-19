import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Datagrid } from './datagrid';

export default {
  component: Datagrid,
  title: 'Datagrid',
} as ComponentMeta<typeof Datagrid>;

const Template: ComponentStory<typeof Datagrid> = (args) => (
  <Datagrid {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
