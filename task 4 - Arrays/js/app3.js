let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here

myArray.pop();

myArray.push("scorpion", "king");

const newArray = myArray.map((element, index) => `${element} (${index})`);

myString = newArray.join('-');

section = document.querySelector('section.preview');

// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);