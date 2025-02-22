/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    // console.log(process.argv)

    let operator = process.argv[2];
    let numArr = process.argv.slice(3);

    if(!operator) {
        return "No operation provided...";
    };
    if(!numArr || numArr.length === 0) {
        return "No numbers provided...";
    };

    if(operator === 'plus') {
        let sum = 0;
        for(let num of numArr ) {
            sum += Number(num)
        }
        return sum;
    };

    if(operator === 'minus') {
        let difference = numArr[0];
        for(let i = 1; i < numArr.length; i++ ) {
            difference -= Number(numArr[i])
        }
        return difference;
    };

    if(operator !== 'plus' || 'minus') {
        return `Invalid operation: ${operator}`;
    };
};

// Don't change anything below this line.
module.exports = calculator;
