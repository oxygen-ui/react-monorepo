import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TreeView } from './tree-view';

export default {
  component: TreeView,
  title: 'TreeView',
} as ComponentMeta<typeof TreeView>;

const Template: ComponentStory<typeof TreeView> = (args) => (
  <TreeView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
