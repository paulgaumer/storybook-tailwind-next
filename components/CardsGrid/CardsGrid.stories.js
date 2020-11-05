import React from 'react';
import CardsGrid from './CardsGrid';
import * as CardStories from '../Card/Card.stories';

export default {
  component: CardsGrid,
  title: 'Cards Grid',
  decorators: [
    (story) => <div className="max-w-6xl mx-auto mt-32">{story()}</div>,
  ],
};

const Template = (args) => <CardsGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { ...CardStories.Default.args, id: 1 },
    { name: 'Jim Halpert', title: 'Salesman', role: 'editor', id: 2 },
    { name: 'Pamela Beesly', title: 'Receptionist', role: 'admin', id: 3 },
    { name: 'Michael Scott', title: 'Regional Manager', role: 'reader', id: 4 },
    { name: 'Toby Flenderson', title: 'HR Manager', role: '...', id: 5 },
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
