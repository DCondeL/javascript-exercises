const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR";
    }
    let acc="";
    for(let i = 0; i < num; i++){
        acc = acc+string;
    }

    return acc;
};

// Do not edit below this line
module.exports = repeatString;
