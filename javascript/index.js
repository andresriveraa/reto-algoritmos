import calculationOperation from './arithmetic.js';
import { showThisForm }  from './navbar.js';
import getDataForm1  from './average.js';

// get buttons
const linkChallenge1 = document.getElementById('reto1'),
linkChallenge2 = document.getElementById('reto2'),
linkChallenge3 = document.getElementById('reto3'),
linkChallenge4 = document.getElementById('reto4'),
linkChallenge5 = document.getElementById('reto5'),
linkChallenge6 = document.getElementById('reto6');

linkChallenge1.addEventListener('click', event => showThisForm(1), false); 
linkChallenge2.addEventListener('click', event => showThisForm(2), false); 
linkChallenge3.addEventListener('click', event => showThisForm(3), false); 
linkChallenge4.addEventListener('click', event => showThisForm(4), false); 
linkChallenge5.addEventListener('click', event => showThisForm(5), false); 
linkChallenge6.addEventListener('click', event => showThisForm(6), false); 

// buttons in challenge
const buttonChallenge1 = document.getElementById('button1'),
buttonChallenge2 = document.getElementById('reto2')


buttonChallenge1.addEventListener('click', getDataForm1, false); 
