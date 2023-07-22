const sumAll = function(a,b) {
    if ( a<0 || b<0){
        return "ERROR";
    };

    let types = ['number', 'bigint'];
    if (!types.includes(typeof(a)) || !types.includes(typeof(b))){
        return "ERROR";
    };

    let first, last;
    
    if (a<=b){
        first = a;
        last = b;
    } else {
        first = b;
        last = a;
    }
    let sum = 0;
    for (let j = first; j <= last; j++){
        sum += j;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
