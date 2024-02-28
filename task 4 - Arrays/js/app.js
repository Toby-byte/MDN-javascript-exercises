
// Add your code here

const myArray = ["dog","elephant","cat"];

// change the values
myArray[0] = "sofie";
myArray[1] = "dog";

// add new elements to the array
myArray.unshift("cola")


section = document.querySelector("section.preview");

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

section.appendChild(para1);