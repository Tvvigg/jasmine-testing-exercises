window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Set the display from default values
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let initialValues = { amount: 10000, years: 10, rate: 1.5 };
  let amountUI = document.getElementById("loan-amount");
  amountUI.value = initialValues.amount;
  let yearsUI = document.getElementById("loan-years");
  yearsUI.value = initialValues.years;
  let rateUI = document.getElementById("loan-rate");
  rateUI.value = initialValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(currentValues);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyPayment = 0;
  let perRate = values.rate / 12;
  let numOfPayments = values.years * 12;
  monthlyPayment =
    (values.amount * perRate) / (1 - (1 + perRate) ** -numOfPayments);
  monthlyPayment = monthlyPayment.toFixed(2);
  return monthlyPayment.toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = monthly;
}
