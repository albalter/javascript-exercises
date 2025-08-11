const convertToCelsius = function(temp) {
  //farenheit to celsius
  temp = (temp -32)*5/9
  return Number(Number.parseFloat(temp).toFixed(1))
};

const convertToFahrenheit = function(temp) {
  //celsius to farenheit
  temp = temp * 9/5 + 32
  return Number(Number.parseFloat(temp).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
