console.log ('JS OK');

/*
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizipone dispari.
*/

const numb = [ 12 , 55 , 29, 34 , 84 , 9];
let pos = 0;
let somma = 0;
while (pos < numb.length){

    if (pos % 2 != 0){
        console.log (numb[pos]);
        somma += numb[pos];
    }

    pos++;
}

console.log (somma);

