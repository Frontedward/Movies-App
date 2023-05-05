import React from 'react';
import { Tabs } from 'antd';
import Search from './search';
import Rated from './rated';

const MovieTabs = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={[
      {
        label: 'Search',
        key: '1',
        children: <Search />,
      },
      {
        label: 'Rated',
        key: '2',
        children: <Rated />,
      },
    ]}
  />
);

export default MovieTabs;