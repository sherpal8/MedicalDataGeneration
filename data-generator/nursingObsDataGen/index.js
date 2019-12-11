const { nursingObsGenerator } = require("./nursingObsGenerator");
const { temperatureGenerator } = require("./temperatureGenerator");
const { urineOutputGenerator } = require("./urineOutputGenerator");
const { bloodGlucometerGenerator } = require("./bloodSugarLevelGenerator");

const nursingObsObj = nursingObsGenerator();
nursingObsObj.temperatureArray = temperatureGenerator();
nursingObsObj.urineOutputArray = urineOutputGenerator();
nursingObsObj.bloodGlucometerArray = bloodGlucometerGenerator();

module.exports = nursingObsObj;
