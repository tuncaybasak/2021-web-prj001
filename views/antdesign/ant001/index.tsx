import * as React from 'react';

import 'antd/dist/antd.css';
import { Timeline, Divider } from 'antd';

export const MyTimeLine01 = () => {
  return (
    <div>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
  );
};

export function MyTimeLine02({ title }) {
  const dataSource = [
    {
      name: 'Create a services site 2015-09-01'
    },
    {
      name: 'Solve initial network problems 2015-09-01'
    },
    {
      name: 'Technical testing 2015-09-01'
    },
    {
      name: 'Network problems being solved 2015-09-01'
    }
  ];

  return (
    <div>
      <Divider plain>
        <h4>{title}</h4>
      </Divider>
      <Timeline>
        {dataSource.map(data => (
          <Timeline.Item>{data.name}</Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}
