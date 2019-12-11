"use strict";

const nursingObsGenerator = () => {
  const obj = {};
  obj.pulseArray = [];
  obj.diastolicArray = [];
  obj.systolicArray = [];
  obj.respRateArray = [];
  obj.oxygenSaturationsArray = [];
  obj.urineOutputArray = [];

  for (let i = 0; i < 350; i++) {
    // generate pulse data
    if (0 <= i && i <= 240) {
      obj.pulseArray.push({ pulse: `${i} b.p.m` });
    }
    // generate diastolic data
    if (0 <= i && i <= 160) {
      obj.diastolicArray.push({ diastolic: `${i} mmHg` });
    }
    // generate systolic data
    if (40 <= i && i <= 260) {
      obj.systolicArray.push({ systolic: `${i} mmHg` });
    }
    // generate respiratory_rate data
    if (0 <= i && i <= 40) {
      obj.respRateArray.push({ resp_rate: `${i} breaths/min` });
    }
    // generate oxygen_saturations data
    if (0 <= i && i <= 100) {
      obj.oxygenSaturationsArray.push({ oxygen_sats: `${i} % at 0.21 FiO2` });
    }
    // generate urine_output data
    obj.urineOutputArray.push({ urine_output: `${i} ml/hour` });
  }
  return obj;
};

module.exports = { nursingObsGenerator };
