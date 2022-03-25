function askName() {
  var name = prompt("Welcome to Oseremen Ojiefoh's temperature converter! What is your name?");
  return name;
}

var name = askName(); 
console.log(name);

function askTemp(name) {
  userTemp = prompt(`What's up, ${name}! What is the temperature?`);
  return userTemp;
}

var temp = askTemp(name);
console.log(temp);

function c2f(temp) {
  var tempFarenheit = ((temp * 9) / 5) + 32;
  alert(`${name}, ${temp}Cº is ${tempFarenheit}Fº.`);
  
  return tempFarenheit;
}

function f2c(temp) {
  var tempCelsius = ((temp - 32) * 5)/9;
  alert(`${name}, ${temp}Fº is ${tempCelsius}Cº.`);
  
  return tempCelsius;
}


function askType(name) {
  
  var tempType = prompt(`Hello, ${name}! How would you like to convert? For C to F enter 1. For F to C enter 2.`);
    
  if (tempType == 1) {
    return c2f(temp);
  }

  if (tempType == 2) {
    return f2c(temp);
  }
  
}

var ehitaleSux = askType(name);
console.log(ehitaleSux);