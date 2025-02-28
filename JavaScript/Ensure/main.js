// https://www.testdome.com/questions/javascript/ensure/76550

function ensure(value) {
  if (value === undefined) throw Error();
  return value;
}

try {
  console.log(ensure());
} catch(err) {
  console.log(err);
}
