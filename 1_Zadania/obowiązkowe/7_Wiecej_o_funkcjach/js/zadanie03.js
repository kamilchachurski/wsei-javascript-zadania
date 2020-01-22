print1(); // Funkcja wywołała się normalnie ponieważ jest definiowana przed wykonaniem się skryptu

function print1() {
    console.log('Cześć');
}

print1(); // Funkcja wywołała się normalnie

print2(); // Funkcja nie wywołała się normalnie ponieważ jest definiowana w trakcie wykonywania się skryptu

let print2 = function() {
    console.log('Witam');
}

print2(); // Funkcja wywołała się normalnie