"use strict";

// TODO: conjugated bilirubin & unconjugated bilirubin

const liverFunctionGenerator = () => {
  const liverFuncObj = {};
  liverFuncObj.bilirubin = [];
  liverFuncObj.ALP = [];
  liverFuncObj.AST = [];
  liverFuncObj.ALT = [];
  liverFuncObj.albumin = [];
  liverFuncObj.PT = [];
  for (let i = 0; i < 2500; i++) {
    // bilirubin (n: 5-17 mmol/l)
    if (i <= 125) {
      liverFuncObj.bilirubin.push({ Total_bilirubin: `${i} μmol/L` });
    }
    // ALP (n: 35-130 IU/L)
    if (i >= 30 && i <= 180) {
      liverFuncObj.AST.push({ Alkaline_Phosphatase: `${i} IU/L` });
    }

    // AST (n: 5-40 IU/L)
    // ALT (n: 5-40 IU/L)
    if (i >= 5 && i <= 1200) {
      liverFuncObj.AST.push({ Aspartate_Aminotransferase: `${i} IU/L` });
      liverFuncObj.ALT.push({ Alanine_Aminotransferase: `${i} IU/L` });
    }
    // albumin (n: 35-50 g/L)
    if (i >= 25 && i <= 60) {
      liverFuncObj.albumin.push({ Albumin: `${i} g/L` });
    }
    // PT (n: 12-16s)
    if (i >= 10 && i <= 100) {
      liverFuncObj.PT.push({ Prothrombin_time: `${i} s` });
    }
  }
  return liverFuncObj;
};

module.exports = { liverFunctionGenerator };
