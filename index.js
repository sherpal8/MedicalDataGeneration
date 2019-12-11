const _ = require("./data-generator");

// nursing obs object
const nursingObs = _.nursingObsGenerator();
nursingObs.temperatureArray = _.temperatureGenerator();
nursingObs.urineOutputArray = _.urineOutputGenerator();
nursingObs.bloodGlucometerArray = _.bloodGlucometerGenerator();

console.log(nursingObs.urineOutputArray.length);
