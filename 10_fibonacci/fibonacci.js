const fibonacci = function(index) {
    if (index < 0){
        return "OOPS";
    }
    let f1 = 0;
    let f2 = 1;
    let sum;

    if (index == 0){
        return 0;
    }
    else if (index == 1){
        return 1;
    }
    else{
        sum = f1 + f2;
        for (let i = 2; i < index; i++){
            f1 = f2;
            f2 = sum;
            sum = f1 + f2;
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
