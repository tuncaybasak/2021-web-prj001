import * as React from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';

export const MyGridLayout002 = () => {
  const layout = [
    { i: 'a', x: 0, y: 10, w: 100, h: 20 },
    { i: 'b', x: 10, y: 20, w: 400, h: 20 },
    { i: 'c', x: 40, y: 30, w: 100, h: 20 },
  ];

  return (
    <ResponsiveGridLayout
      layouts={layout}
      preventCollision={true}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div key="a" style={{ backgroundColor: 'blue' }}>
        tuncay
      </div>
      <div key="b" style={{ backgroundColor: 'red' }}>
        basak
      </div>
      <div
        key="c"
        style={{
          backgroundColor: 'yellow',
          border: '3px solid #73AD21',
          display: 'inline - block',
        }}
      >
        slm
      </div>
    </ResponsiveGridLayout>
  );
};
