const palindromes = function (str) {
    let arr = str.split("");
    return arr === arr.reverse();
};

// Do not edit below this line
module.exports = palindromes;
