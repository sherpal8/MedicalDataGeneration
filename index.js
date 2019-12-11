const { nursingObsGenerator } = require("./data-generator/nursingObsGenerator");
const {
  temperatureGenerator
} = require("./data-generator/temperatureGenerator");

const nursingObs = nursingObsGenerator();
nursingObs.temperatureArray = temperatureGenerator();
console.log(nursingObs.temperatureArray);
