const { nursingObsGenerator } = require("./data-generator/nursingObsGenerator");

const nursingObs = nursingObsGenerator();
console.log(nursingObs);

// for (let item in nursingObs) {
//   console.log(`{ ${[item]}-length: ${nursingObs[item].length} }`);
// }
