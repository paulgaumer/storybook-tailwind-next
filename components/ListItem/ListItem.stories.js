import React from 'react';
import ListItem from './ListItem';

export default {
  component: ListItem,
  title: 'List Item',
  decorators: [
    (story) => (
      <div className="flex justify-center max-w-6xl mx-auto mt-32">
        <div className="shadow-md">{story()}</div>
      </div>
    ),
  ],
};

const Template = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Dwight Schrute',
  title: 'Assistant Regional Manager',
  role: 'admin',
};
