=== TypeScript - Namespaces ===
The namespace is used for logical grouping of functionalities. A namespace can include interfaces, classes, functions and variables to support a single or a group of related functionalities.

== Declaring a Namespace ==

export namespace DigitsInNumber {
  // Check if value is a number
  const isNumber = (value: any): boolean => {
    return !isNaN(value);
  };
  
  // Count the digits in the number
  export const countDigits = (value: any): string => {
    if (isNumber(value) === false) return "Hey, we need a number!";
    if (value < 0) return "We'll ignore negative numbers";
    else if (value >= 0 && value <= 9) return "Single Digit";
    else if (value >= 10 && value <= 99) return "Double Digit";
    else return "More the 2 digits";
  };
}

== Importing and Using our Namespace == 

import {DigitsInNumber} from "./digitsInNumber"

console.log(DigitsInNumber.countDigits(100)); // Double Digit
console.log(DigitsInNumber.countDigits("one hundred")); // Hey, we need a number!
console.log(DigitsInNumber.countDigits(-100)); // We'll ignore negative numbers

