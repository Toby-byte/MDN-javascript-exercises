
// Add your code here

const quoteStart = "Don't judge each day by the harvest you reap ";
const quoteEnd = "but by the Seeds that you Plant";

const finalQuote = quoteStart + quoteEnd;

section = document.querySelector("section.preview");

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);