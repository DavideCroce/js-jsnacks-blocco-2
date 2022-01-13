console.log ('JS OK');

/*
Crea due array che hanno un numero di elementi diversi.
aggiungi elementi casuali all'array che ha meno elementi,
fino a quando ne avrà tanti quanti l'altro.
*/

const ShortA = [ 5 , 14 , 6];
const LongA = [ 12 , 3 , 25 , 88 , 36];
let numb = 0;

while (ShortA.length = LongA.length){
    if(ShortA.length < LongA.length){
        ShortA.push (Math.floor(Math.random(numb) * 100) + 1);
        console.log(numb);
    }
    numb++;
}

console.log(ShortA);
console.log(LongA);
console.log(numb);
