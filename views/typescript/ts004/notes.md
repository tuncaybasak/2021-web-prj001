TypeScript - Functions

JavaScript is a functional programming language.
In TypeScript, functions can be of two types: named and anonymous.

= Named Functions =
A named function is one where you declare and call a function by its given name.

function display() {
    console.log("Hello TypeScript!");
}

display(); //Output: Hello TypeScript 

= Anonymous Function = 
An anonymous function is one which is defined as an expression. This expression is stored in a variable. So, the function itself does not have a name. These functions are invoked using the variable name that the function is stored in.

let greeting = function() {
    console.log("Hello TypeScript!");
};

greeting(); //Output: Hello TypeScript! 

An anonymous function can also include parameter types and return type.
let Sum = function(x: number, y: number) : number
{
    return x + y;
}

Sum(2,3); // returns 5

= Optional Parameters =
TypeScript has an optional parameter functionality. The parameters that may or may not receive a value can be appended with a '?' to mark them as optional.
function Greet(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet('Hello','Steve');//OK, returns "Hello Steve!"
Greet('Hi'); // OK, returns "Hi undefined!".

= Default Parameters =
TypeScript provides the option to add default values to parameters. So, if the user does not provide a value to an argument, TypeScript will initialize the parameter with the default value.

function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

Greet('Steve');//OK, returns "Hello Steve!"
Greet('Steve', 'Hi'); // OK, returns "Hi Steve!".
Greet('Bill'); //OK, returns "Hello Bill!"

When the default parameters precede required parameters in a function, they can be called by passing undefined.
function Greet(greeting: string = "Hello", name: string) : string {
    return greeting + ' ' + name + '!';
}

Greet(undefined, 'Steve');//returns "Hello Steve!"
Greet("Hi", 'Steve'); //returns "Hi Steve!".
Greet(undefined, 'Bill'); //returns "Hello Bill!"