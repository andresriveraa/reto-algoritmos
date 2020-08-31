 import setResponseForm from './response.js';

/**
* @param {number} numberA primer numero para calcular la operación
* @param {number} numberB segundo numero para calcular la operación
* @descriptor Cada descriptor que añadamos irá en una línea independiente.
*/


const arithmeticOperations = function (numberA, numberB) {
	this.numberA = numberA;
	this.numberB = numberB;
	this.printResult = function() {
		return this.result;
	}
}

arithmeticOperations.prototype.adition = function () {
	this.result = this.numberA + this.numberB;
	return this.printResult()
}

arithmeticOperations.prototype.substract = function () {
	this.result = this.numberA - this.numberB
	return this.printResult()
}

arithmeticOperations.prototype.multiply = function () {
	this.result = this.numberA * this.numberB
	return this.printResult()
}

arithmeticOperations.prototype.divide = function () {
	this.result = this.numberA / this.numberB
	return this.printResult()
}


/**
* @param {number} firstNumber primer numero para calcular la operación
* @param {number} secondNumber segundo numero para calcular la operación
* @param {string} operator what operation would yo do?
* @descriptor Cada descriptor que añadamos irá en una línea independiente.
*/

function calculationOperation (firstNumber, secondNumber, operator) {
	const operation = new arithmeticOperations(firstNumber, secondNumber);

	if (/^\+|^sumar$|^adition$/.test(operator)) {

		return operation.adition(firstNumber, secondNumber)

	} else if (/^\-|substract|restar|menos/.test(operator)) {

		return operation.substract(firstNumber, secondNumber)
		
	} else if (/^\*|multiply|multiplicar|x|X/.test(operator)) {

		return operation.multiply(firstNumber, secondNumber)
		
	} else if (/^\/|^divide$|^dividir$/.test(operator)) {

		return operation.divide(firstNumber, secondNumber)

	} else{

		return 'try again';

	}

}

function getDataForm3 () {

	let numbera = parseFloat(document.getElementById('a3').value);
	let numberb = parseFloat(document.getElementById('b3').value);
	let operator = document.getElementById('operador').value;
	let response = calculationOperation(numbera, numberb, operator);

	setResponseForm(response)

}


 export default getDataForm3;
