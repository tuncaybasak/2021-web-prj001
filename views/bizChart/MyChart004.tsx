import * as React from 'react';

import {
  Chart,
  Interval,
  Tooltip,
  Axis,
  Coordinate,
  getTheme
} from 'bizcharts';

const cols = {
  percent: {
    formatter: val => {
      val = val * 100 + '%';
      return val;
    }
  }
};

const data = [
  { item: 'Fenerbahçe', percent: 0.4 },
  { item: 'Bursa', percent: 0.21 },
  { item: 'Galatasaray', percent: 0.17 },
  { item: 'Beşiktaş', percent: 0.13 },
  { item: 'Trabzon', percent: 0.09 }
];

const colors = data.reduce((pre, cur, idx) => {
  pre[cur.item] = getTheme().colors10[idx];
  return pre;
}, {});

const MyChart004 = () => {
  return (
    <Chart
      height={400}
      data={data}
      scale={cols}
      interactions={['element-active']}
      autoFit
    >
      <Coordinate type="theta" radius={0.75} />
      <Tooltip showTitle={false} />
      <Axis visible={false} />
      <Interval
        position="percent"
        adjust="stack"
        color="item"
        style={{
          lineWidth: 1,
          stroke: '#fff'
        }}
        label={[
          'item',
          item => {
            return {
              offset: 20,
              content: data => {
                return `${data.item}\n ${data.percent * 100}%`;
              },
              style: {
                fill: colors[item]
              }
            };
          }
        ]}
      />
    </Chart>
  );
};

export default MyChart004;
