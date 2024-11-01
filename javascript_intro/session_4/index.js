/**
 * array and objects
 * 
 * read about the below
 * object.entries():
 * object keys
 * object values
 * hasOwnProperty()
 * Object.assign
 * object.seal
 * 
 * Loops: they allows one to execute codes repeatedly either for a fixed no of times or until a certain condition is met
 * while loop: it executes a code so long as the condition is true
 * do while: the block of code is executed at least once before the condition is check
 * for loop: It repeates a block of code a specified number of times
 * initialization, condition and iteration
 * the init is executed once b4 the loops starts
 * its used to set up a counter variable
 * Before a loop statrs running, the condition is evaluated. if true the loops continues, if false the loop stops.
 * for in
 * for of
 * 
 *
 */

//finding an array in an object
let students = [
    {
        name: "Heritage Agu",
        age: 21,
        score:70
    },
    {
        name: "Adanya Ichekwu",
        age: 19,
        score:75
    },
    {
        name: "Blessing Nwa",
        age: 28,
        score:95
    },
    {
        name: "Gideon Edoghotu",
        age: 26,
        score:100
    },
    {
        name: "Michael Udaise",
        age: 27,
        score:95
    },
]

//get an object from an array
let data = students.find((element) => {return element.name == "Heritage Agu"})

// console.log(data)

let data2 = students.filter((element) => {return element.name == "Heritage Agu"})
// console.log(data2)

// for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

let fruits = ["Apple", "mango", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// let element = 0;

// while(element < 5){
//     console.log(element);
//     element++;
// }

let i = 0;
do{
    console.log("num " + i);
    i++;
} while (i<5)