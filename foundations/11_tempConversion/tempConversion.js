const convertToCelsius = function(farenheitTemperature) {
  const celsiusTemperature = (farenheitTemperature - 32) * (5/9);
  if (Number.isInteger(celsiusTemperature)){
    return celsiusTemperature
  }
  return Number(Number.parseFloat(celsiusTemperature).toFixed(1));
};

const convertToFahrenheit = function(celsiusTemperature) {
  const farenheitTemperature = celsiusTemperature * (9/5) + 32;

  if (Number.isInteger(farenheitTemperature)){
    return farenheitTemperature;
  }
  return Number(Number.parseFloat(farenheitTemperature).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
