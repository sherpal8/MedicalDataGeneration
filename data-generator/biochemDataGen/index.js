const { liverFunctionGenerator } = require("./liverFunctionTestGenerator");
const { ureaElectrolyteArr } = require("./ureaElectrolyteGenerator");

const liverFunctionData = liverFunctionGenerator();

console.log(liverFunctionData);

module.exports = liverFunctionData;
