const fibonacci = function(n) {
let index = n-1;
if (index < 0){
    return 'OOPS';
}
else if (index == 0 || index == 1){
    return 1;
} else {
    return fibonacci(index - 1) + fibonacci(index);
}
};

// Do not edit below this line
module.exports = fibonacci;
