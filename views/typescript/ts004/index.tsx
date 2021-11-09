import * as React from 'react';
import { useEffect } from 'react';

export const MyTSComp004 = () => {
  useEffect(() => {
    console.log('* Named Functions *');
    smpFunc();

    console.log('* Function with Parameter and Return Types *');
    smpFunc001(2, 3);

    console.log('* Anonymous Function *');
    let anynmFunc001 = function() {
      console.log('Hello TypeScript!');
    };
    anynmFunc001();

    console.log('* Function with Paramater and Return Types *');
    let anynmFunc002 = function(x: number, y: number): number {
      return x + y;
    };

    anynmFunc002(2, 3);

    console.log('* Optional  Parameters *');
    smpFunc002('Hello', 'Steve');
    smpFunc002('Hi');

    console.log('* Default  Parameters *');
    smpFunc003('Steve');
    smpFunc003('Steve', 'Hi');
  });

  function smpFunc() {
    console.log('Hello TypeScript!');
  }

  function smpFunc001(x: number, y: number): number {
    return x + y;
  }

  function smpFunc002(greeting: string, name?: string): string {
    return greeting + ' ' + name + '!';
  }

  function smpFunc003(name: string, greeting: string = 'Hello'): string {
    return greeting + ' ' + name + '!';
  }

  return <h3>MyTSComp004</h3>;
};
