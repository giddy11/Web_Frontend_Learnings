/**
 * Look out traversing the DOM
 * Siblings, Parents and children
 */





let btn = document.getElementById("btn");
let div = document.getElementById("first");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    div.innerText = "Hello world"
    alert("hello");
})

div.innerText = "";