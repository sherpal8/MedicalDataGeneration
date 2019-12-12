const { liverFunctionGenerator } = require("./liverFunctionTestGenerator");
const { ureaElectrolyteGenerator } = require("./ureaElectrolyteGenerator");

const biochemObj = {};
biochemObj.liverFunctionData = liverFunctionGenerator();
biochemObj.ureaElectrolyteData = ureaElectrolyteGenerator();

module.exports = biochemObj;
