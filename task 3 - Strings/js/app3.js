const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here

let fixedQuote = quote.charAt(0).toLocaleUpperCase() + quote.slice(1).toLocaleLowerCase();

fixedQuote = fixedQuote.replace("green eggs and ham", "salmon");

finalQuote = fixedQuote + ".";

section = document.querySelector("section.preview");

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);