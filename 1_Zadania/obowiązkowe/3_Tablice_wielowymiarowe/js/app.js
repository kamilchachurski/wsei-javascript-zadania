// Exercise 0

console.log('---------- Exercise 0 ----------');

function checkArray(array) {
    let evens = [];

    for (let i = 0; i < array.length; i++) {
        evens.push(true);

        for (let j = 0; j < array[i].length; j++) {
            if ((array[i][j] % 2) !== 0) {
                evens[i] = false;

                break;
            }
        }
    }

    return evens;
}

console.log(checkArray([[11, 12], [42, 2], [-4, -120], [0, 0], [1, 34]]));

// Exercise 1

console.log('---------- Exercise 1 ----------');

let array = [[2, 3], ["Ala", "Ola"], [true, false], [5, 6, 7, 8], [12, 15, 67]];

console.log(array[3][2]); // console.log(array[2][1]);
console.log(array[2].length); // console.log(array[1].length);
console.log(array[4][2]); // console.log(array[3][1]);

// Exercise 2

console.log('---------- Exercise 2 ----------');

let numbers = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

for (let number of numbers)
    console.log(number);

for (let number of numbers)
    console.log(number.length);

for (let i = 0; i < numbers.length; i++)
    for (let j = 0; j < numbers[i].length; j++)
        console.log(numbers[i][j]);

// Exercise 3

console.log('---------- Exercise 3 ----------');

function print2DArray(array) {
    for (let i = 0; i < array.length; i++)
        for (let j = 0; j < array[i].length; j++)
            console.log(array[i][j]);
}

print2DArray([[1, 2], [3, 4]]);

// Exercise 4

console.log('---------- Exercise 4 ----------');

print2DArray([[1, 2], [3, 4], [5, 6]]);

// Exercise 5

console.log('---------- Exercise 5 ----------');

function create2DArray(row, columns) {
    let array = [];
    let counter = 1;

    for (let i = 0; i < row; i++) {
        array.push([]);

        for (let j = 0; j < columns; j++) {
            array[i].push(counter);

            counter++;
        }
    }

    return array;
}

console.log(create2DArray(4, 4));