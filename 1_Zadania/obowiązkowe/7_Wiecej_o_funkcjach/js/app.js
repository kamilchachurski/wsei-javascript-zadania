/*
Zagniezdzanie funkcji.
Przesledz krok po kroku kazda linijke kodu. Kazda!
Napisz komentarze dla kazdej z linijek kodu
*/

// Stworzenie funkcji `jeden`
function jeden() {

    // Stworzenie zmiennej `zmienna1` i przypisanie do niej wartosci `1`
    var zmienna1 = 1;

    // Stworzenie funkcji `dwa`
    function dwa() {

        // Wyświetlenie w konsoli wartości zmiennej `zmienna1`
        console.log(zmienna1);

        // Stworzenie zmiennej `zmienna2` i przypisanie do niej wartosci `3`
        var zmienna2 = 3;
    }

    // Wywołanie funkcji `dwa`
    dwa();

    // Wyświetlenie w konsoli wartości zmiennej `zmienna2`
    // Funkcja `jeden` nie ma dostępu do zmiennej `zmienna2` ponieważ zmienne opisane słowem `var` mają zasięg funkcyjny (`zmienna2` została stworzona w funkcji `dwa`)
    console.log(zmienna2);
}

// Wywołanie funkcji `jeden`
jeden();