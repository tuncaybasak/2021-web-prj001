import * as React from 'react';
import { useEffect } from 'react';

export const MyTSComp008 = () => {
  useEffect(() => {
    console.log('*** Generics ***');
    let myNumArr = getArray<number>([100, 200, 300]);
    let myStrArr = getArray<string>(['Hello', 'World']);
    console.log(myNumArr);
    console.log(myStrArr);

    myNumArr.push(400);
    myStrArr.push('Hello TypeScript');
    console.log(myNumArr);
    console.log(myStrArr);
  });

  function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
  }

  return <h3>MyTSComp008</h3>;
};
