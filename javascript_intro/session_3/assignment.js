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
        score: 80

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
        score: 100
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

// let filteredStudent = students.filter((element) => element.score > 85)
let filteredStudent = students.filter((element) => {
    return element.score > 85
})


// console.log(filteredStudent)

let newMap = filteredStudent.map((element) => {
    let newArrObj = {
        name: element.name,
        score: element.score
    }

    return newArrObj
})

// console.log(newMap)

// the student with the highest score
let studentHighestScore = students.reduce((prevVal, currVal, index) => {
    console.log(`${currVal.score} > ${prevVal.score}, count - ${index}`)
    if (currVal.score > prevVal.score){
        console.log(`score - ${currVal.score}`)
        return currVal;
    } else {
        console.log(`score in else - ${currVal.score}`)
        return prevVal
    }

    // return student.score > highest.score ? student : highest;
})

console.log(studentHighestScore)