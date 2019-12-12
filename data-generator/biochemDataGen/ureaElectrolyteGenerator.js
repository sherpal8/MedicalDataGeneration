const ureaElectrolyteGenerator = () => {
  const ureaElectrolyteObj = {};
  ureaElectrolyteObj.sodium = [];
  ureaElectrolyteObj.potassium = [];
  ureaElectrolyteObj.chloride = [];
  ureaElectrolyteObj.urea = [];
  ureaElectrolyteObj.creatinine = [];
  ureaElectrolyteObj.eGFR = [];
  ureaElectrolyteObj.calcium = [];
  ureaElectrolyteObj.magnesium = [];
  ureaElectrolyteObj.phosphate = [];
  ureaElectrolyteObj.bicarbonate = [];
  ureaElectrolyteObj.glucose = [];
  ureaElectrolyteObj.serumOsmolality = [];
  for (let i = 0; i < 200; i++) {
    // Na+ (n: 133 – 146 mmol/L)
    if (i >= 108 && i <= 168) {
      ureaElectrolyteObj.sodium.push({ sodium: `${i} mmol/L` });
    }
    // K+ (n: 3.5 – 5.3 mmol/L)

    // Cl- (n: 95 – 108 mmol/L)
    // Urea (n: 2.5 – 8.2 mmol/L)
    // Creatinine (n: 50-110 micro mol/ L)
    // eGFR
    // serum Osmolality (n: 275 – 295 mmol/kg)
    // Calcium
    // Magnesium (n: 0.65 – 1.05 mmol/L)
    // Phosphate (n: 0.8 – 1.5 mmol/L)
    // HCO3-
    // Glucose
  }
  return ureaElectrolyteObj;
};

module.exports = { ureaElectrolyteGenerator };
