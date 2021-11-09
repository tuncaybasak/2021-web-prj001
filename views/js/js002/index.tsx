import * as React from 'react';
import { useEffect } from 'react';

export const MyJSComp002 = () => {
  useEffect(() => {
    console.log('*** Spread Operator ***');
    console.log('* Ex 1 *');

    const body = {
      height: 174,
      weight: 64,
    };

    const brain = { iq: 1 };
    const person = { ...body, ...brain, name: 'Tuncay' };

    console.log(person);

    console.log('* Ex 2 *');
    let kullanici = { isim: 'Tuncay', yas: 36, sehir: 'Istanbul' };
    // kullanici.sehir = "Ankara"; YANLIŞ
    kullanici = { ...kullanici, sehir: 'Ankara' };
    console.log(kullanici);

    console.log('* Ex 3 *');
    var nums = [3, 5, 7];
    addNums(...nums);
  });

  function addNums(a: number, b: number, c: number) {
    console.log(a + b + c);
  }

  return <h3>MyJSComp002</h3>;
};
