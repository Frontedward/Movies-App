import React from 'react';
import { Tabs } from 'antd';

export default class Tab extends React.Component {
  render() {
    return (
      <Tabs
        defaultActiveKey='1'
        centered
        // style={{width: '110px'}}
        items={[
          {
            label: 'Search',
            key: '1',
            children: '',
          },
          {
            label: 'Rated',
            key: '2',
            children: '',
          },
        ]}
      />
    );
  }
}
