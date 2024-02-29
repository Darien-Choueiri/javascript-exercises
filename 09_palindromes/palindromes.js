const palindromes = function (sentence) {
    sentence = sentence.toLowerCase();
    sentence = sentence.replace(/\W/g, '');
    let reversed = sentence.split("")
    reversed.reverse();
    reversed = reversed.join("");
    return reversed === sentence;
};

// Do not edit below this line
module.exports = palindromes;
