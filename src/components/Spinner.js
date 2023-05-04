import React from 'react';
import { Space, Spin } from 'antd';

const Spinner = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Spin tip="Loading..." />
  </Space>
);

export default Spinner;