import * as React from 'react';
import GridLayout from 'react-grid-layout';

export const MyGridLayout001 = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 4, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={80}
      width={1200}
    >
      <div key="a" style={{ backgroundColor: 'grey' }}></div>
      <div key="b" style={{ backgroundColor: 'grey' }}></div>
      <div key="c" style={{ backgroundColor: 'grey' }}></div>
    </GridLayout>
  );
};
