const reverseString = function(string) {
    let reversed = '';
    for (let index = 0; index<string.length; index ++){
        reversed += string[string.length - index -1];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
