TypeScript - Classes

The class in TypeScript is compiled to plain JavaScript functions by the TypeScript compiler to work across platforms and browsers.

JavaScript has been primarily a functional programming language where inheritance is prototype-based.

In ECMAScript 6, object-oriented class based approach was introduced. 

A class can include the following:

Constructor
Properties
Methods

Inheritance
Just like object-oriented languages such as Java and C#, TypeScript classes can be extended to create new classes with inheritance, using the keyword extends.

class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    empCode: number;
    
    constructor(empcode: number, name:string) {
        super(name);
        this.empCode = empcode;
    }
    
    displayName():void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let emp = new Employee(100, "Bill");
emp.displayName(); // Name = Bill, Employee Code = 100



== TypeScript - Abstract Class ==
Define an abstract class in Typescript using the abstract keyword. Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.



== TypeScript - Data Modifiers ==

= public =
By default, all members of a class in TypeScript are public. All the public members can be accessed anywhere without any restrictions.

class Employee {
    public empCode: string;
    empName: string;
}

let emp = new Employee();
emp.empCode = 123;
emp.empName = "Swati";

= private =
The private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class.

class Employee {
    private empCode: number;
    empName: string;
}

let emp = new Employee();
emp.empCode = 123; // Compiler Error
emp.empName = "Swati";//OK


= protected =
The protected access modifier is similar to the private access modifier, except that protected members can be accessed using their deriving classes.

class Employee {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}

class SalesEmployee extends Employee{
    private department: string;
    
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}

let emp = new SalesEmployee("John Smith", 123, "Sales");
empObj.empCode; //Compiler Error



== TypeScript - ReadOnly =

TypeScript includes the readonly keyword that makes a property as read-only in the class, type or interface.

Exmp 1:

class Employee {
    readonly empCode: number;
    empName: string;
    
    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}
let emp = new Employee(10, "John");
emp.empCode = 20; //Compiler Error
emp.empName = 'Bill'; 

Exmp 2:

interface IEmployee {
    readonly empCode: number;
    empName: string;
}

let empObj:IEmployee = {
    empCode:1,
    empName:"Steve"
}

empObj.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'



== TypeScript - Static =

ES6 includes static members and so does TypeScript.

Static members of a class are accessed using the class name and dot notation, without creating an object e.g.

Exmp 1:

class Circle {
    static pi: number = 3.14;
    
    static calculateArea(radius:number) {
        return this.pi * radius * radius;
    }
}
Circle.pi; // returns 3.14
Circle.calculateArea(5); // returns 78.5

Exmp 2:

class Circle {
    static pi = 3.14;

    static calculateArea(radius:number) {
        return this.pi * radius * radius;
    }

    calculateCircumference(radius:number):number { 
        return 2 * Circle.pi * radius;
    }
}

Circle.calculateArea(5); // returns 78.5

let circleObj = new Circle();
circleObj.calculateCircumference(5) // returns 31.4000000
//circleObj.calculateArea(); <-- cannot call this