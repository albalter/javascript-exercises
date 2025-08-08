const sumAll = function(k, n) {
    if (typeof k !== "number" || typeof n !== "number"){
        return "ERROR"
    }

    if (!Number.isInteger(k) || !Number.isInteger(n)) {
        return "ERROR";
    }

    if (k < 0 || n < 0) {
        return "ERROR"
    }

    if (k > n)
    {
        let p = k;
        k = n;
        n = p;
    }
    return (n*n-k*k+n+k)/2

};

// Do not edit below this line
module.exports = sumAll;
