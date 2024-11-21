/**
 * Look out traversing the DOM
 * Siblings, Parents and children
 * 
 * Understanding DOM Traversal: Siblings, Parents, and Children
 * When working with the DOM (Document Object Model), traversing through elements is crucial for dynamic interactions on a webpage. Here's a quick overview of how to navigate the DOM with examples:

Accessing Children
To access child elements, we use properties like children or methods like querySelector and querySelectorAll.
 * 
 */

// let parentDiv = document.getElementById("container");
// let children = parentDiv.children; // Returns all child elements
// console.log(children[0]); // Logs the first child


/**
 * Accessing Parent:
To navigate to a parent element, use parentElement.
 * 
 */

// let childDiv = document.getElementById("child1");
// let parent = childDiv.parentElement;
// console.log(parent); // Logs the parent element


/**
 * Accessing Siblings
Use nextElementSibling or previousElementSibling to navigate between siblings.
 * 
 */
// let firstChild = document.getElementById("firstChild");
// let nextSibling = firstChild.nextElementSibling;
// console.log(nextSibling); // Logs the next sibling element

/**
 * How to traverse the dom tree
 */
// let child2 = document.getElementById("child2");
// console.log(child2.previousElementSibling.innerText); // "Child 1"
// console.log(child2.nextElementSibling.innerText);     // "Child 3"
// console.log(child2.parentElement.id);                // "parent"

/**
 * Events
 * 
 */
let btn = document.getElementById("btn");
let div = document.getElementById("first");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    div.innerText = "Hello, World!";
    alert("Content updated!");
});













// let btn = document.getElementById("btn");
// let div = document.getElementById("first");

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     div.innerText = "Hello world"
//     alert("hello");
// })

// div.innerText = "";