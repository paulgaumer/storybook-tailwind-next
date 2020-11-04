import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Medium Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  type: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: 'small',
};

export const ClickEvent = Template.bind({});
ClickEvent.args = {
  label: 'Prepare to be surprised',
  onClick: () => alert("I'm a modified click event!"),
};
