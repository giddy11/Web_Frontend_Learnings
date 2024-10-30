/**
 * Arrays: Collection of data
 * it is a data structure in javascript that stores the collection of elements (int, strings, etc).
 * They are zero index meaning the elements starts from 0
 * 
 * Basic Methods in Arrays:
 * Each element is separetd with  a comma
 * Fruits = ["Orange", "Apple"]
 * Push: adds one or more elements to the end of the arrays.
 *          For eg; fruits.push("Mango")
 *                  Fruits = ["Orange", "Apple", "Mango"]
 * 
 * Shift(): It removes first element of an array
 * 
 * Unshift(): it adds one or more elements to the beginning of an array
 * 
 * indexOf: It returns the index of at which a given element can be found in an array
 * fruits.indefOf("apple")
 * fruits.indefOf("pawpaw")
 * 
 * includes: it checks if an array contains a certain elements and retyrns true or false
 * 
 * slice: it returns a shallow copy of the portion of an array
 * it takes 2 parameters, the start and the end
 * 
 * splice: it changes the content of an array by removing, replacing an array
 * it takes 3 parameters; start, delete count, item
 * 
 * map(): it crates a new array with the result of calling a provided function on every element in the calling array.
 * num.map(() =>{})
 * 
 * Filter: it creates new array with all element that passes the test implemented by the provided function
 * 
 * reduce, concat, join,reverse, sort, look at forEach(),
 * 
 * Objects: they are key value pairs use to store related data and functions known as properties and methods.
 * person = {
 *              name:methusaleh,
 *              age:23,
 *              wives:["wive1", "wive2"]
 *          }
 */



let fruits = ["orange", "apple"];
fruits.push("mango");
// console.log(fruits)

fruits.shift()
// console.log(fruits)

fruits.unshift("fruit");
// console.log(fruits)

let res = fruits.indexOf("pawpaw") // it gives -1 becuals it doesnt exist in the array list
// console.log(res)

let res2 = fruits.includes("mango") // true
let res3 = fruits.includes("pawpaw") // false

// console.log(res2)
// console.log(res3)

let res4 = fruits.slice(); // it returns the full array
let res5 = fruits.slice(2); // it returns the array starting from index 0 to index 2
let res6 = fruits.slice(1,4);

fruits.push("pear");
fruits.push("leaf");
fruits.push("avogadro");

let num = [1,2,3,4,5]

// console.log(fruits)
// console.log(res6)

// console.log(num)
// let removedElement = num.splice(2,2)
// let removedElementReplace = num.splice(2,0,3)

let mapArray = num.map((x) => {
    return 2 * x
})

// console.log(mapArray)

let num1 = [7,11,5,10]
let resFilter = num1.filter((element) => element * 5)

// console.log(resFilter)

/**
 * filter the student who scored above 85
 * map the filtered student to an array of object containing only their name and score property
 * 
 * find the student with the highest score.
 * use the reduce method to calculate the average score of all students.
 * 
 * use sort method to sort the student in descending order based on their age
 * slice the sorted array to get the first 5 students.
 * 
 * use the foreach methods to print the n ames of students who are 21 years older
 * 
 * 
 */

let students = [
    {
        id:1,
        name:"Gideon",
        age:16,
        score: 100

    },
    {
        id:2,
        name:"Heritage",
        age:18,
        score: 74
    },
    {
        id:3,
        name:"Precious",
        age:21,
        score: 70
    },
    {
        id:4,
        name:"Sammy",
        age:21,
        score: 80
    },
    {
        id:5,
        name:"Blesing",
        age:20,
        score: 90
    },
    {
        id:6,
        name:"Esther",
        age:17,
        score: 60
    },
    {
        id:7,
        name:"Goodness",
        age:20,
        score: 73
    },
    {
        id:8,
        name:"Okon",
        age:21,
        score: 80
    },
    {
        id:9,
        name:"Bishop",
        age:22,
        score: 80
    },
    {
        id:10,
        name:"Ikkenna",
        age:21,
        score: 70
    },
]

let filteredStudent = students.filter((element) => element.score > 85)

console.log(filteredStudent)

let newMap = filteredStudent.map((element) => {
    let newArrObj = {
        name: element.name,
        score: element.score
    }

    return newArrObj
})

console.log(newMap)