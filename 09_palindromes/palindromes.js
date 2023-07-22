const palindromes = function (string) {
    let reversedString = string.split('').reverse().join('');
    let noSpaceString = string.replace(/[^\w]|_/g, '');
    let noSpaceReversedString = reversedString.replace(/[^\w]|_/g, '');

    if (noSpaceReversedString.toLowerCase() == noSpaceString.toLowerCase()) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
