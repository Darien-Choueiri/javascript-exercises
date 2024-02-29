const convertToCelsius = function(f) {
  let c = (f - 32) * (5 / 9);
  let celcius = (Math.round(c * 10) / 10);
  return celcius;
};

const convertToFahrenheit = function(c) {
  let f = (c * (9/5)) + 32;
  let fahrenheit = (Math.round(f * 10) / 10);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
