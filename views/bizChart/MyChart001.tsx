import * as React from 'react';
import { Chart, LineAdvance, Axis, Interval } from 'bizcharts';

const data = [
  {
    year: '1991',
    value: 3,
  },
  {
    year: '1992',
    value: 4,
  },
  {
    year: '1993',
    value: 5,
  },
  {
    year: '1994',
    value: 4,
  },
  {
    year: '1995',
    value: 4,
  },
  {
    year: '1996',
    value: 4,
  },
  {
    year: '1997',
    value: 2,
  },
];

export const MyChart001 = () => {
  return (
    <Chart padding="auto" height={300} width={500} data={data}>
      <Axis name="year" />
      <Axis name="value" />
      <LineAdvance position="year*value" />
      <Interval position="year*value" />
    </Chart>
  );
};
