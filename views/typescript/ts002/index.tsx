import * as React from 'react';
import { useEffect } from 'react';

export const MyTSComp002 = () => {
  useEffect(() => {
    console.log('*** number ***');
    let myNumber: number = 10.8788;
    console.log(myNumber);
    console.log(myNumber.toFixed());
    console.log(myNumber.toFixed(1));
    console.log(myNumber.toFixed(2));
    console.log(myNumber.toString());

    console.log('*** string ***');
    let employeeName: string = 'John Smith';
    let employeeDept: string = 'Finance';
    console.log(employeeName);
    console.log(employeeDept);

    let employeeDesc1: string =
      employeeName + ' works in the ' + employeeDept + ' department.';
    console.log(employeeDesc1);

    let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`;
    console.log(employeeDesc2);

    console.log('*** boolean ***');
    let isPresent: boolean = true;
    console.log(isPresent);

    console.log('*** tuple ***');
    console.log(
      'TypeScript introduced a new data type called Tuple. Tuple can contain two values of different data types.'
    );

    var employee: [number, string] = [1, 'Steve'];
    console.log(employee[0]);
    console.log(employee[1]);

    var user: [number, string, boolean, number, string]; // declare tuple variable
    user = [1, 'Steve', true, 20, 'Admin']; // initialize tuple variable

    for (var index in user) {
      console.log(user[index]);
    }

    console.log('*tuple array*');
    var employee1: [number, string][];
    employee1 = [[1, 'Steve'], [2, 'Bill'], [3, 'Jeff']];
    console.log(employee1);

    console.log('*** Union ***');
    console.log(
      'TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type'
    );

    let code: string | number;
    code = 123;
    console.log(code);
    code = 'ABC';
    console.log(code);

    console.log('Function Parameter as Union Type');
    displayType(123);
    displayType('ABC');

    console.log('*** any ***');
    console.log(
      'TypeScript has type-checking and compile-time checks. However, we do not always have prior knowledge about the type of some variables, especially when there are user-entered values from third party libraries. In such cases, we need a provision that can deal with dynamic content.'
    );

    let something: any = 'Hello World!';
    console.log(something);
    something = 23;
    console.log(something);
    something = true;
    console.log(something);

    console.log('*Any type Array*');
    let arr: any[] = ['John', 212, true];
    arr.push('Smith');
    console.log(arr);

    console.log('*** void ***');
    console.log(
      'Similar to languages like Java, void is used where there is no data. '
    );
    let speech: void = sayHi();
    console.log(speech);
  });

  function displayType(code: string | number) {
    if (typeof code === 'number') console.log('Code is number.');
    else if (typeof code === 'string') console.log('Code is string.');
  }

  function sayHi(): void {
    console.log('Hi!');
  }

  return <h3>MyTSComp002</h3>;
};
