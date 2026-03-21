const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    let sum = 0;
    let low = a < b ? a : b;
    const high = a > b ? a : b;
    for (low; low <= high; low++) sum += low;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
