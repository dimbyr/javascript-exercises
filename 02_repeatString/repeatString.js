const repeatString = function(stringToRepeat, numberOfTimes) {
    if (numberOfTimes<0){
        return "ERROR";
    } else {
    let repeatedString = '';
    for (let i=0; i<numberOfTimes; i++){
        repeatedString += stringToRepeat;
    };
    return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
