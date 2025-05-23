const reverseString = function(str) {
    let strsArray = str.split(" ");

    if(strsArray.length < 2){
        let strArray = str.split("");
        return strArray.reverse().join("");
    }

    let reversedStr = strsArray.map((str)=> str.split("").reverse().join("")).reverse().join(" ");
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
