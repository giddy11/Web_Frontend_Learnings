/**
 * DOM allows the interaction between our scripts and the elements.
 * The Dom represents the html elements as object
 * It allows method to manipulate with the element
 * 
 * The document refers to the entire web page loaded in the browser
 * 
 * A node is a single point in the dom tree which can be an element, attribute, text comment
 * Element is a specific kind of node that represents html element
 * 
 * when a browser loads a webpage, it creates a dom tree that makes up the webpage.
 * Accesing an element in the dom tree
 * METHODS:
 * getElementById,querySelector
 * 
 * We have the setAttributes
 * 
 */

let tag = document.getElementById("heritage")
// console.log(tag)

// tag.textContent = "i made a mistake about them"

// console.log(tag)

tag.innerHTML = "A new html element <h1> okay good </h1>"
// console.log(tag)

let succ = document.getElementById("success")
succ.setAttribute("style", "background-color: red")