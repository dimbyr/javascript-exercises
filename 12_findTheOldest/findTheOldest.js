const findTheOldest = function(people) {
    let oldestIndex = 0;
    for (let index = 1; index < people.length; index ++){
        if (age(people[oldestIndex]) < age(people[index])){
            oldestIndex = index;
        }
    }
    return people[oldestIndex];
};

function age(person){
    let age;
    let isAlive = person.yearOfDeath == undefined;
    if (isAlive){
        age = (new Date()).getFullYear() - person.yearOfBirth;
    } else {
        age = person.yearOfDeath - person.yearOfBirth;
    }
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
