let test1 = 11;
let test2 = 4
let testTotal = test1 + test2;
let exam = 37;
let finalScore = testTotal + exam

if (finalScore < 70) {
    finalScore = finalScore + 10;
}

switch(true) {
    case (finalScore >= 0 && finalScore <= 39):
        console.log("F");
        break;
    case (finalScore >= 40 && finalScore <= 60):
        console.log("C");
        break;
    case (finalScore >= 61 && finalScore <= 69):
        console.log("B");
        break;
    case (finalScore >= 70 && finalScore <= 100):
        console.log("A");
        break;
    default:
        console.log("Invalid")
}