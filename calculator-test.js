
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = { amount: 1000, rate: 11, term: 3 };
  expect(calculateMonthlyPayment(values)).toEqual("32.74");
});


it("should return a result with 2 decimal places", function () {
  // ..
  const values = { amount: 9000, rate: 12, term: 5 };
  expect(calculateMonthlyPayment(values)).toEqual("200.20");
});

/// etc
