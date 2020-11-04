import React from 'react';
import CardsList from './CardsList';
import * as CardStories from '../Card/Card.stories';

export default {
  component: CardsList,
  title: 'Cards List',
  decorators: [
    (story) => <div className="mx-auto max-w-7xl mt-32">{story()}</div>,
  ],
};

const Template = (args) => <CardsList {...args} />;

export const Default = Template.bind({});
Default.args = {
  profiles: [
    { ...CardStories.Default.args, id: 1 },
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
  profile: [],
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  profiles: [],
};
