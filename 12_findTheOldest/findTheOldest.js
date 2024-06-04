const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        const currentAge = current.yearOfDeath - current.yearOfBirth;
        if (currentAge > oldestAge) {
            return current;
        } else {
            return oldest;
        }
    });

};

// Do not edit below this line
module.exports = findTheOldest;
