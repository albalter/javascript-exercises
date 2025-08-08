const repeatString = function(string, times) {
    result =''
    if (times < 0) 
        return "ERROR"
    for (let i=0;i<times;i++)
        result+=string
    return result;
};

// Do not edit below this line
module.exports = repeatString;
