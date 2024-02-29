const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    
    let sum = 0;
    let first = (a < b) ? a : b;
    let last = (a < b) ? b : a;
    for (let i = first; i <= last; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
