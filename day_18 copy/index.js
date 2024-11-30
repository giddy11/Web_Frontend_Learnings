
// list of food items
const foods = [
    { name: "Bean" },
    { name: "Rice" },
    { name: "Yam" },
    { name: "Garri" }
];

const container = document.getElementById("food-container");

let button1 = document.createElement('button');
button1.textContent = "Beans";
button1.classList.add("food-button");

container.appendChild(button1);