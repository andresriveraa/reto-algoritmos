import setResponseForm from './response.js'

/**
* utilizo la funcion isNaN y no Number.isInteger 
*	para aprovechar 
*	la coerciòn de isNaN asì si el usuario ingresa un numero 
*	en texto aùn así puede sacar el promedio.
* @param {number} numberA primer numero para calcular la operación
* @param {number} numberB segundo numero para calcular la operación
* @descriptor function to find average of two numbers.
*/


function average(a, b) {

	let numberA = isNaN(a),
	numberB = isNaN(b),
	result;

	if(!numberA && !numberB) {
		result = (a + b) / 2;
		console.log(result);
	} else {
		result = (numberA) ? "Number A is not a number" : "Number B is not a number" 
	}
	console.log(numberA);
	return result;
}


function getDataForm1 () {

	let numbera = parseFloat(document.getElementById('a1').value);
	let numberb = parseFloat(document.getElementById('b1').value);
	let response = average(numbera, numberb);
	setResponseForm(response)
}


export default getDataForm1;
