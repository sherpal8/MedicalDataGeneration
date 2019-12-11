"use strict";

const temperatureGenerator = () => {
  let temperatureArray = [];
  for (let i = 320; i < 465; i++) {
    temperatureArray.push({ temperature: `${(i / 10).toFixed(1)} °C` });
  }
  return temperatureArray;
};

module.exports = { temperatureGenerator };
