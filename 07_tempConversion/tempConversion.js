const convertToCelsius = function(temperature) {
  let inCelcius = (temperature - 32)*(5/9);
  return Math.round(inCelcius*10)/10;
};

const convertToFahrenheit = function(temperature) {
  let inFahrenheit = temperature *9/5 + 32;
  return  Math.round(inFahrenheit * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
