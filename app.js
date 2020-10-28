//const steamed = document.getElementById('steamed')
//steamed.addEventListener('hover',)
const body = document.querySelector('body');


const newDiv = document.createElement('div');
newDiv.classList.add('test-div');

const newP = document.createElement('p');
newP.setAttribute('for','testing');
newP.textContent = 'this is a javascript test';

newDiv.appendChild(newP);

body.appendChild(newDiv);