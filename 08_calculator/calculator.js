const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let theSum = 0;
  for (let i = 0; i < array.length; i++ ){
    theSum += array[i];
  };
  return theSum;
};

const multiply = function(...args) {
  let product = 1;
  for (let i = 0; i < args.length; i++){
    product *= args[i];
  };
  return product;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if (n == 0 || n == 1){
    return 1;
  } else {
    return n * factorial(n-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
