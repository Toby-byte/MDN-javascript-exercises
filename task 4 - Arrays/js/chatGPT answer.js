// To achieve the task of going over each item in the given array and adding its index number after the name inside parentheses, 
// you can use the map() function in JavaScript.
// The map() function creates a new array populated with the results of calling a provided function on every element in the calling array.
// Here's how you can do it:

let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Use the map function to iterate over each element of the array and modify it.
const newArray = myArray.map((element, index) => `${element} (${index})`);

console.log(newArray);

// This code snippet uses the map() method to iterate over myArray.
// For each element in the array, it creates a new string that includes the original name (element) and the index (index) of that element in the original array, formatted as you specified, "Name (Index)".
// The result is a new array where each element has been modified accordingly.