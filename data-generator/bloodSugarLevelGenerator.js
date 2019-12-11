"use strict";

const bloodGlucometerGenerator = () => {
  const bloodGlucometerArray = [];
  for (let i = 24; i < 180; i++) {
    bloodGlucometerArray.push({ glucometer: `${(i / 10).toFixed(1)} mmol/L` });
  }
  return bloodGlucometerArray;
};

module.exports = { bloodGlucometerGenerator };
