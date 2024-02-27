let finalResult;

let evenOddResult;

// Add your code here

const num1 = 1
const num2 = 2
const num3 = 3
const num4 = 7

const add12 = num1 + num2;
const sub43 = num4 - num3;
finalResult = add12 * sub43;

evenOddResult = (finalResult % 2);

section = document.querySelector('section.preview')
// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);