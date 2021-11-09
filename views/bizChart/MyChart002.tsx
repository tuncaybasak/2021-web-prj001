import * as React from 'react';
import { Chart, Interval, Legend } from 'bizcharts';

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const MyChart002 = () => {
  return (
    <Chart height={320} autoFit data={data}>
      <Interval position="genre*sold" />
      <Legend marker="circle" />
    </Chart>
  );
};

export default MyChart002;
