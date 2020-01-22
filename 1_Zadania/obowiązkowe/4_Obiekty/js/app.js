// Exercise 0

console.log('---------- Exercise 0 ----------');

let country = {
    capital: 'Warszawa',
    population: 38386000,
    president: 'Andrzej Duda',
    primeMinisters: ['Mateusz Morawiecki', 'Piotr Gliński', 'Jacek Sasin', 'Jarosław Gowin']
};

console.log(country.capital);
console.log(country.population);
console.log(country.president);
console.log(country.primeMinisters);

let timeMchine = {
    shape: 'shape',
    model: 'model',
    run: (date, place) => {
        console.log(`Przenosimy się do daty: ${ date }, w miejsce: ${ place }`);
    }
};

console.log(timeMchine.shape);
console.log(timeMchine.model);

timeMchine.run('27/01/2020', 'Świętego Filipa 17');

// Exercise 1

console.log('---------- Exercise 1 ----------');

let book = {
    title: 'To (nie) koniec świata',
    author: ['Marek Hucz', 'Jan Jurkowski'],
    numberOfPages: 418
};

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

// Exercise 2

console.log('---------- Exercise 2 ----------');

let person = {
    name: 'Kamil',
    age: 21,
    sayHello: () => {
        console.log('Hello');
    }
};

console.log(person.name);
console.log(person.age);

person.sayHello();

// Exercise 3

console.log('---------- Exercise 3 ----------');

let recipe = {
    title: 'Bigos',
    servings: 1
};

recipe.ingredients = ['Kapusta', 'Kiełbasa'];

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

// Exercise 6

console.log('---------- Exercise 6 ----------');

let spoon = {
    isExist: true
};

let fork = spoon;

fork.isExist = false;

spoon.isExist
    ? console.log('Istnieje')
    : console.log('Nie istnieje');