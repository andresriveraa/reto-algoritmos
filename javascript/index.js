import calculationOperation from './arithmetic.js';
import { showThisForm }  from './navbar.js';
import getDataForm1  from './average.js';
import getDataForm2  from './date.js';
import getDataForm3  from './arithmetic.js';
import { addNumberArray, mayorNumber } from './sort.js';
import { addNumberArray5, averageQualifications } from './averageStudent.js';

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
buttonChallenge2 = document.getElementById('button2'),
buttonChallenge3 = document.getElementById('button3'),
// btn add challenge 4
buttonAdd = document.getElementById('buttonAdd'),
buttonChallenge4 = document.getElementById('button4'),
// btn add challenge 5
buttonAdd5 = document.getElementById('buttonAdd5'),
buttonChallenge5 = document.getElementById('button5');


buttonChallenge1.addEventListener('click', getDataForm1, false); 
buttonChallenge2.addEventListener('click', getDataForm2, false); 
buttonChallenge3.addEventListener('click', getDataForm3, false); 
// btn add challenge 4
buttonAdd.addEventListener('click', addNumberArray, false);
buttonChallenge4.addEventListener('click', mayorNumber, false); 
// btn add challenge 5
buttonAdd5.addEventListener('click', addNumberArray5, false);
buttonChallenge5.addEventListener('click', averageQualifications, false); 
