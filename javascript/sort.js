import setResponseForm from "./response.js";

let arrayNumbers = [];

/**
* @param {object}  inputArr primer numero para calcular la operación
* @param {number} secondNumber segundo numero para calcular la operación
* @param {string} operator what operation would yo do?
* @descriptor Cada descriptor que añadamos irá en una línea independiente.
*/

let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let swapped;
  do {
      swapped = false;
      for (let i = 0; i < len; i++) {
          if (inputArr[i] > inputArr[i + 1]) {
              let tmp = inputArr[i];
              inputArr[i] = inputArr[i + 1];
              inputArr[i + 1] = tmp;
              swapped = true;
          }
      }
  } while (swapped);
  return inputArr;
};

function mayorNumber() {
  let sortArrayNumber = bubbleSort(arrayNumbers)
  let result = sortArrayNumber[sortArrayNumber.length-1]
  console.log(result);
  setResponseForm(result)
}

/**
 * 
 * @param {number} number add this number to arrayNumbers
 */
function addNumberArray (){
  let getData = document.getElementById('a4');
  let getDataValue = document.getElementById('a4').value;
  let dataArray = document.getElementById('dataArray');


  getDataValue = parseInt(getDataValue)
  
  const verify = Number.isInteger(getDataValue);
  
  if (verify) {
    arrayNumbers.push(getDataValue);
    getData.value = "";
    dataArray.innerHTML = arrayNumbers.toString()
    console.log(getData.value);
  };
  
}

export {addNumberArray, mayorNumber}