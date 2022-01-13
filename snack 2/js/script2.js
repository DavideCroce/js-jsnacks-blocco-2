console.log ('JS OK');

/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

let numb = parseInt(prompt('Write a number'));

while (numb % 2 == 0) {
    if (numb % 2 == 0 ){
        console.log (numb)
    }
    else {
        numb = parseInt(prompt('Write a number'));
    }
}

console.log (numb);

