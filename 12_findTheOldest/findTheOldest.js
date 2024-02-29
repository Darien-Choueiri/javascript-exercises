const findTheOldest = function(people) {
    const elder = people.reduce((oldest, current) => {
        let oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        let currentAge = getAge(current.yearOfDeath, current.yearOfBirth);
        return currentAge > oldestAge ? currentAge : oldestAge;
    });

    return elder;

    /*
    const currentYear = new Date().getFullYear();

    let ages = people.map(person => {
        if (person.yearOfDeath === undefined){
            return  currentYear - person.yearOfBirth;
        } else {
            return person.yearOfDeath - person.yearOfBirth;
        }
    });

    let sortedAges = ages.toSorted((a, b) => a > b ? -1 : 1);

    let index = ages.findIndex(age => age === sortedAges[0]);
    
    return people[index];
    */
    /*
    const byOldest = people.sort((a, b) => {
        if (a.yearOfDeath === undefined){

        }

        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth){
            return -1;
        } else {
            return 1;
        }
    });
    

    return byOldest[0];
    */

    /*
    const oldest = people.reduce((oldest, current) => {
        const currentYear = new Date().getFullYear();
        let age;
        if (current.yearOfDeath === undefined) {
            age = currentYear - current.yearOfBirth;
        } else {
            age = current.yearOfDeath - current.yearOfBirth;
        }
        if (age > oldest) {
            return age;
        }
    });

    return oldest;
    */

    //use map to convert all into ages, use find to get the index, then return that person
};

function getAge(yod, yob){
    if (!yod){
        const currentYear = new Date().getFullYear();
        return currentYear - yob;
    } else {
        return yod - yob;
    }
};
// Do not edit below this line
module.exports = findTheOldest;
