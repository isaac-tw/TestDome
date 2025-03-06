// https://www.testdome.com/questions/javascript/pipeline/110582

function pipeline(...funcs) {
  return (arg) => {
    return funcs.reduce((acc, func) => func(acc), arg);
  }
}

let fun = pipeline(x => x * 3, x => x + 1, x => x / 2);
console.log(fun(3)); // Should print 5
