const sumAll = function(...range) {

    range.sort((numA, numB)=> numA-numB);
    let endOfSum = range[1];
    let nextValueToSum = range[0]+1;

    if(range.some((value)=> value < 0)){
        return "ERROR";
    }

    while(nextValueToSum < endOfSum){

        range.splice(1, 0, nextValueToSum);
        nextValueToSum++;

    }

    let sum = range.reduce((acc, value)=> acc+=value);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
