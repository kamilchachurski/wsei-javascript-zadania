
/*
Zagniezdzanie funkcji.
Przesledz krok po kroku kazda linijke kodu. Kazda!
Napisz komentarze dla kazdej z linijek kodu
*/

// Stworzenie funkcji `sortArray`
function sortArray() {

    // Stworzenie tablicy `points` i wypełnienie jej liczbami
    var points = [41, 3, 6, 1, 114, 54, 64];

    // Posortowanie tablicy `points` za pomocą wbudowanej metody `sort`
    points.sort(function (a, b) {
        // Posortowanie tablicy rosnąco dzięki badaniu różnicy dwóch sąsiadujących elementów tablicy
        return a - b;
    });

    // Zwrócenie tablicy `points`
    return points;
}

// wywołanie funkcji `sortArray`
sortArray();