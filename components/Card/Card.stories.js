import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Card',
  decorators: [
    (story) => <div className="mx-auto max-w-sm mt-32">{story()}</div>,
  ],
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Dwight Schrute',
  title: 'Assistant Regional Manager',
  role: 'admin',
};
