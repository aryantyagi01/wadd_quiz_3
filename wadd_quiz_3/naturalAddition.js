// Calculate the sum of natural numbers upto n

function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }

const number = parseInt(prompt('Enter number: '));

const result = sum(number);

console.log(`The Result is ${result}`);