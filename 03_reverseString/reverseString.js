const reverseString = function(string) {
    // Split string into array of letters
    const letters = string.split("");
    // Initialize string to hold result
    let reversed = ""
    // Loop over each letter in array, starting from last index
    for (let i = letters.length - 1; i >= 0; i--) {
        reversed += letters[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
