/*Pesudocode 
    structure of the people object is the following
    {
        name :
        yearOfBirth:
        yearOfDeath:
    }
    we have to implement function that finds the maximum
    out of every record, comparing them with function age()
    that gets the difference between year of birth and death    
*/

function age (person) {
    if (person.hasOwnProperty('yearOfBirth')) {
        birth = person.yearOfBirth
    }
    if (person.hasOwnProperty('yearOfDeath')) {
        current = person.yearOfDeath
    } else {
        current = new Date().getFullYear();
    }
    
    return current - birth
}

const findTheOldest = function(people) {
    people.sort((a, b) => (age(a)>age(b)?-1:1))
    console.table(people);
    console.log(people[0].name);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
