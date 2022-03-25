var userTemp = 0;

function askName() {
  var name = prompt("Welcome to Oseremen Ojiefoh's temperature converter! What is your name?");
  return name;
}

function askTemp(a) {
  userTemp = prompt(`Hello, ${a}! What is the temperature?`);
  return userTemp;
}

var temp = askTemp(); 

alert(askTemp(askName));

function askType(a) {
  var tempType = prompt(`Hello, ${a}! How would you like to convert? For C to F enter 1. For F to C enter 2.`);

  if (tempType == 1) {
    function c2f(temp) {
      do {
        temp = Number(prompt("What is the temperature in Celsius?"));
      } while (isNaN(temp) == true)
    
      var tempFarenheit = ((temp * 9) / 5) + 32;
      alert(`${(askType(askName))}, ${temp}Cº is ${tempFarenheit}Fº.`);

      return tempFarenheit;

    }
  }

  if (tempType == 2) {
    function f2c(temp) {
      do {
        temp = Number(prompt("What is the temperature in Farenheit?"));
      } while (isNaN(temp) == true)
    
      var tempCelsius = ((temp - 32) * 5)/9;
      alert(`${(askType(askName))}, ${temp}Fº is ${tempCelsius}Cº.`);

      return tempCelsius;
    }
  }
}
