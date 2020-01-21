function createArray(number) {
    let array = [];

    for (let i = 1; i <= number; i++) {
        array.push(i);
    }

    return array;
}

console.log(`Tablica z liczbami do: ${ createArray(6) }`);
console.log(`Tablica z liczbami do 1: ${ createArray(1) }`);
console.log(`Test dla liczby ujemnej (powinna być pusta tablica): ${ createArray(-6) }`);
console.log(`Test dla zera (powinna być pusta tablica): ${ createArray(0) }`);