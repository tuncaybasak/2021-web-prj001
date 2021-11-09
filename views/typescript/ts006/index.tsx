import * as React from 'react';
import { useEffect } from 'react';

export const MyTSComp006 = () => {
  interface IEmployee1 {
    empCode: number;
    empName: string;
    getSalary: (number) => number;
    getManagerName(number): string;
  }

  interface KeyPair {
    key: number;
    value: string;
  }

  interface IEmployee2 {
    empCode: number;
    empName: string;
    empDept?: string;
  }

  interface Citizen {
    name: string;
    readonly SSN: number;
  }

  interface IPerson {
    name: string;
    gender: string;
  }

  interface IEmployee3 extends IPerson {
    empCode: number;
  }

  interface IEmployee4 {
    empCode: number;
    name: string;
    getSalary: (number) => number;
  }

  class Employee implements IEmployee4 {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
      this.empCode = code;
      this.name = name;
    }

    getSalary(empCode: number): number {
      return 20000;
    }
  }

  useEffect(() => {
    console.log('*** Interface ***');
    let kv1: KeyPair = { key: 1, value: 'Steve' };
    console.log(kv1);

    console.log('* Optional Property *');
    let empObj1: IEmployee2 = { empCode: 1, empName: 'Steve' };
    console.log(empObj1);

    let empObj2: IEmployee2 = { empCode: 1, empName: 'Bill', empDept: 'IT' };
    console.log(empObj2);

    console.log('* Read only Properties *');
    let personObj: Citizen = { SSN: 110555444, name: 'James Bond' };
    console.log(personObj);

    personObj.name = 'Steve Smith';
    console.log(personObj);
    // personObj.SSN = '333666888'; // Compiler Error

    console.log('* Extending Interfaces *');
    let empObj: IEmployee3 = {
      empCode: 1,
      name: 'Bill',
      gender: 'Male'
    };
    console.log(empObj);

    console.log('* Implementing an Interface *');
    let emp = new Employee(1, 'Steve');
    console.log(emp.empCode);
    console.log(emp.name);
    console.log(emp.getSalary(1));
  });

  return <h3>MyTSComp006</h3>;
};
