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
  return result;
}

function addNumberArray (number){
  const verify = Number.isInteger(number);

  if (verify) {
    arrayNumbers.push(number);
  };

}

