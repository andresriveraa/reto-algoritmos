let arrayQualifications = [];


/**
* @param {object}  inputArr primer numero para calcular la operación
* @param {number} secondNumber segundo numero para calcular la operación
* @param {string} operator what operation would yo do?
* @descriptor Cada descriptor que añadamos irá en una línea independiente.
*/

function averageQualifications (qualification) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let finalQualification = qualification.reduce(reducer) / qualification.length;

  return finalQualification;

}

function addNumberArray (number){
  const verify = Number.isInteger(number);

  if (verify) {
    arrayNumbers.push(arrayQualifications);
  };

}

