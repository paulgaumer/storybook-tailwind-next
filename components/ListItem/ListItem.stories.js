import React from 'react';
import ListItem from './ListItem';

export default {
  component: ListItem,
  title: 'List Item',
  decorators: [
    (story) => (
      <div className="mx-auto max-w-6xl mt-32 flex justify-center">
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
