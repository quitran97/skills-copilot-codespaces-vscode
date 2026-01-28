function calculateNumbers(val1, val2) {
  const sum = val1 + val2;
  const difference = val1 - val2;
  const product = val1 * val2;
  const quotient = val2 !== 0 ? val1 / val2 : null;

  return {
    sum: sum,
    difference: difference,
    product: product,
    quotient: quotient,
  };
}
