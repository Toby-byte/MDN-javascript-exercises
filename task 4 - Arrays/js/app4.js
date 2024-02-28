const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here

index = birds.indexOf("Eagles");

birds.splice(index, 1);

eBirds = birds.filter(bird => bird.startsWith("E"));

section = document.querySelector('section.preview');

// Don't edit the code below here!

section.innerHTML = ' ';

const para1 = document.createElement('p');
para1.textContent = eBirds;

section.appendChild(para1);