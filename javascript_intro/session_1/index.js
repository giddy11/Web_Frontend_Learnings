/**
 * WHy Js
 * For data transfer or receiving data or manipulating data
 * Or displaying visualizing data
 *
 * To handle the data we use scripting languages like Php, Js, java, python, C#, C, Ruby
 *
 * Data is gotten from the UI and handled using the script
 *
 * THey wil be validation and checks for it finally gets saved to the database for any other operations.
 *
 * Data:
 * It can appear in different forms
 * Intergers:
 * Int > 1 -♾️
 * String > "string"
 * Array > [] or list
 * Objects > {}
 * undefined
 * Null
 * Boolean > true/false
 *
 * Variables - Containers holding values (data like the age, name) like in the case of html
 * Declaration - we have keywords, the variable name, assignment(=) and value.
 * var name = "john"
 * var: it can be redeclare
 * let: it can't be redeclare
 * const: it cannot changed once declared
 * Expression: let name = "john"
 * it is a combination of values, variables, operators and functions that evaluates a single value.
 * Arithmetic, String, logical, functions calls, array, object expressions.
 * 2+2 - Arithmetic (-, +, *, etc)
 * "Hello" + "you" - String
 * 5 > 3 - Logical
 * Comparison Operators (== for values comparison, === for values and types data type ie 5 === "5", !=, < etc)
 * &&
 * ||
 * !
 * =
 *
 * Output:
 * To console and DOM
 * console.log()
 * 
 * Data Types:
 * Strings and methods
 * Length: returns the length of the string; let name = "john"; let nameLength = name.length
 * toUppercase(); returns the word with all the letters been capitalized
 * toLowercase(); opp of the above
 * trim();
 * startsWith()
 * endswith()
 * split(); it splits the string into an array of substrings
 * substring(); takes 2 params (start and end)
 * slice; extract a part of the string
 * 
 * A method is a function that is  property of an object or a class
 * Methods are used to perform specific actions on an object or class and they typically operate on the object properties
 * 
 */

let num1 = '40'; //string
let num2 = 40; //int

let name = "Gideon"
let nameLen = name.length

let name2 = "john"
let nameTrim = " john     "
let msg = "Hello Ma, how are you? i will kill you"
let email = "paul@gmail.com"
let text = "I will kill you,tomorrow"


let result = num1 === num2;
let subRes = email.substring(5,9)
let sliceRes = email.slice(3)

// console.log(name2.toUpperCase());
// console.log(nameTrim.trim());
// console.log(msg.includes("are"));
// console.log(text.split(','));
// console.log(subRes);
console.log(sliceRes);
