import React from 'react';
import List from './List';
import * as ListItemStories from '../ListItem/ListItem.stories';

export default {
  component: List,
  title: 'List',
  decorators: [
    (story) => <div className="max-w-6xl mx-auto mt-32">{story()}</div>,
  ],
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { ...ListItemStories.Default.args, id: 1 },
    { name: 'Jim Halpert', title: 'Salesman', role: 'editor', id: 2 },
    { name: 'Pamela Beesly', title: 'Receptionist', role: 'admin', id: 3 },
    { name: 'Michael Scott', title: 'Regional Manager', role: 'reader', id: 4 },
    {
      name: 'Toby Flenderson',
      title: 'HR Manager',
      role: '...',
      id: 4,
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  items: [],
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  items: [],
};
