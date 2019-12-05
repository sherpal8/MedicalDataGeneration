"use strict";

const pulseArray = [],
  diastolicArray = [],
  systolicArray = [],
  respRateArray = [],
  oxygenSaturationsArray = [],
  urineOutputArray = [];

const nursingObsGenerator = () => {
  for (let i = 0; i < 350; i++) {
    // generate pulse data
    if (0 <= i && i <= 240) {
      pulseArray.push({ pulse: i });
    }
    // generate diastolic data
    if (0 <= i && i <= 160) {
      diastolicArray.push({ diastolic: i });
    }
    // generate systolic data
    if (40 <= i && i <= 260) {
      systolicArray.push({ systolic: i });
    }
    // generate respiratory_rate data
    if (0 <= i && i <= 40) {
      respRateArray.push({ resp_rate: i });
    }
    // generate oxygen_saturations data
    if (0 <= i && i <= 100) {
      oxygenSaturationsArray.push({ oxygen_sats: i });
    }
    // generate urine_output data
    urineOutputArray.push({ urine_output: i });
  }
};

module.exports = { nursingObsGenerator };
