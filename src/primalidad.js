const trialDivision = (number) => {
  // your code here
  if (!Number.isInteger(number)) {
    return false;
  }
  if (number<=1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++)
      if (number % i == 0) return false;

  return true;
}

module.exports = trialDivision;