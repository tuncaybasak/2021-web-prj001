import * as React from 'react';
import { useEffect } from 'react';

export const MyTSComp003 = () => {
  useEffect(() => {
    console.log('*** if else ***');
    let x: number = 10,
      y = 20;

    if (x > y) {
      console.log('x is greater than y.');
    } else if (x < y) {
      console.log('x is less than y.');
    } else if (x == y) {
      console.log('x is equal to y');
    }

    console.log('*** Ternary operator ***');
    x > y
      ? console.log('x is greater than y.')
      : console.log('x is less than or equal to y.');

    console.log('*** Switch ***');
    let day: number = 4;

    switch (day) {
      case 0:
        console.log('It is a Sunday.');
        break;
      case 1:
        console.log('It is a Monday.');
        break;
      case 2:
        console.log('It is a Tuesday.');
        break;
      case 3:
        console.log('It is a Wednesday.');
        break;
      case 4:
        console.log('It is a Thursday.');
        break;
      case 5:
        console.log('It is a Friday.');
        break;
      case 6:
        console.log('It is a Saturday.');
        break;
      default:
        console.log('No such day exists!');
        break;
    }

    console.log('*** TypeScript - for Loops ***');

    console.log('for Loop');
    console.log(
      'The for loop is used to execute a block of code a given number of times, which is specified by a condition.'
    );

    for (let i = 0; i < 3; i++) {
      console.log('Block statement execution no.' + i);
    }

    console.log('for...of Loop');
    console.log(
      'TypeScript includes the for...of loop to iterate and access elements of an array, list, or tuple collection. '
    );

    console.log('ex1');
    let arr = [10, 20, 30, 40];
    for (var val of arr) {
      console.log(val); // prints values: 10, 20, 30, 40
    }

    console.log('ex2');
    let str = 'Hello World';
    for (var char of str) {
      console.log(char); // prints chars: H e l l o  W o r l d
    }

    console.log('for...in Loop');
    console.log(
      'Another form of the for loop is for...in. This can be used with an array, list, or tuple. The for...in loop iterates through a list or collection and returns an index on each iteration.'
    );
    let arr1 = [10, 20, 30, 40];

    for (var index in arr1) {
      console.log(index); // prints indexes: 0, 1, 2, 3
      console.log(arr1[index]); // prints elements: 10, 20, 30, 40
    }

    console.log('while Loop');
    let i: number = 2;
    while (i < 4) {
      console.log('Block statement execution no.' + i);
      i++;
    }

    console.log('do..while Loop');
    let j: number = 2;
    do {
      console.log('Block statement execution no.' + j);
      j++;
    } while (j < 4);
  });

  return <h3>MyTSComp003</h3>;
};
