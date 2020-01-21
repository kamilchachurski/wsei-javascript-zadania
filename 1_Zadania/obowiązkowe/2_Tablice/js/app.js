// Exercise 0

console.log('---------- Exercise 0 ----------');

function distFromAvarage(array) {
    let differences = [];
    let average = (array.reduce((total, currentValue) => (total + currentValue), 0) / array.length);
    
    for (let item of array) {
        differences.push(item - average);
    }
    
    return differences;
}

console.log(distFromAvarage([1, 2, 3, 4, 5, 6, 7]));
console.log(distFromAvarage([1, 1, 1, 1]));
console.log(distFromAvarage([2, 8, 3, 7]));

// Exercise 1

console.log('---------- Exercise 1 ----------');

let fruits = ['winogrona', 'brzoskwinie', 'banany'];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Exercise 3

console.log('---------- Exercise 3 ----------');

function printTable(array) {
    for (let item of array) {
        console.log(item);
    }
}

printTable([1, 2, 3, 4]);

// Exercise 4

console.log('---------- Exercise 4 ----------');

function multiply(array) {
    return array.reduce((total, currentValue) => (total * currentValue), 1);
}

console.log(multiply([1, 2, 3, 4, 5, 6, 7]));
console.log(multiply([1, 1, 1, 1]));
console.log(multiply([2, 8, 3, 7]));

// Exercise 5

console.log('---------- Exercise 5 ----------');

function getEvenAvarage(array) {
    let evens = array.filter(item => ((item % 2) === 0));
    let average = (evens.reduce((total, currentValue) => (total + currentValue), 0) / evens.length);

    return evens.length ? average : null;
}

console.log(getEvenAvarage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAvarage([1, 1, 1, 1]));
console.log(getEvenAvarage([2, 8, 3, 7, 4]));

// Exercise 6

console.log('---------- Exercise 6 ----------');

function sortArray(array) {
    return array.sort((a, b) => (a - b));
}

console.log(sortArray([145, 11, 3, 64, 4, 6, 10]));

// Exercise 7

console.log('---------- Exercise 7 ----------');

function addArrays(firstArray, secondArray) {
    let array = [];

    if (firstArray.length >= secondArray.length) {
        for (let i = 0; i < firstArray.length; i++) {
            array.push(firstArray[i] + (secondArray[i] ? secondArray[i] : 0));
        }
    } else {
        for (let i = 0; i < secondArray.length; i++) {
            array.push(secondArray[i] + (firstArray[i] ? firstArray[i] : 0));
        }
    }

    return array;
}

console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]));
console.log(addArrays([8, 3, 22], [1, 3, 2]));
console.log(addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]));