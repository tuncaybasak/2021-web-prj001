import * as React from 'react';
import { useEffect } from 'react';

export const MyTSComp007 = () => {
  useEffect(() => {
    console.log('*** Class ***');
    let emp = new Employee(100, 'Bill');
    console.log(emp.displayName());

    console.log('*** Abstract Class ***');
    let emp1: PersonAbs = new EmployeeAbs('James', 100);
    console.log(emp1);
    console.log(emp1.display());

    let emp2: PersonAbs = emp1.find('Steve');
    console.log(emp2);
  });

  return <h3>MyTSComp007</h3>;
};

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  empCode: number;

  constructor(empcode: number, name: string) {
    super(name);
    this.empCode = empcode;
  }

  displayName(): void {
    console.log('Name = ' + this.name + ', Employee Code = ' + this.empCode);
  }
}

abstract class PersonAbs {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name);
  }

  abstract find(string): PersonAbs;
}

class EmployeeAbs extends PersonAbs {
  empCode: number;

  constructor(name: string, code: number) {
    super(name); // must call super()
    this.empCode = code;
  }

  find(name: string): PersonAbs {
    // execute AJAX request to find an employee from a db
    return new EmployeeAbs(name, 1);
  }
}
