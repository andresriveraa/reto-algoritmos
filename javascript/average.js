
// function to find average of two numbers
function average(a, b) {

	/*------------------*\

	utilizo la funcion isNaN y no Number.isInteger 
	para aprovechar 
	la coerciòn de isNaN asì si el usuario ingresa un numero 
	en texto aùn así puede sacar el promedio.

	\*------------------*/

	let numberA = isNaN(a),
	numberB = isNaN(b),
	result;

	if(!numberA && !numberB) {
		result = (a + b) / 2;
		console.log(result);
	} else {
		result = (numberA) ? "Number A is not a number" : "Number B is not a number" 
	}

	console.log(result);
}


average(100, "50");