const palindromes = function (str) {
    let arr = str
        .split("")
        .filter((char) => char != "." 
            && char != "!" 
            && char != "," 
            && char != "?"
            && char != ";"
            && char != ":");
    return arr === arr.reverse();
};

// Do not edit below this line
module.exports = palindromes;
