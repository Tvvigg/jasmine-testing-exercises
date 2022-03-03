it("should calculate the monthly rate correctly", function () {
  // ...
  const values = {
    amount: 30000,
    years: 7,
    rate: 4.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual("11250.00");
});

it("should return a result with 2 decimal places", function () {
  // ..Meant to fail intentionally
  const values = {
    amount: 30000,
    years: 7,
    rate: 4.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual("11250.0");
  expect(calculateMonthlyPayment(values)).toEqual("11250.08888");
});
