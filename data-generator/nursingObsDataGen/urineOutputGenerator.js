"use strict";

// TODO: make provisions for race, age, gender
const urineOutputGenerator = () => {
  const urineOutputArray = [];
  for (let i = 0; i < 200; i++) {
    urineOutputArray.push({ urine_output: `${i} ml/hour` });
  }
  return urineOutputArray;
};

module.exports = { urineOutputGenerator };
