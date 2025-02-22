// https://www.testdome.com/questions/javascript/check-digit/76554

function createCheckDigit(membershipId) {
  let sum = [...membershipId].reduce((acc, cur) => acc + (+cur), 0);
  return sum < 10 ? sum : createCheckDigit(sum.toString());
}

console.log(createCheckDigit("55555"));
