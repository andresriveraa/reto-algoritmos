/**
* Con un poco de lo aprendido en el curso de algoritmos
* decidi dividir en dos el switch case para hacer más
* eficiente la busqueda del match
* @param {number} number find out what month month belongs to that number
* @descriptor function give me a number > 0 and < 12 and I tell you what month is.
*/

function findMonth(number) {
  const verify = Number.isInteger(number);
  if (verify && (number >= 0 && number <= 12)) {

    if (number <= 6) {
      console.log(verify);
      switch (number) {
        case 1:
          console.log('the month is January');
          break;
        case 2:
          console.log('the month is February');
          break;
        case 3:
          console.log('the month is March');
          break;
        case 4:
          console.log('the month is April');
          break;
        case 5:
          console.log('the month is May');
          break;
        default:
          console.log('the month is June');
          break;
      }
    } else {
      switch (number) {
        case 7:
          console.log('the month is July');
          break;
        case 8:
          console.log('the month is August');
          break;
        case 9:
          console.log('the month is september');
          break;
        case 10:
          console.log('the month is October');
          break;
        case 11:
          console.log('the month is November');
          break;

        default:
          console.log('the month is December');
          break;
      }
    }
  } else {
    console.log('this is not a valid number, please try again');
  }
}

findMonth(127);
