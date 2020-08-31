import setResponseForm from "./response.js";

let arrayQualifications = [];


/**
* @param {object}  inputArr primer numero para calcular la operación
* @param {number} secondNumber segundo numero para calcular la operación
* @param {string} operator what operation would yo do?
* @descriptor Cada descriptor que añadamos irá en una línea independiente.
*/

function averageQualifications () {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let finalQualification = arrayQualifications.reduce(reducer) / arrayQualifications.length;
  console.log(arrayQualifications.reduce(reducer));
 setResponseForm(finalQualification)

}

function addNumberArray5 (){
  let getData = document.getElementById('a5');
  let getDataValue = getData.value;
  let dataArray = document.getElementById('dataArray5');
  
  getDataValue = parseFloat(getDataValue)
  
  arrayQualifications.push(getDataValue);
  getData.value = "";
  dataArray.innerHTML = arrayQualifications.toString()

}

export { addNumberArray5, averageQualifications}
