const removeFromArray = function(array, ...args) {
return array.filter(member => !args.includes(member));
};

// Do not edit below this line
module.exports = removeFromArray;
