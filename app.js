// https://calculator.swiftutors.com/working-capital-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const workingCapitalRadio = document.getElementById('workingCapitalRadio');
const currentAssetsRadio = document.getElementById('currentAssetsRadio');
const currentLiabilitiesRadio = document.getElementById('currentLiabilitiesRadio');

let workingCapital;
let currentAssets = v1;
let currentLiabilities = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

workingCapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Current Assets';
  variable2.textContent = 'Book Value of Asset';
  currentAssets = v1;
  currentLiabilities = v2;
  result.textContent = '';
});

currentAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Working Capital';
  variable2.textContent = 'Book Value of Asset';
  workingCapital = v1;
  currentLiabilities = v2;
  result.textContent = '';
});

currentLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Working Capital';
  variable2.textContent = 'Current Assets';
  workingCapital = v1;
  currentAssets = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(workingCapitalRadio.checked)
    result.textContent = `Working Capital = ${computeWorkingCapital().toFixed(2)}`;

  else if(currentAssetsRadio.checked)
    result.textContent = `Current Assets = ${computeCurrentAssets().toFixed(2)}`;

  else if(currentLiabilitiesRadio.checked)
    result.textContent = `Current Liabilities = ${computeCurrentLiabilities().toFixed(2)}`;
})

// calculation

function computeWorkingCapital() {
  return Number(currentAssets.value) - Number(currentLiabilities.value);
}

function computeCurrentAssets() {
  return Number(workingCapital.value) + Number(currentLiabilities.value);
}

function computeCurrentLiabilities() {
  return Number(currentAssets.value) - Number(workingCapital.value);
}