const repeatString = function(Word, Num) {
    if(Num < 0){
        return 'ERROR';
    }
    let result = '';
    for(let i = Num; i > 0; i--){
        result += Word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
