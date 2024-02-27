// Add your code here
let myName;
myName = 'Tobias'

const myAge = 23

const section = document.querySelector('section.preview');

// Don't edit the code below here!

section.innerHTML = ' ';
const task1para = document.createElement('p');
task1para.textContent = myName;
const task1para2 = document.createElement('p');
task1para2.textContent = myAge;
section.appendChild(task1para);
section.appendChild(task1para2);

// Add your code here

let myName2 = 'Paul';
myName2 = 'Tobias';

const section2 = document.querySelector('section.preview2');

// Don't edit the code below here!

section2.innerHTML = ' ';
const para = document.createElement('p');
para.textContent = myName2;
section2.appendChild(para);


// Add your code here

let myName3 = 'Default';
myName3 = 'Chris';

let myAge2 = '42';

const section3 = document.querySelector('section.preview3')

// Don't edit the code below here!

section3.innerHTML = ' ';
const para4 = document.createElement('p');
const para5 = document.createElement('p');
para4.textContent = myName3;
para5.textContent = `In 20 years, I will be ${myAge + 20}`;
section3.appendChild(para4);
section3.appendChild(para5);