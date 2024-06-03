const fibonacci = function(num) {
    let sequence = [0, 1];
    for (let i = 2; i <= num; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
