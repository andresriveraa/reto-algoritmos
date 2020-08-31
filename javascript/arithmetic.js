
/**
* @param {number} numberA primer numero para calcular la operación
* @param {number} numberB segundo numero para calcular la operación
* @descriptor Cada descriptor que añadamos irá en una línea independiente.
*/

const arithmeticOperations = function (numberA, numberB) {
	this.numberA = numberA;
	this.numberB = numberB;
	this.printResult = function() {
		console.log(this.result);
	}
}

arithmeticOperations.prototype.adition = function () {
	this.result = this.numberA + this.numberB;
	this.printResult()
}

arithmeticOperations.prototype.substract = function () {
	this.result = this.numberA - this.numberB
	this.printResult()
}

arithmeticOperations.prototype.multiply = function () {
	this.result = this.numberA * this.numberB
	this.printResult()
}

arithmeticOperations.prototype.divide = function () {
	this.result = this.numberA / this.numberB
	this.printResult()
}


/**
* @param {number} firstNumber primer numero para calcular la operación
* @param {number} secondNumber segundo numero para calcular la operación
* @param {string} operator what operation would yo do?
* @descriptor Cada descriptor que añadamos irá en una línea independiente.
*/

function calculationOperation (firstNumber, secondNumber, operator) {
	const operation = new arithmeticOperations(a,b);

	if (/^\+|^sumar$|^adition$/.test(operator)) {

		operation.adition(firstNumber, secondNumber)

	} else if (/^\-|substract|restar|menos/.test(operator)) {

		operation.substract(firstNumber, secondNumber)
		
	} else if (/^\*|multiply|multiplicar|x|X/.test(operator)) {

		operation.multiply(firstNumber, secondNumber)
		
	} else if (/^\/|^divide$|^dividir$/.test(operator)) {

		operation.divide(firstNumber, secondNumber)

	} else{

		console.log('try again');

	}

}

 export default calculationOperation;
