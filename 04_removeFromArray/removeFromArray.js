const removeFromArray = function(array, ...values) {
    let newArray = [];
    for (let item of array) {
        if (! values.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
