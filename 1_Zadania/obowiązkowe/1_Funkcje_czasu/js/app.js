// Exercise 1

console.log('---------- Exercise 1 ----------');

function countHello(number) {
    let counter = 0;
    
    let interval = setInterval(() => {
        counter++;

        console.log(`Hello ${ counter }`);

        (counter === number)
            && clearInterval(interval);
    });
}

countHello(10);