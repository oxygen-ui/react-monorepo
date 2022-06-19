import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from './container';

export default {
  component: Container,
  title: 'Container',
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
